import { create } from 'zustand'

type Store = {
    newsAlternateLocales?: number
    setNewsAlternateLocales: (id?: number) => void
}

export const useStore = create<Store>((set) => ({
    newsAlternateLocales: undefined,
    setNewsAlternateLocales: (id) => set({ newsAlternateLocales: id }),
}))
