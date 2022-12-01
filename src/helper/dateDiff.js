function daysDifference(d0, d1) {
	var diff = new Date(+d1).setHours(12) - new Date(+d0).setHours(12);
	const dayDiff = Math.abs(Math.round(diff / 8.64e7));

	if (dayDiff < 30)
		return dayDiff === 1 ? `${dayDiff} day ago` : `${dayDiff} days ago`;
	if (dayDiff < 365)
		return Math.round(dayDiff / 30) === 1
			? `${Math.round(dayDiff / 30)} month ago`
			: `${Math.round(dayDiff / 30)} months ago`;
	return Math.round(dayDiff / 365) === 1
		? `${Math.round(dayDiff / 365)} year ago`
		: `${Math.round(dayDiff / 365)} years ago`;
}

export default daysDifference;
