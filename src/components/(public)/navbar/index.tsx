/* ================================================================
Description: Navabr component for the root layout
Author: Noah Huesman

Creation Date: 12/23/2024
Modification History:
#1 (12/23/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Mantine
import { AppShellNavbar, AppShellSection, ScrollArea } from "@mantine/core"

// ========================================
// NAVBAR
// ========================================

export default function Navbar() {
	// Render
	return (
		<AppShellNavbar p="md">
			<AppShellSection grow component={ScrollArea}>
				<div>navbar</div>
			</AppShellSection>
		</AppShellNavbar>
	)
}
