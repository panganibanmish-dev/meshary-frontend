<template>
  <b-container>
    <!-- <div class="container-fluid"> -->

    <b-navbar
      class="align-items-center align-content-lg-center pt-4 pb-3"
      :class="navOpen ? 'nav-open' : ''"
      variant="faded"
      toggleable="xl"
      sticky
    >
      <b-container
        class="justify-content-start"
        :class="$t('translation') == 'arabic' ? 'flex-row-reverse' : ''"
      >
        <b-navbar-toggle
          class="hamburger-toggler border-0"
          target="nav-collapse"
          @click="navOpen = !navOpen"
        >
          <img src="~assets/images/hamburger-icon.svg" class="img-fluid" />
        </b-navbar-toggle>
        <b-navbar-toggle
          class="x-button border-0 pl-0"
          target="nav-collapse"
          style="position: absolute; right: 1rem; top: 1rem"
          @click="navOpen = !navOpen"
        >
          <img src="~assets/images/x-button.svg" class="img-fluid" />
        </b-navbar-toggle>
        <div class="b-navbar-brand text-md-left m-md-0">
          <NuxtLink class="navbar-brand d-flex m-auto" :to="localePath('/')">
            <div class="logo-image d-flex justify-content-left pl-3 pl-md-3 pl-lg-0">
              <img src="~assets/images/logo.svg" class="img-fluid" />
            </div>
          </NuxtLink>
        </div>

        <b-collapse
          id="nav-collapse"
          is-nav
          class="mt-4 mt-md-0"
          :class="
            $t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''
          "
        >
          <b-navbar-nav
            :class="
              $t('translation') == 'arabic' ? 'd-flex flex-row-reverse' : ''
            "
          >
            <b-nav-item :to="localePath('/seller')" @click="navOpen = false">
              {{ $t('navbar.for_seller') }}
            </b-nav-item>
            <b-nav-item :to="localePath('/j-buyer')" @click="navOpen = false">
              {{ $t('navbar.for_buyer') }}
            </b-nav-item>

            <b-nav-item :to="localePath('/advisor')" @click="navOpen = false">
              {{ $t('navbar.for_advisor') }}
            </b-nav-item>
            <b-nav-item :to="localePath('/j-premium')" @click="navOpen = false">
              {{ $t('navbar.premium') }}
            </b-nav-item>
            <b-nav-item :to="localePath('/aboutUs')" @click="navOpen = false">
              {{ $t('navbar.about_us') }}
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav
            class="align-items-start align-items-md-center"
            :class="
              $t('translation') == 'arabic'
                ? 'flex-row-reverse mr-auto'
                : 'ml-auto'
            "
          >
            <b-dropdown-divider
              class="d-block d-md-none my-4 w-100"
            ></b-dropdown-divider>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <!-- <a
                  role="button"
                  class="
                    nav-link
                    d-flex
                    place-items-center
                    align-items-center
                    cursor-pointer
                  "
                  @click="toggleLang = !toggleLang"
                > -->
                <img
                  class="lang-flag mb-1 mr-2"
                  :src="require(`~/assets/images/${$t('navbar.flag')}`)"
                  alt="lang"
                />
                <span>
                  {{ $t('navbar.language') }}
                </span>
                <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-down-fill mb-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                    /></svg> -->
                <!-- </a> -->
              </template>
              <b-dropdown-item
                class="
                  sub-menu-item
                  form-control
                  outline-0
                  border-0
                  w-100
                  fs-16
                  p-0
                "
                @click="navOpen = false"
                :to="switchLocalePath('ar')"
              >
                <img src="~assets/images/ar.svg" alt="ar" /> ar</b-dropdown-item
              >
              <b-dropdown-item
                class="sub-menu-item outline-0 border-0 w-100 fs-16 p-0"
                @click="navOpen = false"
                :to="switchLocalePath('en')"
                ><img src="~assets/images/en.svg" alt="lang" />
                en</b-dropdown-item
              >
            </b-nav-item-dropdown>

            <b-nav-item
              class="nav-link no-highlight p-0 pr-md-3"
              @click="navOpen = false"
              :to="localePath('/signin')"
            >
              {{ $t('navbar.login') }}
            </b-nav-item>

            <b-nav-item
              id="btn-join"
              class="btn-join no-highlight d-flex align-content-center"
              :to="localePath('/accounttype')"
              @click="navOpen = false"
            >
              {{ $t('navbar.join_us') }}
              <img
                class="d-inline d-md-none mb-1"
                src="~assets/images/arrow-right-blue.svg"
              />
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- <nav
      id="auth-navbar"
      class="container navbar navbar-expand-lg navbar-light align-items-center mx-auto px-4"
    >
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <NuxtLink class="navbar-brand" :to="localePath('/')">
        <div class="logo-image d-flex justify-content-center">
          <img src="~assets/images/logo.svg" class="img-fluid" />
        </div>
      </NuxtLink>
      
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="localePath('/seller')">{{
              $t('navbar.for_seller')
            }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="localePath('/j-buyer')">{{
              $t('navbar.for_buyer')
            }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="localePath('/advisor')">{{
              $t('navbar.for_advisor')
            }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="localePath('/j-premium')">{{
              $t('navbar.premium')
            }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="localePath('/aboutUs')">{{
              $t('navbar.about_us')
            }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="col-mb-6">
        <form class="form-inline my-2 my-lg-0">
          <ul class="nav navbar-nav flex-row align-items-center">
            <li class="nav-item avatar dropdown cursor-pointer">
              <div class="menu-item">
                <a
                  role="button"
                  class="
                    nav-link
                    d-flex
                    place-items-center
                    align-items-center
                    cursor-pointer
                  "
                  @click="toggleLang = !toggleLang"
                >
                  <img
                    class="lang-flag mb-1 mr-2"
                    :src="require(`~/assets/images/${$t('navbar.flag')}`)"
                    alt="lang" />
                  <span>
                    {{ $t('navbar.language') }}
                  </span>
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
                    /></svg
                ></a>
                <transition name="fade" appear>
                  <div
                    v-if="toggleLang"
                    v-on-clickaway="away"
                    class="sub-menu fs-16"
                  >
                    <NuxtLink
                      :to="switchLocalePath('ar')"
                      class="
                        dropdown-item
                        sub-menu-item
                        form-control
                        w-100
                        fs-16
                      "
                    >
                      <img src="~assets/images/ar.svg" alt="ar" /> ar</NuxtLink
                    >
                    <NuxtLink
                      :to="switchLocalePath('en')"
                      class="dropdown-item sub-menu-item w-100 fs-16"
                      ><img src="~assets/images/en.svg" alt="lang" />
                      en</NuxtLink
                    >
                  </div>
                </transition>
              </div>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link pr-3" :to="localePath('/signin')">{{
                $t('navbar.login')
              }}</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink
                class="btn-join nav-link"
                style="color: #ffffff"
                :to="localePath('/accounttype')"
                >{{ $t('navbar.join_us') }}</NuxtLink
              >
            </li>
          </ul>
        </form>
      </div>
    </nav> -->
    <!-- </div> -->
  </b-container>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [clickaway],
  data() {
    return {
      toggleLang: false,
      navOpen: false,
    }
  },
  mounted() {
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.toggleLang = false
      }
    },
    away() {
      this.toggleLang = false
    },
  },
}
</script>
<style lang="scss">
@import '../assets/css/vars.scss';
.navbar {
  // position: absolute;
  // height: 60px;
  @include scaleheight(65);
  left: 0px;
  right: 0px;
  top: -0.5px;
  background: #f0fbff;
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  @include scalefont(18);
  @include scalelineheight(22);
  display: flex;
  align-items: flex-end;
  color: #272d4e99;
  z-index: 9998;

  .dropdown-divider {
    border-top: 2px solid #e6f4f1;
    width: 95%;
  }

  @media screen and (max-width: 1199px) {
    font-size: 80.5%;
  }

  @media screen and (max-width: 991px) {
    font-size: 12px;
    font-weight: 750;
    color: #7d8195;

    .b-navbar-brand {
      text-align: left;
      margin: auto;
      img {
        margin-left: -1rem;
      }
    }
    &.nav-open {
      background: white;
      padding: 1rem;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      align-content: start;

      .b-navbar-brand {
        text-align: left;
        margin: 0;
        img {
          height: 21px;
          width: 95px;
          margin-left: 0;
        }
      }
    }

    .nav-item {
      &#btn-join.btn-join {
        background: transparent;
        color: #272d4e99;
        font-size: 12px;
        height: unset;
        width: unset;
        font-weight: 750;
      }
      &#btn-join a {
        color: #272d4e99;
      }
      .nav-link {
        padding-left: 1rem;
        background: unset;
        border-radius: 0;
        a {
          color: #272d4e99;
        }
      }
    }
    .nav-item:not(.no-highlight) {
      .nav-link.nuxt-link-exact-active.nuxt-link-active {
        background: #009ddd;
        border-radius: 6px;
        color: #ffffff;
        font-weight: 750;
      }
    }
  }
}

.logo-image {
  // width: 140px;
  @include scalewidth(140);
  // height: 30px;
  @include scaleheight(30);
}

.btn-join {
  /* width: 150px;
  height: 40px;
  left: 1253px;
  top: 30px; */
  background: #009ddd;
  border-radius: 40px;
  color: #ffffff;
  // height: 47px;
  @include scaleheight(47);
  // width: 120px;
  @include scalewidth(120);
  display: flex;
  place-items: center;
  justify-content: center;
  @include scalefont(18);
  a {
    color: #ffffff;
  }
  /* font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  @include scalefont(18);
  line-height: 22px;
  text-align: center;
  /* identical to box height */
}

#btn-join a {
  color: #ffffff;
}
.navbar-nav :active {
  color: #009ddd;
}

/* nav .navbar-nav li a .active{
  color: #009DDD !important;
} */

/* .navbar .navbar-nav li a {    
      color: #009DDD;
} */

.lang-flag {
  @include scalewidth(24);
  // height: 16px;
  @include scalelineheight(16);
}
// #auth-navbar {
// }

.navbar-light .navbar-nav .nav-link a {
  color: #272d4e99;
}

// button.hamburger-toggler {
//   position: absolute;
//   left: 1rem;
//   top: 1rem;
// }

button.hamburger-toggler.not-collapsed {
  display: none;
}

button.hamburger-toggler.collapsed + .x-button {
  display: none;
}
</style>
