/* ================================================================
Description: App shell wrapper - Client-side functionality
Author: Noah Huesman

Creation Date: 12/23/2024
Modification History:
#1 (12/23/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// Mantine
import { AppShell } from "@mantine/core"

// Layout store
import useLayoutStore from "@/lib/stores/layout"

// ========================================
//  WRAPPER
// ========================================

export default function Wrapper({ children }: { children: React.ReactNode }) {
	// Layout store
	const { isNavbarCollapsed, isAsideCollapsed } = useLayoutStore()

	// Render
	return (
		<AppShell
			header={{ height: { base: 60, md: 70 } }}
			navbar={{
				width: { base: 200, md: 350 },
				breakpoint: "sm",
				collapsed: {
					mobile: !isNavbarCollapsed,
					desktop: !isNavbarCollapsed,
				},
			}}
			aside={{
				width: { base: 200, md: 350 },
				breakpoint: "sm",
				collapsed: {
					mobile: !isAsideCollapsed,
					desktop: !isAsideCollapsed,
				},
			}}
			padding="md"
		>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	)
}
