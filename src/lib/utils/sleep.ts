/* ================================================================
Description: Function to sleep for a specified amount of time
Author: Noah Huesman

Creation Date: 12/19/2024
Modification History:
#1 (12/19/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// SLEEP
// ========================================

function sleep(ms: number): Promise<void> {
	// Return an empty promise after a specified time
	return new Promise((resolve) => setTimeout(resolve, ms))
}

// ========================================
// EXPORTS
// ========================================

export default sleep
