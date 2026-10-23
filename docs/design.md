# Design brief: Portofolio Roro Dhianita Taurintyanna

## Arah gaya
- Gaya: modern, lembut, rapi. Sumber: `portofolio_dhianita.html` (mockup awal).
- Palet: dusty rose / pastel pink dengan latar putih keabuan.
- Kesan yang ingin ditimbulkan: profesional, hangat, terstruktur.
- Target pembaca: perekrut dan hiring manager untuk posisi IT Product Owner / QA.

## Palet warna (variabel CSS)
| Variabel | Hex | Dipakai untuk |
| --- | --- | --- |
| --color-bg | #FAFAFA | Latar halaman |
| --color-surface | #FFFFFF | Latar kartu, bagian Biodata, Kontak |
| --color-tint | #FDF8F9 | Latar Beranda, pill keahlian, kartu sertifikasi |
| --color-tint-strong | #F8E9EB | Badge, border pill |
| --color-line | #F3D3DA | Garis header, border kartu saat hover |
| --color-line-soft | #F0EAEB | Border kartu biasa, pill tools |
| --color-text | #262626 | Teks utama |
| --color-heading | #171717 | Judul |
| --color-muted | #6B6B6B | Teks pendukung, periode, label |
| --color-accent | #A33C56 | Tombol, link, nama perusahaan |
| --color-accent-hover | #873248 | Tombol saat hover |
| --color-accent-soft | #DF8799 | Dekorasi saja: garis atas kartu, garis judul, titik timeline |
| --color-accent-grad | #C55370 | Ujung gradasi nama di Beranda, titik di logo |
| --color-on-accent | #FFFFFF | Teks di atas warna aksen |

Catatan kontras: di mockup tombol memakai #C55370 dengan teks putih (rasio sekitar 4.3:1, kurang dari 4.5:1). Tombol dan link digeser satu tingkat lebih gelap ke #A33C56 (sekitar 6.3:1). #C55370 hanya dipakai untuk teks besar dan dekorasi.

Tema gelap (bonus, tombol ganti tema):
| Variabel | Hex |
| --- | --- |
| --color-bg | #1A1214 |
| --color-surface | #241A1D |
| --color-tint | #2B1E22 |
| --color-tint-strong | #3A262C |
| --color-line | #4A3038 |
| --color-line-soft | #33252A |
| --color-text | #EDE4E6 |
| --color-heading | #FFFFFF |
| --color-muted | #BFAEB3 |
| --color-accent | #EBB2BE |
| --color-accent-hover | #F3D3DA |
| --color-accent-soft | #C55370 |
| --color-accent-grad | #DF8799 |
| --color-on-accent | #5E2635 |

## Tipografi
- Satu font: Inter (Google Fonts), berat 400 / 500 / 600 / 700 / 800.
- Skala ukuran: 56 / 38 / 30 / 22 / 18 / 16 / 14 px. Di HP judul utama 36 px.
- Judul tebal (700-800) dengan letter-spacing sedikit rapat.
- Isi minimal 16 px, tinggi baris 1.6.

## Bentuk dan tata letak
- Sudut membulat: tombol dan pill penuh (999px), kartu 18px, item timeline dan sertifikasi 14px.
- Bayangan lembut berwarna pink, kartu naik 8px saat hover.
- Lebar konten maksimal 1152px.
- Header menempel di atas dengan efek kaca (blur).
- Beranda rata tengah dengan dua lingkaran blur dekoratif.
- Judul bagian Biodata diawali garis pendek pink.
- Kartu project punya garis 4px di atas, warnanya selang-seling.
- Mobile-first: di HP semua kolom jadi satu, menu jadi tombol hamburger.

## Struktur halaman
- Bahasa website: Inggris.
- Beranda: badge, nama, role, satu kalimat profil, tombol "View projects" dan "Contact me".
- Biodata: Profil Profesional, Keahlian (3 grup), Pendidikan (timeline), Sertifikasi & Beasiswa.
- Project & Achievements: 5 kartu, masing-masing punya halaman detail di folder `proyek/`.
- Kontak: email, LinkedIn, telepon, lokasi.

## Aturan untuk Claude Code
- Simpan semua warna dan font sebagai variabel CSS di :root dalam style.css. Jangan memakai warna di luar daftar ini.
- Teks harus punya kontras minimal 4.5:1 terhadap latarnya.
- Tanpa framework dan tanpa build step: HTML, CSS, dan sedikit JavaScript saja.
