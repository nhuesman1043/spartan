/* ================================================================
Description: Auth layout
Author: Noah Huesman

Creation Date: 12/4/2024
Modification History:
#1 (12/12/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Components
import Header from "@/components/(public)/(auth)/header"

// Mantine
import { AppShell, AppShellHeader, AppShellMain } from "@mantine/core"

// ========================================
// AUTH LAYOUT
// ========================================

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// Render
	return (
		<AppShell header={{ height: { base: 60, md: 70 } }}>
			<AppShellHeader px="md">
				<Header />
			</AppShellHeader>
			<AppShellMain>{children}</AppShellMain>
		</AppShell>
	)
}
