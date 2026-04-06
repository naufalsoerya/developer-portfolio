const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  },
  async rewrites() {
    return [
      // Browsers and crawlers often request /favicon.ico directly; serve the same asset as metadata.icons
      { source: '/favicon.ico', destination: '/image/icon-logo.png' },
    ];
  },
}