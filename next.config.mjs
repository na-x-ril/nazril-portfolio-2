/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Mengaktifkan static export
    basePath: '/nazril-portfolio-2', // Ganti dengan nama repository GitHub Anda
    images: {
      unoptimized: true, // Nonaktifkan optimisasi gambar untuk static export
    },
};

export default nextConfig;
