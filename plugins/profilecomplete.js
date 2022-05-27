export default ({ app, redirect }) => {
    if(app.$auth.loggedIn && !app.$auth.user.complete) {
        return redirect(app.localePath('/activation'))
    }
}