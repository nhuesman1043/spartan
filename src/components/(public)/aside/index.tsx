/* ================================================================
Description: Aside component for the root layout
Author: Noah Huesman

Creation Date: 12/23/2024
Modification History:
#1 (12/23/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Mantine
import { AppShellAside, AppShellSection, ScrollArea } from "@mantine/core"

// ========================================
// ASIDE
// ========================================

export default function Aside() {
	// Render
	return (
		<AppShellAside p="md">
			<AppShellSection grow component={ScrollArea}>
				<div>aside</div>
			</AppShellSection>
		</AppShellAside>
	)
}
