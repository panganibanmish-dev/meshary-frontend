<template>
  <footer
    class="pt-5 pb-5 text-center text-white"
    style="background-color: #0283e9"
  >
    <ToastCard :toastMessage="toastMessage" />
    <div class="container-fluid">
      <section class="pt-3 mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <h1 class="subscribe-label">
              {{ $t('footer.subscribe_our_newsletters') }}
            </h1>
            <p class="label-texxt-1 mb-0 mb-md-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
              fames enim, sed magna facilisi purus commodo ut. Viverra dis
              auctor sit tristique metus nulla sed.
            </p>
            <br /><br />
            <form
              action="https://gmail.us13.list-manage.com/subscribe/post?u=e50907363f8137ec679b4bf3f&amp;id=c1922cf5a2"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <div class="row">
                  <div class="col-sm-12">
                    <div
                      class="input-group-text input-field-email w-100 px-2 mb-2"
                      :class="
                        $t('translation') === 'arabic' ? 'flex-row-reverse' : ''
                      "
                    >
                      <img
                        class="ml-1 ml-lg-4 mr-1 mr-lg-2"
                        src="~assets/images/email_icon.svg"
                      />
                      <input
                        type="email"
                        v-model="email.value"
                        name="EMAIL"
                        class="
                          form-control
                          shadow-none
                          bg-transparent
                          border-0
                          required
                          email
                        "
                        :placeholder="$t('footer.enter_your_email')"
                        id="mce-EMAIL"
                        :style="
                          $t('translation') === 'arabic'
                            ? 'text-align: right'
                            : ''
                        "
                      />
                      <!-- <button type="button" class="btn btn-primary button-submit" @click="submitEmail">
                          Submit
                        </button> -->
                      <input
                        type="submit"
                        value="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        class="btn btn-primary button-submit d-flex"
                        @click="submitEmail"
                      />
                    </div>
                  </div>
                </div>
                <div id="mce-responses" class="clear foot">
                  <div
                    class="response"
                    id="mce-error-response"
                    style="display: none"
                  ></div>
                  <div
                    class="response"
                    id="mce-success-response"
                    style="display: none"
                  ></div>
                </div>
                <div
                  style="position: absolute; left: -5000px"
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_e50907363f8137ec679b4bf3f_c1922cf5a2"
                    tabindex="-1"
                    value=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>

    <div class="container-fluid footer-border-top">
      <section class="mt-4">
        <div
          class="row d-flex justify-content-center pt-5"
          :class="$t('translation') === 'arabic' ? 'flex-row-reverse' : ''"
        >
          <div class="col-12 col-xl-2 order-12 order-md-1">
            <h6
              class="py-3 px-0 px-md-3 text-white font-weight-bold"
              :class="
                $t('translation') === 'arabic' ? 'text-right' : 'text-left'
              "
            >
              <div class="row">
                <div class="col-12 col-md-6 col-lg-12 order-12 order-md-1">
                  <a href="#!" class="text-white">
                    <img
                      src="~assets/images/logo_white.svg"
                      class="footer-logo img-fluid"
                    />
                  </a>
                  <br class="d-none d-md-block" /><br />
                  <p
                    class="label-text-2 mb-0 mb-md-5"
                    :class="
                      $t('translation') === 'arabic'
                        ? 'text-right'
                        : 'text-left'
                    "
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Metus fames enim, sed magna facilisi purus commodo ut.
                    Viverra dis auctor sit tristique metus nulla sed.
                  </p>
                </div>
                <div class="col-12 order-1 order-md-12 mb-4 mb-md-0">
                  <a href="https://www.linkedin.com/" target="_blank">
                    <img
                      src="~assets/images/linkedin.svg"
                      class="footer-socials img-fluid"
                  /></a>
                  <a href="https://www.facebook.com/" target="_blank">
                    <img
                      src="~assets/images/facebook.svg"
                      class="footer-socials img-fluid"
                  /></a>
                  <a href="https://twitter.com/rounupco?s=11" target="_blank">
                    <img
                      src="~assets/images/twitter.svg"
                      class="footer-socials img-fluid"
                  /></a>
                </div>
              </div>
            </h6>
          </div>
          <div class="col-6 col-md-4 col-xl-2">
            <h6
              class="label-font font-weight-bold"
              :class="
                $t('translation') === 'arabic' ? 'text-right' : 'text-left'
              "
            >
              <p class="font-weight-medium">{{ $t('footer.learn_more') }}</p>
              <NuxtLink :to="localePath('/seller')" class="label-font">{{
                $t('footer.for_sellers')
              }}</NuxtLink
              ><br />
              <NuxtLink :to="localePath('/j-buyer')" class="label-font">{{
                $t('footer.for_buyers')
              }}</NuxtLink
              ><br />
              <NuxtLink :to="localePath('/advisor')" class="label-font">{{
                $t('footer.for_advisors')
              }}</NuxtLink
              ><br />
              <NuxtLink class="label-font" :to="localePath('/j-premium')">{{
                $t('footer.premium')
              }}</NuxtLink
              ><br />
            </h6>
          </div>
          <div class="col-6 col-md-4 col-xl-2">
            <h6
              class="label-font font-weight-bold"
              :class="
                $t('translation') === 'arabic' ? 'text-right' : 'text-left'
              "
            >
              <p class="font-weight-medium">{{ $t('footer.company') }}</p>
              <a href="#" class="label-font">Privacy</a><br />
              <!-- <a href="#" class="label-font">Terms</a><br /> -->
              <NuxtLink class="label-font" :to="localePath('/terms')"
                >Terms</NuxtLink
              ><br />
              <a href="#" class="label-font">Help Desk</a><br />
              <a href="#" class="label-font">FAQ</a><br />
            </h6>
          </div>
          <div class="col-12 col-md-4 col-xl-2 mt-3 mt-md-0">
            <div class="w-50 w-md-100">
              <h6
                class="label-font"
                :class="
                  $t('translation') === 'arabic' ? 'text-right' : 'text-left'
                "
              >
                <p class="font-weight-medium">{{ $t('footer.contact_us') }}</p>
                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                <p>support@rounup.com</p>
              </h6>
            </div>
          </div>
        </div>
      </section>
      <div
        class="text-center label-text-2 mt-5"
        style="background-color: #0283e9"
      >
        © 2022, All Rights Reserved
      </div>
    </div>
    <!-- Begin Mailchimp Signup Form -->
    <script
      type="text/javascript"
      src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
    ></script>
    <script type="text/javascript">
      ;(function ($) {
        window.fnames = new Array()
        window.ftypes = new Array()
        fnames[0] = 'EMAIL'
        ftypes[0] = 'email'
        fnames[1] = 'FNAME'
        ftypes[1] = 'text'
        fnames[2] = 'LNAME'
        ftypes[2] = 'text'
        fnames[3] = 'ADDRESS'
        ftypes[3] = 'address'
        fnames[4] = 'PHONE'
        ftypes[4] = 'phone'
        fnames[5] = 'BIRTHDAY'
        ftypes[5] = 'birthday'
      })(jQuery)
      var $mcj = jQuery.noConflict(true)
    </script>
    <!--End mc_embed_signup-->
  </footer>
</template>

<script>
import ToastCard from './ToastCard.vue'
export default {
  name: 'FooterPage',
  components: {
    ToastCard,
  },
  data() {
    return {
      email: {
        value: '',
        error: false,
      },
      toastMessage: '',
    }
  },
  methods: {
    validateEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.email.value)
    },
    submitEmail() {
      if (this.validateEmail()) {
        const form = document.getElementById('mc-embedded-subscribe-form')
        form.addEventListener(
          'submit',
          function (event) {
            event.preventDefault()
          },
          true
        )
        this.toastMessage = 'Email Subscribed!'
        this.$bvToast.show('custom-toast')
        this.email.value = null
      } else {
        this.toastMessage = 'Email Validation Error'
        this.$bvToast.show('custom-toast')
      }
    },
  },
}
</script>
<style lang="scss">
@import '../assets/css/vars.scss';
.subscribe-label {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: 750;
  @include scalefont(24);
  @include scalelineheight(29);
}
.label-texxt-1 {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  @include scalefont(14);
  @include scalelineheight(24);
  text-align: center;
  color: #ffffff;
}
.label-text-2 {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  @include scalefont(14);
  @include scalelineheight(24);
  color: #ffffff;
  text-align: left;
}
.label-font {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 300;
  @include scalefont(14);
  @include scalelineheight(23);
  color: #f0fbff;
}
.button-submit {
  @include scalefont(14);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 38px;
  position: static;
  width: 70px;
  height: 25px;
  left: 414px;
  top: 0px;
  background: #4475f2;
  border-color: #4475f2;
  border-radius: 30px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;

  @media screen and (min-width: 992px) {
    @include scalewidth(136);
    @include scaleheight(48);
  }
}
.input-field-email {
  width: 751px;
  height: 37px;
  left: 345px;
  top: 171px;
  background: #f0f1f2;
  border-radius: 40px;
  img {
    @include scaleheight(20);
    @include scalewidth(20);
  }
  input {
    font-weight: 400;
    font-size: 10px;
    @media screen and (min-width: 992px) {
      @include scalefont(16);
    }
  }

  @media screen and (min-width: 992px) {
    @include scaleheight(64);
  }
}

.footer-logo {
  @include scalewidth(144);
}

.footer-socials {
  height: 34.31px;
  width: 34.31px;
  margin-right: 0.3rem;
  @media screen and (min-width: 768px) {
    @include scaleheight(48);
    @include scalewidth(48);
  }
}

.footer-border-top {
  border-top: 1px solid #dfdfe0;
}
</style>