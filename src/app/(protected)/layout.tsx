/* ================================================================
Description: Protect all pages within (protected) directory
Author: Noah Huesman

Creation Date: 12/23/2024
Modification History:
#1 (12/23/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Auth server actions
import { getSession } from "@/lib/server/auth"

// Next
import { redirect } from "next/navigation"

// ========================================
// ROOT LAYOUT
// ========================================

export default async function ProtectedLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// Get session
	const session = await getSession()

	// Redirect to login if no user is signed in
	if (!session?.user) redirect("/login")

	// Render protected content if user is signed in
	return <>{children}</>
}
