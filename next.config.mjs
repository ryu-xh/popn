/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: {
			ssr: false,
		},
	},
	webpack: config => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	output: 'export',
	trailingSlash: true,
	images: {
		formats: ['image/avif', 'image/webp'],
	},
};

export default nextConfig;
