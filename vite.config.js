import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: 'result-r-007-1-context',
	plugins: [react()],
	server: {
		open: true,
	},
});
