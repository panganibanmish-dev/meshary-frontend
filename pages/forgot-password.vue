<template>
  <b-container>
    <div class="row justify-content-sm-center h-100 mt-5">
      <div class="col-12 col-xxl-4 col-xl-5 col-lg-7 col-md-9">
        <div class="text-center my-4 my-md-5">
          <h1></h1>
          <br />
        </div>
        <div class="forgot-password-card card shadow-lg">
          <div class="card-body">
            <div class="label-h5 text-center">
              <!-- <img src="~assets/images/logo.svg" class="img-fluid img" /> -->
              <ErrorCard
                v-if="success"
                class="error-card-position-toast"
                :errors="'We have sent you a password confirmation link. Please check your email.'"
                :variant="'alert'"
              />
              <h5 class="label-h5">Reset Password</h5>
            </div>
            <div class="text-center mb-5">
              <p class="p1">Input registered email</p>
            </div>
            <form class="needs-validation" autocomplete="off">
              <div class="position-relative mb-5">
                <label class="secondary-text mb-2 text-muted" for="email"
                  >E-Mail Address</label
                >
                <input
                  id="email"
                  v-model="user.email"
                  type="email"
                  class="form-control forgotpassword-input fs-14"
                  :class="formErrors.email || msg ? 'border-danger' : ''"
                  name="email"
                  required
                  autofocus
                  placeholder="user@gmail.com"
                  @keyup="validateEmail"
                />
                <ErrorCardSet
                  v-if="!msg"
                  class="error-card-position-fields d-block mt-n4"
                  :errors="formErrors.email"
                  :variant="'alert'"
                />
                <ErrorCard
                  v-else
                  class="error-card-position-fields d-block mt-n4"
                  :errors="msg"
                  :variant="'alert'"
                />
              </div>

              <br />
              <div class="mb-2 w-100 text-center">
                <a
                  type="button"
                  class="btn-forgotpassword btn btn-primary fs-16 ms-auto"
                  @click="forgotpasswordUser()"
                >
                  Reset Password
                </a>
              </div>

              <!-- <div class="card-body p-3 font-text text-center">
              <p class="card-text">Remember your password? <NuxtLink class="pr-3" :to="localePath('/signin')"
                  >Sign In</NuxtLink
                >
              </p>
            </div> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
import ErrorCardSet from '../components/ErrorCardSet.vue'
import ErrorCard from '../components/ErrorCard.vue'
export default {
  name: 'ForgotpasswordPage',
  components: {
    ErrorCardSet,
    ErrorCard,
  },
  layout: 'default-layout',
  data() {
    return {
      valid: false,
      success: false,
      // done: false,
      // error: false,
      msg: '',
      user: {
        email: '',
      },
      formErrors: [],
    }
  },
  watch: {
    email(value) {
      // binding this to the data value in the email input
      this.user.email = value
      this.validateEmail(value)
    },
  },
  methods: {
    // async forgotpasswordUser(e) {
    //   e.preventDefault()
    //   this.done = false
    //   this.error = false
    //   this.axios
    //     .post(`/api/forgot-password`, {
    //       email: this.user.email,
    //     })
    //     .then(() => {
    //       this.done = true
    //     })
    //     .catch((e) => {
    //       this.error = true
    //     })
    async forgotpasswordUser() {
      try {
        await this.$axios.post('/api/forgot-password', {
          email: this.user.email,
        })

        localStorage.setItem('email', this.user.email)
        // alert('Success')
        this.success = true
        // await this.$auth.loginWith('local', { data: this.user })
      } catch ({ response }) {
        const errors = response.data.errors
        if (errors) {
          //  Object.keys(errors).forEach((key) => {
          //     this.$toast.error(errors[key][0])
          //   })
          this.formErrors = errors
        } else {
          //  this.$toast.error(response.data.message)
          this.formErrors = response.data
        }
      }
    },
    validateEmail() {
      /* eslint-disable no-useless-escape */
      this.formErrors = []
      const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (emailRegex.test(this.user.email)) {
        this.msg = ''
      } else {
        this.msg = 'The email must be a valid email address.'
      }
    },
  },
}
</script>
<style lang="scss">
@import '../assets/css/vars.scss';
.img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
.label-h5 {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 23px;
  align-items: center;
  text-align: center;
  color: #000000;
  @media screen and (min-width: 768px) {
    @include scalefont(22);
    @include scalelineheight(28);
  }
}
.p1 {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 134%;
  align-items: center;
  text-align: center;
  color: rgba(26, 41, 61, 0.83);
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 134%;
  }
}
.secondary-text {
  height: 17px;
  left: 554px;
  right: 796px;
  top: 268px;
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  @include scalefont(14);
  @include scalelineheight(17);
  display: flex;
  align-items: center;
  color: rgba(27, 43, 65, 0.72);
}
.input {
  /* position: absolute; */
  /* height: 22px;
  left: 568px;
  right: 769px;
  top: 305px; */

  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  @include scalefont(14);
  @include scalelineheight(22);
  /* identical to box height, or 157% */
  color: rgba(0, 0, 0, 0.3);
}
.btn-forgotpassword {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  height: 45px;
  font-size: 14px;
  left: 0px;
  top: 0px;
  background: #009ddd;
  border-radius: 40px;
  @media screen and (min-width: 992px) {
    font-size: 16px;
    @include scaleheight(56);
    border-radius: 4px;
  }
}
#email.forgotpassword-input {
  font-size: 12px;
  border: 1px solid rgba(28, 55, 90, 0.16);
  @include scaleheight(45);
  left: 553px;
  top: 288px;
  box-sizing: border-box;
  border-radius: 3px;
  @media screen and (min-width: 992px) {
    font-size: 16px;
  }
}

.forgot-password-card {
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 20px 60px rgba(2, 131, 233, 0.1);
  border-radius: 15px;
  border: 0;
  // @include scalewidth(515);
  .card-body {
    padding: 3rem 2rem;
    @media screen and (min-width: 992px) {
      padding: 4rem 6rem;
    }
  }
}

.error-card-position-toast {
  display: flex;
  place-content: center;
  position: absolute;
  right: 0;
  left: 0;
  top: -0.5rem;
  z-index: 5;
}
</style>
