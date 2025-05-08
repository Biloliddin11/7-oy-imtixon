import { create } from 'zustand'

const useFilterStore = create(set => ({
	authFilter: false,
	authFilterSet: () =>
		set(state => ({
			authFilter: !state.authFilter,
		})),
}))

export default useFilterStore
