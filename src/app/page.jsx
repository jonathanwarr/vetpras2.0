"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [connectionStatus, setConnectionStatus] = useState("Testing...");

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase.auth.getSession();
        setConnectionStatus("✅ Supabase connected successfully!");
      } catch (err) {
        setConnectionStatus(`Connection failed: ${err.message}`);
      }
    }
    testConnection();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Vetpras 2.0 Setup</h1>
      <p className="mt-4">{connectionStatus}</p>
    </div>
  );
}
