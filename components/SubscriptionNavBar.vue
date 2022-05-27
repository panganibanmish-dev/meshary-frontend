<template>
  <div class="signedInHeader">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light px-5 align-items-center">
        <NuxtLink class="navbar-brand" :to="localePath('/')">
          <div
            class="logo-image d-flex justify-content-center align-items-center"
          >
            <img src="~assets/images/logo.svg" class="img-fluid mt-3" />
          </div>
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss">
@import '../assets/css/vars.scss';
.logo-image {
  // width: 140px;
  @include scalewidth(140);
  // height: 30px;
  @include scaleheight(30);
}

:root {
  --avatar-size-header: 40px;
}

.navbar-light .navbar-nav .nav-link {
  color: #272d4e99;
}
.nav-link.btn-join a{
  color: #ffffff;
}
#auth-navbar {
  .nuxt-link-exact-active,
  .nuxt-link-active {
    color: #009ddd;
  }
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
  // @include scalewidth(48);
  // @include scaleheight(48);
  height: 48px;
  width:48px;
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
  padding: 15px 25px;
}

.header-profile-text {
  margin-left: 11px;
}

.signedInHeader {
  background: #ddeaf3;
}

.sub-menu {
  padding: .5rem;
  position: absolute;
  background-color: #fff;
  box-shadow: -2px 4px 45px rgb(0 0 0 / 5%);
  top: calc(100% + 10px);
  // width: max-content;
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

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #F0FBFF 0%, rgba(240, 251, 255, 0.6) 92.51%, rgba(240, 251, 255, 0) 100%);
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
  @include scalefont(16);
  @include scalelineheight(18);
  letter-spacing: 0.2px;
}

.modal-btn {
  font-weight: 600;
  padding: 0.275rem 1.5rem;
}
</style>
