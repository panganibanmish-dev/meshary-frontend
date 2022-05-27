export default function ({ app, route, redirect }) {
    const redirectPaths = [
      app.localePath('/activation'),
      app.localePath('/accounttype'),
    ]
  
    if(typeof route.path === 'string' && !redirectPaths.find(p => route.path === p)) {
      if(app.$auth.user && !app.$auth.user.complete && route.path !== app.localePath('/activation')) {
        app.router.push(app.localePath('/activation'))
      }
  
    }
  }
    