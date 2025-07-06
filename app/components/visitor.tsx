"use client";
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa6";

function formatNumber(num: number): string {
  if (num >= 1_000_000)
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  return num.toString();
}

export function VisitTracker() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    async function trackVisit() {
      try {
        if (!hasVisited) {
          await fetch("/api/track-visit", { method: "POST" });
          localStorage.setItem("hasVisited", "true");
        }

        const res = await fetch("/api/track-visit");
        if (!res.ok) throw new Error("Failed to fetch visit count");
        const data = await res.json();

        if (typeof data.count === "number") {
          setCount(data.count);
        } else {
          console.error("Invalid count data:", data);
        }
      } catch (err) {
        console.error("Error tracking visit:", err);
      }
    }

    trackVisit();
  }, []);

  return (
    <div className="text-sm flex items-center gap-2 text-gray-500">
      <FaCircle className="text-green-500 animate-pulse drop-shadow-[0_0_6px_rgba(34,197,94,0.8)] w-3 h-3" />
      {count !== null ? formatNumber(count) : ""} visits
    </div>
  );
}
