export default function ({ app, store, redirect }) {
  if (store.state.auth.loggedIn) {
    if (store.state.auth.user.roles.length && store.state.role.selectedRole !== "Seller") {
      return redirect(app.localePath('/marketplace'))
    }
  } else {
    return redirect('/signin')
  }
}
