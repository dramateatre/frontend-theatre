/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: { loader: '@svgr/webpack', options: { icon: true } },
        })
        
        return config
    },
    images: {
        domains: ['localhost', 'api.batumitheatre.ge'],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
}

export default nextConfig