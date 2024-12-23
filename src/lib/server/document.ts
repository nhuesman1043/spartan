/* ================================================================
Description: Document collection server actions
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

// Prisma
import { prisma } from "@/prisma"

// Zod
import z from "zod"

// Logger
import logger from "@/lib/utils/logger"

// ========================================
// GET A USER'S DOCUMENTS
// ========================================

export const getUserDocuments = async (userId: string) => {
	// Validate the userId using zod
	const input = z
		.object({
			userId: z.string(),
		})
		.parse({ userId }) // Validate the input

	try {
		// Fetch the user's documents
		const documents = await prisma.document.findMany({
			where: {
				userId: input.userId,
			},
		})

		// Return the user's documents
		return documents
	} catch (error) {
		// Log error
		if (process.env.NODE_ENV === "development")
			logger.error(`Failed to fetch user's documents: ${error}`)

		// Throw an error
		throw new Error("Failed to fetch user's documents")
	}
}
