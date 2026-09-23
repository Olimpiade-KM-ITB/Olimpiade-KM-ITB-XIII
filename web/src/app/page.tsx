import Image from "next/image";

const registrationUrl = "https://s.id/PendaftaranOlimpiadeKMITB13";

const milestones = [
  { label: "Open Registration", date: "24 September" },
  { label: "Close Registration", date: "TBA" },
  { label: "Technical Meeting", date: "1–2 Oktober" },
  { label: "Opening Ceremony", date: "3 Oktober" },
  { label: "Periode Pertandingan", date: "Oktober–Desember" },
];

const futureLinks = ["Tournament", "Merch", "Sponsor"];

function RegistrationLink({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <span className="muted-nav-item signup-muted" aria-disabled="true">
        Sign Up
      </span>
    );
  }

  return (
    <a className="registration-link" href={registrationUrl} target="_blank" rel="noreferrer">
      Register Here
    </a>
  );
}

function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <div className={footer ? "brand brand--footer" : "brand"}>
      <Image
        src="/assets/logo.webp"
        alt="Logo Olimpiade KM ITB XIII"
        width={footer ? 150 : 54}
        height={footer ? 150 : 54}
        priority={!footer}
      />
      {footer ? (
        <p className="brand__wordmark">
          Olimpiade KM
          <br />
          ITB XIII
        </p>
      ) : null}
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navigasi utama">
        <a className="home-link" href="#home" aria-label="Kembali ke beranda">
          <BrandMark />
        </a>

        <div className="desktop-nav">
          <a href="#home">Home</a>
          {futureLinks.map((label) => (
            <span className="muted-nav-item" aria-disabled="true" key={label}>
              {label}
            </span>
          ))}
          <span className="muted-nav-item" aria-disabled="true">About Us</span>
        </div>

        <RegistrationLink compact />

        <details className="mobile-menu">
          <summary>Menu</summary>
          <div className="mobile-menu__panel">
            <a href="#home">Home</a>
            <span aria-disabled="true">About Us</span>
            {futureLinks.map((label) => (
              <span aria-disabled="true" key={label}>
                {label}
              </span>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}

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

function SocialLink({ href, icon, label }: { href?: string; icon: string; label: string }) {
  if (!href) {
    return (
      <span className="social-link is-disabled" aria-disabled="true" title="Segera hadir">
        <Image src={icon} alt="" width={40} height={40} />
        <span>{label}</span>
      </span>
    );
  }

  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer">
      <Image src={icon} alt="" width={40} height={40} />
      <span>{label}</span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <BrandMark footer />
        <div className="footer-right">
          <div className="socials" aria-label="Media sosial Olimpiade KM ITB XIII">
            <SocialLink href="https://www.instagram.com/olimpiade.km.itb/" icon="/assets/instagram.svg" label="@olimpiade.km.itb" />
            <SocialLink href="https://www.tiktok.com/@olimpiadekmitb" icon="/assets/tiktok.svg" label="@olimpiadekmitb" />
            <SocialLink icon="/assets/x.svg" label="@olimkmitb" />
          </div>
          <div className="footer-divider" />
          <p>© 2026 Olimpiade KM ITB XIII. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main id="home">
      <Header />
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
              Olimpiade KM ITB XIII adalah ajang olahraga terbesar di Institut Teknologi Bandung yang mempertemukan mahasiswa dari berbagai fakultas dan sekolah. Lebih dari sekadar kompetisi, panggung ini merayakan sportivitas, kebersamaan, dan keberanian untuk melampaui batas.
            </p>
            <RegistrationLink />
          </div>
        </div>
      </section>
      <Timeline />
      <Footer />
    </main>
  );
}
