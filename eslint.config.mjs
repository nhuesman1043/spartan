import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	...compat.extends(
		"next/core-web-vitals",
		"next/typescript",
		"plugin:tailwindcss/recommended",
		"plugin:prettier/recommended"
	),
	{
		rules: {
			"tailwindcss/classnames-order": "off",
			"prettier/prettier": [
				"error",
				{
					endOfLine: "auto",
				},
			],
			"no-var": "off",
		},
		ignores: ["node_modules", ".next", ".husky", "coverage", "logs"],
	},
]
export default eslintConfig
