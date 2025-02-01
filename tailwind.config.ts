import type { Config } from "tailwindcss";
import flowbitePlugin from "flowbite/plugin";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				text: "#0f0118",
				background: "#e8e6ea",
				primary: "#a825f4",
				secondary: "#f87cd7",
				accent: "#f65198",
				dark: {
					text: "#f5e7fe",
					background: "#0f1321",
					primary: "#8e0bda",
					secondary: "#830762",
					accent: "#ae0951",
				},
			},
		},
	},
	plugins: [flowbitePlugin],
} as Config;
