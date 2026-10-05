import Image from "next/image";

export function BrandMark({ footer = false }: { footer?: boolean }) {
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