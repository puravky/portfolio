"use client";

import { type FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/site-config";

export function CompactContact() {
  const [message, setMessage] = useState("");

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = encodeURIComponent(message.trim() || "Hey Purav — I found your digital crib and wanted to reach out.");
    window.location.href = `mailto:${siteConfig.email}?subject=Hello from your digital crib&body=${body}`;
  }

  return (
    <form className="compact-contact" onSubmit={sendMessage}>
      <input id="footer-message" aria-label="Write a message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write a quick message…" />
      <button type="submit" aria-label="Send message by email"><Send size={17} aria-hidden="true" /></button>
    </form>
  );
}
