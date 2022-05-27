<template>
  <div class="signedInHeader">
    <b-container>
      <nav class="navbar navbar-expand-lg navbar-light align-items-center">
        <b-container :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''">
          <NuxtLink 
            class="navbar-brand" 
            :class="$t('translation') == 'arabic' ? 'ml-3' : 'mr-3'"
            :to="localePath('/')"
          >
            <div
              class="
                logo-image
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <img src="~assets/images/logo.svg" class="img-fluid mt-2" />
            </div>
          </NuxtLink>
          <div id="navbarSupportedContent" class="collapse navbar-collapse" >
            <ul
              v-if="
                $auth.loggedIn &&
                $auth.user.roles.length &&
                $store.state.role.selectedRole === 'Seller'
              "
              class="navbar-nav"
              style="padding-left:50px padding-right:50px margin-left:50px margin-right:50px"
              :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse ml-auto' : 'mr-auto'"
            >
              <li class="nav-item" :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'">
                <NuxtLink
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/startups')"
                >
                  <img
                    src="~assets/images/nav-mystartups-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.my_startup') }}</span>
                </NuxtLink>
              </li>
              <!-- <li class="nav-item">
                  <NuxtLink class="nav-link" :to="localePath('/metrics')">
                    {{ $t('navbar.metrics') }}
                  </NuxtLink>
                </li> -->
              <li class="nav-item" :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'">
                <!-- <a class="nav-link" href="#">Messages</a> -->
                <NuxtLink
                  v-if="
                    $auth.user.roles.length &&
                    $store.state.role.selectedRole === 'Seller'
                  "
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/messages/buyer')"
                >
                  <img
                    src="~assets/images/nav-message-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.messages') }}</span>
                </NuxtLink>
                <NuxtLink
                  v-else-if="
                    $auth.user.roles.length &&
                    $store.state.role.selectedRole === 'Buyer'
                  "
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/messages/seller')"
                >
                  <img
                    src="~assets/images/nav-message-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.messages') }}</span>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/messages/seller')"
                >
                  <img
                    src="~assets/images/nav-message-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.messages') }}</span>
                </NuxtLink>
              </li>
              <li class="nav-item" :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'">
                <!-- <a class="nav-link" href="#">Marketplace</a> -->
                <NuxtLink
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/marketplace')"
                >
                  <img
                    src="~assets/images/nav-marketplace-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.marketplace') }}</span>
                </NuxtLink>
              </li>
              <li class="nav-item" :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'">
                <!-- <a class="nav-link" href="#">Advisors</a> -->
                <NuxtLink
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/advisors')"
                >
                  <img
                    src="~assets/images/nav-advisors-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.advisors') }}</span>
                </NuxtLink>
              </li>
              <li class="nav-item" :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'">
                <!-- <a class="nav-link" href="#">Resources</a> -->
                <!-- <NuxtLink
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :to="localePath('/resources')"
                >
                  <img
                    src="~assets/images/nav-resources-icon.svg"
                    class="navlink-icon img-fluid mr-1"
                  />
                  <span>{{ $t('navbar.resources') }}</span>
                </NuxtLink> -->
                <a
                  role="button"
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  @click="toggleResources_1 = !toggleResources_1"
                >
                  <img
                    src="~assets/images/nav-resources-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.resources') }}</span>
                </a>
                <transition name="fade" appear>
                  <div
                    v-if="toggleResources_1"
                    v-on-clickaway="away_resources_1"
                    class="sub-menu"
                  >
                    <a role="button" class="dropdown-item sub-menu-item">
                      Tutorials
                    </a>
                    <a role="button" class="dropdown-item sub-menu-item">
                      Community
                    </a>
                    <a role="button" class="dropdown-item sub-menu-item">
                      Legal Docs
                    </a>
                    <a role="button" class="dropdown-item sub-menu-item">
                      Banking
                    </a>
                    <a role="button" class="dropdown-item sub-menu-item">
                      Raise Fund
                    </a>
                  </div>
                </transition>
              </li>
            </ul>
            <ul
              v-else-if="
                $auth.loggedIn &&
                $auth.user.roles.length &&
                $store.state.role.selectedRole === 'Buyer'
              "
              class="navbar-nav"
              :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse ml-auto' : 'mr-auto'"
            >
              <li class="nav-item" :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'">
                <!-- <a class="nav-link active" href="/dashboard">My Startup</a> -->
                <NuxtLink
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/marketplace')"
                >
                  <img
                    src="~assets/images/nav-marketplace-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.marketplace') }}</span>
                </NuxtLink>
              </li>
              <li class="nav-item" :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'">
                <!-- <a class="nav-link" href="#">Messages</a> -->
                <NuxtLink
                  v-if="
                    $auth.user.roles.length &&
                    $store.state.role.selectedRole === 'Seller'
                  "
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/messages/buyer')"
                >
                  <img
                    src="~assets/images/nav-message-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.messages') }}</span>
                </NuxtLink>
                <NuxtLink
                  v-else-if="
                    $auth.user.roles.length &&
                    $store.state.role.selectedRole === 'Buyer'
                  "
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/messages/seller')"
                >
                  <img
                    src="~assets/images/nav-message-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.messages') }}</span>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/messages/seller')"
                >
                  <img
                    src="~assets/images/nav-message-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.messages') }}</span>
                </NuxtLink>
              </li>
              <li
                v-if="!$auth.user.subscriptions.length"
                class="nav-item"
                :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'"
              >
                <!-- <a class="nav-link" href="#">Marketplace</a> -->
                <NuxtLink
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/subscription/plan')"
                >
                  <img
                    src="~assets/images/nav-upgradeToPremium-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">Upgrade to premium</span>
                </NuxtLink>
              </li>
              <li class="nav-item" :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'">
                <!-- <a class="nav-link" href="#">Marketplace</a> -->
                <NuxtLink
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/currency')"
                >
                  <img
                    src="~assets/images/nav-currency-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">Currency</span>
                </NuxtLink>
              </li>
              <li class="nav-item" :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'">
                <!-- <a class="nav-link" href="#">Resources</a> -->
                <!-- <NuxtLink
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :to="localePath('/resources')"
                >
                  <img
                    src="~assets/images/nav-resources-icon.svg"
                    class="img-fluid mr-1"
                  />
                  {{ $t('navbar.resources') }}
                </NuxtLink> -->
                <a
                  role="button"
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  @click="toggleResources_2 = !toggleResources_2"
                >
                  <img
                    src="~assets/images/nav-resources-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.resources') }}</span>
                </a>
                <transition name="fade" appear>
                  <div
                    v-if="toggleResources_2"
                    v-on-clickaway="away_resources_2"
                    class="sub-menu"
                  >
                    <a role="button" class="dropdown-item sub-menu-item">
                      Tutorials
                    </a>
                    <a role="button" class="dropdown-item sub-menu-item">
                      Community
                    </a>
                    <a role="button" class="dropdown-item sub-menu-item">
                      Legal Docs
                    </a>
                    <a role="button" class="dropdown-item sub-menu-item">
                      Banking
                    </a>
                    <a role="button" class="dropdown-item sub-menu-item">
                      Raise Fund
                    </a>
                  </div>
                </transition>
              </li>
            </ul>
            <ul
              v-else-if="
                $auth.loggedIn &&
                $auth.user.roles.length &&
                $store.state.role.selectedRole === 'Advisor'
              "
              class="navbar-nav"
              :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse ml-auto' : 'mr-auto'"
            >
              <li class="nav-item" :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'">
                <!-- <a class="nav-link active" href="/dashboard">My Startup</a> -->
                <NuxtLink
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/marketplace')"
                >
                  <img
                    src="~assets/images/nav-marketplace-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.marketplace') }}</span>
                </NuxtLink>
              </li>
              <li class="nav-item" :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'">
                <!-- <a class="nav-link" href="#">Messages</a> -->
                <NuxtLink
                  v-if="
                    $auth.user.roles.length &&
                    $store.state.role.selectedRole === 'Seller'
                  "
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/messages/buyer')"
                >
                  <img
                    src="~assets/images/nav-message-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.messages') }}</span>
                </NuxtLink>
                <NuxtLink
                  v-else-if="$store.state.role.selectedRole === 'Buyer'"
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/messages/seller')"
                >
                  <img
                    src="~assets/images/nav-message-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.messages') }}</span>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/messages/seller')"
                >
                  <img
                    src="~assets/images/nav-message-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.messages') }}</span>
                </NuxtLink>
              </li>
              <!-- <li class="nav-item">
                  <NuxtLink class="nav-link" :to="localePath('/sellers')">
                    {{ $t('navbar.sellers') }}
                  </NuxtLink>
                </li> -->
              <li class="nav-item" :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'">
                <!-- <a class="nav-link" href="#">Marketplace</a> -->
                <NuxtLink
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/clients')"
                >
                  <img
                    src="~assets/images/nav-myClients-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">My Clients</span>
                </NuxtLink>
              </li>
              <li class="nav-item" :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'">
                <!-- <a class="nav-link" href="#">Marketplace</a> -->
                <NuxtLink
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  :to="localePath('/currency')"
                >
                  <img
                    src="~assets/images/nav-currency-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">Currency</span>
                </NuxtLink>
              </li>
              <li class="nav-item" :class="$t('translation') == 'arabic' ? 'ml-2' : 'mr-2'">
                <!-- <a class="nav-link" href="#">Resources</a> -->
                <!-- <NuxtLink
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :to="localePath('/resources')"
                >
                  <img
                    src="~assets/images/nav-resources-icon.svg"
                    class="img-fluid mr-1"
                  />
                  {{ $t('navbar.resources') }}
                </NuxtLink> -->
                <a
                  role="button"
                  class="
                    nav-link
                    navbar-link
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :class="$t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''"
                  @click="toggleResources_3 = !toggleResources_3"
                >
                  <img
                    src="~assets/images/nav-resources-icon.svg"
                    class="navlink-icon img-fluid"
                    :class="$t('translation') == 'arabic' ? 'ml-1' : 'mr-1'"
                  />
                  <span class="mt-2">{{ $t('navbar.resources') }}</span>
                </a>
                <transition name="fade" appear>
                  <div
                    v-if="toggleResources_3"
                    v-on-clickaway="away_resources_3"
                    class="sub-menu"
                  >
                    <a role="button" class="dropdown-item sub-menu-item">
                      Tutorials
                    </a>
                    <a role="button" class="dropdown-item sub-menu-item">
                      Community
                    </a>
                    <a role="button" class="dropdown-item sub-menu-item">
                      Legal Docs
                    </a>
                    <a role="button" class="dropdown-item sub-menu-item">
                      Banking
                    </a>
                    <a role="button" class="dropdown-item sub-menu-item">
                      Raise Fund
                    </a>
                  </div>
                </transition>
              </li>
            </ul>
          </div>
          <div v-if="$auth.loggedIn" class="col-mb-6">
            <UserIcon />
          </div>
          <div v-else class="col-mb-6">
            <AuthButtons />
          </div>
        </b-container>
      </nav>
    </b-container>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [clickaway],
  data() {
    return {
      toggleResources_1: false,
      toggleResources_2: false,
      toggleResources_3: false,
    }
  },
  mounted() {
    const selectedRole = localStorage.getItem('selectedRole')
    if (selectedRole && selectedRole !== this.$store.state.role.selectedRole) {
      this.$store.commit('role/setRole', selectedRole)
    }
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.toggleResources_1 = false
        this.toggleResources_2 = false
        this.toggleResources_3 = false
      }
    },
    away_resources_1() {
      this.toggleResources_1 = false
    },
    away_resources_2() {
      this.toggleResources_2 = false
    },
    away_resources_3() {
      this.toggleResources_3 = false
    },
  },
}
</script>

<style lang="scss">
@import '../assets/css/vars.scss';
.navbar {
  position: fixed;
  margin-top: 0;
  // padding: 0.5rem 6.5rem;
}

.navbar-brand {
  margin-right: 2rem;
}

.nav-item {
  margin-right: 0;
  @media screen and (min-width: 992px) {
    margin-right: 2rem;
  }
}

.navlink-icon {
  @include scaleheight(24);
  @include scalewidth(24);
}

.navbar-light .navbar-nav .nav-link {
  color: #272d4e99;
}

.logo-image {
  // width: 140px;
  @include scalewidth(140);
  // height: 30px;
  @include scaleheight(30);
}

:root {
  --avatar-size-header: 40px;
}

.circle-header-dropdown {
  background: #e3ebfd;
  border-radius: 50%;
  height: var(--avatar-size-header);
  text-align: center;
  width: var(--avatar-size-header);
}

.circle-header {
  background: #e3ebfd;
  border-radius: 50%;
  height: var(--avatar-size-header);
  text-align: center;
  // width: var(--avatar-size-header);
  @include scalewidth(48);
  @include scaleheight(48);
}

.initials-header {
  font-size: calc(var(--avatar-size-header) / 2);
  line-height: 1;
  position: relative;
  top: calc(var(--avatar-size-header) / 4);
}

.profile-top-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 17px;
}

.header-profile-text {
  margin-left: 11px;
}

.signedInHeader {
  background: #ffffff;
}

.sub-menu {
  padding: 0.5rem;
  position: absolute;
  background-color: #fff;
  box-shadow: -2px 4px 45px rgb(0 0 0 / 5%);
  top: calc(100% + 10px);
  width: max-content;
  z-index: 100;
}

.sub-menu-item {
  padding: 0.5rem 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal-mask-nav {
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

.modal-body {
  padding: 1.75rem;
  font-style: normal;
  font-size: 24px;
  line-height: 18px;
  letter-spacing: 0.2px;
}

.modal-btn {
  font-weight: 600;
  padding: 0.275rem 1.5rem;
}

.navbar-link {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  @include scalefont(14);
  @include scalelineheight(17);
  color: #272d4e;
}

.navbar .btn-join {
  font-weight: 500;
}

#navbarSupportedContent {
  .nuxt-link-exact-active,
  .nuxt-link-active {
    color: #009ddd;
  }
}
</style>
