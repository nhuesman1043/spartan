/* ================================================================
Description: Auth.js configuration
Author: Noah Huesman

Creation Date: 12/19/2024
Modification History:
#1 (12/19/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Auth.js
import NextAuth from "next-auth"

// Prisma client
import { prisma } from "@/prisma"

// Prisma adapter
import { PrismaAdapter } from "@auth/prisma-adapter"

// Providers
import Google from "next-auth/providers/google"

// ========================================
// AUTH.JS CONFIGURATION
// ========================================

export const { handlers, auth, signIn, signOut } = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [Google],
	callbacks: {
		// Check if user is authorized
		authorized: async ({ auth }) => {
			return !!auth
		},

		// Add user id to the session object
		session({ session, user }) {
			session.user.id = user.id
			return session
		},
	},
})
