<template>
  <div id="activation-form" class="container-fluid">
    <div class="row justify-content-sm-center h-150">
      <div class="text-center my-5">
        <div class="activation-form-card card mt-5 px-3 px-lg-5 py-3 py-lg-4">
          <div class="card-body p-5">
            <div class="text-center">
              <ErrorCard
                v-if="!termsAccepted && showErrors"
                class="error-card-position-fields center mt-n4"
                :errors="'Please Accept the Terms and Conditions'"
                :variant="'alert'"
              />
              <h5 class="label-h5-text">Welcome to Rounup</h5>
              <div class="text-center">
                <p class="p1-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <br />
              <label
                for="file-input"
                class="
                  activation-upload-btn
                  d-flex
                  p1-small
                  justify-content-start
                  align-items-center
                "
              >
                <img
                  v-if="user.photos"
                  class="upload-avatar mr-3"
                  :src="user.photos.medium"
                />
                <img
                  v-else
                  class="upload-avatar mr-3"
                  src="~assets/images/upload-avatar.svg"
                /> Upload Profile Photo
              </label>
              <input
                id="file-input"
                type="file"
                class="form-control-file"
                accept="image/*"
                hidden
                @change="uploadImage($event)"
              /><br />
              <div class="mb-4 position-relative">
                <label class="font-label">First Name</label>
                <input
                  v-model="user.profile.first_name"
                  type="text"
                  :class="
                    errors.first_name
                      ? 'form-control is-invalid' : 'form-control'"
                  required
                  @keypress="isLetter($event)"
                />
                <ErrorCard
                  v-if="errors.first_name && showErrors"
                  class="error-card-position-fields mt-n3"
                  :errors="errors.first_name"
                  :variant="'alert'"
                />
              </div>
              <div class="mb-4 position-relative">
                <label class="font-label">Last Name</label>
                <input
                  v-model="user.profile.last_name"
                  type="text"
                  :class="
                    errors.last_name
                      ? 'form-control is-invalid' : 'form-control'"
                  required
                  @keypress="isLetter($event)"
                />
                <ErrorCard
                  v-if="errors.last_name && showErrors"
                  class="error-card-position-fields mt-n3"
                  :errors="errors.last_name"
                  :variant="'alert'"
                />
              </div>
              <div class="mb-4 position-relative">
                <label class="font-label">Username</label>
                <input
                  v-model="user.username"
                  type="text"
                  :class="
                    errors.username ? 'form-control is-invalid' : 'form-control'
                  "
                  required
                  @keyup="inputChecker('username')"
                />
                <ErrorCard
                  v-if="errors.username && showErrors"
                  class="error-card-position-fields mt-n3"
                  :errors="errors.username"
                  :variant="'alert'"
                />
              </div>
              <div
                v-show="$auth.user.roles.length && $auth.user.roles[0].id === 2"
                class="mb-4 position-relative"
              >
                <label class="font-label">Company</label>
                <input
                  v-model="user.profile.company"
                  type="text"
                  :class="
                    errors.company ? 'form-control is-invalid' : 'form-control'
                  "
                  required
                  @keyup="showErrors = false"
                />
              </div>
              <div class="mb-4">
                <label class="font-label">Country Code</label>
                <ul class="nav navbar-nav">
                  <li class="nav-item avatar dropdown m-0">
                    <div class="menu-item">
                      
                      <button
                        class="form-control font-label w-100"
                        required
                        @click="toggleCountryCode = true"
                      >
                       <img src="~assets/images/search-normal.svg" class="img-fluid mr-1" /> {{
                          user.profile.address_code
                            ? user.profile.address_code
                            : 'Search country'
                        }}
                         <img src="~assets/images/arrow-gray.png" class="img-fluid input-arrow-right "/>
                      </button>
                      <transition name="fade" appear>
                        <div v-show="toggleCountryCode" class="sub-menu">
                          <a
                            class="font-label btn-address"
                            role="button"
                            @click="setCountryCode('+966')"
                            >Saudi Arabia +966</a
                          >
                        </div>
                      </transition>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mb-4 position-relative">
                <label class="font-label">Phone Number</label>
                <input
                  id="phone_number"
                  v-model="user.profile.contact_phone"
                  type="text"
                  :class="
                    errors.contact_phone
                      ? 'form-control is-invalid'
                      : 'form-control'
                  "
                  required
                  @input="limitNumber($event)"
                />
              </div>
              <div class="mb-4 position-relative">
                <label class="font-label">Website Link</label>
                <input
                  v-model="user.profile.website"
                  type="text"
                  placeholder="https://yourstartupname.com"
                  :class="
                    errors.website ? 'form-control is-invalid' : 'form-control'
                  "
                  required
                  @keyup="showErrors = false"
                />
              </div>
              <div class="mb-4 position-relative">
                <label class="font-label"
                  >LinkedIn profile link
                  </label>
                <input
                  v-model="user.profile.linkedin_url"
                  type="text"
                  placeholder="www.linkedin.com/in/myprofile"
                  :class="
                    errors.linkedin_url
                      ? 'form-control is-invalid'
                      : 'form-control'
                  "
                >
                  <img
                    v-if="user.photos"
                    class="upload-avatar mr-3"
                    :src="user.photos.medium"
                  />
                  <img
                    v-else
                    class="upload-avatar mt-0 mt-lg-3 mr-0 mr-lg-3 mb-2 mb-md-0"
                    src="~assets/images/upload-avatar.svg"
                  />
                  Upload Profile Photo
                <input
                  id="file-input"
                  type="file"
                  class="form-control-file"
                  accept="image/*"
                  hidden
                  @change="uploadImage($event)"
                /><br />
                <div class="mb-4 position-relative">
                  <label class="font-label">First Name</label>
                  <input
                    v-model="user.profile.first_name"
                    type="text"
                    :class="
                      errors.first_name
                        ? 'form-control is-invalid'
                        : 'form-control'
                    "
                    required
                    @keypress="isLetter($event)"
                  />
                  <ErrorCard
                    v-if="errors.first_name && showErrors"
                    class="error-card-position-fields mt-n3"
                    :errors="errors.first_name"
                    :variant="'alert'"
                  />
                </div>
                <div class="mb-4 position-relative">
                  <label class="font-label">Last Name</label>
                  <input
                    v-model="user.profile.last_name"
                    type="text"
                    :class="
                      errors.last_name
                        ? 'form-control is-invalid'
                        : 'form-control'
                    "
                    required
                    @keypress="isLetter($event)"
                  />
                  <ErrorCard
                    v-if="errors.last_name && showErrors"
                    class="error-card-position-fields mt-n3"
                    :errors="errors.last_name"
                    :variant="'alert'"
                  />
                </div>
                <div class="mb-4 position-relative">
                  <label class="font-label">Username</label>
                  <input
                    v-model="user.username"
                    type="text"
                    :class="
                      errors.username
                        ? 'form-control is-invalid'
                        : 'form-control'
                    "
                    required
                    @keyup="inputChecker('username')"
                  />
                  <ErrorCard
                    v-if="errors.username && showErrors"
                    class="error-card-position-fields mt-n3"
                    :errors="errors.username"
                    :variant="'alert'"
                  />
                </div>
                <div
                  v-show="
                    $auth.user.roles.length && $auth.user.roles[0].id === 2
                  "
                  class="mb-4 position-relative"
                >
                  <label class="font-label">Company</label>
                  <input
                    v-model="user.profile.company"
                    type="text"
                    :class="
                      errors.company
                        ? 'form-control is-invalid'
                        : 'form-control'
                    "
                    required
                    @keyup="showErrors = false"
                  />
                </div>
                <div class="mb-4">
                  <label class="font-label">Country Code</label>
                  <ul class="nav navbar-nav">
                    <li class="nav-item avatar dropdown m-0">
                      <div class="menu-item">
                        <button
                          class="form-control font-label w-100"
                          required
                          @click="toggleCountryCode = true"
                        >
                          <img
                            src="~assets/images/search-normal.svg"
                            class="img-fluid mr-1"
                          />
                          {{
                            user.profile.address_code
                              ? user.profile.address_code
                              : 'Search country'
                          }}
                          <img
                            src="~assets/images/arrow-gray.png"
                            class="img-fluid input-arrow-right"
                          />
                        </button>
                        <transition name="fade" appear>
                          <div v-show="toggleCountryCode" class="sub-menu">
                            <a
                              class="font-label btn-address"
                              role="button"
                              @click="setCountryCode('+966')"
                              >Saudi Arabia +966</a
                            >
                          </div>
                        </transition>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mb-4 position-relative">
                  <label class="font-label">Phone Number</label>
                  <input
                    id="phone_number"
                    v-model="user.profile.contact_phone"
                    type="text"
                    :class="
                      errors.contact_phone
                        ? 'form-control is-invalid'
                        : 'form-control'
                    "
                    required
                    @input="limitNumber($event)"
                  />
                </div>
                <div class="mb-4 position-relative">
                  <label class="font-label">Website Link</label>
                  <input
                    v-model="user.profile.website"
                    type="text"
                    placeholder="https://yourstartupname.com"
                    :class="
                      errors.website
                        ? 'form-control is-invalid'
                        : 'form-control'
                    "
                    required
                    @keyup="showErrors = false"
                  />
                </div>
                <div class="mb-4 position-relative">
                  <label class="font-label">LinkedIn profile link </label>
                  <input
                    v-model="user.profile.linkedin_url"
                    type="text"
                    placeholder="www.linkedin.com/in/myprofile"
                    :class="
                      errors.linkedin_url
                        ? 'form-control is-invalid'
                        : 'form-control'
                    "
                    required
                    @keyup="showErrors = false"
                  />
                  <!-- <ErrorCard
                    v-if="errors.linkedin_url && showErrors"
                    class="error-card-position-fields mt-n3"
                    :errors="errors.linkedin_url"
                    :variant="'alert'"
                  /> -->
                </div>
                <div class="mb-5">
                  <label class="font-label">Address</label>
                  <!-- <button
                    id="show-modal"
                    class="form-control btn btn-address text-left mb-4"
                    required
                    @click="addressModal = true"
                  >
                    {{ user.profile.address_street }}
                    {{ user.profile.address_country }}
                  </button> -->
                  <input
                    v-model="user.profile.complete_address"
                    type="text"
                    :class="
                      errors.complete_address
                        ? 'form-control is-invalid'
                        : 'form-control'
                    "
                    required
                    @keyup="showErrors = false"
                  />
                  <ErrorCard
                    v-if="errors.complete_address && showErrors"
                    class="error-card-position-fields mt-n3"
                    :errors="errors.complete_address"
                    :variant="'alert'"
                  />
                </div>
                <div class="d-flex">
                  <img
                    v-if="termsAccepted"
                    src="~assets/images/checkbox-checked.svg"
                    class="btn img-fluid p-2 mr-1"
                    @click="termsAccepted = false"
                  />
                  <img
                    v-else
                    src="~assets/images/checkbox-unchecked.svg"
                    class="btn img-fluid p-2 mr-1"
                    @click="termsAccepted = true"
                  />
                  <div class="terms-label">
                    Accept
                    <a
                      id="show-modal"
                      class="ml-1 terms-label-link cursor-pointer"
                      required
                      @click="showModal = true"
                      >Terms and Conditions</a
                    >
                  </div>
                </div>
                <div class="mt-1 mt-md-3 mb-3">
                  <button
                    type="button"
                    class="
                      activation-submit
                      btn btn-primary
                      text-center
                      w-100
                      fs-16
                    "
                    :class="!termsAccepted ? 'activation-submit-disabled' : ''"
                    @click="save()"
                  >
                    Submit
                  </button>
                </div>
                <div v-if="showModal">
                  <transition name="modal">
                    <div class="modal-mask">
                      <div class="modal-wrapper">
                        <div
                          class="modal-dialog modal-dialog-scrollable modal-lg"
                          tabindex="-1"
                          role="document"
                        >
                          <div class="modal-content">
                            <div class="modal-header">
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                @click="showModal = false"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <h3 class="label-h5-text text-center fs-22">
                                Terms & Conditions
                              </h3>
                              <br /><br /><br />
                              <div class="text-justify">
                                <p class="p2-small">
                                  <strong>1.1</strong> These Terms and
                                  Conditions constitute a legally binding
                                  agreement between you (either personally or on
                                  behalf of an entity you represent) and Nakhla
                                  Information Systems Technology Company
                                  (""Rounup""), hereinafter referred to as
                                  ""We"", with respect to all aspects of the
                                  tamara Payment Services and and/or your use of
                                  the Platform or your access to our website
                                  https://tamara.co, as well as any other media
                                  form, media channel, website or mobile
                                  application related to, or linked to and
                                  through your access to and use of the
                                  Platform. You acknowledge that you have read,
                                  understood and agreed to be bound by these
                                  Terms and Conditions, as amended from time to
                                  time. if you do not agree to these terms and
                                  conditions, you must stop using or accessing
                                  the platform immediately and if you are using
                                  the platform on behalf of a third party
                                  including, without limitation, any business
                                  entity, you warrant that you are authorized
                                  and have the authority to commit the third
                                  party to these Terms and Conditions.
                                </p>
                                <p class="p2-small">
                                  <strong>1.2</strong> The merchant from whom
                                  you purchase goods or services using tamara
                                  Payment Services is not a party to this
                                  Agreement, and any applicable terms between
                                  you and the Merchant are independent of the
                                  terms of this Agreement.
                                </p>
                                <p class="p2-small">
                                  <strong>1.3</strong> We reserve the right, at
                                  our absolute discretion, to make changes or
                                  modifications to these Terms and Conditions at
                                  any time and for any reason.
                                </p>
                                <p class="p2-small">
                                  <strong>1.4</strong> You acknowledge your
                                  responsibility to review these terms and
                                  conditions periodically for the latest
                                  developments, and you waive any right to
                                  receive specific notice of each such change,
                                  and your continued use of the site and the
                                  platform after the date of publication of the
                                  revised terms and conditions constitutes an
                                  acknowledgment from you that you have read and
                                  understood the amendments and accepted the
                                  commitment.
                                </p>
                                <p class="p2-small">
                                  <strong>1.5</strong> This preamble is an
                                  integral part of the Agreement.
                                </p>
                                <br />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ErrorCard from '../../components/ErrorCard.vue'
export default {
  name: 'IndexPage',
  components: {
    ErrorCard,
  },
  layout: 'logo-layout',
  middleware: 'auth',
  data() {
    return {
      user: {
        id: 1,
        email: '',
        photo: null,
        email_verified_at: '',
        username: '',
        profile: {
          id: 1,
          company: '',
          bio: '',
          complete_address: '',
          address_street: '',
          address_city: '',
          address_postalcode: '',
          address_country: '',
          contact_email: '',
          contact_phone: '',
          created_at: '',
          updated_at: '',
          first_name: '',
          last_name: '',
          website: '',
          linkedin_url: '',
          state: '',
        },
      },
      showPassword: false,
      password: null,
      selectedFile: null,
      isOpen: false,
      showModal: false,
      toggleCountryCode: false,
      toggleCountry: false,
      addressModal: false,
      isCountry: false,
      photo: {
        data: {},
        url: null,
      },
      // userInfo: {
      //   first_name: '',
      //   last_name: '',
      //   username: '',
      //   contact_phone: '',
      //   address_street: '',
      //   address_city: '',
      // },
      termsAccepted: false,
      errors: {
        first_name: null,
        last_name: null,
        username: null,
        country_code: null,
        company: null,
        contact_number: null,
        contact_phone: null,
        complete_address: null,
        address_street: null,
        address_city: null,
        address_postalcode: null,
        address_country: null,
        website: null,
        linkedin_url: null,
        state: null,
      },
      showErrors: false,
      stateMessage: {
        error: '',
        success: '',
      },
    }
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? 'Hide' : 'Show'
    },
  },
  async mounted() {
    const response = await this.$axios.get('/api/user')
    this.user = response.data
    console.log(this.user)
    console.log(this.$auth)
  },
  methods: {
    isLetter(e) {
      const char = String.fromCharCode(e.keyCode) // Get the character
      if (/^[A-Za-z-\s']+$/.test(char)) return true
      // Match with regex
      else e.preventDefault() // If not match, don't add to input text
    },
    validateLinkedIn(link) {
      const re =
        /https?:\/\/(www.)?linkedin.com\/(mwlite\/|m\/)?in\/[a-zA-Z0-9_.-]+\/?/
      return re.test(link)
    },
    validateWebsite(link) {
      const re =
        /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-@:%_+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g
      return re.test(link)
    },
    validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    validateNumber(num) {
      const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
      return re.test(num)
    },
    validateName(names) {
      const re = /^[\w'\-,.]*[^_!¡?÷?¿/\\+=@#$%&*(){}|~<>;:[\]]*$/
      return re.test(names)
    },
    // inputChecker(type) {
    //   if (type === 'email') {
    //     if (this.user.profile.contact_email === '') {
    //       this.errors.email = 'Required Input'
    //     } else if (!this.validateEmail(this.user.profile.contact_email)) {
    //       this.errors.email = 'Please provide a valid email'
    //     } else {
    //       this.errors.email = null
    //     }
    //   } else if (type === 'first_name') {
    //     if (this.user.profile.first_name === '') {
    //       this.errors.first_name = 'Required Input'
    //     } else if (!this.validateName(this.user.profile.first_name)) {
    //       this.errors.first_name = 'Please provide a valid first name'
    //     } else {
    //       this.errors.first_name = null
    //     }
    //   } else if (type === 'last_name') {
    //     if (this.user.profile.last_name === '') {
    //       this.errors.last_name = 'Required Input'
    //     } else if (!this.validateName(this.user.profile.last_name)) {
    //       this.errors.last_name = 'Please provide a valid last name'
    //     } else {
    //       this.errors.last_name = null
    //     }
    //   } else if (type === 'bio') {
    //     if (this.profile.bio === '') {
    //       this.errors.bio = 'Required Input'
    //     } else {
    //       this.errors.bio = null
    //     }
    //   } else if (type === 'number') {
    //     if (this.user.profile.contact_phone === '') {
    //       this.errors.contact_phone = 'Required Input'
    //     } else if (
    //       this.user.profile.contact_phone.replace(/[^0-9]/g, '').length !== 10
    //     ) {
    //       this.errors.contact_phone =
    //         'Invalid number, should only contain 10 digits'
    //     } else if (!this.validateNumber(this.user.profile.contact_phone)) {
    //       this.errors.contact_phone =
    //         'Invalid number, Please provide a correct contact number'
    //     } else {
    //       this.errors.contact_phone = null
    //     }
    //   } else if (type === 'linkedin') {
    //     if (this.user.profile.linkedin_url === '') {
    //       this.errors.linkedin_url = 'Required Input'
    //     } else if (!this.validateLinkedIn(this.user.profile.linkedin_url)) {
    //       this.errors.linkedin_url =
    //         'Invalid value, Please provide a correct linked in profile link'
    //     } else {
    //       this.errors.linkedin_url = null
    //     }
    //   } else if (type === 'website') {
    //     if (this.user.profile.website === '') {
    //       this.errors.website = 'Required Input'
    //     } else if (!this.validateWebsite(this.user.profile.website)) {
    //       this.errors.website =
    //         'Invalid value, Please provide the correct link for your website'
    //     } else {
    //       this.errors.website = null
    //     }
    //   } else if (type === 'username') {
    //     if (this.user.username === '') {
    //       this.errors.username = 'Required Input'
    //     } else {
    //       this.errors.username = null
    //     }
    //   } else if (type === 'street') {
    //     if (this.user.profile.address_street === '') {
    //       this.errors.address_street = 'Required Input'
    //     } else {
    //       this.errors.address_street = null
    //     }
    //   } else if (type === 'city') {
    //     if (this.user.profile.address_city === '') {
    //       this.errors.address_city = 'Required Input'
    //     } else {
    //       this.errors.address_city = null
    //     }
    //   } else if (type === 'postalcode') {
    //     if (this.user.profile.address_postalcode === '') {
    //       this.errors.address_postalcode = 'Required Input'
    //     } else {
    //       this.errors.address_postalcode = null
    //     }
    //   } else if (type === 'country') {
    //     if (this.user.profile.address_country === '') {
    //       this.errors.address_country = 'Required Input'
    //     } else {
    //       this.errors.address_country = null
    //     }
    //   } else if (type === 'state') {
    //     if (this.user.profile.state === '') {
    //       this.errors.state = 'Required Input'
    //     } else {
    //       this.errors.state = null
    //     }
    //   }
    // },
    inputChecker() {
      // if (type === 'email') {
      if (
        this.user.profile.contact_email === '' ||
        this.user.profile.contact_email === null
      ) {
        this.errors.email = 'Required Input'
      } else if (!this.validateEmail(this.user.profile.contact_email)) {
        this.errors.email = 'Please provide a valid email'
      } else {
        this.errors.email = ''
      }
      // } else if (type === 'first_name') {
      if (
        this.user.profile.first_name === '' ||
        this.user.profile.first_name === null
      ) {
        this.errors.first_name = 'Required Input'
      } else if (!this.validateName(this.user.profile.first_name)) {
        this.errors.first_name = 'Please provide a valid first name'
      } else {
        this.errors.first_name = ''
      }
      // } else if (type === 'last_name') {
      if (
        this.user.profile.last_name === '' ||
        this.user.profile.last_name === null
      ) {
        this.errors.last_name = 'Required Input'
      } else if (!this.validateName(this.user.profile.last_name)) {
        this.errors.last_name = 'Please provide a valid last name'
      } else {
        this.errors.last_name = ''
      }
      // } else if (type === 'bio') {
      // if (this.profile.bio === '') {
      //   this.errors.bio = 'Required Input'
      // } else {
      //   this.errors.bio = ''
      // }
      // } else if (type === 'number') {
      if (
        this.user.profile.contact_phone === '' ||
        this.user.profile.contact_phone === null
      ) {
        this.errors.contact_phone = 'Required Input'
      } else if (
        this.user.profile.contact_phone.replace(/[^0-9]/g, '').length !== 10
      ) {
        this.errors.contact_phone =
          'Invalid number, should only contain 10 digits'
      } else if (!this.validateNumber(this.user.profile.contact_phone)) {
        this.errors.contact_phone =
          'Invalid number, Please provide a correct contact number'
      } else {
        this.errors.contact_phone = ''
      }
      // } else if (type === 'linkedin') {
      if (
        this.user.profile.linkedin_url === '' ||
        this.user.profile.linkedin_url === null
      ) {
        this.errors.linkedin_url = 'Required Input'
      } else if (!this.validateLinkedIn(this.user.profile.linkedin_url)) {
        this.errors.linkedin_url =
          'Invalid value, Please provide a correct linked in profile link'
      } else {
        this.errors.linkedin_url = ''
      }
      // } else if (type === 'website') {
      if (
        this.user.profile.website === '' ||
        this.user.profile.website === null
      ) {
        this.errors.website = 'Required Input'
      } else if (!this.validateWebsite(this.user.profile.website)) {
        this.errors.website =
          'Invalid value, Please provide the correct link for your website'
      } else {
        this.errors.website = ''
      }
      // } else if (type === 'username') {
      if (this.user.username === '' || this.user.username === null) {
        this.errors.username = 'Required Input'
      } else {
        this.errors.username = ''
      }
      // } else if (type === 'street') {
      if (
        this.user.profile.address_street === '' ||
        this.user.profile.address_street === null
      ) {
        this.errors.address_street = 'Required Input'
      } else {
        this.errors.address_street = ''
      }
      // } else if (type === 'city') {
      if (
        this.user.profile.address_city === '' ||
        this.user.profile.address_city === null
      ) {
        this.errors.address_city = 'Required Input'
      } else {
        this.errors.address_city = ''
      }
      // } else if (type === 'postalcode') {
      if (
        this.user.profile.address_postalcode === '' ||
        this.user.profile.address_postalcode === null
      ) {
        this.errors.address_postalcode = 'Required Input'
      } else {
        this.errors.address_postalcode = ''
      }
      // } else if (type === 'country') {
      if (
        this.user.profile.address_country === '' ||
        this.user.profile.address_country === null
      ) {
        this.errors.address_country = 'Required Input'
      } else {
        this.errors.address_country = ''
      }
      // } else if (type === 'state') {
      if (this.user.profile.state === '' || this.user.profile.state === null) {
        this.errors.state = 'Required Input'
      } else {
        this.errors.state = ''
      }
      // }
    },
    limitNumber(event) {
      let val = event.target.value
      if (val.replace(/[^0-9]/g, '').length > 10) {
        while (val.replace(/[^0-9]/g, '').length > 10) {
          val = val.substr(0, val.length - 1)
        }
      }
      this.user.profile.contact_phone = val
      this.inputChecker('number')
    },
    setCountryCode(code) {
      this.user.profile.address_code = code
      this.toggleCountryCode = false
    },
    setCountry(country) {
      this.user.profile.address_country = country
      this.toggleCountry = false
    },
    save() {
      const newUser = this.user
      delete newUser.photo

      if (this.termsAccepted) {
        this.inputChecker()
        this.showErrors = true
        // const hasError = Object.keys(this.errors).find((key) => {
        //   return this.errors[key] !== null && this.errors[key] !== '';
        // })
        // if(!hasError) {
        this.$axios
          .post('/api/activate', newUser)
          .then(async (response) => {
            // eslint-disable-next-line no-console
            console.log(response.data)
            this.$auth.setUser(response.data.data)
            // this.$toast.success(response.data.message)
            this.stateMessage.success = response.data.message
            localStorage.setItem('newUser', true)
            this.$store.commit('messages/selectTab', 'messages')
            await this.$router.push(this.localePath('/startups'))
          })
          .catch((err) => {
            document.body.scrollTop = 300 // For Safari
            document.documentElement.scrollTop = 300
            const errors = err.data.message
            if (errors) {
              // this.$toast.error(err.data.message)
              this.stateMessage.error = err.data.message
            } else {
              // this.$toast.error(err.data.message)
              this.stateMessage.error = err.data.message
            }
          })
        // }
      } else {
        this.showErrors = true
        document.body.scrollTop = 0 // For Safari
        document.documentElement.scrollTop = 0
        // this.$toast.error('Please Accept the Terms and Conditions')
      }
    },
    toggleShow() {
      this.showPassword = !this.showPassword
    },
    async uploadImage(event) {
      if (event.target.files[0]) {
        const data = new FormData()
        data.append('photo', event.target.files[0])
        const response = await this.$axios.post('/api/profile/photo', data)
        this.user.photos = response.data.data

        // this.createBase64Image(event.target.files[0])
      } else {
        this.photo = {
          data: {},
          url: null,
        }
      }
    },
    // uploadImage(event) {
    //     // console.log(event)
    //     this.selectedFile = event.target.files[0]
    // },
    // updateUser(userID){
    //     const headers = {
    //         'Authorization': 'Bearer my-token',
    //         'Content-Type': 'application/json'
    //     };
    //     const data = {
    //         first_name: '',
    //         last_name: '',
    //         username: '',
    //         contact_phone: '',
    //         address_street: '',
    //         address_city: ''
    //     };
    //     this.axios.put('http://127.0.0.1:8000/api/profiles/{id}', data, {headers})
    //         .then(response=> {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error.response)
    //         })
    // }
  },
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/vars.scss';
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #f0fbff 0%,
    rgba(240, 251, 255, 0.6) 92.51%,
    rgba(240, 251, 255, 0) 100%
  );
  display: table;
  transition: opacity 0.5s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
// .activation-form-card-mobile {
//   padding: 3rem 4rem;
//     @media screen and (min-width: 1440px) {
//       padding: 3rem 6rem;
//     }
// }

#activation-form {
  .activation-form-card {
    // padding: 3rem 4rem;
    //   @media screen and (min-width: 1440px) {
    //     padding: 3rem 6rem;
    // }
    border: 0;
    background: #ffffff;
    box-shadow: 0px 20px 60px rgba(2, 131, 233, 0.1);
    border-radius: 15px;
    h5 {
      font-size: 19px;
      line-height: 125.3%;
      @media screen and (min-width: 992px) {
        @include scalefont(22);
        @include scalelineheight(27);
      }
    }
    input.form-control,
    button.form-control {
      font-size: 12px;
      color: rgba(27, 43, 65, 0.72);
      border: 1px solid rgba(28, 55, 90, 0.16);
      box-sizing: border-box;
      border-radius: 3px;
      background: transparent;
      height: 45px;
      @media screen and (min-width: 992px) {
        @include scalefont(14);
        height: 57px;
      }
    }
    .modal-dialog {
      border: 0;
      background: #ffffff;
      box-shadow: 0px 20px 60px rgba(2, 131, 233, 0.1);
      border-radius: 15px;
      // max-width: 600px;
      
      .modal-content {
        border: 0;
      }
      .modal-header {
        border: 0;
      }
      @media screen and (min-width: 768px) {
        @include scalewidth(600);
      }
    }

    .upload-avatar {
      border-radius: 4em;
      cursor: pointer;
      // width: 105px;
      @include scalewidth(105);
      // height: 105px;
      @include scaleheight(105);
      &.preview {
        margin-right: 1rem;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
}
.label-h5-text {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 125.3%;
  align-items: center;
  text-align: center;
  color: #000000;
  @media screen and (min-width: 768px) {
    @include scalefont(22);
    line-height: 125.3%;
  }
}
.p1-small {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: rgba(26, 41, 61, 0.83);
  @media screen and (min-width: 992px) {
    @include scalefont(14);
    line-height: 134%;
  }
}
.label-photo {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  @include scalefont(14);
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(26, 41, 61, 0.83);
}
.font-label {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: rgba(27, 43, 65, 0.72);
  @media screen and (min-width: 992px) {
    @include scalefont(14);
    line-height: 17px;
  }
}
.terms-label {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 992px) {
    @include scalefont(14);
    line-height: 17px;
  }
}
.terms-label-link {
  color: #009ddd;
  cursor: pointer;
}
.disabled-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  width: 399px;
  height: 56px;
  left: 0px;
  top: 0px;
  background: rgba(0, 157, 221, 0.5) !important;
  border-radius: 4px;
  border: 0;
}
.terms-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  width: 336px;
  height: 56px;
  background: #009ddd;
  border-radius: 4px;
}

.btn-address-submit {
  width: 399px;
  height: 56px;
  background: #009ddd;
  border-radius: 4px;
}

.terms-btn:hover,
.btn-address-submit:hover,
.activation-submit:hover {
  background-color: #0082b7;
  border-color: #0079aa;
}

.activation-submit-disabled,
.terms-btn-disabled {
  background: rgba(0, 157, 221, 0.5) !important;
}

.text-label {
  width: 637px;
  height: 76px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  @include scalefont(10);
  @include scalelineheight(19);
  align-items: left;
  letter-spacing: 0.02em;
  color: rgba(26, 41, 61, 0.83);
}
.modal-dialog-box {
  width: 1500px;
  height: 1273px;
  background: #ffffff;
  box-shadow: 0px 20px 60px rgba(2, 131, 233, 0.1);
  border-radius: 15px;
}
.p2-small {
  font-family: Avenir LT Std;
  // font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  @include scalefont(12);
  @include scalelineheight(19);
  letter-spacing: 0.02em;
  color: rgba(26, 41, 61, 0.83);
}
.btn-address {
  /* position: absolute; */
  width: 404.39px;
  height: 35.75px;
  left: 522px;
  top: 1350px;
  border: 1px solid rgba(28, 55, 90, 0.16);
  box-sizing: border-box;
  border-radius: 3px;
  background: #ffffff;
}
.list {
  /* position: absolute; */
  width: 204px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  /* transform-origin: top; */
  /* transition: transform .4s ease-in-out; */
  /* overflow: hidden; */
}
// .activation-upload-btn {
//   // width: 105px;
//   // height: 105px;
//   // left: 520px;
//   // top: 295px;
//   // background: rgba(233, 235, 235, 0.9);
// }

// .btn-primary {
//   background: rgba(0, 157, 221, 0.5);
//   border-color: rgba(0, 157, 221, 0.5);
//   border-radius: 4px;
// }

.activation-submit {
  // width: 399px;
  height: 45px;
  border-radius: 40px;
  @media screen and (min-width: 992px) {
    border-radius: 4px;
    height: 56px;
  }
}

.error-card-position-fields {
  position: absolute;
  border-radius: 12px;
  top: 0;
  right: 0;
  padding: 0;
  width: max-content;
  z-index: 1;
  &.center {
    left: 0;
    margin: auto;
  }
}
.input-arrow-right {
  display: flex;
  position: absolute;
  align-items: center;
  z-index: 2;
  // left: 17.33%;
  right: 5%;
  top: 40%;
  // bottom: 30.35%;
  // img {
  //   // @include scaleheight(24);
  //   height: 20px;
  //   // @include scalewidth(24);
  //   width: 20px;
  // }
}
.form-control {
  color: #000000;
  border: solid 1.5px #009ddd;
  // background: url(~assets/images/list-check.svg) no-repeat;
  background-position: 90% center;
  background-size: 6%;
}
@media only screen and (max-width: 767px) {
  .activation-form-card {
     padding: 3rem 2rem;
  }
  .modal-body{
    padding: 3rem;
  }
  .p2-small {
    text-align: justify;
  }
  .activation-submit {
    // display: flex;
    justify-content: flex-end;
    float: none !important;
    align-items: center;
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  .activation-form-card {
    padding: 3rem 4rem;
  }
  .activation-submit {
    // display: flex;
    justify-content: flex-end;
    float: none !important;
    align-items: center;
  }
  .modal-body{
    padding: 3rem;
  }
  .p2-small {
    text-align: justify;
  } 
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
  .activation-form-card {
    padding: 3rem 4rem;
  }
  .modal-body{
    padding: 3rem;
  }
  .p2-small {
   text-align: justify;
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  .activation-form-card {
    padding: 3rem 4rem;
  }
  .activation-submit {
    // display: flex;
    justify-content: flex-end;
    float: none !important;
    align-items: center;
  }
  .modal-body {
    padding: 3rem;
  }
  .p2-small {
    text-align: justify;
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
  .activation-form-card {
    padding: 3rem 4rem;
  }
  .modal-body {
    padding: 3rem;
  }
  .p2-small {
    text-align: justify;
  }
}
</style>