import { UserConfig } from "@commitlint/types"

const config: UserConfig = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		// Ensures the subject is in lowercase
		"subject-case": [2, "always", "lower-case"],
		"type-enum": [
			2,
			"always",
			[
				"feat",
				"fix",
				"docs",
				"style",
				"refactor",
				"perf",
				"test",
				"chore",
				"revert",
				"init",
			],
		],
	},
}

export default config
