/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)",
				},
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				display: ["var(--font-sf)", "system-ui", "sans-serif"],
				default: ["var(--font-inter)", "system-ui", "sans-serif"],
			},
			animation: {
				// Fade up and down
				"fade-up": "fade-up 0.5s",
				"fade-down": "fade-down 0.5s",
				// Tooltip
				"slide-up-fade":
					"slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
				"slide-down-fade":
					"slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
			},
			keyframes: {
				// Fade up and down
				"fade-up": {
					"0%": {
						opacity: 0,
						transform: "translateY(10px)",
					},
					"80%": {
						opacity: 0.6,
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0px)",
					},
				},
				"fade-down": {
					"0%": {
						opacity: 0,
						transform: "translateY(-10px)",
					},
					"80%": {
						opacity: 0.6,
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0px)",
					},
				},
				// Tooltip
				"slide-up-fade": {
					"0%": { opacity: 0, transform: "translateY(6px)" },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
				"slide-down-fade": {
					"0%": { opacity: 0, transform: "translateY(-6px)" },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		plugin(({ addVariant }) => {
			addVariant("radix-side-top", '&[data-side="top"]');
			addVariant("radix-side-bottom", '&[data-side="bottom"]');
		}),
	],
};
