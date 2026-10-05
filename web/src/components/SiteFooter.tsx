import Image from "next/image";
import { BrandMark } from "@/components/BrandMark";

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

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <BrandMark footer />
        <div className="footer-right">
          <div className="socials" aria-label="Media sosial Olimpiade KM ITB XIII">
            <SocialLink
              href="https://www.instagram.com/olimpiade.km.itb/"
              icon="/assets/instagram.svg"
              label="@olimpiade.km.itb"
            />
            <SocialLink
              href="https://www.tiktok.com/@olimpiadekmitb"
              icon="/assets/tiktok.svg"
              label="@olimpiadekmitb"
            />
            <SocialLink icon="/assets/x.svg" label="@olimkmitb" />
          </div>
          <div className="footer-divider" />
          <p>© 2026 Olimpiade KM ITB XIII. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}