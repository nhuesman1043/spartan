/* ================================================================
Description: Layout - Mantine configuration
Author: Noah Huesman

Creation Date: 12/19/2024
Modification History:
#1 (12/19/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Global CSS
import "./globals.css"

// Mantine
import "@mantine/core/styles.css"
import {
	mantineHtmlProps,
	ColorSchemeScript,
	MantineProvider,
} from "@mantine/core"

// Theme
import { theme } from "@/app/theme"

// Next
import type { Metadata } from "next"

// ========================================
// METADATA
// ========================================

export const metadata: Metadata = {
	title: "Spartan",
	description: "Next.js Template with MongoDB (Prisma) and Mantine",
}

// ========================================
// LAYOUT
// ========================================

export default async function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	// Render
	return (
		<html lang="en" {...mantineHtmlProps}>
			<head>
				<ColorSchemeScript defaultColorScheme="auto" />
			</head>
			<body>
				<MantineProvider defaultColorScheme="auto" theme={theme}>
					{children}
				</MantineProvider>
			</body>
		</html>
	)
}
