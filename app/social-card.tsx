export const socialImageSize = { width: 1200, height: 630 };
export const socialImageAlt = "Digital Crib — Purav Kumar";

export function SocialCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: 52,
        color: "#f4efe5",
        backgroundColor: "#11120f",
        backgroundImage:
          "linear-gradient(rgba(228,161,59,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(228,161,59,.08) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "46px 50px",
          border: "1px solid rgba(244,239,229,.22)",
          borderRadius: 30,
          background: "rgba(17,18,15,.88)",
          boxShadow: "0 28px 80px rgba(0,0,0,.35)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, fontWeight: 700, letterSpacing: -0.6 }}>
            <span style={{ width: 12, height: 12, borderRadius: 999, background: "#e4a13b", boxShadow: "0 0 20px rgba(228,161,59,.7)" }} />
            DIGITAL CRIB.
          </div>
          <div style={{ color: "#aaa99f", fontSize: 20 }}>puravky.me</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ color: "#e4a13b", fontSize: 20, fontWeight: 700, letterSpacing: 3, marginBottom: 20 }}>
            SOFTWARE × SYSTEMS × INTELLIGENCE
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 78, fontWeight: 700, lineHeight: 1.02, letterSpacing: -4.5 }}>
            <span>I build systems that&nbsp;</span><span style={{ color: "#e4a13b" }}>SHIP.</span>
          </div>
          <div style={{ marginTop: 24, color: "#b9b7ae", fontSize: 25, lineHeight: 1.4 }}>
            Purav Kumar · product-minded software and AI engineer
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#aaa99f", fontSize: 18 }}>
          <span style={{ color: "#e4a13b" }}>●</span>
          New Delhi, India
          <span>·</span>
          Building production-ready systems
        </div>
      </div>
    </div>
  );
}
