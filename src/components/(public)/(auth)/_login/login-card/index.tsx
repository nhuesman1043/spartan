/* ================================================================
Description: Login card
Author: Noah Huesman

Creation Date: 12/19/2024
Modification History:
#1 (12/19/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// Components
import { GoogleSignIn } from "@/components/(public)/(auth)/_login/login-card/google-sign-in/"

// Mantine
import { Group, Paper, PaperProps, Text } from "@mantine/core"

// Auth server actions
import { login } from "@/lib/server/auth"

// ========================================
// LOGIN CARD
// ========================================

export function LoginCard(props: PaperProps) {
	// Render
	return (
		<Paper radius="sm" p="xl" w="500" withBorder {...props} shadow="lg">
			<Text size="lg" fw={500}>
				Welcome to Spartan, login with
			</Text>

			<Group grow mt="sm">
				<GoogleSignIn
					radius="xl"
					onClick={() => login("google", "/")}
				/>
			</Group>
		</Paper>
	)
}
