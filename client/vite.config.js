import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3002,
		open: true,
		proxy: {
			'/graphql': {
				target: process.env.NODE_ENV
					? 'https://video-gaming-hub.onrender.com'
					: 'http://localhost:3002',
				secure: false,
				changeOrigin: true,
			},
		},
	},
})
