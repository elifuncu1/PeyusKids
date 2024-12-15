/** @type {import(&apos;next&apos;).NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  target: 'serverless', // Firebase Functions ile uyumlu
  trailingSlash: true,   // URL'lerde sonuna slash ekler (Hosting için gerekli)
}