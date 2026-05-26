/** @type {import('next').NextConfig} */
const nextConfig = {
  // 如果要使用外部图片（如 Imgur、Unsplash 等），在这里添加域名
  // 例如使用 imgur: images: { domains: ["i.imgur.com", "images.unsplash.com"] }
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
