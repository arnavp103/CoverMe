// prettier.config.js
module.exports = {
	useTabs: true,
	arrowParens: "always",
	singleQuote: false,
	semi: true,
	trailingComma: "all",
	printWidth: 80,
	tabWidth: 4,
	plugins: [require("prettier-plugin-tailwindcss")],
};
