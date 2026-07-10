import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
	plugins: [
		ViteImageOptimizer({
			svg: {
				multipass: true,
				plugins: [
					{
						name: "preset-default",
						params: {
							overrides: {
								cleanupIDs: false,
								removeViewBox: false,
							},
						},
					},
				],
			},
			png: { quality: 80 },
			jpeg: { quality: 80 },
			webp: { quality: 80 },
			avif: { quality: 75 },
		}),
	],

	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: ["import", "mixed-decls", "color-functions", "global-builtin"],
			},
		},
	},
});
