<template>
  <ul class="nav navbar-nav flex-row d-flex align-items-center mt-3" :class="$t('translation') == 'arabic' ? 'flex-row-reverse' : ''">
    <li class="nav-item avatar dropdown">
      <div class="menu-item">
        <a role="button" class="nav-link" @click="handleToggleLang"
          ><img
            class="lang-flag mb-1 mr-2"
            :src="require(`~/assets/images/${$t('navbar.flag')}`)"
            alt="lang"
          />
          <span>{{ $t('navbar.language') }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-down-fill mb-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
            />
          </svg>
        </a>
        <transition name="fade" appear>
          <div v-if="toggleLang" v-on-clickaway="away_lang" class="sub-menu">
            <NuxtLink
              :to="switchLocalePath('ar')"
              class="dropdown-item sub-menu-item"
              ><img src="~assets/images/ar.svg" alt="ar" /> ar</NuxtLink
            >
            <NuxtLink
              :to="switchLocalePath('en')"
              class="dropdown-item sub-menu-item"
              ><img src="~assets/images/en.svg" alt="lang" /> en</NuxtLink
            >
          </div>
        </transition>
      </div>
    </li>
    <div v-if="$auth.user.subscriptions.length" class="nav-item premium-badge">
      <img src="~assets/images/premium-badge.svg" alt="" />
    </div>
    <li class="nav-item avatar dropdown ml-3">
      <div class="menu-item">
        <span role="button" @click="handleToggleIsOpen">
          <div class="d-flex align-items-center">
            <!-- <img v-if="$auth.user.photos" :src="$auth.user.photos.thumbnail" class="img-fluid" />
            <img v-else src="~assets/images/user-avatar.svg" class="img-fluid" /> -->
            <div class="circle-header">
              <img
                v-if="$auth.user.photos"
                :src="$auth.user.photos.thumbnail"
                class="img-fluid"
              />
              <img
                v-else
                src="~assets/images/user-avatar.svg"
                class="img-fluid"
              />
            </div>
            <div class="ml-2">
              <div class="navbar-profile-details-name">
                <!-- {{ $auth.user.profile.first_name }}
                {{ $auth.user.profile.last_name }} -->
                {{ truncateText(`${$auth.user.profile.first_name} ${$auth.user.profile.last_name}`, 23) }}
              </div>
              <div class="navbar-profile-details-usertype">
                {{ $store.state.role.selectedRole }}
              </div>
            </div>
          </div>
        </span>
        <transition name="fade" appear>
          <div
            v-if="isOpen"
            v-on-clickaway="away_isOpen"
            id="user-icon-dropdown"
            class="sub-menu navbar-profile-dropdown-div"
          >
            <div class="profile-top-header">
              <img
                v-if="$auth.user.photos"
                :src="$auth.user.photos.thumbnail"
                class="img-fluid"
              />
              <img
                v-else
                src="~assets/images/user-avatar.svg"
                class="img-fluid"
              />
              <div class="header-profile-text pt-3">
                <div class="fs-14 lh-19 mb-1">
                  {{ $auth.user.profile.first_name }}
                  {{ $auth.user.profile.last_name }}
                </div>
                <div class="text-light fs-12">
                  <button
                    class="role-select-btn text-primary fs-14 lh-18 mb-2"
                    @click="roleSelect = !roleSelect"
                  >
                    {{
                      roleSelect
                        ? 'Select Role'
                        : $store.state.role.selectedRole
                    }}
                  </button>
                </div>
                <ul
                  id="role-select"
                  class="role-select"
                  :style="`display: ${roleSelect ? 'block' : 'none'}`"
                >
                  <li
                    v-for="role in $auth.user.roles"
                    :key="role.id"
                    class="my-2 fs-14"
                    @click="setRole(role.name)"
                  >
                    <img
                      height="25px"
                      width="17px"
                      class="mr-2"
                      src="~/assets/images/role-icon.svg"
                      alt=""
                    />{{ role.name }}
                  </li>
                </ul>
                <hr class="mb-1 mt-1" />
                <div class="d-flex justify-content-end">
                  <NuxtLink
                    class="dropdown-item sub-menu-item w-auto fs-12"
                    :to="localePath('/settings')"
                    >Account Settings</NuxtLink
                  >
                  <a
                    id="show-modal"
                    class="dropdown-item sub-menu-item w-auto fs-12"
                    @click="showModal = true"
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
            <div class="header-role-add">
              <span v-if="!hasRole('Seller')" @click="setNewRole('Seller')">
                <img src="~/assets/images/role-icon.svg" alt="" /> I want to
                sell a Startup
              </span>
              <span v-if="!hasRole('Buyer')" @click="setNewRole('Buyer')">
                <img src="~/assets/images/role-icon.svg" alt="" /> I want to buy
                a Startup
              </span>
              <span v-if="!hasRole('Advisor')" @click="setNewRole('Advisor')">
                <img src="~/assets/images/role-icon.svg" alt="" /> I want to
                Advise
              </span>
            </div>
          </div>
        </transition>
      </div>
    </li>
    <div v-if="confirmModal">
      <transition name="modal">
        <div class="modal-mask-nav">
          <div id="logout-modal" class="modal-wrapper">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content modal-logout px-5 pb-3 pt-4">
                <div class="modal-body p-0">
                  <b><p class="text-logout">Add Role</p></b>
                  <p class="p-want-logout">
                    Are you sure you want to be a {{ newRole }}
                  </p>
                </div>
                <div class="modal-footer px-0 d-flex justify-content-between">
                  <button
                    type="button"
                    class="btn btn btn-modal-cancel"
                    @click="confirmModal = false"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary btn-modal-logout"
                    @click="addNewRole"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask-nav">
          <div id="logout-modal" class="modal-wrapper">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content modal-logout px-5 pb-3 pt-4">
                <div class="modal-body p-0">
                  <b><p class="text-logout">Log out</p></b>
                  <p class="p-want-logout">Are you sure you want to log out?</p>
                </div>
                <div class="modal-footer px-0 d-flex justify-content-between">
                  <button
                    type="button"
                    class="btn btn btn-modal-cancel"
                    @click="showModal = false"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary btn-modal-logout"
                    @click="logout"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </ul>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [clickaway],
  data() {
    return {
      isOpen: false,
      showModal: false,
      toggleLang: false,
      roleSelect: false,
      newRole: '',
      confirmModal: false,
    }
  },
  mounted() {
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  },
  methods: {
    setNewRole(role) {
      this.newRole = role
      this.confirmModal = true
    },
    addNewRole() {
      this.$axios
        .post(`/api/roles/${this.newRole}`, {
          role: this.newRole,
        })
        .then((response) => {
          this.setRole(this.newRole)
          this.$auth.setUser(response.data.data)
        })

      this.confirmModal = false
    },
    hasRole(role) {
      return this.$auth.user.roles.find((r) => r.name === role)
    },
    setRole(role) {
      localStorage.setItem('selectedRole', role)
      this.$store.commit('role/setRole', role)
      this.roleSelect = false
      if (
        role === 'Seller' &&
        this.$route.path !== this.localePath('/startups')
      ) {
        this.$router.push(this.localePath('/startups'))
      } else if (
        role !== 'Seller' &&
        this.$route.path !== this.localePath('/marketplace')
      ) {
        this.$router.push(this.localePath('/marketplace'))
      }
    },
    async logout() {
      localStorage.removeItem('selectedRole')
      await this.$auth.logout()
      this.$router.push(this.localePath('signin'))
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.toggleLang = false
        this.showModal = false
        this.isOpen = false
      }
    },
    handleToggleLang() {
      this.toggleLang = !this.toggleLang
      this.showModal = false
      this.isOpen = false
    },
    handleToggleIsOpen() {
      this.toggleLang = false
      this.showModal = false
      this.isOpen = !this.isOpen
    },
    away_lang() {
      this.toggleLang = false
    },
    away_isOpen() {
      this.isOpen = false
    },
    /* eslint-disable object-shorthand */
    truncateText: function (text, length) {
      if (text.length > length) {
        return text.substring(0, length) + '...'
      } else {
        return text
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/vars.scss';

.header-role-add {
  padding: 0 17px;
  font-size: 14px;
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.navbar-profile-dropdown-div > .profile-top-header {
  align-items: flex-start;
}

.premium-badge {
  margin-right: 0.5rem;
}

.premium-badge img {
  height: 25px;
}

.circle-header {
  position: relative;
  // width: 200px;
  // height: 200px;
  overflow: hidden;
  border-radius: 50%;
}

.circle-header > img,
.profile-top-header > img {
  // @include scalewidth(48);
  // @include scaleheight(48);
  height: 48px;
  width: 48px;
  border-radius: 50%;
}

#user-icon-dropdown {
  .circle-header > img,
  .profile-top-header > img {
    @include scalewidth(70);
    @include scaleheight(70);
    height: auto;
    border-radius: 50%;
  }
}

// .circle-header > img,
// .profile-top-header > img {
//   border-radius: 30%;
// }

.navbar-profile-dropdown-div {
  border-radius: 5px;
  right: 0;
  a {
    cursor: pointer;
  }
}

.navbar-profile-dropdown-a {
  text-decoration: none;
}

.navbar-profile-details-name {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  @include scalefont(14);
  // line-height: 17px;
  @include scalelineheight(17);
  color: #1b2b41;
}

.navbar-profile-details-usertype {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  @include scalefont(12);
  // line-height: 20px;
  @include scalelineheight(20);
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.4;
}

#logout-modal {
  .modal-dialog {
    max-width: 630px;
  }
  .modal-logout {
    // @include scaleheight(277);
    // @include scalewidth(636);
    background: #ffffff;
    box-shadow: 0px 20px 60px rgba(2, 131, 233, 0.1);
    border-radius: 15px;
    border: 0;
    .modal-footer {
      margin-top: 2rem;
      padding-top: 1.5rem;
    }
  }
}

.text-logout {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 750;
  @include scalefont(32);
  @include scalelineheight(38);
  display: flex;
  align-items: center;
  text-align: center;
  color: #009ddd;
}
.p-want-logout {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 350;
  @include scalefont(16);
  @include scalelineheight(19);
  /* identical to box height */
  display: flex;
  align-items: center;
  /* Secondary Text (Light) */
  color: rgba(27, 43, 65, 0.72);
}
.btn-modal-logout {
  width: 150px;
  height: 56px;
  left: 841px;
  top: 401px;
  background: #009ddd;
  border-radius: 4px;
}
.btn-modal-cancel {
  width: 150px;
  height: 56px;
  left: 841px;
  top: 401px;
  background: #ffffff;
  border-radius: 4px;
}

.role-select-btn {
  background-color: #fff;
  border: none;
  cursor: pointer;
  padding: 0;
}

.active,
.collapsible:hover {
  background-color: #555;
}

.role-select {
  display: none;
  overflow: hidden;
  padding: 0;
}

.role-select > li {
  cursor: pointer;
}
</style>
