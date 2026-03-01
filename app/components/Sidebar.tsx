"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  FaCalendar,
  FaPowerOff,
  FaUser,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Standard Logout logic without the next-auth bloat
  const handleLogout = () => {
    // If you're using cookies or localStorage for custom auth, clear them here
    // localStorage.removeItem('token')
    router.push("/");
  };

  const linkStyle = (path: string) =>
    `flex items-center gap-2 p-2 rounded-sm cursor-pointer transition-colors duration-200 ${
      pathname === path ? "bg-xo-orange" : "bg-transparent"
    } hover:bg-xo-orange`;

  return (
    <div className="border-r border-xo-orange h-full min-w-50">
      <p className="bg-transparent p-2 mb-4 rounded-sm font-bold">Dashboard</p>

      <div className="mb-4">
        <h2 className="p-2 font-bold opacity-70">Menu</h2>
        <nav className="flex flex-col gap-2 px-2">
          <Link
            href="/dashboard/users"
            className={linkStyle("/dashboard/users")}
          >
            <FaUser /> Users
          </Link>
          <Link
            href="/dashboard/admins"
            className={linkStyle("/dashboard/admins")}
          >
            <FaUserTie /> Admins
          </Link>
          <Link
            href="/dashboard/events"
            className={linkStyle("/dashboard/events")}
          >
            <FaCalendar /> Events
          </Link>
          <Link href="/dashboard/team" className={linkStyle("/dashboard/team")}>
            <FaUsers /> Team
          </Link>
        </nav>
      </div>

      <div>
        <h2 className="p-2 font-bold opacity-70">Settings</h2>
        <ul className="flex flex-col gap-2 px-2">
          <li
            onClick={handleLogout}
            className="bg-transparent hover:bg-xo-orange p-2 rounded-sm flex items-center gap-2 cursor-pointer transition-colors"
          >
            <FaPowerOff /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
