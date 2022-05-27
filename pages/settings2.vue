<template>
  <div class="container pt-5">
    <br /><br />
    <div class="row">
      <div class="col-sm-8 col-xs-12 mx-auto mb-5">
        <div class="dashboard-block">
          <div class="profile-top">
            <div class="circle-settings">
              <span class="initials-settings">M</span>
            </div>
            <div class="info">
              <div class="loading-1">
                <p>{{ userInfo.username }}</p>
              </div>
              <div class="loading-2">
                <p>{{ $auth.user.roles[0].name }}</p>
              </div>
            </div>
          </div>
          <div class="content mb-5">
            <div>
              <div class="loading-1">
                <p>Name:</p>
              </div>
              <div class="loading-2">
                {{ userInfo.first_name }} {{ userInfo.last_name }}
              </div>
              <div class="loading-3">
                {{ userInfo.company }}
              </div>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-light dashboard-btn"
                @click="showModalName = true"
              >
                Edit
              </button>
            </div>
          </div>
          <div class="content mb-5">
            <div>
              <div class="loading-1">
                <p>Email</p>
              </div>
              <div class="loading-2">
                {{ userInfo.contact_email }}
              </div>
              <div class="loading-1">
                <p>Bio</p>
              </div>
              <div class="loading-3">
                {{ userInfo.bio }}
              </div>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-light dashboard-btn"
                @click="showModalEmail = true"
              >
                Edit
              </button>
            </div>
          </div>
          <div class="content mb-5">
            <div>
              <div class="loading-1">
                <p>Number</p>
              </div>
              <div class="loading-2">
                {{ userInfo.contact_phone }}
              </div>
              <div class="loading-1">
                <p>Address</p>
              </div>
              <div class="loading-3">
                {{ userInfo.address_street }}
                {{ userInfo.city }}
                {{ userInfo.postcode }}
                {{ userInfo.country }}
              </div>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-light dashboard-btn"
                @click="showModalContact = true"
              >
                Edit
              </button>
            </div>
          </div>
          <div class="content mb-5">
            <div>
              <div class="loading-1">
                <p>Password</p>
              </div>
              <div class="loading-2"></div>
              <div class="loading-3"></div>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-light dashboard-btn"
                @click="showModalChangePass = true"
              >
                Change Password
              </button>
            </div>
          </div>
          <div class="mb-5 pb-5"></div>
          <div v-if="updatedInfo.length !== 0" class="save-btn mb-3">
            <button
              type="button"
              class="btn btn-priimary dashboard-btn"
              @click="saveChanges()"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="settings-modal" v-if="showModalName">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <b><p>Personal Information</p></b>
                  <form class="form-group">
                    <label for="settings_fname" class="mb-2 setting-input-label"
                      >First Name</label
                    >
                    <input
                      id="settings_fname"
                      v-model="newInfo.new_first_name"
                      name="settings_fname"
                      type="text"
                      class="form-control mb-3"
                      required
                    />
                    <label for="settings_lname" class="mb-2 setting-input-label"
                      >Last Name</label
                    >
                    <input
                      id="settings_lname"
                      v-model="newInfo.new_last_name"
                      name="settings_lname"
                      type="text"
                      class="form-control mb-3"
                      required
                    />
                    <label for="settings_cname" class="mb-2 setting-input-label"
                      >Company Name</label
                    >
                    <input
                      id="settings_cname"
                      v-model="newInfo.new_company"
                      name="settings_cname"
                      type="text"
                      class="form-control mb-3"
                      required
                    />
                    <label for="settings_uname" class="mb-2 setting-input-label"
                      >Username</label
                    >
                    <input
                      id="settings_uname"
                      v-model="newInfo.new_username"
                      name="settings_uname"
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
                    @click="showModalName = false"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn modal-btn d-flex align-items-center justify-content-center"
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
    <div class="settings-modal" v-if="showModalEmail">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <form class="form-group">
                    <label for="settings_email" class="mb-2 setting-input-label"
                      >Email</label
                    >
                    <input
                      id="settings_email"
                      v-model="newInfo.new_contact_email"
                      name="settings_email"
                      type="text"
                      class="form-control mb-3"
                      required
                    />
                    <label for="settings_bio" class="mb-2 setting-input-label"
                      >BIO</label
                    >
                    <textarea
                      id="settings_bio"
                      v-model="newInfo.new_bio"
                      name="settings_bio"
                      class="form-control mb-3"
                      rows="4"
                      required
                    />
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-light border-0 dashboard-btn modal-btn"
                    @click="showModalEmail = false"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn modal-btn d-flex align-items-center justify-content-center"
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
    <div class="settings-modal" v-if="showModalContact">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <b><p>Contact Information</p></b>
                  <form class="form-group">
                    <label
                      for="settings_number"
                      class="mb-2 setting-input-label"
                      >Number</label
                    >
                    <input
                      id="settings_number"
                      v-model="newInfo.new_contact_phone"
                      name="settings_number"
                      type="text"
                      class="form-control mb-3"
                      required
                    />
                    <label
                      for="settings_street"
                      class="mb-2 setting-input-label"
                      >Street</label
                    >
                    <input
                      id="settings_street"
                      v-model="newInfo.new_address_street"
                      name="settings_street"
                      type="text"
                      class="form-control mb-3"
                      required
                    />
                    <label for="settings_city" class="mb-2 setting-input-label"
                      >City</label
                    >
                    <input
                      id="settings_city"
                      v-model="newInfo.new_address_city"
                      name="settings_city"
                      type="text"
                      class="form-control mb-3"
                      required
                    />
                    <label
                      for="settings_country"
                      class="mb-2 setting-input-label"
                      >Country</label
                    >
                    <input
                      id="settings_country"
                      v-model="newInfo.new_address_country"
                      name="settings_country"
                      type="text"
                      class="form-control mb-3"
                      required
                    />
                    <label for="settings_pcode" class="mb-2 setting-input-label"
                      >Postal Code</label
                    >
                    <input
                      id="settings_pcode"
                      v-model="newInfo.new_address_postalcode"
                      name="settings_pcode"
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
                    @click="showModalContact = false"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn modal-btn d-flex align-items-center justify-content-center"
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
    <div class="settings-modal" v-if="showModalChangePass">
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
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn modal-btn d-flex align-items-center justify-content-center"
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
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
  layout: 'auth-layout',
  middleware: 'auth',
  data() {
    return {
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
      updatedInfo: [],
      showModalName: false,
      showModalEmail: false,
      showModalContact: false,
      showModalChangePass: false,
    }
  },
  beforeMount() {
    this.fetchUser()
  },
  methods: {
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
      })
    },
    saveChanges() {
      const formData = {}
      this.updatedInfo.forEach((data) => {
        formData[data.name] = data.value
      })
      this.$axios.post(`/api/profiles`, formData).then((response) => {
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
      if (this.newInfo.new_company !== this.userInfo.company) {
        const objIndex = currentList.findIndex((obj) => obj.name === 'company')
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'company',
            value: this.newInfo.new_company,
          }
        } else {
          dataList.push({
            name: 'company',
            value: this.newInfo.new_company,
          })
        }
        this.userInfo.company = this.newInfo.new_company
      }
      if (this.newInfo.new_username !== this.userInfo.username) {
        const objIndex = currentList.findIndex((obj) => obj.name === 'username')
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'username',
            value: this.newInfo.new_username,
          }
        } else {
          dataList.push({
            name: 'username',
            value: this.newInfo.new_username,
          })
        }
        this.userInfo.username = this.newInfo.new_username
      }
      this.updatedInfo = [...dataList, ...currentList]
      this.showModalName = false
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
      if (this.newInfo.new_address_street !== this.userInfo.address_street) {
        const objIndex = currentList.findIndex(
          (obj) => obj.name === 'address_street'
        )
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'address_street',
            value: this.newInfo.new_address_street,
          }
        } else {
          dataList.push({
            name: 'address_street',
            value: this.newInfo.new_address_street,
          })
        }
        this.userInfo.address_street = this.newInfo.new_address_street
      }
      if (this.newInfo.new_address_city !== this.userInfo.address_city) {
        const objIndex = currentList.findIndex(
          (obj) => obj.name === 'address_city'
        )
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'address_city',
            value: this.newInfo.new_address_city,
          }
        } else {
          dataList.push({
            name: 'address_city',
            value: this.newInfo.new_address_city,
          })
        }
        this.userInfo.address_city = this.newInfo.new_address_city
      }
      if (this.newInfo.new_address_country !== this.userInfo.address_country) {
        const objIndex = currentList.findIndex(
          (obj) => obj.name === 'address_country'
        )
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'address_country',
            value: this.newInfo.new_address_country,
          }
        } else {
          dataList.push({
            name: 'address_country',
            value: this.newInfo.new_address_country,
          })
        }
        this.userInfo.address_country = this.newInfo.new_address_country
      }
      if (
        this.newInfo.new_address_postalcode !== this.userInfo.address_postalcode
      ) {
        const objIndex = currentList.findIndex(
          (obj) => obj.name === 'address_postalcode'
        )
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'address_postalcode',
            value: this.newInfo.new_address_postalcode,
          }
        } else {
          dataList.push({
            name: 'address_postalcode',
            value: this.newInfo.new_address_postalcode,
          })
        }
        this.userInfo.address_postalcode = this.newInfo.new_address_postalcode
      }
      this.updatedInfo = [...dataList, ...currentList]
      this.showModalContact = false
    },
  },
}
</script>

<style lang="scss">
@import '../assets/css/vars.scss';
:root {
  --avatar-size-settings: 94px;
  /* change this value anything, e.g., 100px, 10rem, etc. */
}

.setting-input-label {
  margin-bottom: 0.5rem;
  @include scalefont(18);
}

.dashboard-block {
  position: relative;
  background: #ddeaf3;
  border-radius: 8px;
  padding: 22px 38px;
}

.circle-settings {
  background-color: #ccc;
  border-radius: 50%;
  height: var(--avatar-size-settings);
  text-align: center;
  width: var(--avatar-size-settings);
  margin-bottom: 18px;
  margin-left: 5px;
}

.initials-settings {
  font-size: calc(var(--avatar-size-settings) / 2); /* 50% of parent */
  line-height: 1;
  position: relative;
  top: calc(var(--avatar-size-settings) / 4); /* 25% of parent */
}

.profile-top {
  display: flex;
  flex-direction: row;
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
        @include scaleheight(57);
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
</style>
