/* ================================================================
Description: Admin layout - Mantine app shell
Author: Noah Huesman

Creation Date: 12/23/2024
Modification History:
#1 (12/23/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Wrapper
import Wrapper from "@/app/wrapper"

// Components
import Header from "@/components/(protected)/(admin)/header"
import Navbar from "@/components/(protected)/(admin)/navbar"
import Aside from "@/components/(protected)/(admin)/aside"

// ========================================
// ROOT LAYOUT
// ========================================

export default async function AdminLayout({
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
