/* ================================================================
Description: Root page
Author: Noah Huesman

Creation Date: 12/4/2024
Modification History:
#1 (12/12/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Mantine
import { Container, List, ListItem, Center, Loader, Text } from "@mantine/core"

// Auth server actions
import { getSession } from "@/lib/server/auth"

// Document server actions
import { getUserDocuments } from "@/lib/server/document"

// ========================================
// ROOT PAGE
// ========================================

export default async function RootPage() {
	// Get session
	const session = await getSession()

	// If no session, display message and return
	if (!session?.user) {
		return (
			<Container fluid>
				<Text size="lg" c="dimmed">
					Please log in to see your documents
				</Text>
			</Container>
		)
	}

	// Fetch user documents
	const documents = await getUserDocuments(session.user.id as string)

	// Render
	return (
		<Container fluid>
			<Text size="xl">Your Documents</Text>

			{/* Display loading state */}
			{!documents ? (
				<Center mt="xl">
					<Loader size="xl" variant="dots" />
				</Center>
			) : (
				<div>
					{documents.length === 0 ? (
						<Text>No documents found</Text>
					) : (
						<List spacing="xs" size="sm" mt="md">
							{documents.map((doc) => (
								<ListItem key={doc.id}>{doc.name}</ListItem>
							))}
						</List>
					)}
				</div>
			)}
		</Container>
	)
}
