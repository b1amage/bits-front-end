function decode(str) {
	let txt = new DOMParser().parseFromString(str, "text/html");

	return txt.documentElement.textContent;
}

export default decode;
