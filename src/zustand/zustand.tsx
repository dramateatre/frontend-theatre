import { create } from 'zustand'

type Store = {
    newsAlternateLocales?: number // Store can be undefined or a number
    setNewsAlternateLocales: (id: number) => void
}

// Create the store using zustand
export const useStore = create<Store>((set) => ({
    newsAlternateLocales: undefined,
    setNewsAlternateLocales: (id) => set({ newsAlternateLocales: id }),
}))
