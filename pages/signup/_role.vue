<template>
  <b-container>
    <div class="row justify-content-sm-center h-150">
      <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
        <div class="text-center my-5"><br /></div>
        <div class="signup-card card border-0">
          <div class="card-body">
            <div class="text-center">
              <h5 class="label-h5">{{ $t('signup.create_an_account') }}</h5>
              <p class="p1">Sign up now to get started with an account</p>
            </div>
            <!-- <div v-if="$auth.loggedIn">{{ $auth.user.email }}</div> -->
            <form class="needs-validation" novalidate="" autocomplete="off">
              <div class="mb-3">
                <div class="position-relative mb-2 w-100">
                  <label class="text-1 mb-2 text-muted" for="email"
                    >Email Address</label
                  >
                  <ErrorCard
                    v-if="msg.email && showErrors"
                    class="error-card-position-fields-su d-block mt-n3"
                    :errors="msg.email"
                    :variant="'alert'"
                  />
                  <ErrorCard
                    v-if="formErrors.email && showErrors"
                    class="error-card-position-fields-su d-block mt-n3"
                    :errors="formErrors.email[0]"
                    :variant="'alert'"
                  />
                </div>
                <input
                  id="email"
                  ref="email"
                  v-model="user.email"
                  type="email"
                  class="form-control login-pass-input input-box"
                  :class="
                    msg.email && showErrors
                      ? 'border-danger'
                      : done.email
                      ? 'field-done'
                      : ''
                  "
                  name="email"
                  placeholder="user@gmail.com"
                  value=""
                  required
                  autofocus
                  @keyup="checkFields"
                />
              </div>

              <div class="mb-3">
                <div class="position-relative mb-2 w-100">
                  <label class="text-1 text-muted" for="password"
                    >Password</label
                  >
                  <ErrorCard
                    v-if="msg.password && showErrors"
                    class="error-card-position-fields-su d-block mt-n3"
                    :errors="msg.password"
                    :variant="'alert'"
                  />
                  <ErrorCard
                    v-if="formErrors.password && showErrors"
                    class="error-card-position-fields-su d-block mt-n3"
                    :errors="formErrors.password[0]"
                    :variant="'alert'"
                  />
                </div>
                <div class="login-signup-password-input-icons">
                  <input
                    id="signup_password"
                    v-model="user.password"
                    name="signup_password"
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control login-pass-input mb-4 input-box"
                    :class="
                      (msg.password || msg.password_confirmation) && showErrors
                        ? 'border-danger'
                        : done.password
                        ? 'field-done'
                        : ''
                    "
                    placeholder="Password"
                    required
                    @keyup="checkFields"
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

                <!-- <input id="password" v-model="user.password" type="password" class="form-control" name="password" required /> -->
              </div>
              <div class="mb-3">
                <div class="position-relative mb-2 w-100">
                  <label class="text-1 text-muted" for="confirmpassword"
                    >Confirm Password</label
                  >

                  <ErrorCard
                    v-if="msg.password_confirmation && showErrors"
                    class="error-card-position-fields-su d-block mt-n3"
                    :errors="msg.password_confirmation"
                    :variant="'alert'"
                  />
                  <ErrorCard
                    v-if="formErrors.password_confirmation && showErrors"
                    class="error-card-position-fields-su d-block mt-n3"
                    :errors="formErrors.password_confirmation[0]"
                    :variant="'alert'"
                  />
                </div>
                <div class="login-signup-password-input-icons">
                  <input
                    id="signup_passwordConfirm"
                    v-model="user.password_confirmation"
                    name="signup_passwordConfirm"
                    :type="showCorfirmPassword ? 'text' : 'password'"
                    v-bind="confirmPasswordValue"
                    class="form-control login-pass-input mb-4 input-box"
                    :class="
                      msg.password_confirmation && showErrors
                        ? 'border-danger'
                        : done.password_confirmation
                        ? 'field-done'
                        : ''
                    "
                    placeholder="Confirm Password"
                    required
                    @keyup="checkFields"
                  />

                  <a
                    v-if="showCorfirmPassword == false"
                    role="button"
                    class="btn input-icons-password-right"
                    @click="showCorfirmPassword = true"
                  >
                    <img src="~assets/images/eye-slash.svg" class="img-fluid" />
                  </a>
                  <a
                    v-if="showCorfirmPassword == true"
                    role="button"
                    class="btn input-icons-password-right"
                    @click="showCorfirmPassword = false"
                  >
                    <img src="~assets/images/eye.svg" class="img-fluid" />
                  </a>
                </div>
                <!-- <input id="confirmpassword" v-model="user.password_confirmation" type="password" class="form-control" name="confirmpassword" required /> -->
              </div>
              <br />
              <div class="mb-2 w-100 text-center">
                <a
                  type="button"
                  class="btn btn-primary btn-signup text-center fs-16"
                  @click="registerUser"
                  >Sign Up</a
                ><br />
                <!-- <button type="button" class="btn btn-primary btn-signup text-center fs-16" @click="registerUser()">Sign Up</button><br /> -->
                <div class="separator">
                  <div class="line"></div>
                  <span class="font-signip-or fs-16">OR</span>
                  <div class="line"></div>
                </div>
                <br />
                <!-- <label class="font-1 text-center"> Or</label><br /> -->
                <!-- <a class="btn btn-3" href="#"><img src="~assets/images/Google__G__Logo 1.svg" class="img-fluid mr-3"/> Sign up with Google</a><br /> -->
                <a
                  class="btn btn-primary btn-2"
                  href="#"
                  @click="linkedinAuth()"
                  ><img
                    src="~assets/images/logo_linkedin.svg"
                    class="img-fluid mr-3"
                  />
                  {{ $t('signup.sign_up_w_linked_in') }}</a
                >
              </div>
            </form>
          </div>
          <div class="card-body p-3 font-text text-center">
            <p class="card-text fs-16">
              Already have an account?
              <NuxtLink :to="localePath('/signin')">Sign In</NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
// import ErrorCardSet from '../../components/ErrorCardSet.vue'
import ErrorCard from '../../components/ErrorCard.vue'
export default {
  name: 'SignupPage',
  components: {
    // ErrorCardSet,
    ErrorCard,
  },
  layout: 'default-layout',
  // middleware: 'guest',

  asyncData({ params }) {
    const role = params.role
    return { role }
  },
  data() {
    return {
      valid: false,
      user: {
        email: '',
        password: '',
        password_confirmation: '',
      },
      showPassword: false,
      signupPasswordValue: null,
      showCorfirmPassword: false,
      confirmPasswordValue: null,
      msg: {
        email: '',
        password: '',
        password_confirmation: '',
      },
      done: {
        email: null,
        password: null,
        password_confirmation: null,
      },
      showErrors: false,
      formErrors: [],
    }
  },

  methods: {
    linkedinAuth() {
      this.$auth.loginWith('linkedin')
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    registerUser() {
      localStorage.removeItem('selectedRole')
      this.formErrors = []
      this.checkFields()
      // eslint-disable-next-line no-console
      console.log(this.formErrors)
      this.showErrors = true
      // eslint-disable-next-line no-console
      console.log(this.msg.email)
      // eslint-disable-next-line no-console
      console.log(this.formErrors.email)
      if (
        !this.msg.email &&
        !this.msg.password &&
        !this.msg.password_confirmation
      ) {
        this.$axios
          .post('/api/register', {
            role: this.role,
            ...this.user,
          })
          .then((response) => {
            this.$store.commit(
              'role/setRole',
              this.capitalizeFirstLetter(response.data.data.user.active_role)
            )
            localStorage.setItem(
              'selectedRole',
              this.capitalizeFirstLetter(response.data.data.user.active_role)
            )
            this.$auth
              .loginWith('local', { data: this.user })
              .catch((error) => {
                this.showErrors = true
                // eslint-disable-next-line no-console
                console.log(error)
              })
          })
          .catch(({ response }) => {
            const errors = response.data
            this.formErrors = errors.errors
            // eslint-disable-next-line no-console
            console.log(errors)
          })
      }
    },
    validateEmail() {
      /* eslint-disable no-useless-escape */
      if (this.user.email) {
        const re =
          // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (re.test(this.user.email)) {
          // this.msg.email = null
          this.done.email = true
        } else {
          // this.msg.email = 'Please enter a valid email address.'
          this.done.email = false
        }
      } else {
        // this.msg.email = 'Email field is required.'
        this.done.email = false
      }
    },
    validatePasswords() {
      if (this.user.password) {
        this.msg.password = ''
        this.done.password = true
        // this.showErrors = false
      } else {
        // this.msg.password = 'Password field is required.'
        this.done.password = false
        // this.showErrors = true
      }
      if (
        this.user.password_confirmation &&
        this.user.password_confirmation !== ''
      ) {
        if (this.user.password !== this.user.password_confirmation) {
          // this.msg.password_confirmation =
          //   'Password and confirm password fields do not match.'
          this.done.password_confirmation = false
          // this.showErrors = true
        } else {
          // this.msg.password_confirmation = ''
          this.done.password_confirmation = true
          // this.showErrors = false
        }
      } else {
        // this.msg.password_confirmation = 'Confirm Password field is required.'
        this.done.password_confirmation = false
        // this.showErrors = true
      }
    },
    checkFields() {
      this.showErrors = false
      this.validateEmail()
      this.validatePasswords()
    },
  },
}
</script>
<style lang="scss">
@import '../../assets/css/vars.scss';

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
  line-height: 134%;
  align-items: center;
  text-align: center;
  color: rgba(26, 41, 61, 0.83);
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 134%;
  }
}
.text-1 {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14.4px;
  align-items: center;
  color: rgba(27, 43, 65, 0.72);
  @media screen and (min-width: 992px) {
    @include scalefont(14);
    @include scalelineheight(17);
  }
}
.font-signip-or {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  color: rgba(28, 52, 84, 0.26);
  padding: 8px 14px;
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
.btn-signup {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // padding: 8px 250px;
  font-size: 14px;
  padding: 8px 14px;
  @include scaleheight(56);
  left: 0px;
  top: 0px;
  background: #009ddd;
  border-radius: 40px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    border-radius: 4px;
    @include scaleheight(56);
  }
}
.btn-2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
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
  @include scaleheight(56);
  left: 0px;
  top: 0px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid rgba(28, 52, 84, 0.26);
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
  line-height: 22px;
  border: 1px solid rgba(28, 55, 90, 0.16);
  /* identical to box height, or 157% */
  // color: rgba(0, 0, 0, 0.3);
}
.login-signup-password-input-icons {
  position: relative;
}

.signup-card {
  background: #ffffff;
  box-shadow: 0px 20px 60px rgba(2, 131, 233, 0.03);
  border-radius: 5px;
  padding: 1.5rem 1rem;
  @media screen and (min-width: 992px) {
    padding: 2rem 2rem;
  }
  @media screen and (min-width: 1440px) {
    padding: 3rem 6rem;
  }
}

.error-card-position-fields-su {
  padding: 0;
  position: absolute;
  right: 0;
  top: 0.5rem;
  z-index: 5;
}
.form-control.field-done {
  color: #000000;
  border: solid 1.5px #009ddd;
  background: url(~assets/images/list-check.svg) no-repeat;
  background-position: 90% center;
  background-size: 6%;
}
</style>
