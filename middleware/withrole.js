export default function ({ app, route, store }) {
  const redirectPaths = [
    app.localePath('/activation'),
    app.localePath('/accounttype'),
  ]
  if(typeof route.path === 'string' && !redirectPaths.find(p => route.path === p)) {
    if (app.$auth.user && !app.$auth.user.roles.length && route.path !== app.localePath('/accounttype')) {
      app.router.push(app.localePath('/accounttype'))
    } 
  }
  
  if(app.$auth.loggedIn && !store.state.role.selectedRole) {
    if(app.$auth.user.active_role){
      store.commit('role/setRole', app.$auth.user.active_role)
    }else{
      const { roles } = app.$auth.user
      store.commit('role/setRole', roles[0].name)
    }
  }
}
  