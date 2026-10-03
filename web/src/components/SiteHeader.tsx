import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export type NavSection = "home" | "tournament";

const HOME_HREF = "/";
const TOURNAMENT_HREF = "/tournament/";

const mutedLinks = ["Merch", "Sponsor"];

export function SiteHeader({ active = "home" }: { active?: NavSection }) {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navigasi utama">
        <Link className="home-link" href={HOME_HREF} aria-label="Kembali ke beranda">
          <BrandMark />
        </Link>

        <div className="desktop-nav">
          <Link href={HOME_HREF} aria-current={active === "home" ? "page" : undefined}>
            Home
          </Link>
          <Link
            href={TOURNAMENT_HREF}
            aria-current={active === "tournament" ? "page" : undefined}
          >
            Tournament
          </Link>
          {mutedLinks.map((label) => (
            <span className="muted-nav-item" aria-disabled="true" key={label}>
              {label}
            </span>
          ))}
          <span className="muted-nav-item" aria-disabled="true">About Us</span>
        </div>

        <Link className="signup-link" href={`${TOURNAMENT_HREF}#registration`}>
          Sign Up
        </Link>

        <details className="mobile-menu">
          <summary>Menu</summary>
          <div className="mobile-menu__panel">
            <Link href={HOME_HREF}>Home</Link>
            <Link href={TOURNAMENT_HREF}>Tournament</Link>
            <span aria-disabled="true">About Us</span>
            {mutedLinks.map((label) => (
              <span aria-disabled="true" key={label}>
                {label}
              </span>
            ))}
            <Link href={`${TOURNAMENT_HREF}#registration`}>Sign Up</Link>
          </div>
        </details>
      </nav>
    </header>
  );
}