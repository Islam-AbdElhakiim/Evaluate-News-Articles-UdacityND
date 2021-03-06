// An Boolyan-based returning function for checking if a param is a link [via REGEX]
export const checkURL = (link) => {
	const urlPattern =
		/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

	return urlPattern.test(link);
};
