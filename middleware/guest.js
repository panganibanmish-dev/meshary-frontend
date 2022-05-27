export default function ({ app, route, redirect }) {
    if(app.$auth.loggedIn) {
        redirect(app.localePath('/startups'))
    }
  }
    