<template>
  <div class="container pt-5">
    <br /><br />
    <div class="row">
      <div class="col-lg-8 col-md-12 mx-auto mb-5">
        <div class="settings-dashboard-block">
          <div class="dashboard-header mb-5">
            <div class="dashboard-header-text">Settings</div>
            <div class="dashboard-header-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div
            class="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              mb-5
            "
          >
            <div class="circle-settings mt-3 mb-5">
              <div v-if="!loading">
                <img
                  v-if="userInfo.photos"
                  :src="userInfo.photos.normal"
                  class="preview-img-settings img-fluid"
                />
                <img
                  v-else
                  src="~assets/images/Ellipse_712.png"
                  class="img-fluid"
                />
                <label for="file-input">
                  <a role="button" class="camera-icon">
                    <img src="~assets/images/Camera.svg" class="img-fluid" />
                  </a>
                </label>
                <input
                  id="file-input"
                  class="form-control-file"
                  type="file"
                  accept="image/*"
                  hidden
                  @change="uploadImage($event)"
                />
              </div>
              <div v-else>
                <loading 
                  :active.sync="loading" 
                  :can-cancel="false" 
                  :is-full-page="false"
                ></loading>
              </div>
            </div>
            <div class="settings-account-name mb-2">
              {{ userInfo.first_name }} {{ userInfo.last_name }}
            </div>
            <div class="settings-account-type mb-4">
              {{ $auth.user.roles[0].name }}
            </div>
          </div>
           <div class="settings-account-name mb-2">
              <a
                role="button"
                class="nav-link d-flex place-items-center align-items-center cursor-pointer" @click="toggleRole = !toggleRole">
              </a>
              <transition name="fade" appear>
                <div
                  v-if="toggleRole"
                  v-on-clickaway="away"
                  class="sub-menu fs-16">
                    <a class="dropdown-item sub-menu-item form-control w-100 fs-16" href="#">Seller</a>
                    <a class="dropdown-item sub-menu-item form-control w-100 fs-16" href="#">Buyer</a>
                    <a class="dropdown-item sub-menu-item form-control w-100 fs-16" href="#">Advisor</a>
                </div>
              </transition>
            </div>
          <div class="row mb-5">
            <div class="col-10">
              <div class="settings-content-label mb-2">Name</div>
              <div class="settings-content-value">
                {{ userInfo.first_name }} {{ userInfo.last_name }}
              </div>
            </div>
            <div class="col-2 d-flex justify-content-end">
              <a role="button" @click="showModalName = true">
                <img src="~assets/images/Edit.svg" class="img-fluid mr-2" />
              </a>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-10">
              <div class="settings-content-label mb-2">Bio</div>
              <div class="settings-content-value settings-bio">
                {{ userInfo.bio }}
              </div>
            </div>
            <div class="col-2 d-flex justify-content-end align-items-center">
              <a role="button" @click="showModalBio = true">
                <img src="~assets/images/Edit.svg" class="img-fluid mr-2" />
              </a>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-10">
              <div class="settings-content-label mb-2">Number</div>
              <div class="settings-content-value">
                {{ userInfo.contact_phone }}
              </div>
            </div>
            <div class="col-2 d-flex justify-content-end align-items-center">
              <a role="button" @click="showModalContact = true">
                <img src="~assets/images/Edit.svg" class="img-fluid mr-2" />
              </a>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-10">
              <div class="settings-content-label mb-2">Contact Email</div>
              <div class="settings-content-value">
                {{ userInfo.contact_email }}
              </div>
            </div>
            <div class="col-2 d-flex justify-content-end align-items-center">
              <a role="button" @click="showModalEmail = true">
                <img src="~assets/images/Edit.svg" class="img-fluid mr-2" />
              </a>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-8">
              <div class="settings-content-label mb-2">Password</div>
              <div class="settings-content-value">***************</div>
            </div>
            <!-- <div class="col-md-4 d-flex justify-content-end align-items-center">
              <a role="button" class="changePass-btn" target="_blank" @click="showModalChangePass = true">
                Change Password
              </a>
            </div> -->
            <div class="col-4 d-flex justify-content-end align-items-center">
              <NuxtLink
                :to="localePath('/settings/changePassword')"
                class="changePass-btn"
              >
                Change Password
              </NuxtLink>
            </div>
          </div>
          <div v-if="updatedInfo.length !== 0" class="save-btn mb-3">
            <button type="button" class="btn btn-primary dashboard-btn" @click="saveChanges()">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModalName" class="settings-modal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <form class="form-group">
                    <div class="position-relative">
                      <label
                        for="settings_fname"
                        class="mb-2 setting-input-label"
                      >
                        First Name
                      </label>
                      <input
                        id="settings_fname"
                        v-model="newInfo.new_first_name"
                        name="settings_fname"
                        type="text"
                        :class="
                          errors.first_name
                            ? 'form-control mb-3 is-invalid'
                            : 'form-control mb-3'
                        "
                        required
                        @input="inputChecker('first_name')"
                      />
                      <ErrorCard
                        v-if="errors.first_name"
                        class="error-card-position-fields"
                        :errors="errors.first_name"
                        :variant="'alert'"
                      />
                      <!-- <div class="invalid-input" style="display: block">
                        {{ errors.first_name }}
                      </div> -->
                    </div>
                    <div class="position-relative">
                      <label for="settings_lname" class="mb-2 setting-input-label">
                        Last Name
                      </label>
                      <input
                        id="settings_lname"
                        v-model="newInfo.new_last_name"
                        name="settings_lname"
                        type="text"
                        :class="
                          errors.last_name
                            ? 'form-control mb-3 is-invalid'
                            : 'form-control mb-3'
                        "
                        required
                        @input="inputChecker('last_name')"
                      />
                      <!-- <div class="invalid-input" style="display: block">
                        {{ errors.last_name }}
                      </div> -->
                      <ErrorCard
                        v-if="errors.last_name"
                        class="error-card-position-fields"
                        :errors="errors.last_name"
                        :variant="'alert'"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-light border-0 dashboard-btn modal-btn"
                    @click="closeModal('name')"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn modal-btn d-flex align-items-center justify-content-center"
                    :disabled="
                      errors.last_name || errors.first_name || newInfo.new_first_name === userInfo.first_name || newInfo.new_last_name === userInfo.last_name ? true : false
                    "
                    @click="updateDataName()"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModalBio" class="settings-modal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <form class="form-group">
                    <div class="position-relative">
                      <label for="settings_bio" class="mb-2 setting-input-label">
                        BIO
                      </label>
                      <textarea
                        id="settings_bio"
                        v-model="newInfo.new_bio"
                        name="settings_bio"
                        :class="
                          errors.bio
                            ? 'form-control mb-3 is-invalid'
                            : 'form-control mb-3'
                        "
                        rows="4"
                        required
                        @input="inputChecker('bio')"
                      />
                      <!-- <div class="invalid-input" style="display: block">
                        {{ errors.bio }}
                      </div> -->
                      <ErrorCard
                        v-if="errors.bio"
                        class="error-card-position-fields"
                        :errors="errors.bio"
                        :variant="'alert'"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-light border-0 dashboard-btn modal-btn"
                    @click="closeModal('bio')"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn modal-btn d-flex align-items-center justify-content-center"
                    :disabled="errors.bio || newInfo.new_bio === userInfo.bio ? true : false"
                    @click="updateDataBio()"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModalEmail" class="settings-modal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <form class="form-group">
                    <div class="position-relative">
                      <label for="settings_email" class="mb-2 setting-input-label">
                        Email
                      </label>
                      <input
                        id="settings_email"
                        v-model="newInfo.new_contact_email"
                        name="settings_email"
                        type="text"
                        :class="
                          errors.email
                            ? 'form-control mb-3 is-invalid'
                            : 'form-control mb-3'
                        "
                        required
                        @input="inputChecker('email')"
                      />
                      <!-- <div class="invalid-input" style="display: block">
                        {{ errors.email }}
                      </div> -->
                      <ErrorCard
                        v-if="errors.email"
                        class="error-card-position-fields"
                        :errors="errors.email"
                        :variant="'alert'"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-light border-0 dashboard-btn modal-btn"
                    @click="closeModal('email')"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn modal-btn d-flex align-items-center justify-content-center"
                    :disabled="errors.email || newInfo.new_contact_email === userInfo.contact_email ? true : false"
                    @click="updateDataEmail()"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModalContact" class="settings-modal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <form class="form-group">
                    <div class="position-relative">
                      <label for="settings_number" class="mb-2 setting-input-label">
                        Number
                      </label>
                      <input
                        id="settings_number"
                        v-model="newInfo.new_contact_phone"
                        name="settings_number"
                        type="number"
                        :class="
                          errors.number
                            ? 'form-control mb-3 is-invalid'
                            : 'form-control mb-3'
                        "
                        required
                        @input="limitNumber($event)"
                      />
                      <!-- <div class="invalid-input" style="display: block">
                        {{ errors.number }}
                      </div> -->
                      <ErrorCard
                        v-if="errors.number"
                        class="error-card-position-fields"
                        :errors="errors.number"
                        :variant="'alert'"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-light border-0 dashboard-btn modal-btn"
                    @click="closeModal('number')"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn modal-btn d-flex align-items-center justify-content-center"
                    :disabled="errors.number || errors.contact_phone || newInfo.new_contact_phone === userInfo.contact_phone ? true : false"
                    @click="updateDataContact()"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModalChangePass" class="settings-modal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <b><p>Change Password</p></b>
                  <form class="form-group">
                    <label
                      for="settings_passwordOld"
                      class="mb-2 setting-input-label"
                      >Enter Old Password</label
                    >
                    <input
                      id="settings_passwordOld"
                      name="settings_passwordOld"
                      type="text"
                      class="form-control mb-3"
                      required
                    />
                    <label
                      for="settings_passwordNew"
                      class="mb-2 setting-input-label"
                      >Enter New Password</label
                    >
                    <input
                      id="settings_passwordNew"
                      name="settings_passwordNew"
                      type="text"
                      class="form-control mb-3"
                      required
                    />
                    <label
                      for="settings_passwordNewRepeat"
                      class="mb-2 setting-input-label"
                      >Repeat New Password</label
                    >
                    <input
                      id="settings_passwordNewRepeat"
                      name="settings_passwordNewRepeat"
                      type="text"
                      class="form-control mb-3"
                      required
                    />
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-light border-0 dashboard-btn modal-btn"
                    @click="showModalChangePass = false"
                  >
                    Cancel
                  </button>
                  <button type="button" class="btn btn-primary dashboard-btn modal-btn d-flex align-items-center justify-content-center">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import ErrorCard from '../../components/ErrorCard.vue'

export default {
  name: 'SettingsPage',
  components: {
    Loading,
    ErrorCard,
  },
  layout: 'auth-layout',
  middleware: 'auth',
  data() {
    return {
      toggleRole: false,
      loading: true,
      userInfo: {},
      newInfo: {
        new_company: null,
        new_bio: null,
        new_address_street: null,
        new_address_city: null,
        new_address_postalcode: null,
        new_address_country: null,
        new_contact_email: null,
        new_contact_phone: null,
        new_first_name: null,
        new_last_name: null,
      },
      errors: {
        email: null,
        first_name: null,
        last_name: null,
        bio: null,
        number: null,
      },
      updatedInfo: [],
      showModalName: false,
      showModalBio: false,
      showModalEmail: false,
      showModalContact: false,
      showModalChangePass: false,
      photo: {
        data: {},
        url: null,
      },
      toastMessage:'',
    }
  },
  beforeMount() {
    this.fetchUser()
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.toggleRole = false
      }
    },
    away() {
      this.toggleRole = false
    },
    async uploadImage(event) {
      if (event.target.files[0]) {
        const data = new FormData()
        data.append('photo', event.target.files[0])
        const response = await this.$axios.post('/api/profile/photo', data)
        this.userInfo.photos = response.data.data

        // this.createBase64Image(event.target.files[0])
      } else {
        this.photo = {
          data: {},
          url: null,
        }
      }
    },
    createBase64Image(fileObject) {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.photo.data = e.target.result
      }
      reader.readAsBinaryString(fileObject)
    },
    fetchUser() {
      this.$axios.get('/api/profiles').then((response) => {
        this.userInfo = response.data.data
        this.newInfo = {
          new_company: response.data.data.company,
          new_bio: response.data.data.bio,
          new_address_street: response.data.data.address_street,
          new_address_city: response.data.data.address_city,
          new_address_postalcode: response.data.data.address_postalcode,
          new_address_country: response.data.data.address_country,
          new_contact_email: response.data.data.contact_email,
          new_contact_phone: response.data.data.contact_phone,
          new_first_name: response.data.data.first_name,
          new_last_name: response.data.data.last_name,
        }
        console.log(response.data.data)
        this.loading = false;
      })
    },
    saveChanges() {
      const formData = {}
      this.updatedInfo.forEach((data) => {
        formData[data.name] = data.value
      })
      this.$axios
        .post(`/api/profiles`, formData)
        .then((response) => {
          this.userInfo = response.data.data
          this.newInfo = {
            new_company: response.data.data.company,
            new_bio: response.data.data.bio,
            new_address_street: response.data.data.address_street,
            new_address_city: response.data.data.address_city,
            new_address_postalcode: response.data.data.address_postalcode,
            new_address_country: response.data.data.address_country,
            new_contact_email: response.data.data.contact_email,
            new_contact_phone: response.data.data.contact_phone,
            new_first_name: response.data.data.first_name,
            new_last_name: response.data.data.last_name,
          }
          this.updatedInfo = []
          // this.$toast.success(response.data.message)
          this.toastMessage= response.data.message
          this.$bvToast.show('custom-toast')
        })
        .catch(({ response }) => {
          const errors = response.data.errors
          Object.keys(errors).forEach((key) => {
            this.$toast.error(errors[key][0])
          })
          // console.log(response)
          // this.$toast.error(response.data)
        })
    },
    updateDataName() {
      const dataList = []
      const currentList = this.updatedInfo
      if (this.newInfo.new_first_name !== this.userInfo.first_name) {
        const objIndex = currentList.findIndex(
          (obj) => obj.name === 'first_name'
        )
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'first_name',
            value: this.newInfo.new_first_name,
          }
        } else {
          dataList.push({
            name: 'first_name',
            value: this.newInfo.new_first_name,
          })
        }
        this.userInfo.first_name = this.newInfo.new_first_name
      }
      if (this.newInfo.new_last_name !== this.userInfo.last_name) {
        const objIndex = currentList.findIndex(
          (obj) => obj.name === 'last_name'
        )
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'last_name',
            value: this.newInfo.new_last_name,
          }
        } else {
          dataList.push({
            name: 'last_name',
            value: this.newInfo.new_last_name,
          })
        }
        this.userInfo.last_name = this.newInfo.new_last_name
      }
      this.updatedInfo = [...dataList, ...currentList]
      this.showModalName = false
    },
    updateDataBio() {
      const dataList = []
      const currentList = this.updatedInfo
      if (this.newInfo.new_bio !== this.userInfo.bio) {
        const objIndex = currentList.findIndex((obj) => obj.name === 'bio')
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'bio',
            value: this.newInfo.new_bio,
          }
        } else {
          dataList.push({
            name: 'bio',
            value: this.newInfo.new_bio,
          })
        }
        this.userInfo.bio = this.newInfo.new_bio
      }
      this.updatedInfo = [...dataList, ...currentList]
      this.showModalBio = false
    },
    updateDataEmail() {
      const dataList = []
      const currentList = this.updatedInfo
      if (this.newInfo.new_contact_email !== this.userInfo.contact_email) {
        const objIndex = currentList.findIndex((obj) => obj.name === 'username')
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'contact_email',
            value: this.newInfo.new_contact_email,
          }
        } else {
          dataList.push({
            name: 'contact_email',
            value: this.newInfo.new_contact_email,
          })
        }
        this.userInfo.contact_email = this.newInfo.new_contact_email
      }
      this.updatedInfo = [...dataList, ...currentList]
      this.showModalEmail = false
    },
    updateDataContact() {
      const dataList = []
      const currentList = this.updatedInfo
      if (this.newInfo.new_contact_phone !== this.userInfo.contact_phone) {
        const objIndex = currentList.findIndex(
          (obj) => obj.name === 'contact_phone'
        )
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'contact_phone',
            value: this.newInfo.new_contact_phone,
          }
        } else {
          dataList.push({
            name: 'contact_phone',
            value: this.newInfo.new_contact_phone,
          })
        }
        this.userInfo.contact_phone = this.newInfo.new_contact_phone
      }
      this.updatedInfo = [...dataList, ...currentList]
      this.showModalContact = false
    },
    validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    // validateNumber(num) {
    //   const re = /^[0-9+-]*$/
    //   return re.test(num)
    // },
    // validateName(names) {
    //   const re = /^[\w'\-,.]*[^_!¡?÷?¿/\\+=@#$%&*(){}|~<>;:[\]]*$/
    //   return re.test(names)
    // },
    validateNumber(num) {
      const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
      return re.test(num);
    },
    validateName(names){
      const re = /^[\w'\-,.]*[^_!¡?÷?¿/\\+=@#$%&*(){}|~<>;:[\]]*$/;
      return re.test(names);
    },
    inputChecker(type) {
      if (type === 'email') {
        if (this.newInfo.new_contact_email === '') {
          this.errors.email = 'Required Input'
        } else if (!this.validateEmail(this.newInfo.new_contact_email)) {
          this.errors.email = 'Please provide a valid email'
        } else {
          this.errors.email = null
        }
      } else if (type === 'first_name') {
        if (this.newInfo.new_first_name === '') {
          this.errors.first_name = 'Required Input'
        } else if (!this.validateName(this.newInfo.new_first_name)) {
          this.errors.first_name = 'Please provide a valid first name'
        } else {
          this.errors.first_name = null
        }
      } else if (type === 'last_name') {
        if (this.newInfo.new_last_name === '') {
          this.errors.last_name = 'Required Input'
        } else if (!this.validateName(this.newInfo.new_last_name)) {
          this.errors.last_name = 'Please provide a valid last name'
        } else {
          this.errors.last_name = null
        }
      } else if (type === 'bio') {
        if (this.newInfo.new_bio === '') {
          this.errors.bio = 'Required Input'
        } else {
          this.errors.bio = null
        }
      } else if (type === 'number') {
        /* eslint-disable dot-notation */
        this.newInfo.new_contact_phone = this.$refs.new_contact_phone.value
        if (this.newInfo.new_contact_phone === '') {
          this.errors.number = 'Required Input'
        } else if(this.newInfo.new_contact_phone.replace(/[^0-9]/g,"").length > 10){
          this.errors.number = 'Invalid number, should only contain 10 digits'
        } else if (!this.validateNumber(this.newInfo.new_contact_phone)) {
          this.errors.number = 'Invalid value, Please provide a correct contact number'
        } else {
          this.errors.number = null
        }
      }
    },
    limitNumber(event) {
      // console.log(event.target.value)
      let val = event.target.value;
      if(val.replace(/[^0-9]/g,"").length > 10){
        while(val.replace(/[^0-9]/g,"").length > 10){
          val = val.substr(0,val.length-1);
        }
      }
      this.newInfo.new_contact_phone = val;
      this.inputChecker("number");
    },
    closeModal(type) {
      if (type === 'email') {
        this.newInfo.new_contact_email = this.userInfo.contact_email
        this.errors.email = null
        this.showModalEmail = false
      } else if (type === 'name') {
        this.newInfo.new_first_name = this.userInfo.first_name
        this.newInfo.new_last_name = this.userInfo.last_name
        this.errors.first_name = null
        this.errors.last_name = null
        this.showModalName = false
      } else if (type === 'bio') {
        this.newInfo.new_bio = this.userInfo.bio
        this.errors.bio = null
        this.showModalBio = false
      } else if (type === 'number') {
        this.newInfo.new_contact_phone = this.userInfo.contact_phone
        this.errors.number = null
        this.showModalContact = false
      }
    },
  },
}
</script>

<style lang="scss">
@import '../../assets/css/vars.scss';
:root {
  --avatar-size-settings: 165px;
  /* change this value anything, e.g., 100px, 10rem, etc. */
}

.setting-input-label {
  // font-size: 18px;
  @include scalefont(18);
  margin-bottom: 0.5rem;
}

.settings-dashboard-block {
  position: relative;
  background: #ffffff;
  box-shadow: -2px 4px 45px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 51px 85px;
}

.circle-settings {
  position: relative;
  border-radius: 50%;
  height: var(--avatar-size-settings);
  text-align: center;
  width: var(--avatar-size-settings);
  margin-bottom: 18px;
  margin-left: 5px;
}

.camera-icon {
  position: absolute;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  right: 2px;
  bottom: 2px;
}

.initials-settings {
  font-size: calc(var(--avatar-size-settings) / 2); /* 50% of parent */
  line-height: 1;
  position: relative;
  top: calc(var(--avatar-size-settings) / 4); /* 25% of parent */
}

.info {
  margin-left: 30px;
  margin-top: 8px;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10px;
}

.save-btn {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.settings-account-name {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 750;
  // font-size: 22px;
  @include scalefont(22);
  // line-height: 26px;
  @include scalelineheight(26);
  color: #272d4e;
}

.settings-account-type {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  // font-size: 14px;
  @include scalefont(14);
  // line-height: 17px;
  @include scalelineheight(17);
  color: #009ddd;
}

.settings-content-label {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  // font-size: 14px;
  @include scalefont(14);
  // line-height: 17px;
  @include scalelineheight(17);
  color: rgba(39, 45, 78, 0.6);
}

.settings-content-value {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  // font-size: 16px;
  @include scalefont(16);
  // line-height: 19px;
  @include scalelineheight(19);
  color: #272d4e;
}

.settings-bio {
  width: 75%;
}

.changePass-btn {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  // font-size: 14px;
  @include scalefont(14);
  // line-height: 22px;
  @include scalelineheight(22);
  color: #009ddd;
  text-decoration: none;
}

.preview-img-settings {
  border-radius: 50%;
  object-fit: cover;
  object-position: center; /* Center the image within the element */
  width: 100%;
  height: 100%;
}

.invalid-input {
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 13px;
  color: #dc3545;
}

.settings-modal {
  .modal-content {
    background: #ffffff;
    box-shadow: 0px 20px 60px rgba(2, 131, 233, 0.1);
    border-radius: 15px;
    border: 0;
    input.form-control {
      border: 1px solid rgba(28, 55, 90, 0.16);
      box-sizing: border-box;
      border-radius: 3px;
      &[type='text'] {
        @include scaleheight(48);
      }
    }
  }
  .btn-primary.disabled,
  .btn-primary:disabled {
    color: #000;
    background-color: #e2e6ea;
    border: 2px solid #e2e6ea;
  }
}
.modal-content {
  padding: 2rem 8rem;
  @media screen and (max-width: 1440px) {
    padding: 2rem 4rem;
  }
}
.error-card-position-fields {
  position: absolute;
  border-radius: 12px;
  top: -.5rem;
  right: 0;
  z-index: 5;
  padding:0;
}
</style>
