/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	screens: {
		sm: "480px",
		md: "768px",
		lg: "1284px",
		xl: "1440px",
	},
	theme: {
		extend: {
			colors: {},
			keyframes: {},
			animation: {},
		},
		fontFamily: {},
	},
	plugins: [],
};
