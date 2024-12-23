/* ================================================================
Description: Prisma client instance
Author: Noah Huesman

Creation Date: 12/22/2024
Modification History:
#1 (12/22/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Prisma client
import { PrismaClient } from "@prisma/client"

// ========================================
// PRISMA CLIENT
// ========================================

// Create a new Prisma client instance
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// Export the Prisma client instance
export const prisma = globalForPrisma.prisma || new PrismaClient()

// If not in production, attach the Prisma client to the global object
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
