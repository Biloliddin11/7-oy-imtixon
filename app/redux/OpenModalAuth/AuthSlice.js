import { create } from 'zustand'

const useAuthStore = create((set) => ({
  authIsOpen: false,
  authIsOpenSet: () => set((state) => ({
    authIsOpen: !state.authIsOpen, 
  })),
}))

export default useAuthStore