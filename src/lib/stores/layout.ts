/* ================================================================
Description: Global store for the navbar and aside collapse state
Author: Noah Huesman

Creation Date: 12/19/2024
Modification History:
#1 (12/19/2024) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Zustand
import { create } from "zustand"
import { persist, PersistOptions } from "zustand/middleware"

// ========================================
// INTERFACE
// ========================================

interface LayoutState {
	// Navbar
	isNavbarCollapsed: boolean
	toggleNavbarCollapse: () => void

	// Aside
	isAsideCollapsed: boolean
	toggleAsideCollapse: () => void
}

// ========================================
// LAYOUT STORE
// ========================================

const useLayoutStore = create<LayoutState>()(
	// Preserve state in local storage
	persist(
		(set) => ({
			// Navbar
			isNavbarCollapsed: false, // Initial state
			toggleNavbarCollapse: () =>
				set((state) => ({
					isNavbarCollapsed: !state.isNavbarCollapsed,
				})),

			// Aside
			isAsideCollapsed: false, // Initial state
			toggleAsideCollapse: () =>
				set((state) => ({
					isAsideCollapsed: !state.isAsideCollapsed,
				})),
		}),
		{
			name: "layout-storage",
		} as PersistOptions<LayoutState>
	)
)

// ========================================
// EXPORTS
// ========================================

export default useLayoutStore
