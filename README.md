# Olimpiade KM ITB XIII

Website Olimpiade KM ITB XIII. Frontend dan backend berjalan dalam satu aplikasi Next.js agar implementasi, review, deployment, dan onboarding staf tetap sederhana.

### Struktur repository

```text
.
├── .github/
│   └── workflows/
│       └── ci.yml          # CI untuk pull request dan branch utama
├── design/                 # Referensi visual dan desain
├── web/
│   ├── public/             # Font dan aset statis
│   ├── src/app/            # App Router, halaman, style, dan API routes
│   │   └── api/
│   │       ├── healthz/    # Liveness check
│   │       └── version/    # Versi aplikasi
│   ├── package.json        # Script dan dependency frontend/backend
│   └── next.config.ts      # Konfigurasi Next.js
├── .gitignore
└── README.md
```

`web/src/app` adalah satu seam aplikasi: halaman server-rendered dan backend HTTP memakai runtime Node bawaan Next.js. Route handler menjadi interface HTTP kecil; detail implementasi tetap lokal pada route masing-masing.

## Prasyarat

- Node.js 24 LTS atau versi yang kompatibel dengan Next.js di `web/package.json`
- npm

## Menjalankan lokal

```bash
cd web
npm ci
npm run dev
```

Buka `http://localhost:3000`.

Endpoint pemeriksaan:

```text
GET /api/healthz  -> {"status":"ok"}
GET /api/version  -> {"version":"dev"}
```

Versi dapat diubah melalui environment variable `APP_VERSION`.

## Pemeriksaan sebelum pull request

Jalankan dari folder `web`:

```bash
npm run lint
npm run typecheck
npm run build
```

CI menjalankan ketiga pemeriksaan tersebut untuk setiap pull request menuju `develop` atau `main`, serta setelah perubahan masuk ke kedua branch tersebut.

## Branch dan pull request

Branch `main` dan `develop` adalah branch bersama. Perubahan masuk melalui pull request, bukan push langsung.

Format nama branch:

```text
<jenis>/<scope>-<deskripsi-singkat>
```

Jenis branch yang digunakan:

- `feature/` fitur baru
- `fix/` perbaikan bug
- `refactor/` perubahan struktur tanpa mengubah perilaku
- `chore/` pekerjaan pemeliharaan atau dependency
- `docs/` dokumentasi saja

Contoh:

```text
feature/timeline-registration-dates
fix/mobile-timeline-overflow
chore/update-next
```

Aturan pull request:

1. Targetkan `develop` untuk pekerjaan rutin. Targetkan `main` hanya untuk rilis.
2. Jelaskan perubahan, risiko, dan cara verifikasi.
3. Pastikan CI berstatus hijau.
4. Minta minimal satu review dari anggota tim lain.
5. Gunakan squash merge agar riwayat branch tetap ringkas.
6. Hapus branch setelah merge.

## Konvensi kode

### TypeScript dan React

- Gunakan `camelCase` untuk variabel, fungsi, props, dan file utilitas.
- Gunakan `PascalCase` untuk komponen React dan tipe.
- Gunakan `UPPER_SNAKE_CASE` hanya untuk konstanta yang benar-benar konstan atau environment variable.
- Gunakan `kebab-case` untuk segmen URL dan nama folder route.
- Pilih Server Component secara default. Tambahkan `"use client"` hanya ketika membutuhkan state, event browser, atau API client.
- Letakkan data statis yang hanya dipakai satu halaman dekat dengan pemakainya.
- Hindari abstraksi sebelum ada perilaku yang benar-benar digunakan ulang.

### Environment variable

- Commit hanya `.env.example` bila template dibutuhkan.
- Jangan commit secret, token, atau file `.env`.
- Gunakan `UPPER_SNAKE_CASE`, misalnya `APP_VERSION`.
- Variable yang dibutuhkan browser harus memakai prefix `NEXT_PUBLIC_` dan tidak boleh berisi secret.

### Commit

Gunakan Conventional Commits:

```text
<type>(<scope>): <deskripsi imperatif>
```

Contoh:

```text
feat(timeline): update event dates
fix(api): return version from environment
chore(ci): require production build
```

Jenis umum: `feat`, `fix`, `refactor`, `docs`, `chore`, `test`, `ci`.

## Deployment

Deployment frontend dan route handler dilakukan oleh Vercel dari project `web`. Pull request menghasilkan preview deployment bila project GitHub-Vercel sudah terhubung. Branch `main` menjadi target production deployment sesuai konfigurasi Vercel project.
