export const state = () => ({
    selectedTab: 'requests',
    selectedRoleTab: null,
})

export const mutations = {
    selectTab(state, tab) {
        state.selectedTab = tab
    },
    selectRoleTab(state, tab) {
        state.selectedRoleTab = tab
    },
}
