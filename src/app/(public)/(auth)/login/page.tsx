/* ================================================================
Description: Login and register page
Author: Noah Huesman

Creation Date: 12/12/2024
Modification History:
#1 (12/12/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Components
import { LoginCard } from "@/components/(public)/(auth)/_login/login-card"

// Mantine
import { Container, Center } from "@mantine/core"

// ========================================
// LOGIN PAGE
// ========================================

export default function LoginPage() {
	// Render
	return (
		<Container>
			<Center h={150}>
				<LoginCard />
			</Center>
		</Container>
	)
}
