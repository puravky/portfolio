"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";

export function ContactComposer() {
  const [message, setMessage] = useState("");

  function send(event: FormEvent) {
    event.preventDefault();
    const body = encodeURIComponent(message || "Hey Purav — I found your digital crib and wanted to reach out.");
    window.location.href = `mailto:puravkumaryadav@gmail.com?subject=Hello from your digital crib&body=${body}`;
  }

  return (
    <form className="contact-composer" onSubmit={send}>
      <label htmlFor="contact-note">Write a quick note</label>
      <div className="composer-field">
        <textarea id="contact-note" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Hey Purav, I’m building something interesting…" rows={3} />
        <button type="submit"><Send size={16} aria-hidden="true" /><span>Open mail</span><ArrowUpRight size={14} aria-hidden="true" /></button>
      </div>
      <p>This opens your default mail app. I’ll get back to you.</p>
    </form>
  );
}
