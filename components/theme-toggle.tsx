"use client";

import { useEffect, useState } from "react";
import { Lightbulb, LightbulbOff } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem("crib-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button className="theme-icon" type="button" aria-label={`Turn the bulb ${dark ? "on" : "off"}`} aria-pressed={!dark} onClick={() => setDark((value) => !value)}>
      {dark ? <LightbulbOff size={17} strokeWidth={1.8} aria-hidden="true" /> : <Lightbulb size={17} strokeWidth={1.8} aria-hidden="true" />}
    </button>
  );
}
