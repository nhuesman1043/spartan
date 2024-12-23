/* ================================================================
Description: Root layout - Mantine app shell
Author: Noah Huesman

Creation Date: 12/4/2024
Modification History:
#1 (12/12/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Wrapper
import Wrapper from "@/app/wrapper"

// Components
import Header from "@/components/(public)/header"
import Navbar from "@/components/(public)/navbar"
import Aside from "@/components/(public)/aside"

// ========================================
// ROOT LAYOUT
// ========================================

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// Render
	return (
		<Wrapper>
			<Header />
			<Navbar />
			<Aside />
			{children}
		</Wrapper>
	)
}
