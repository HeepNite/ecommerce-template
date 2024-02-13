/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pixahive.com', 'res.cloudinary.com', 'via.placeholder.com'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  }
}

module.exports = nextConfig
