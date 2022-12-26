const navItems = [
	{ text: "home", to: "/" },
	{ text: "about", to: "/about" },
	{ text: "Blogs", to: "/blogs/all" },
	{ text: "account", to: `/profile/${localStorage.getItem("user") !== null && JSON.parse(localStorage.getItem("user")).userId}` },
];

export default navItems;
