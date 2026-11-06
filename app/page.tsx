import Image from "next/image";
import { MoveUp } from "lucide-react";
import { ContactComposer } from "@/components/contact-composer";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import { HeroImage } from "@/components/hero-image";
import { PhotoStamps } from "@/components/photo-stamps";
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
        <PhotoStamps />
        <PortfolioTabs />
      </div>

      <footer className="contact-footer">
        <div className="footer-content">
          <div><p className="pixel-kicker">reach out</p><h2>Got something worth building?</h2><p>Send the first rough thought. We can make it concrete from there.</p></div>
          <ContactComposer />
        </div>
        <div className="footer-landscape"><Image src="/footer.webp" alt="A bright illustrated meadow under a blue sky" fill sizes="960px" /></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()}· Purav Kumar  All rights reserved</span><a href="#top">back to the crib <MoveUp size={13} /></a></div>
      </footer>
    </main>
  );
}
