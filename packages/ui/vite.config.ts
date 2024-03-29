import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx(), vueSetupExtend()],
	// 配置别名
	resolve: {
		alias: [
			{
				find: '@',
				replacement: path.resolve(__dirname, 'packages'),
			},
		],
	},
});
