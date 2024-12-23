/* ================================================================
Description: Header component for the admin layout
Author: Noah Huesman

Creation Date: 12/23/2024
Modification History:
#1 (12/23/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Components
import NavbarToggle from "@/components/(protected)/(admin)/header/navbar-toggle"
import Profile from "@/components/(protected)/(admin)/header/profile"
import TransitionLink from "@/components/utils/transition-link"

// Mantine
import { AppShellHeader, Group, Button, Title, Text } from "@mantine/core"

// Tabler icons
import { IconSwords, IconLogin2 } from "@tabler/icons-react"

// Auth server actions
import { getSession } from "@/lib/server/auth"

// ========================================
// HEADER
// ========================================

export default async function Header() {
	// Get session
	const session = await getSession()

	// Render
	return (
		<AppShellHeader px="md">
			<Group h="100%" justify="space-between">
				<Group>
					{/* Navbar toggle */}
					<NavbarToggle />

					{/* Project icon */}
					<IconSwords size={30} />

					{/* Project title and description */}
					<Title order={2}>Spartan - Admin</Title>
					<Text
						span
						size="sm"
						fs="italic"
						c="accent-primary"
						visibleFrom="sm"
						mt="sm"
					>
						Next.js Template with MongoDB (Prisma) and Mantine
					</Text>
				</Group>

				<Group visibleFrom="sm">
					{session?.user ? (
						<Profile session={session} />
					) : (
						<TransitionLink href="/login">
							<Button
								size="md"
								variant="outline"
								type="submit"
								rightSection={<IconLogin2 size={20} />}
							>
								Login
							</Button>
						</TransitionLink>
					)}
				</Group>
			</Group>
		</AppShellHeader>
	)
}
