import { MoveUp } from "lucide-react";
import { CompactContact } from "@/components/compact-contact";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import { HeroImage } from "@/components/hero-image";
import { ThemeToggle } from "@/components/theme-toggle";
import { VisitorClock } from "@/components/visitor-clock";

export default function HomePage() {
  return (
    <main className="crib-page" id="top">
      <header className="utility-header">
        <a className="crib-mark" href="#top"><span>welcome to my</span><strong>DIGITAL CRIB.</strong></a>
        <div className="header-tools"><VisitorClock /><ThemeToggle /></div>
      </header>

      <HeroImage />

      <div className="content-stage">
        <PortfolioTabs />
      </div>

      <footer className="contact-footer" id="contact">
        <div className="footer-content">
          <div><p className="pixel-kicker">reach out</p><h2>Have something in mind?</h2><p>Drop a quick message and I’ll get back to you.</p></div>
          <CompactContact />
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()}· Purav Kumar  All rights reserved</span><a href="#top">back to the crib <MoveUp size={13} /></a></div>
      </footer>
    </main>
  );
}
