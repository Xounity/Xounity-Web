<div align="center" style="margin-top: 100px; margin-bottom: 300px;">

# Software Re-engineering

## Final Project Report

<br><br><br>

# Xounity Web Platform Re-engineering

### Turning a Static Portfolio into a Dynamic Community Hub

<br><br><br>

**Prepared by:**
[Student Name]

**Course:**
Software Re-engineering (SE-404)

**Date:**
December 16, 2025

</div>

<div style="page-break-after: always;"></div>

# Table of Contents

1.  [Objective](#1-objective)
2.  [Legacy System Description](#2-legacy-system-description)
3.  [System Architecture (Diagrams)](#3-diagrams-system-architecture)
4.  [Code Comparison (Before & After)](#4-before--after-code-comparison)
5.  [New Features (Forward Engineering)](#5-new-feature-explanation-forward-engineering)
6.  [Test Cases](#6-test-cases-table)
7.  [Conclusion](#7-conclusion)

<div style="page-break-after: always;"></div>

## 1. Objective

The primary objective of this project was to apply standard re-engineering practices to transform the legacy Xounity website—a static HTML/JS portfolio—into a modern, scalable web application.

Re-engineering refers to the examination and alteration of a subject system to reconstitute it in a new form and the subsequent implementation of the new form. This project involved:

- **Reverse Engineering**: Analyzing the existing `app.js` and `index.html` to understand the domain logic.
- **Restructuring**: Migrating to a component-based architecture (Next.js/React).
- **Forward Engineering**: Adding new capabilities like Database connectivity and Authentication.

## 2. Legacy System Description

**Purpose**: The legacy system served as a digital brochure for the Xounity organization. It was designed solely to display team members and events without any backend processing.

**Technical Constraints**:

- **No Data Storage**: All content was hardcoded effectively making `index.html` the database.
- **Security Risk**: No authentication; administration required FTP access to modify code.
- **Global Scope Pollution**: All JavaScript logic existed in the global `window` scope, leading to potential conflicts.

**File Structure**:

- `index.html`: The monolithic entry point containing all structure and content.
- `app.js`: A single script handling navigation, animations, and scrolling.

## 3. Diagrams (System Architecture)

The following diagram illustrates the modernized flow, moving from simple static file serving to a server-side rendered application flow.

![System Architecture Flowchart](chart.png)
_Figure 1: Re-engineered System Flowchart_

## 4. Before & After Code Comparison

A critical quality attribute of the re-engineering process is the improvement of code maintainability.

### Before: Legacy Spaghetti Code (`app.js`)

**Issues**:

- Global Event Listeners (`window.onscroll`) assigned multiple times.
- Hardcoded DOM selectors (`#s1`, `#s2`).
- Logic mixed with presentation.

```javascript
/* Legacy app.js - Mixed Concerns & Global Scope */

// Issue: Global event listener overwritten or duplicated
window.onscroll = function () {
  scrollFunction();
};
window.onscroll = function () {
  scrollFunction();
}; // Redundant

// Issue: Hardcoded Array Generation dependent on exact IDs
const iconsArray = Array.from({ length: 8 }, (_, i) =>
  document.querySelector(`#s${i + 1}`)
);

function scrollFunction() {
  // Direct DOM manipulation
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
```

### After: Modern Component Architecture (`app/layout.tsx`)

**Improvements**:

- **Component Isolation**: Layout logic is separated from page content.
- **State Management**: React handles the DOM updates efficiently.
- **Type Safety**: TypeScript ensures data integrity.

```tsx
/* Modern app/layout.tsx - Modular & Type-Safe */

import React from "react";
import Header from "./components/Header";
import { ThemeProvider } from "./ThemeContext";

// Improvement: Root Layout wraps all pages with consistent Context
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-screen h-screen flex flex-col">
        <ThemeProvider>
          {/* ClientWrapper handles interactive elements like Navbar scroll logic */}
          <ClientWrapper>
            <Header />
            {children}
            <Footer />
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## 5. New Feature Explanation (Forward Engineering)

The transition to Next.js allowed us to introduce capabilities that were impossible in the legacy environment.

### A. Robust Authentication & Authorization

- **Feature**: Secure Sign-in/Sign-up flow using **NextAuth.js**.
- **Benefit**: Differentiates between standard "Users" and "Admins". Usage of SHA-256 password hashing ensuring user data is secure.

### B. Admin Dashboard

- **Feature**: A private `/dashboard` route protected by Role-Based Access Control (RBAC).
- **Benefit**: Provides a GUI for managing the application. Admins can view analytics (User counts, Event counts) without needed direct database access.

### C. Dynamic Data Integration

- **Feature**: Connection to a **MongoDB** database via Mongoose ODM.
- **Benefit**: Content is no longer static. Events, Team Members, and Users are stored in the cloud, allowing for dynamic updates and scalability.

## 6. Test Cases Table

The following test plan verifies the core reliability of the new system features.

| Case ID   | Test Scenario              | Pre-Conditions             | Test Steps                                                                       | Expected Result                     | Status  |
| :-------- | :------------------------- | :------------------------- | :------------------------------------------------------------------------------- | :---------------------------------- | :------ |
| **TC-01** | **User Registration**      | Database is online         | 1. Navigate to `/signup`<br>2. Enter Name, Email, Password<br>3. Click "Sign Up" | Account created in MongoDB          | ✅ Pass |
| **TC-02** | **Secure Login**           | User exists                | 1. Navigate to `/signin`<br>2. Enter valid credentials<br>3. Click "Sign In"     | Redirected to Dashboard             | ✅ Pass |
| **TC-03** | **Admin Dashboard Access** | Logged in as Admin         | 1. Navigate to `/dashboard`                                                      | Dashboard loads with Admin controls | ✅ Pass |
| **TC-04** | **RBAC Enforcement**       | Logged in as Standard User | 1. Try to access `/dashboard`                                                    | Access Denied / Redirected          | ✅ Pass |
| **TC-05** | **Dynamic Event Loading**  | Events exist in DB         | 1. Scroll to Events section                                                      | Cards render with data from API     | ✅ Pass |
| **TC-06** | **Responsive Menu Toggle** | Mobile Viewport (<768px)   | 1. Tap Hamburger Icon<br>2. Select a link                                        | Menu opens/closes smoothly          | ✅ Pass |

## 7. Conclusion

This re-engineering project successfully addressed the critical maintainability and scalability flaws of the legacy Xounity website. By adopting the Next.js framework, we:

1.  **Eliminated Code Redundancy**: Replaced spaghetti code with reusable components.
2.  **Enhanced Performance**: Leveraged Server-Side Rendering (SSR) for faster load times.
3.  **Enabled Future Growth**: The addition of a database and authentication system transforms the site from a static viewing experience into a dynamic community platform.

The system is now compliant with modern web standards and ready for production deployment.
