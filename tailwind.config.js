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
			colors: {
				primary: {
					100: "#864AFC",
					30: "#EBE0FF",
				},
				secondary: {
					100: "#585858",
					50: "#F6F6F6",
					20: "#888888",
				},
				teriary: {
					pink: "#D48FD5",
					purple: "#A77CFB",
					red: "#FBA0B3",
					cyan: "#CDF8F3",
				},
			},
			keyframes: {},
			animation: {},
		},
		fontFamily: {
			dmSans: ["DM Sans", "sans-serif"],
		},
	},
	plugins: [],
};
