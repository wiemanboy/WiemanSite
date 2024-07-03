import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		colors: {
			white: "#fff",
			link: {
				DEFAULT: "#0070f3",
				hover: "#0366d6",
			},
			primary: {
				light: {
					DEFAULT: "#fff",
				},
				dark: {
					DEFAULT: "#222",
				},
			},
			secondary: {
				light: {
					DEFAULT: "#eee",
				},
				dark: {
					DEFAULT: "#333",
				},
			},
			tertiary: {
				light: {
					DEFAULT: "#ccc",
				},
				dark: {
					DEFAULT: "#111",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
