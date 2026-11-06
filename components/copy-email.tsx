"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText("puravkumaryadav@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button className={`copy-button ${copied ? "is-copied" : ""}`} type="button" onClick={copy} aria-label={copied ? "Email copied" : "Copy email address"}>
      <span className="copy-icon">{copied ? <Check size={13} strokeWidth={2.5} /> : <Copy size={13} />}</span>
      <span>{copied ? "copied" : "copy"}</span>
    </button>
  );
}
