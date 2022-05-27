export default function ({ app, store, redirect }) {
  if (store.state.auth.loggedIn) {
    if (store.state.auth.user.roles.length && store.state.role.selectedRole !== "Buyer") {
      return redirect(app.localePath('/startups'))
    }
  } else {
    return redirect('/signin')
  }
}
