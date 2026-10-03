import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const milestones = [
  { label: "Pendaftaran", date: "1–7 Oktober" },
  { label: "Technical Meeting", date: "9 Oktober" },
  { label: "Opening Ceremony", date: "18 Oktober" },
  { label: "Match", date: "Oktober–November" },
  { label: "Fun Run", date: "15 November" },
  { label: "Closing", date: "4 Desember" },
];

function Timeline() {
  return (
    <section className="timeline-section" aria-labelledby="timeline-title">
      <div className="timeline-card">
        <h2 id="timeline-title">Timeline</h2>
        <ol className="timeline-list">
          {milestones.map((milestone, index) => (
            <li className={index % 2 === 0 ? "timeline-item timeline-item--top" : "timeline-item timeline-item--bottom"} key={milestone.label}>
              <span className="timeline-dot" aria-hidden="true" />
              <div>
                <strong>{milestone.label}</strong>
                <span>{milestone.date}</span>
              </div>
            </li>
          ))}
        </ol>
        <Image className="timeline-sparkle" src="/assets/sparkle-red.webp" alt="" width={210} height={210} />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="home">
      <SiteHeader />
      <section className="hero" aria-labelledby="hero-title">
        <Image className="hero-brush hero-brush--left" src="/assets/brush-swoop.webp" alt="" width={420} height={920} priority />
        <Image className="hero-brush hero-brush--right" src="/assets/brush-swoop.webp" alt="" width={420} height={920} priority />
        <div className="hero-shell">
          <div className="hero-lockup">
            <Image className="hero-logo" src="/assets/logo.webp" alt="" width={390} height={390} priority />
            <h1 id="hero-title">
              Olimpiade KM
              <span>ITB XIII</span>
            </h1>
          </div>
          <div className="hero-copy" id="about">
            <p>
              Olimpiade KM ITB XIII adalah ajang olahraga terbesar di Institut Teknologi Bandung yang mempertemukan mahasiswa dari berbagai fakultas dan sekolah #KonstelasiRivalitas.
            </p>
            <Link className="registration-link" href="/tournament/#registration">
              Register Here
            </Link>
          </div>
        </div>
      </section>
      <Timeline />
      <SiteFooter />
    </main>
  );
}
