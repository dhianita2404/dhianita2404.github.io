# Portofolio Roro Dhianita Taurintyanna

Website portofolio statis: IT Product Owner | Quality Assurance Specialist.

## Isi folder
- `index.html`, `proyek/`, `style.css`, `theme.js`: website
- `docs/design.md`: design brief dari mockup `portofolio_dhianita.html`
- `docs/prd.md`, `docs/tech-stack.md`, `docs/konten.md`, `docs/progress.md`: dokumen kerja
- `CLAUDE.md`: briefing untuk Claude Code
- `konten_portofolio_roro_dhianita.md`, `portofolio_dhianita.html`: bahan awal (konten dan mockup)

## Cara membuka
Klik dua kali `index.html`, atau jalankan `npx serve .` lalu buka alamat yang muncul.

## Persiapan sekali saja: Git dan GitHub CLI
1. Cek: `git --version` dan `gh --version`. Kalau belum ada, pasang dari git-scm.com dan cli.github.com.
2. Login: `gh auth login`, pilih GitHub.com, HTTPS, lalu login lewat browser. Cek dengan `gh auth status`.
3. Kenalkan diri ke git:
   ```
   git config --global user.name "Nama Anda"
   git config --global user.email "email-akun-github@contoh.com"
   ```

## Cara publish ke GitHub Pages
Ganti `username` dengan username GitHub Anda.

```
git init
git add .
git commit -m "Versi pertama portofolio"
gh repo create username.github.io --public --source=. --push
gh api repos/username/username.github.io/pages -X POST -f "source[branch]=main" -f "source[path]=/"
```

Cara manual untuk langkah terakhir: di repo, buka Settings, Pages, pilih Deploy from a branch, branch `main`, folder `/ (root)`. Tunggu 1-2 menit, lalu buka `https://username.github.io`.

Setiap ada perubahan:

```
git add .
git commit -m "Jelaskan perubahan"
git push
```

## Cara saya memakai AI di proyek ini
Konten dan mockup desain disiapkan lebih dulu. Claude Code membangun halaman berdasarkan dokumen di folder docs, dengan struktur mengikuti contoh portofolio kelas. Semua teks berasal dari docs/konten.md, dan saya cek ulang sebelum publish.
