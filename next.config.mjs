/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // <<< TAMBAHKAN ATAU UBAH BARIS INI
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
