"use client";

import { useEffect, useMemo, useState } from "react";

const IST_OFFSET_MINUTES = 330;

function formatDistance(minutes: number) {
  const absolute = Math.abs(minutes);
  const hours = Math.floor(absolute / 60);
  const remainder = absolute % 60;
  if (hours === 0) return `${remainder} min`;
  if (remainder === 0) return `${hours} ${hours === 1 ? "hour" : "hours"}`;
  return `${hours}h ${remainder}m`;
}

export function VisitorClock() {
  const [difference, setDifference] = useState<number | null>(null);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setDifference(-now.getTimezoneOffset() - IST_OFFSET_MINUTES);
      setLocalTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };
    update();
    const clock = window.setInterval(update, 1_000);
    return () => window.clearInterval(clock);
  }, []);

  const phrase = useMemo(() => {
    if (difference === null) return "comparing our clocks…";
    if (Math.abs(difference) < 15) return "we share the same clock";
    const distance = formatDistance(difference);
    return difference > 0 ? `you’re ${distance} ahead of IST` : `you’re ${distance} behind IST`;
  }, [difference]);

  return <span className="visitor-clock" aria-live="polite"><span>{phrase}</span><time>{localTime || "--:--"}</time></span>;
}
