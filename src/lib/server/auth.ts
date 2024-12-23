/* ================================================================
Description: Authentication server actions
Author: Noah Huesman

Creation Date: 12/19/2024
Modification History:
#1 (12/19/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use server"

// ========================================
// IMPORTS
// ========================================

// Auth
import { signIn, signOut, auth } from "@/auth"

// Zod
import z from "zod"

// ========================================
// LOGIN
// ========================================

export const login = async (provider: string, redirectPath: string) => {
	// Validate input using zod
	const input = z
		.object({
			provider: z.string(),
			redirectPath: z.string(),
		})
		.parse({ provider, redirectPath })

	// Perform login
	await signIn(input.provider, { redirectTo: input.redirectPath })
}

// ========================================
// LOGOUT
// ========================================

export const logout = async (redirectPath: string) => {
	// Validate input using zod
	const input = z.object({ redirectPath: z.string() }).parse({ redirectPath })

	// Perform logout
	await signOut({ redirectTo: input.redirectPath })
}

// ========================================
// GET SESSION
// ========================================

export const getSession = async () => {
	// Get session
	const session = await auth()
	return session
}
