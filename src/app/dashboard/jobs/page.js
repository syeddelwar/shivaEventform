import React from "react";
import Jobs from "@/app/components/Jobs";

export default async function page() {
  const data = await getData();

  return (
    <div>
      <Jobs data={data} />
    </div>
  );
}

async function getData() {
  const res = await fetch("https://axzonskiosk.vercel.app/api/jobs", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
