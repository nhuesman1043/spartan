/* ================================================================
Description: User profile menu
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
import { Menu, Avatar, Group, Text } from "@mantine/core"

// Tabler icons
import { IconLogout2 } from "@tabler/icons-react"

// Auth.js (Session type)
import { Session } from "next-auth"

// Auth server actions
import { logout } from "@/lib/server/auth"

// ========================================
// PROFILE
// ========================================

export default function Profile({ session }: { session: Session }) {
	// Render
	return (
		<Menu shadow="md" width={200} withArrow arrowPosition="center">
			<Menu.Target>
				<Group gap="xs" className="cursor-pointer">
					<Avatar
						src={session.user?.image}
						name={session.user?.name ?? ""}
						size="sm"
						radius="xl"
						color="initials"
					/>
					<Text size="md">Noah Huesman</Text>
				</Group>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>Profile</Menu.Label>
				<Menu.Item
					leftSection={<IconLogout2 />}
					onClick={() => logout("/")}
				>
					Log out
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	)
}
