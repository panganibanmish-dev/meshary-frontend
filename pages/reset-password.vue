<template>
  <div class="row justify-content-sm-center h-100">
    <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
      <div class="text-center my-4 my-md-5"><br /></div>
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
              <input id="confirmpassword" v-model="user.confirmpassword" type="password" class="form-control" name="confirmpassword" required />
            </div>
            <div class="mb-2 w-100 text-center">
              <button type="submit" class="btn btn-primary ms-auto" style="background-color: #009DDD" @click="resetpassword()">Change</button>
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
        confirmpassword: '',
      },
    }
  },
  methods: {
    async resetpassword() {
      try {
        await this.$axios.post('/api/password/reset', {
         newpassword: this.user.newpassword,
          confirmpassword: this.user.confirmpassword,
          ...this.user,
        })
        alert('Success')
      } catch ($e) {
        alert($e)
      }
      await this.$auth.loginWith('local', { data: this.user })
    },
  },
}
</script>
<style >
.img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
</style>