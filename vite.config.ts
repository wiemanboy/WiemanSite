import { sveltekit } from "@sveltejs/kit/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [sveltekit(), Icons({ compiler: "svelte", autoInstall: true })],
	test: {
		include: ["tests/**/*.{test,spec}.{js,ts}"],
		exclude: ["tests/**/*.integration.{test,spec}.{js,ts}"],
		coverage: {
			reportsDirectory: "test-results/coverage",
		},
	},
	server: {
		fs: {
			allow: ["./locales", "./inversify.config.ts"],
		},
	},
});
