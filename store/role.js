export const state = () => ({
    selectedRole: null,
})

export const mutations = {
    setRole(state, role) {
        state.selectedRole = role
    },
}