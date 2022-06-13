const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
	pwa: {
		dest: 'public',
		runtimeCaching,
	},
	images: {
	  domains: ['applegate-paul.mo.cloudinary.net'],
	  formats: ['image/avif', 'image/webp']
	}
})
