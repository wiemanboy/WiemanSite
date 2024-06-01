import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		colors: {
			white: "#fff",
			link: {
				DEFAULT: "#0070f3",
				hover: "#0366d6",
				light: {
					DEFAULT: "#4788d6",
					hover: "#539bf5",
				},
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
