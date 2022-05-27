<template>
  <div
            v-if="isOpen"
            v-on-clickaway="away_isOpen"
            class="sub-menu navbar-profile-dropdown-div"
          >
            <div class="profile-top-header align-items-start">
              <img
                v-if="$auth.user.photos"
                :src="$auth.user.photos.thumbnail"
                class="img-fluid mr-3"
              />
              <img
                v-else
                src="~assets/images/user-avatar.svg"
                class="img-fluid mr-3"
              />
              <div class="header-profile-text w-100">
                <div>{{ $auth.user.email }}</div>
                <div>
                  {{ $auth.user.roles ? $store.state.role.selectedRole : '' }}
                </div>
                <div class="header-profile-control-border w-100 mt-3 pt-3">
                  <div class="d-flex w-75 ml-auto">
                    <NuxtLink
                      class="dropdown-item sub-menu-item w-fit"
                      :to="localePath('/settings')"
                      >Account Settings</NuxtLink
                    >
                    <a
                      id="show-modal"
                      class="dropdown-item sub-menu-item w-fit"
                      @click="showModal = true"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Nutlink>I want to buy a Startup</Nutlink>
              <Nutlink>I want to Advice</Nutlink>
            </div>
          </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header-profile-control-border {
  border-top: 1px solid rgba(28, 55, 90, 0.16);
}

.profile-top-header > img {
  @include scaleheight(78);
  @include scalewidth(78);
}

.navbar-profile-dropdown-div {
  min-width: 550px;
  right: 0;
}
</style>