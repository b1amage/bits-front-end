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
					10: "#000000",
				},
				teriary: {
					pink: "#D48FD5",
					purple: {
						100: "#A77CFB",
						20: "#E8DDFF",
					},
					red: "#FBA0B3",
					cyan: "#CDF8F3",
					gray: {
						100: "#E5E5E5",
						80: "#585858",
						50: "#C6C6C6",
						20: "#FAFAFA",
					},
				},
			},
			keyframes: {
				flip: {
					"0%": {
						transform: "perspective(200px) rotateX(0) rotateY(0)",
					},
					"50%": {
						transform:
							"perspective(200px) rotateX(180deg) rotateY(0)",
					},

					"100%": {
						transform:
							"perspective(200px) rotateX(180deg) rotateY(180deg)",
					},
				},
			},
			animation: {
				flip: "flip 1.2s ease-in-out infinite",
			},
		},
		fontFamily: {
			dmSans: ["DM Sans", "sans-serif"],
		},
	},
	plugins: [],
};
