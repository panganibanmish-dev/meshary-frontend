<template>
  <b-container
    ><br />
    <div class="row justify-content-sm-center h-150">
      <div class="col-12 col-xxl-4 col-xl-5 col-lg-7 col-md-9">
        <div class="text-center my-4 my-md-5"><br /></div>
        <div class="signin-card card shadow mb-4">
          <ErrorCardSet
            v-if="formErrors.message"
            class="error-card-position-toast mt-n3"
            :errors="formErrors"
            :variant="'alert'"
          />
          <div class="card-body">
            <div class="text-center">
              <h5 class="label-h5">Log in to your Account</h5>
            </div>
            <div class="text-center mb-5">
              <p class="p1">Welcome back, please enter your details.</p>
            </div>
            <br />
            <form class="form-group" novalidate="" autocomplete="off">
              <div class="mb-3">
                <div class="position-relative">
                  <ErrorCardSet
                    v-if="formErrors.email && showErrors"
                    class="error-card-position-fields"
                    :errors="formErrors.email"
                    :variant="'alert'"
                  />
                  <ErrorCard
                    v-else-if="msg && showErrors"
                    class="error-card-position-fields"
                    :errors="msg"
                    :variant="'alert'"
                  />
                  <label class="secondary-text mb-2 text-muted" for="email"
                    >Email Address</label
                  >
                </div>
                <div class="position-relative">
                  <input
                    id="email"
                    ref="email"
                    v-model="user.email"
                    type="email"
                    class="form-control login-pass-input mb-4 input-box"
                    :class="showErrors ? 'border-danger' : ''"
                    name="email"
                    placeholder="user@gmail.com"
                    required
                    autofocus
                    @keyup="showErrors = false"
                  />
                </div>
              </div>
              <div class="mt-4 mb-3">
                <div class="position-relative mb-2 w-100">
                  <label class="secondary-text text-muted" for="login_password"
                    >Password</label
                  >
                  <ErrorCardSet
                    v-if="showErrors"
                    class="error-card-position-fields"
                    :errors="formErrors.password"
                    :variant="'alert'"
                  />
                </div>
                <div class="login-signup-password-input-icons">
                  <input
                    id="login_password"
                    v-model="user.password"
                    name="login_password"
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control login-pass-input mb-5 input-box"
                    :class="showErrors ? 'border-danger' : ''"
                    placeholder="Password"
                    required
                    @keyup="formErrors = []"
                  />

                  <a
                    v-if="showPassword == false"
                    role="button"
                    class="btn input-icons-password-right"
                    @click="showPassword = true"
                  >
                    <img src="~assets/images/eye-slash.svg" class="img-fluid" />
                  </a>
                  <a
                    v-if="showPassword == true"
                    role="button"
                    class="btn input-icons-password-right"
                    @click="showPassword = false"
                  >
                    <img src="~assets/images/eye.svg" class="img-fluid" />
                  </a>
                </div>
                <div
                  class="form-group d-flex align-items-center"
                  :class="
                    $t('translation') == 'arabic' ? 'flex-row-reverse' : ''
                  "
                >
                  <div
                    class="w-50 font-text"
                    :class="
                      $t('translation') == 'arabic'
                        ? 'text-right d-flex flex-row-reverse'
                        : 'text-left '
                    "
                  >
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      checked
                    /><span class="checkmark mr-1"></span>
                    <label
                      for="rememberMe"
                      class="checkbox-wrap checkbox-primary mb-0 fs-13"
                      >Remember Me</label
                    >
                  </div>
                  <br />
                  <div
                    class="w-50 font-text"
                    :class="
                      $t('translation') == 'arabic'
                        ? 'text-md-left'
                        : 'text-md-right '
                    "
                  >
                    <NuxtLink
                      class="fs-13"
                      :class="
                        $t('translation') == 'arabic'
                          ? 'float-left'
                          : 'float-right '
                      "
                      :to="localePath('/forgot-password')"
                      >{{ $t('signin.forgot_password') }}</NuxtLink
                    >
                  </div>
                </div>
              </div>
              <br />
              <div class="w-100 text-center">
                <a
                  type="submit"
                  class="btn btn-primary btn-login btn-block fs-16"
                  @click.prevent="loginUser"
                  >Log in</a
                ><br />
                <div class="separator">
                  <div class="line"></div>
                  <span class="font-signip-or fs-16">OR</span>
                  <div class="line"></div>
                </div>
                <br />
                <!-- <a class="btn btn-3 p-1 fs-16" href="#"
                  ><img
                    src="~assets/images/Google__G__Logo 1.svg"
                    class="img-fluid mr-3"
                  />
                  Sign in with Google</a
                ><br /> -->
                <a
                  class="btn btn-primary btn-2 fs-16"
                  :class="
                    $t('translation') == 'arabic'
                      ? 'd-flex flex-row-reverse'
                      : ''
                  "
                  href="#"
                  @click="linkedinAuth()"
                  ><img
                    src="~assets/images/logo_linkedin.svg"
                    class="img-fluid fs-16"
                    :class="$t('translation') == 'arabic' ? 'ml-3' : 'mr-3'"
                  />{{ $t('signin.sign_in_with_linkedin') }}</a
                >
              </div>
            </form>
          </div>
          <div class="text-center mb-5">
            <p class="card-text font-text fs-13">
              Don't have an account?<NuxtLink :to="localePath('/accounttype')">
                Sign Up</NuxtLink
              >
            </p>
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
  name: 'SigninPage',
  components: {
    ErrorCardSet,
    ErrorCard,
  },
  layout: 'default-layout',
  middleware: 'guest',
  data() {
    return {
      valid: false,
      user: {
        email: '',
        password: '',
      },
      showPassword: false,
      formErrors: [],
      msg: '',
      showErrors: false,
    }
  },
  watch: {
    email(value) {
      // binding this to the data value in the email input
      this.user.email = value
      this.validateEmail(value)
    },
  },
  async mounted() {
    // console.log(this.$route.query)
    if (this.$route.query.code) {
      await this.postLinkedInUser(this.$route.query)
    }
  },
  methods: {
    // ...mapMutations({
    //   setRole: 'role/setRole',
    // }),
    loginUser() {
      localStorage.removeItem('selectedRole')
      this.$auth
        .loginWith('local', {
          data: this.user,
        })
        .then((response) => {
          // const { roles } = response.data.data.user
          // this.$store.commit('role/setRole', roles[0]?.name)
          if (response.data.data.user.active_role) {
            this.$store.commit(
              'role/setRole',
              response.data.data.user.active_role
            )
            localStorage.setItem(
              'selectedRole',
              response.data.data.user.active_role
            )
          } else {
            const { roles } = response.data.data.user
            this.$store.commit('role/setRole', roles[0]?.name)
            localStorage.setItem('selectedRole', roles[0]?.name)
          }
          this.$router.push(this.localePath('/startups'))
        })
        .catch(({ response }) => {
          const errors = response.data.errors
          this.showErrors = true
          this.validateEmail()
          if (errors) {
            //  Object.keys(errors).forEach((key) => {
            //     this.$toast.error(errors[key][0])
            //   })
            this.formErrors = errors
          } else {
            //  this.$toast.error(response.data.message)
            this.formErrors = response.data
          }
        })
    },
    linkedinAuth() {
      this.$auth.loginWith('linkedin')
    },
    async postLinkedInUser(query) {
      const response = await this.$axios.get(
        `/api/linkedin/callback?code=${query.code}&state=${query.state}`
      )
      const { user, token } = response.data.data
      await this.$auth.setUser(user)
      await this.$auth.setUserToken(token)
      await this.$auth.loginWith('local', { data: user })
    },
    clearErrors() {
      this.formErrors = []
    },
    validateEmail() {
      /* eslint-disable no-useless-escape */
      this.user.email = this.$refs.email?.value
      this.formErrors = []
      const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (emailRegex.test(this.user.email)) {
        this.msg = ''
        this.showErrors = false
      } else {
        this.msg = 'Please enter a valid email address.'
        this.showErrors = true
      }
    },
  },
}
</script>
<style lang="scss">
@import '../assets/css/vars.scss';
.login-signup-password-input-icons {
  position: relative;
}
.input-icons-password-right {
  display: flex;
  position: absolute;
  align-items: center;
  z-index: 2;
  top: 0;
  bottom: 0;
  right: 0;
  img {
    // @include scaleheight(24);
    height: 20px;
    // @include scalewidth(24);
    width: 20px;
  }
}

.display-eye {
  cursor: pointer;
}
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
    font-size: 22px;
    line-height: 125.3%;
  }
}
.p1 {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14.4px;
  align-items: center;
  text-align: center;
  color: rgba(26, 41, 61, 0.83);
  @media screen and (min-width: 992px) {
    @include scalefont(14);
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
  line-height: 17px;
  display: flex;
  align-items: center;
  color: rgba(27, 43, 65, 0.72);
}

/* .input {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  @include scalefont(14);
  @include scalelineheight(22);
  color: rgba(0, 0, 0, 0.3);
} */
.font-text {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
}

.font-1 {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  color: rgba(28, 52, 84, 0.26);
  padding: 8px 14px;
}
.login-pass-input {
  @include scaleheight(45);
  left: 553px;
  top: 288px;
  border: 1px solid;
  box-sizing: border-box;
  border-radius: 3px;
}
.input-box {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  @include scalefont(14);
  @include scalelineheight(22);
  border: 1px solid rgba(28, 55, 90, 0.16);
  /* identical to box height, or 157% */
  // color: rgba(0, 0, 0, 0.3);
}
.btn-login {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  // height: 56px;
  @include scaleheight(56);
  left: 0px;
  top: 0px;
  background: #009ddd;
  border-radius: 40px;
  @media screen and (min-width: 992px) {
    border-radius: 4px;
  }
}
.btn-2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  /* width: 375px; */
  // height: 56px;
  @include scaleheight(56);
  left: 0px;
  top: 0px;
  background: linear-gradient(180deg, #0077b5 0%, #0e6795 100%);
  border-radius: 4px;
}
.btn-3 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  /* width: 375px; */
  // height: 56px;
  @include scaleheight(56);
  left: 0px;
  top: 0px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid rgba(28, 52, 84, 0.26);
}
.separator {
  display: flex;
  align-items: center;
}
.separator span {
  padding: 0 1rem; /* creates the space */
}

.separator .line {
  flex: 1;
  border: 0.75px solid rgba(28, 52, 84, 0.26);
  background-color: rgba(28, 52, 84, 0.26);
}

.signin-card {
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 20px 60px rgba(2, 131, 233, 0.1);
  border-radius: 15px;
  border: 0;
  // max-width: 98%;
  // @media screen and (min-width: 992px) {
  //   @include scalewidth(515);
  // }
  .card-body {
    padding: 4rem 3rem;
    @media screen and (min-width: 992px) {
      padding: 4rem 4rem;
    }
    @media screen and (min-width: 1200px) {
      padding: 4rem 4.5rem;
    }
    @media screen and (min-width: 1366px) {
      padding: 4rem 6rem;
    }
  }
}

.error-card-position-fields {
  position: absolute;
  padding: 0;
  right: 0;
  top: 0;
  z-index: 5;
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
