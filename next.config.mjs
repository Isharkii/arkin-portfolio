/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serve images in WebP/AVIF when the browser supports it (requires sharp)
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
