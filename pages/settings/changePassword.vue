<template>
  <div class="container pt-5">
    <ToastCard :toastMessage="toastMessage" />
    <br /><br />
    <div class="row">
      <div class="col-lg-8 col-md-12 mt-4 mb-4">
        <NuxtLink
          :to="localePath(`/settings`)"
          class="btn back-btn d-flex align-items-center place-content-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#009DDD"
            class="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </NuxtLink>
      </div>
      <div class="col-lg-8 col-md-12 mx-auto mb-5">
        <div class="settings-changePass-dashboard-block m-auto">
          <div class="dashboard-header mb-5">
            <div class="dashboard-header-text">Change Password</div>
            <div class="dashboard-header-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div><br><br><br>
          <form class="form-group">
            <div class="position-relative">
              <label
                for="settings_passwordOld"
                class="mb-1 settings-changePass-input-label"
                >Old Password</label
              >
              <ErrorCard
                v-if="msg.old_password"
                class="error-card-position-fields d-block"
                :errors="msg.old_password"
                :variant="'alert'"
              />
            </div>
            <div class="password-input-icons">
              <input
                id="settings_passwordOld"
                v-model="input.old_password"
                name="settings_passwordOld"
                :type="showOldPassword ? 'text' : 'password'"
                class="form-control change-pass-input mb-4"
                :class="msg.old_password ? 'border-danger' : ''"
                required
              />
              <a
                v-if="showOldPassword == false"
                role="button"
                class="btn input-icons-right"
                @click="showOldPassword = true"
              >
                <img src="~assets/images/eye-slash.svg" class="img-fluid" />
              </a>
              <a
                v-if="showOldPassword == true"
                role="button"
                class="btn input-icons-right"
                @click="showOldPassword = false"
              >
                <img src="~assets/images/eye.svg" class="img-fluid" />
              </a>
            </div>
            <div class="position-relative">
              <label
                for="settings_passwordNew"
                class="mb-1 settings-changePass-input-label"
                >New Password</label
              >
              <ErrorCard
                v-if="msg.password"
                class="error-card-position-fields d-block"
                :errors="msg.password"
                :variant="'alert'"
              />
            </div>
            <div class="password-input-icons">
              <input
                id="settings_passwordNew"
                v-model="input.password"
                name="settings_passwordNew"
                :type="showNewPassword ? 'text' : 'password'"
                class="form-control change-pass-input mb-4"
                :class="msg.password ? 'border-danger' : ''"
                required
              />
              <a
                v-if="showNewPassword == false"
                role="button"
                class="btn input-icons-right"
                @click="showNewPassword = true"
              >
                <img src="~assets/images/eye-slash.svg" class="img-fluid" />
              </a>
              <a
                v-if="showNewPassword == true"
                role="button"
                class="btn input-icons-right"
                @click="showNewPassword = false"
              >
                <img src="~assets/images/eye.svg" class="img-fluid" />
              </a>
            </div>
            <div class="position-relative">
              <label
                for="settings_passwordConfirm"
                class="mb-1 settings-changePass-input-label"
                >Confirm New Password</label
              >
              <ErrorCard
                v-if="msg.password_confirmation"
                class="error-card-position-fields d-block"
                :errors="msg.password_confirmation"
                :variant="'alert'"
              />
            </div>
            <div class="password-input-icons">
              <input
                id="settings_passwordConfirm"
                v-model="input.password_confirmation"
                name="settings_passwordConfirm"
                :type="showCorfirmPassword ? 'text' : 'password'"
                class="form-control change-pass-input mb-4"
                :class="msg.password_confirmation ? 'border-danger' : ''"
                required
              />
              <a
                v-if="showCorfirmPassword == false"
                role="button"
                class="btn input-icons-right"
                @click="showCorfirmPassword = true"
              >
                <img src="~assets/images/eye-slash.svg" class="img-fluid" />
              </a>
              <a
                v-if="showCorfirmPassword == true"
                role="button"
                class="btn input-icons-right"
                @click="showCorfirmPassword = false"
              >
                <img src="~assets/images/eye.svg" class="img-fluid" />
              </a>
            </div>
          </form>
          <div class="d-flex justify-content-end pt-4">
            <button
              class="btn btn-primary dashboard-btn change-pass-save-btn px-4"
              @click="postPassword"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ErrorCardSet from '../../components/ErrorCardSet.vue'
import ErrorCard from '../../components/ErrorCard.vue'
import ToastCard from '../../components/ToastCard.vue'
export default {
  name: 'ChangePasswordPage',
  components: {
    ErrorCard,
    ToastCard,
  },
  layout: 'auth-layout',
  middleware: 'auth',
  data() {
    return {
      showOldPassword: false,
      oldPassword: null,
      showNewPassword: false,
      newPasswordValue: null,
      showCorfirmPassword: false,
      confirmPasswordValue: null,
      input: {
        old_password: '',
        password: '',
        password_confirmation: '',
      },
      formErrors: [],
      msg: {
        old_password: '',
        password: '',
        password_confirmation: '',
      },
      toastMessage: '',
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
    postPassword() {
      this.$axios
        .put(`/api/password/change`, this.input)
        .then((response) => {
          // this.$toast.success(response.data.message)
          this.toastMessage = response.data.message
          this.$bvToast.show('custom-toast')
          this.$router.push(this.localePath('/settings'))
        })
        .catch(({ response }) => {
          // this.$toast.error(response.data.message)
          const errors = response.data.errors
          this.checkFields()
          if (errors) {
            // Object.keys(errors).forEach((key) => {
            //   this.$toast.error(errors[key][0])
            // })
            this.formErrors = errors
            console.log(this.formErrors)
          } else {
            // this.$toast.error(response.data.message)
            this.formErrors = response.data
            console.log(this.formErrors)
          }
        })
    },
    // validateEmail() {
    //   /* eslint-disable no-useless-escape */
    //   this.formErrors = []
    //   const emailRegex =
    //     /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
    //   if (emailRegex.test(this.input.email)) {
    //     this.msg.email = 'Please enter a valid email address.'
    //   } else {
    //     this.msg.email = ''
    //   }
    // },
    validatePasswords() {
      if (this.input.old_password) {
        this.msg.old_password = ''
      } else {
        this.msg.old_password = 'Please enter your old password.'
      }
      if (this.input.password) {
        this.msg.password = ''
      } else {
        this.msg.password = 'Password field is required.'
      }
      if (this.input.password_confirmation) {
        this.msg.password_confirmation = ''
      } else {
        this.msg.password_confirmation = 'Confirm Password field is required.'
      }
      if (this.input.password !== this.input.password_confirmation) {
        this.msg.password_confirmation =
          'New password and confirmation password does not match.'
      } else {
        this.msg.password_confirmation = ''
      }
    },
    checkFields() {
      // this.validateEmail()
      this.validatePasswords()
    },
  },
}
</script>

<style lang="scss">
@import '../../assets/css/vars.scss';
.settings-changePass-dashboard-block {
  position: relative;
  background: #ffffff;
  box-shadow: -2px 4px 45px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 60px 136px;
  @include scalewidth(671);
  
}
.settings-changePass-input-label {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  @include scalefont(14);
  @include scalelineheight(17);
  color: rgba(27, 43, 65, 0.72);
}

.change-pass-input {
  border: 1px solid rgba(28, 55, 90, 0.16);
  box-sizing: border-box;
  border-radius: 3px;
  height: 57px;
}

.change-pass-save-btn {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  @include scalefont(14);
  @include scalelineheight(17);
  color: #ffffff;
  @include scalewidth(167);
}

.input-icons-left {
  position: absolute;
  margin-top: 5px;
}

.input-icons-right {
  position: absolute;
  right: 15px;
  top: 7.5px;
}

.password-input-icons {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.icon {
  padding: 10px;
  color: #0570de;
  min-width: 50px;
  text-align: center;
}

.back-btn {
  height: 50px;
  width: 50px;
}
// @media screen and (max-width: 767px) {
//   .form-group {
//     padding: 2rem 4rem;
//   }
//   .settings-changePass-dashboard-block {
//     padding: 2rem 4rem;
//   }
//   .change-pass-input{
//     padding: 2rem 4rem;
//   }
//   .dashboard-header {
//     padding: 2rem 4rem;
//   }
//   .change-pass-save-btn {
//     align-content: center;
//   }
// }
.settings-changePass-dashboard-block {
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 20px 60px rgba(2, 131, 233, 0.1);
  border-radius: 15px;
  border: 0;
  max-width: 100%;
  @media screen and (max-width: 1366px) {
    @include scalewidth(1500);
  }
  // padding: 2rem 2rem;
  // @media screen and (min-width: 1440px) {
  //   padding: 3rem 6rem;
  // }
  // .form-group {
  //   padding: 4rem 3rem;
  //   @media screen and (max-width: 768px) {
  //     padding: 4rem 4rem;
  //   }
  //   @media screen and (max-width: 1200px) {
  //     padding: 4rem 4.5rem;
  //   }
  //   @media screen and (max-width: 1366px) {
  //     padding: 4rem 6rem;
  //   }
  // }
  // .dashboard-header {
  //   padding: 4rem 2rem;
  //   @media screen and (max-width: 768px) {
  //     padding: 4rem 4rem;
  //   }
  //   @media screen and (max-width: 1200px) {
  //     padding: 4rem 4.5rem;
  //   }
  //   @media screen and (max-width: 1366px) {
  //     padding: 4rem 6rem;
  //   }
  // }
}
</style>