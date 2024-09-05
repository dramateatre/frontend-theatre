import { create } from 'zustand'

type Store = {
    newsAlternateLocales?: number
    creativeGroupAlternateLocales?: number
    troupeAlternateLocales?: number
    setNewsAlternateLocales: (id?: number) => void
    setCreativeGroupAlternateLocales: (id?: number) => void
    setTroupeAlternateLocales: (id?: number) => void
}

export const useStore = create<Store>((set) => ({
    newsAlternateLocales: undefined,
    creativeGroupAlternateLocales: undefined,
    troupeAlternateLocales: undefined,
    setNewsAlternateLocales: (id) => set({ newsAlternateLocales: id }),
    setCreativeGroupAlternateLocales: (id) => set({ creativeGroupAlternateLocales: id }),
    setTroupeAlternateLocales: (id) => set({ troupeAlternateLocales: id }),
}))
