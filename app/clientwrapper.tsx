"use client";
import React, { useState, useEffect } from 'react';
import Loading from "@/app/loading";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  
    }, 1000);  

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;  
  }

  return <>{children}</>;  
}
