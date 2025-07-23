"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Test querying service categories
        const { data: categories, error } = await supabase
          .from("service_categories")
          .select("name, description")
          .limit(5);

        if (error) throw error;

        setData(categories);
      } catch (err) {
        console.error("Error:", err.message);
        setData([{ name: "Error", description: err.message }]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8" style={{ backgroundColor: "var(--stone-50)" }}>
      <h1 className="heading-1">Vetpras 2.0</h1>
      <h2 className="heading-2 mt-6">Database Connection Test</h2>

      <div className="mt-8">
        <h3 className="heading-3 mb-4">Service Categories</h3>
        {data?.map((category, index) => (
          <div key={index} className="mb-2">
            <h4 className="small-text-semi-bold">{category.name}</h4>
            <p
              className="small-text-normal"
              style={{ color: "var(--slate-600)" }}
            >
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
