<template>
  <div class="row justify-content-sm-center h-100">
    <div class="col-12 col-xxl-4 col-xl-5 col-lg-7 col-md-9">
      <div class="text-center my-5"><br />
      </div>
      <div class="card shadow-lg">
        <div class="card-body p-5">
          <div class="text-center">
            <img src="~assets/images/logo.svg" class="img-fluid img" />
            <h5>Reset Password</h5>
          </div>
          <form class="needs-validation" autocomplete="off">
            <div class="mb-3">
              <div class="mb-2 w-100">
                <label class="text-muted" for="password">New Password</label>
              </div>
              <input id="newpassword" v-model="user.newpassword" type="password" class="form-control" name="newpassword" required />
            </div>
            <div class="mb-3">
              <div class="mb-2 w-100">
                <label class="text-muted" for="password">Confirm Password</label>
              </div>
              <input id="confirmpassword" v-model="user.password_confirmation" type="password" class="form-control" name="password_confirmation" required />
            </div>
            <div class="mb-2 w-100 text-center">
              <button type="button" class="btn-1 btn btn-primary ms-auto" @click="resetpassword()">Change</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResetPasswordPage',
  layout: 'default-layout',
  data() {
    return {
      user: {
        newpassword: '',
        password_confirmation: '',
      },
    }
  },
  methods: {
    async resetpassword() {
      const urlString = window.location.href
      const url = new URL(urlString)
      const token = url.searchParams.get('token')
      try {
        await this.$axios.post('/api/password/reset', {
          token,
          email: localStorage.getItem('email'),
          password: this.user.newpassword,
          password_confirmation: this.user.password_confirmation,
        })
        alert('Success')
        await this.$auth.loginWith('local', {
          data: {
            email: localStorage.getItem('email'),
            password: this.user.newpassword,
          },
        })
        localStorage.removeItem('email')
        this.$router.push(this.localePath('signin'))
      } catch ($e) {
        alert($e)
      }
    },
  },
}
</script>
<style>
.img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
</style>
