function moneyFormatter(num) {
	let p = num?.toFixed(2).split(".");
	return (
		(p[0]?.split("")[0] === "-" ? "-" : "") +
		p[0]
			.split("")
			.reverse()
			.reduce(function (acc, num, i, orig) {
				return num === "-"
					? acc
					: num + (i && !(i % 3) ? "," : "") + acc;
			}, "") +
		"." +
		p[1] +
		" TND"
	);
}

const isEmpty = (value) => {
	if (value === null) {
		return true;
	} else if (typeof value !== "number" && value === "") {
		return true;
	} else if (typeof value === "undefined" || value === undefined) {
		return true;
	} else if (
		value !== null &&
		typeof value === "object" &&
		!Object.keys(value).length
	) {
		return true;
	} else {
		return false;
	}
};

const createCashbookIdentifier = (len = 12) =>
	[...Array(len)].map(() => (~~(Math.random() * 36)).toString(36)).join("");

export { moneyFormatter, isEmpty, createCashbookIdentifier };
