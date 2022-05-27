<template>
  <div class="row">
    <div class="col-sm-12 mb-4 d-flex justify-content-between flex-column flex-lg-row px-0">
      <div class="container-fluid d-flex justify-content-start">
        <div class="row ">
          <div class="col mb-3 mb-md-0">
            <B-dropdown
              id="dropdown-1"
              ref="dropdown"
              class="message-tab justify-content-center text-center"
              variant="light"
              no-caret
            >
              <template #button-content>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-filter-left mr-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                Sort
              </template>
              <B-dropdown-form class="p-0" @submit.prevent="">
                <b-form-group v-slot="{ ariaDescribedby }" class="pt-3 px-3">
                  <b-form-radio
                    v-model="sortNewest"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    :value="true"
                    >Date Listed: Newest</b-form-radio
                  >
                  <b-form-radio
                    v-model="sortNewest"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    :value="false"
                    >Date Listed: Oldest</b-form-radio
                  >
                </b-form-group>
                <B-dropdown-divider></B-dropdown-divider>
                <div class="d-flex justify-content-between px-3" content-cols="2">
                  <B-button
                    class="dropdown-form-control bg-transparent border-0"
                    variant="light"
                    @click="handleDropdownClear"
                    >Cancel</B-button
                  >
                  <B-button
                    class="
                      btn-apply
                      dropdown-form-control
                      bg-transparent
                      border-0
                    "
                    type="submit"
                    variant="light"
                    @click="handleApplySort"
                    >Apply</B-button
                  >
                </div>
              </B-dropdown-form>
            </B-dropdown>
          </div>
          <div class="col mb-3 mb-md-0">
            <B-dropdown
              id="dropdown-2"
              ref="dropdown"
              class="message-tab justify-content-center text-center"
              variant="light"
            >
              <template #button-content> Private Info </template>
              <B-dropdown-form class="p-0" @submit.prevent="">
                <b-form-group v-slot="{ ariaDescribedby }" class="pt-3 px-3">
                  <b-form-radio
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="A"
                  >
                    Access Requested
                  </b-form-radio>
                  <b-form-radio
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="B"
                    >Access Rejected</b-form-radio
                  >
                  <b-form-radio
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="A"
                  >
                    Access Given
                  </b-form-radio>
                  <b-form-radio
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="B"
                    >Access Suspended</b-form-radio
                  >
                </b-form-group>
                <B-dropdown-divider></B-dropdown-divider>
                <div
                  class="d-flex justify-content-between px-3 m-auto"
                  content-cols="2"
                >
                  <B-button
                    class="dropdown-form-control bg-transparent border-0"
                    variant="light"
                    >Cancel</B-button
                  >
                  <B-button
                    class="
                      btn-apply
                      dropdown-form-control
                      bg-transparent
                      border-0
                    "
                    type="submit"
                    variant="light"
                    >Apply</B-button
                  >
                </div>
              </B-dropdown-form>
            </B-dropdown>
          </div>
          <div class="col mb-3 mb-md-0">
            <B-dropdown
              id="dropdown-2"
              ref="dropdown"
              class="message-tab justify-content-center text-center"
              variant="light"
            >
              <template #button-content> User Status </template>
              <B-dropdown-form class="p-0" @submit.prevent="">
                <b-form-group v-slot="{ ariaDescribedby }" class="pt-3 px-3">
                  <b-form-radio
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="A"
                  >
                    Online
                  </b-form-radio>
                  <b-form-radio
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="B"
                    >Away</b-form-radio
                  >
                  <b-form-radio
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="A"
                  >
                    Not Available
                  </b-form-radio>
                </b-form-group>
                <B-dropdown-divider></B-dropdown-divider>
                <div class="d-flex justify-content-between px-3" content-cols="2">
                  <B-button
                    class="dropdown-form-control bg-transparent border-0"
                    variant="light"
                    >Cancel</B-button
                  >
                  <B-button
                    class="
                      btn-apply
                      dropdown-form-control
                      bg-transparent
                      border-0
                    "
                    type="submit"
                    variant="light"
                    >Apply</B-button
                  >
                </div>
              </B-dropdown-form>
            </B-dropdown>
          </div>
          <div class="col mb-3 mb-md-0">
            <B-button
              class="message-tab justify-content-center text-center"
              role="button"
              variant="light"
              @click="handleShowFavourite"
            >
              <div
                class="
                  form-group
                  d-flex
                  flex-row
                  justify-content-between
                  align-items-center
                  m-auto
                "
              >
                <!-- <input
                  type="checkbox"
                  class="mr-2 bg-transparent"
                  name="showFavourites"
                  :checked="favouritesIsChecked"
                /> -->
                <img v-if="favouritesIsChecked" src="~assets/images/favorites-checked.svg" class="mr-2" />
                <img v-else src="~assets/images/favorites-unchecked.svg" class="mr-2" />
                Favourites
              </div>
            </B-button>
          </div>
        </div>
      </div>
      <!-- <div class="d-flex justify-content-start col-md-8">
        <div class="col-sm-2">
          <div class="dropdown">
            <a class="message-tab" role="button" @click="toggleSort">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-filter-left"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              Sort
            </a>
            <transition name="fade" appear>
              <div v-if="sortIsOpen" class="tabs-sub-menu tab-sort">
                <br />
                <div class="tabs-sub-menu-item input-radio">
                  <input
                    id="sortNewestTrue"
                    type="radio"
                    name="sortDate"
                    :value="true"
                    class="form-check-input"
                    @click="handleSetNewest"
                  />
                  <label class="form-check-label" for="sortNewestTrue"
                    >Date Listed: Newest</label
                  >
                </div>
                <div class="tabs-sub-menu-item input-radio">
                  <input
                    id="sortNewestFalse"
                    type="radio"
                    name="sortDate"
                    :value="false"
                    class="form-check-input"
                    @click="handleSetOldest"
                  />
                  <label class="form-check-label" for="sortNewestFalse"
                    >Date Listed: Oldest</label
                  >
                </div>
                <br />
              </div>
            </transition>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="dropdown">
            <a class="message-tab" role="button" @click="togglePrivateInfo">
              Private Info
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
              </svg>
            </a>
            <transition name="fade" appear>
              <div
                v-if="privateInfoIsOpen"
                class="tabs-sub-menu tab-startupType"
              >
                <div class="tabs-sub-menu-item">
                  <div class="tabs-sub-menu-item input-radio">
                    <input
                      id="sortNewestTrue"
                      type="radio"
                      name="sortDate"
                      :value="true"
                      class="form-check-input"
                      @click="handleSetAccessRequested"
                    />
                    <label class="form-check-label" for="sortNewestTrue"
                      >Access Requested</label
                    >
                  </div>
                  <div class="tabs-sub-menu-item input-radio">
                    <input
                      id="sortNewestTrue"
                      type="radio"
                      name="sortDate"
                      :value="true"
                      class="form-check-input"
                      @click="handleSetNewest"
                    />
                    <label class="form-check-label" for="sortNewestTrue"
                      >Access Rejected</label
                    >
                  </div>
                  <div class="tabs-sub-menu-item input-radio">
                    <input
                      id="sortNewestTrue"
                      type="radio"
                      name="sortDate"
                      :value="true"
                      class="form-check-input"
                      @click="handleSetNewest"
                    />
                    <label class="form-check-label" for="sortNewestTrue"
                      >Access Given</label
                    >
                  </div>
                  <div class="tabs-sub-menu-item input-radio">
                    <input
                      id="sortNewestTrue"
                      type="radio"
                      name="sortDate"
                      :value="true"
                      class="form-check-input"
                      @click="handleSetNewest"
                    />
                    <label class="form-check-label" for="sortNewestTrue"
                      >Access Suspended</label
                    >
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <a
                        role="button"
                        class="btn btn-light mr-1"
                        @click="handleCancelPrivateInfo"
                        >Cancel</a
                      >
                    </div>
                    <div class="col-md-8 d-flex justify-content-end">
                      <a
                        role="button"
                        class="btn btn-light mr-1"
                        @click="handleSetPrivateInfo"
                        >Apply</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="dropdown">
            <a class="message-tab" role="button" @click="toggleUserStatus">
              User Status
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
              </svg>
            </a>
            <transition name="fade" appear>
              <div v-if="UserStatusIsOpen" class="tabs-sub-menu tab-priceRange">
                <div class="tabs-sub-menu-item">
                  <div class="tabs-sub-menu-item input-radio">
                    <input
                      id="OnlineUser"
                      type="radio"
                      name="onlineUser"
                      :value="true"
                      class="form-check-input"
                      @click="handleSetOnline"
                    />
                    <label class="form-check-label" for="OnlineUser"
                      >Online</label
                    >
                  </div>
                  <div class="tabs-sub-menu-item input-radio">
                    <input
                      id="AwayUser"
                      type="radio"
                      name="awayUser"
                      :value="true"
                      class="form-check-input"
                      @click="handleSetOffline"
                    />
                    <label class="form-check-label" for="AwayUser">Away</label>
                  </div>
                  <div class="tabs-sub-menu-item input-radio">
                    <input
                      id="NotAvailableUser"
                      type="radio"
                      name="notAvailable"
                      :value="true"
                      class="form-check-input"
                      @click="handleSetNotAvailable"
                    />
                    <label class="form-check-label" for="NotAvailableUser"
                      >Not Available</label
                    >
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <a
                        role="button"
                        class="btn btn-light mr-1"
                        @click="handleCancelUserStatus"
                        >Cancel</a
                      >
                    </div>
                    <div class="col-md-8 d-flex justify-content-end">
                      <a
                        role="button"
                        class="btn btn-light mr-1"
                        @click="handleSetUserStatus"
                        >Apply</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div class="col-sm-2">
          <a
            class="message-tab"
            style="position: relative"
            role="button"
            @click="handleShowFavourite"
          >
            <input
              v-if="favouritesIsChecked"
              :value="favouritesIsChecked"
              type="checkbox"
              class="form-check-input message-favourites"
              name="showFavourites"
              checked
            />Favourites
          </a>
        </div>
      </div> -->
      <!-- <div class="d-flex justify-content-end col-md-3">
        <div class="input-group justify-content-end">
          <input
            v-model="searchUser"
            type="text"
            class="form-control search-user"
            placeholder="Search..."
          />
        </div>
      </div> -->
      <!-- <div class="d-flex justify-content-end col-12 col-md-3 mt-3 mt-lg-0">
        <b-input-group class="form-control search-user-input-group">
          <template #prepend>
            <transition name="fade" appear>
              <svg
                v-show="searchInput == ''"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#9A9EA6"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </transition>
          </template>
          <b-form-input
            v-model="searchInput"
            class="border-0 bg-transparent shadow-none"
            placeholder="Search..."
          ></b-form-input>
        </b-input-group>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    privateInfo: {
      type: Array,
      default: () => [],
    },
    // startupTypes: {
    //   type: Array,
    //   default: () => [],
    // },
    // selectedStartupTypes: {
    //   type: Array,
    //   default: () => [],
    // },
    showFavourites: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sortIsOpen: false,
      sortNewest: true,
      privateInfoIsOpen: false,
      // startupTypeSelection: [],
      UserStatusIsOpen: false,
      favouritesIsChecked: this.showFavourites,
      searchInput: '',
      // moreFiltersModalIsOpen: false,
      // priceRange: {
      //   from: 1,
      //   to: 10000000,
      // },
      // oldPriceRange: {
      //   from: 1,
      //   to: 10000000,
      // },
      // openStartupAge: false,
      // openNumberOfCustomers: false,
      // moreFilters: {
      //   startupAge: {
      //     from: 1,
      //     to: 10,
      //   },
      //   numberOfCustomers: {
      //     from: 1,
      //     to: 10,
      //   },
      //   openToOffers: false,
      //   preApprovedForFinancing: false,
      //   underAdvisory: false,
      //   showHiddenStartups: false,
      // },
    }
  },
  methods: {
    toggleSort() {
      this.sortIsOpen = !this.sortIsOpen
      this.privateInfoIsOpen = false
      this.priceRangeIsOpen = false
    },
    togglePrivateInfo() {
      this.sortIsOpen = false
      this.privateInfoIsOpen = !this.privateInfoIsOpen
      // this.priceRangeIsOpen = false
    },
    toggleUserStatus() {
      this.sortIsOpen = false
      this.privateInfoIsOpen = false
      this.UserStatusIsOpen = !this.UserStatusIsOpen
    },
    // handleSetAccessRequested(){
    //   this.
    // },
    handleShowFavourite() {
      this.favouritesIsChecked = !this.favouritesIsChecked
      this.$emit('showFavouritesBtnToggle', this.favouritesIsChecked)
    },
    handleSetUserStatus() {
      this.$emit('adjustUserStatus', {
        from: parseInt(this.priceRange.from),
        to: parseInt(this.priceRange.to),
      })
      this.oldPriceRange = {
        from: parseInt(this.priceRange.from),
        to: parseInt(this.priceRange.to),
      }
    },
    handleCancelUserStatus() {
      this.UserStatusIsOpen = false
    },
    handleApplySort() {
      this.$emit('applySort', this.sortNewest)
      this.sortIsOpen = false
    },
    handleSelectStartupType(value) {
      const index = this.startupTypeSelection.indexOf(value)
      if (index > -1) {
        this.startupTypeSelection.splice(index, 1)
      } else {
        this.startupTypeSelection.push(value)
      }
    },
    handleSetStartupTypes() {
      this.$emit('setStartupTypes', this.startupTypeSelection)
    },
    handleResetStartupTypes() {
      this.startupTypeSelection = []
    },
    handleCancelStartupTypes() {
      this.startupTypeIsOpen = false
    },
    handleCancelprivateInfo() {
      this.privateInfoIsOpen = false
    },
    handleCloseStartupAge() {
      this.openStartupAge = false
      this.moreFilters.startupAge = {
        from: 1,
        to: 10,
      }
    },
    handleToggleStartupAge() {
      if (this.openStartupAge === true) {
        this.handleCloseStartupAge()
      } else {
        this.openStartupAge = true
      }
    },
    handleCloseNumberOfCustomers() {
      this.openNumberOfCustomers = false
      this.moreFilters.numberOfCustomers = {
        from: 1,
        to: 10,
      }
    },
    handleToggleNumberOfCustomers() {
      if (this.openNumberOfCustomers === true) {
        this.handleCloseNumberOfCustomers()
      } else {
        this.openNumberOfCustomers = true
      }
    },
    handleModalClear() {
      this.moreFiltersModalIsOpen = false
      this.moreFilters = {
        startupAge: {
          from: 1,
          to: 10,
        },
        numberOfCustomers: {
          from: 1,
          to: 10,
        },
        openToOffers: false,
        preApprovedForFinancing: false,
        underAdvisory: false,
        showHiddenStartups: false,
      }
      this.openNumberOfCustomers = false
      this.openStartupAge = false
    },
    handleDropdownClear() {
      this.$refs.dropdown.hide(true)
    },

    // handleModalApply() {
    //   const submitData = {
    //     openToOffers: this.moreFilters.openToOffers,
    //     preApprovedForFinancing: this.moreFilters.preApprovedForFinancing,
    //     underAdvisory: this.moreFilters.underAdvisory,
    //     showHiddenStartups: this.moreFilters.showHiddenStartups,
    //   }
    //   if (this.openStartupAge) {
    //     submitData.startupAge = {
    //       from: this.moreFilters.startupAge.from,
    //       to: this.moreFilters.startupAge.to,
    //     }
    //   }
    //   if (this.openNumberOfCustomers) {
    //     submitData.numberOfCustomers = {
    //       from: this.moreFilters.numberOfCustomers.from,
    //       to: this.moreFilters.numberOfCustomers.to,
    //     }
    //   }
    //   this.$emit('setAdditionalFilters', submitData)
    // },
  },
}
</script>

<style lang="scss">
@import '../assets/css/vars.scss';
.message-tab,
.message-tab > button {
  font-family: 'Avenir LT Std';
  font-weight: 500;
  font-style: normal;
  @include scalefont(16);
  // height: 48px;
  @include scaleheight(48);
  @include scalewidth(138);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  color: #272d4e;
  font-weight: 400;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  text-align: left;
}

.message-tab .dropdown-toggle:active {
  box-shadow: none;
  background: none;
  background-color: transparent;
}

.message-tab .dropdown-menu {
  // min-width: 250px;
  @include scalewidth(250);
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 0;
}

.message-tab .dropdown-form-control,
.message-tab .custom-control .custom-control-label {
  font-weight: 400;
  @include scalefont(14);
  letter-spacing: 0.2px;
}

.message-tab .b-dropdown-form {
  padding: 0 !important;
}

.message-tab .dropdown-divider {
  border-top: 2px solid #e6f4f1;
}

.message-search-tab {
  height: 52px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddeaf3;
  color: black;
}

.message-tab:hover,
.message-search-tab:hover {
  color: #007bff;
  text-decoration: none;
  background: transparent;
}

.tabs-sub-menu {
  position: absolute;
  background-color: #fff;
  top: calc(100% + 4px);
  transform: translateX(-50%);
  width: max-content;
  z-index: 100;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.tabs-sub-menu-item {
  padding: 0.5rem 1rem;
}

.tab-sort {
  left: 98px;
}

.input-radio,
.input-checkbox {
  padding-left: 35px;
}

.tab-startupType {
  left: 153px;
}

.tab-right-buttons {
  display: flex;
  justify-content: flex-end;
}

.tab-priceRange {
  left: 256px;
}

.message-favourites {
  position: absolute;
  left: 50px;
  border: solid 1px red;
}

.form-control.search-user-input-group {
  // max-width: 251px;
  @include scalewidth(251);
  // height: 48px;
  @include scaleheight(48);
  background: rgba(0, 157, 221, 0.06);
  border-radius: 30px;
  border: 0;
  align-items: center;
}

.form-control.search-user-input-group input {
  font-weight: 400;
  @include scalefont(12);
  @include scalelineheight(14);
}

.btn-apply {
  color: #009ddd;
}
</style>
