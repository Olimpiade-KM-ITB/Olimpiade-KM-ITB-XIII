import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type SportId =
  | "basket"
  | "futsal"
  | "padel"
  | "voli"
  | "badminton"
  | "atletik"
  | "renang"
  | "mobile-legend"
  | "fifa";

type Sport = {
  id: SportId;
  name: string;
  icon: string;
};

const sports: Sport[] = [
  { id: "basket", name: "Basket", icon: "/assets/sport-basket.webp" },
  { id: "futsal", name: "Futsal", icon: "/assets/sport-futsal.webp" },
  { id: "padel", name: "Padel", icon: "/assets/sport-padel.webp" },
  { id: "voli", name: "Voli", icon: "/assets/sport-voli.webp" },
  { id: "badminton", name: "Badminton", icon: "/assets/sport-badminton.webp" },
  { id: "atletik", name: "Atletik", icon: "/assets/sport-atletik.webp" },
  { id: "renang", name: "Renang", icon: "/assets/sport-renang.webp" },
  { id: "mobile-legend", name: "Mobile Legend", icon: "/assets/sport-mlbb.webp" },
  { id: "fifa", name: "EA FC", icon: "/assets/sport-fifa.webp" },
];

/**
 * Isi tautan pendaftaran dan guidebook setiap cabang di bawah.
 * String kosong membuat tombol tampil nonaktif sampai tautan diisi.
 */
const REGISTRATION_LINKS: Record<SportId, { register: string; guidebook: string }> = {
  basket: { register: "https://forms.gle/ggoJaQhiMMc4cW567", guidebook: "https://bit.ly/GuidebookBolBesCil" },
  futsal: { register: "https://forms.gle/HzECSuPSbLVqdYSd6", guidebook: "https://bit.ly/GuidebookBolBesCil" },
  padel: { register: "https://forms.gle/e2XEGZS1EAqTN6zE8", guidebook: "https://bit.ly/GuidebookBolBesCil" },
  voli: { register: "https://forms.gle/LJinqYaBGg1QLjMy7", guidebook: "https://bit.ly/GuidebookBolBesCil" },
  badminton: { register: "https://forms.gle/XFw2xrsYam8eMizq7", guidebook: "https://drive.google.com/drive/folders/1osgijH_wqKopXKHVY3UpjHQqR7dRFE-M?usp=sharing" },
  atletik: { register: "https://forms.gle/WiUccpGwMCgZLKAS8", guidebook: "https://drive.google.com/drive/folders/1osgijH_wqKopXKHVY3UpjHQqR7dRFE-M?usp=sharing" },
  renang: { register: "https://forms.gle/Wqsotk61GT8PEJww5", guidebook: "https://drive.google.com/drive/folders/1osgijH_wqKopXKHVY3UpjHQqR7dRFE-M?usp=sharing" },
  "mobile-legend": { register: " https://forms.gle/pLd835L7MwDMmREt9 ", guidebook: "https://bit.ly/GuidebookEsportOlimKM" },
  fifa: { register: "https://forms.gle/hvChU7AFF2rge2Z1A", guidebook: "https://bit.ly/GuidebookEsportOlimKM" },
};

const decorations = [
  { src: "/assets/tournament-title-swoosh-alt.webp", className: "deco deco--title-left" },
  { src: "/assets/tournament-title-swoosh-alt.webp", className: "deco deco--title-right" },
  { src: "/assets/brush-swoop.webp", className: "deco deco--brush-left" },
  { src: "/assets/brush-swoop.webp", className: "deco deco--brush-top-right" },
  { src: "/assets/brush-swoop.webp", className: "deco deco--brush-right" },
  { src: "/assets/deco-cloud.webp", className: "deco deco--cloud" },
];

function CardAction({ href, label }: { href: string; label: string }) {
  if (!href) {
    return (
      <span className="card-action is-disabled" aria-disabled="true" title="Segera hadir">
        {label}
      </span>
    );
  }

  const isExternal = href.startsWith("http");

  return isExternal ? (
    <a
      className="card-action"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  ) : (
    <a className="card-action" href={href}>
      {label}
    </a>
  );
}

function SportCard({ sport }: { sport: Sport }) {
  const links = REGISTRATION_LINKS[sport.id];

  return (
    <li className="sport-card">
      <h3 className="sport-card__title">{sport.name}</h3>
      <Image
        className="sport-card__icon"
        src={sport.icon}
        alt=""
        width={240}
        height={240}
        sizes="(max-width: 1200px) 40vw, 240px"
      />
      <div className="sport-card__actions">
        <CardAction href={links.register} label="Register" />
        <CardAction href={links.guidebook} label="Guidebook" />
      </div>
    </li>
  );
}

export default function TournamentPage() {
  return (
    <main id="tournament">
      <SiteHeader active="tournament" />

      <div className="tournament-canvas">
        <div className="tournament-decor" aria-hidden="true">
          {decorations.map((decoration) => (
            <span className={decoration.className} key={decoration.className}>
              <Image src={decoration.src} alt="" fill sizes="520px" />
            </span>
          ))}
        </div>

        <h1 className="tournament-title">Tournament</h1>

        <section className="registration" id="registration" aria-labelledby="registration-title">
          <div className="registration-heading">
            <Image
              className="registration-swoosh"
              src="/assets/tournament-title-swoosh.webp"
              alt=""
              width={799}
              height={215}
              sizes="(max-width: 1200px) 80vw, 799px"
              priority
            />
            <h2 className="registration-heading__title" id="registration-title">
              Registration
            </h2>
          </div>

          <ul className="registration-grid">
            {sports.map((sport) => (
              <SportCard key={sport.id} sport={sport} />
            ))}
          </ul>
        </section>

        <div className="tournament-band" aria-hidden="true">
          <Image
            className="tournament-band__panel"
            src="/assets/tournament-band.webp"
            alt=""
            width={1512}
            height={524}
            sizes="100vw"
          />
          <Image
            className="tournament-band__art"
            src="/assets/tournament-band-art.webp"
            alt=""
            width={255}
            height={302}
            sizes="255px"
          />
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}