import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		fontFamily: {
			sans: [
				"Inter",
				"sans-serif",
				"ui-sans-serif",
				"system-ui, sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
		},
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
		},
	},
	plugins: [],
} satisfies Config;
