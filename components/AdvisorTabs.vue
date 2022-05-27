<template>
  <div class="row col-12 d-flex justify-content-between">
    <div class="mobile-no-display-xs filter-div col-lg-9 col-12 pl-0 mb-4 ">
      <div class="dropdown mr-3">
        <a class="marketplace-tab" role="button" @click="toggleSort">
          <div class="mr-2">
            <img src="~assets/images/sort.svg" class="img-fluid" />
          </div>
          Sort
        </a>
        <transition name="fade" appear>
          <div v-if="sortIsOpen" v-on-clickaway="away_sort" class="tabs-sub-menu tab-advisor-sort">
            <div class="tabs-sub-menu-item input-radio">
              <input
                id="sortNewestTrue"
                v-model="sortNewest"
                type="radio"
                name="sortDate"
                :value="true"
                class="form-check-input"
              />
              <label class="form-check-label sort-label" for="sortNewestTrue"
                >Date Listed: Newest</label
              >
            </div>
            <div class="tabs-sub-menu-item input-radio">
              <input
                id="sortNewestFalse"
                v-model="sortNewest"
                type="radio"
                name="sortDate"
                :value="false"
                class="form-check-input"
              />
              <label class="form-check-label sort-label" for="sortNewestFalse"
                >Date Listed: Oldest</label
              >
            </div>
            <div class="d-flex justify-content-between align-items-center control-buttons-top">
              <a
                role="button"
                class="btn btn-clear control-buttons-cancel"
                @click="handleCancelSort"
              >
                Cancel
              </a>
              <a
                role="button"
                class="btn btn-clear control-buttons-apply mx-2"
                @click="handleApplySort"
              >
                Apply
              </a>
            </div>
          </div>
        </transition>
      </div>
      <div class="dropdown mr-3">
        <a class="marketplace-tab" role="button" @click="toggleExpertiseType">
          Expertise
          <div class="ml-2">
            <font-awesome-icon v-if="expertiseTypeIsOpen" :icon="['fas', 'chevron-up']"/>
            <font-awesome-icon v-else :icon="['fas', 'chevron-down']"/>
          </div>
        </a>
        <transition name="fade" appear>
          <div v-if="expertiseTypeIsOpen" v-on-clickaway="away_expertiseType" class="tabs-sub-menu tab-advisor-expertise">
            <div class="tabs-sub-menu-item">
              <div class="row">
                <ul class="list-unstyled col-md-6">
                  <div v-for="(type, index) in expertiseTypes" :key="type.id">
                    <li v-if="index % 2 === 0 || index == 0">
                      <div class="tabs-sub-menu-item ">
                        <!-- <input
                          :id="'expertiseType-' + type.id"
                          type="radio"
                          class="form-check-input"
                          name="selectExpertiseTypes"
                          :value="type.id"
                          @input="handleSelectExpertiseType(type.id)"
                        /> -->
                        <a
                          v-if="expertiseTypeSelection.includes(type.id)"
                          role="button"
                          @click="handleSelectExpertiseType(type.id, 'remove')"
                        >
                          <img 
                            src="~assets/images/checkbox-checked.svg" 
                            class="p-1 mr-1" 
                          />
                          <label class="form-check-label sort-label">
                            {{ type.name }}
                          </label>
                        </a>
                        <a
                          v-else 
                          role="button"
                          @click="handleSelectExpertiseType(type.id, 'add')"
                        >
                          <img 
                            src="~assets/images/checkbox-unchecked.svg" 
                            class="p-1 mr-1" 
                          />
                          <label class="form-check-label sort-label">
                            {{ type.name }}
                          </label>
                        </a>
                      </div>
                    </li>
                  </div>
                </ul>
                <ul
                  v-if="expertiseTypes.length !== 0"
                  class="list-unstyled col-md-6"
                >
                  <div v-for="(type, index) in expertiseTypes" :key="type.id">
                    <li v-if="index % 2 !== 0">
                      <div class="tabs-sub-menu-item">
                        <!-- <input
                          :id="'expertiseType-' + type.id"
                          type="radio"
                          class="form-check-input"
                          name="selectExpertiseTypes"
                          :value="type.id"
                          @input="handleSelectExpertiseType(type.id)"
                        /> -->
                        <a
                          v-if="expertiseTypeSelection.includes(type.id)" 
                          role="button"
                          @click="handleSelectExpertiseType(type.id)"
                        >
                          <img 
                            src="~assets/images/checkbox-checked.svg" 
                            class="p-1 mr-1" 
                          />
                          <label class="form-check-label sort-label">
                            {{ type.name }}
                          </label>
                        </a>
                        <a
                          v-else 
                          role="button"
                          @click="handleSelectExpertiseType(type.id)"
                        >
                          <img 
                            src="~assets/images/checkbox-unchecked.svg" 
                            class="p-1 mr-1" 
                          />
                          <label class="form-check-label sort-label">
                            {{ type.name }}
                          </label>
                        </a>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center control-buttons-top">
              <a
                role="button"
                class="btn btn-clear control-buttons-cancel"
                @click="handleCancelExpertiseTypes"
              >
                Cancel
              </a>
              <a
                role="button"
                class="btn btn-clear control-buttons-apply mx-2"
                @click="handleSetExpertiseTypes"
              >
                Apply
              </a>
            </div>
          </div>
        </transition>
      </div>
      <!-- <div class="dropdown mr-3">
        <a class="marketplace-tab" role="button" @click="toggleDealClosed">
          Deal Closed
          <div class="ml-2">
            <font-awesome-icon v-if="dealClosedIsOpen" :icon="['fas', 'chevron-up']"/>
            <font-awesome-icon v-else :icon="['fas', 'chevron-down']"/>
          </div>
        </a>
        <transition name="fade" appear>
          <div v-if="dealClosedIsOpen" v-on-clickaway="away_dealClosed" class="tabs-sub-menu tab-advisor-dealClosed">
            <div class="tabs-sub-menu-item">
              <div class="row">
                <ul class="list-unstyled col-md-6">
                  <li>
                    <div class="tabs-sub-menu-item input-checkbox">
                      <input
                        id="dealClosed-0"
                        type="radio"
                        class="form-check-input"
                        name="selectDealClosed"
                        value="0-10"
                        @input="handleSelectDealClosed(`0-10`)"
                      />
                      <label
                        class="form-check-label sort-label"
                        for="dealClosed-0"
                      > 
                        0 - 10 
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="tabs-sub-menu-item input-checkbox">
                      <input
                        id="dealClosed-10"
                        type="radio"
                        class="form-check-input"
                        name="selectDealClosed"
                        value="10-50"
                        @input="handleSelectDealClosed(`10-50`)"
                      />
                      <label
                        class="form-check-label sort-label"
                        for="dealClosed-10"
                      > 
                        10 - 50
                      </label>
                    </div>
                  </li>
                </ul>
                <ul class="list-unstyled col-md-6">
                  <li>
                    <div class="tabs-sub-menu-item input-checkbox">
                      <input
                        id="dealClosed-50"
                        type="radio"
                        class="form-check-input"
                        name="selectDealClosed"
                        value="50-100"
                        @input="handleSelectDealClosed(`50-100`)"
                      />
                      <label
                        class="form-check-label sort-label"
                        for="dealClosed-50"
                      >
                        50 - 100
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="tabs-sub-menu-item input-checkbox">
                      <input
                        id="dealClosed-more"
                        type="radio"
                        class="form-check-input"
                        name="selectDealClosed"
                        value="100+"
                        @input="handleSelectDealClosed(`100-more`)"
                      />
                      <label
                        class="form-check-label sort-label"
                        for="dealClosed-more"
                      >
                        More than 100
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center control-buttons-top">
              <a
                role="button"
                class="btn btn-clear control-buttons-cancel"
                @click="handleCancelDealClosed"
              >
                Cancel
              </a>
              <a
                role="button"
                class="btn btn-clear control-buttons-apply mx-2"
                @click="handleSetDealClosed"
              >
                Apply
              </a>
            </div>
          </div>
        </transition>
      </div> -->
      <div class="dropdown">
        <a
          class="marketplace-tab"
          role="button"
          @click="handleShowFavourite"
        >
          <img v-if="favouritesIsChecked" src="~assets/images/checkbox-checked.svg" class="mr-2" />
          <img v-else src="~assets/images/checkbox-unchecked.svg" class="mr-2" />
          Favourites
        </a>
      </div>
      <div v-show="false" class="dropdown mr-3">  
        <a
          class="marketplace-tab"
          role="button"
          @click="moreFiltersModalIsOpen = true"
        >
          <div class="mr-2">
            <img src="~assets/images/filter.svg" class="img-fluid" />
          </div>
          More Filters
        </a>
      </div>
      <div v-if="moreFiltersModalIsOpen">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog modal-dialog-scrollable" role="document">
                <div v-on-clickaway="away_moreFilter" class="modal-content">
                  <div class="modal-body">
                    <div class="d-flex justify-content-center pb-4">
                      <div class="filter-modal-header">More Filters</div>
                    </div>
                    <div
                      class="form-group checkbox d-flex justify-content-between align-items-center"
                    >
                      <label class="filter-modal-content" @click="handleTogglePreferredDealSize">
                        <span>Preferred Deal Size</span>
                      </label>
                      <a 
                        v-if="openPreferredDealSize === false"
                        role="button"
                        class="btn"
                        @click="openPreferredDealSize = true"
                      >
                        <img
                          src="~assets/imgs/arrow-down.png"
                          class="img-fluid"
                        />
                      </a>
                      <a 
                        v-else
                        role="button"
                        class="btn"
                        @click="handleClosePreferredDealSize"
                      >
                        <img
                          src="~assets/imgs/arrow-up.png"
                          class="img-fluid"
                        />
                      </a>
                    </div>
                    <div
                      v-if="openPreferredDealSize === true"
                      class="form-group d-flex justify-content-between align-items-center"
                    >
                      <div class="row mb-3">
                        <div class="col-md-12 pr-0">
                          
                        </div>
                      </div>
                    </div>
                    <div
                      class="form-group checkbox d-flex justify-content-between align-items-center"
                    >
                      <label class="filter-modal-content" for="showHiddenStartups">
                        <span>Show Hidden Advisors</span>
                      </label>
                      <!-- <input
                        id="showHiddenStartups"
                        type="checkbox"
                        class="checkbox style-2 pull-right"
                        name="showHiddenStartups"
                      /> -->
                      <toggle-button
                        v-model="moreFilters.showHiddenAdvisors"
                        :sync="true"
                        color="#009DDD"
                      />
                    </div>
                  </div>
                  <div class="modal-footer d-flex justify-content-between align-items-center control-buttons-top">
                    <button
                      type="button"
                      class="btn btn-clear control-buttons-cancel"
                      @click="handleModalClear"
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      class="btn btn-clear control-buttons-apply mx-2"
                      @click="handleModalApply"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="search-div col-lg-3 col-12 pr-0 d-flex" style="width: 100%">
      <div class="marketplace-search-tab px-3">
        <img src="~assets/images/search-normal.svg" class="img-fluid mr-1" />
        <input
          :value="searchValue"
          type="text"
          name="searchVal"
          placeholder="Search..."
          class="search-input"
          @input="handleSearch"
        />
      </div>
      <div class="mobile-icon-buttons-xs">
        <a class="btn marketplace-fav-hide-buttons ml-2" @click="toggleFilter = !toggleFilter">
          <img src="~assets/images/filter.svg" class="img-fluid" />
        </a>
        <div v-if="toggleFilter">
          <transition name="modal">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-dialog modal-fullscreen" role="document">
                  <div class="modal-content" style="height: 100%">
                    <div class="modal-header" style="padding: 28px 21px">
                      <div class="d-flex justify-content-center modal-head w-100">
                        <div class="filter-modal-header fs-16">Filters</div>
                      </div>
                    </div>
                    <div class="modal-body">
                      <div
                        class="form-group checkbox d-flex justify-content-between align-items-center"
                      >
                        <label class="filter-modal-content" @click="openSort = !openSort">
                          <span>Sort</span>
                        </label>
                        <a 
                          v-if="openSort === false"
                          role="button"
                          class="btn"
                          @click="openSort = true"
                        >
                          <img src="~assets/imgs/arrow-down.png" class="img-fluid"/>
                        </a>
                        <a
                          v-else
                          role="button"
                          class="btn"
                          @click="openSort = false"
                        >
                          <img src="~assets/imgs/arrow-up.png" class="img-fluid"/>
                        </a>
                      </div>
                      <div
                        v-if="openSort === true"
                        class="form-group"
                      >
                        <div class="tabs-sub-menu-item input-radio">
                          <input
                            id="sortNewestTrue"
                            v-model="sortNewest"
                            type="radio"
                            name="sortDate"
                            :value="true"
                            class="form-check-input"
                          />
                          <label class="form-check-label sort-label" for="sortNewestTrue"
                            >Date Listed: Newest</label
                          >
                        </div>
                        <div class="tabs-sub-menu-item input-radio">
                          <input
                            id="sortNewestFalse"
                            v-model="sortNewest"
                            type="radio"
                            name="sortDate"
                            :value="false"
                            class="form-check-input"
                          />
                          <label class="form-check-label sort-label" for="sortNewestFalse"
                            >Date Listed: Oldest</label
                          >
                        </div>
                      </div>
                      <div
                        class="form-group checkbox d-flex justify-content-between align-items-center"
                      >
                        <label class="filter-modal-content" @click="openExpertiseType = !openExpertiseType">
                          <span>Expertise Type</span>
                        </label>
                        <a 
                          v-if="openExpertiseType === false" 
                          role="button"
                          class="btn"
                          @click="openExpertiseType = true"
                        >
                          <img src="~assets/imgs/arrow-down.png" class="img-fluid"/>
                        </a>
                        <a 
                          v-else
                          role="button"
                          class="btn"
                          @click="openExpertiseType = false"
                        >
                        <img
                          src="~assets/imgs/arrow-up.png"
                          class="img-fluid"
                        />
                        </a>
                      </div>
                      <div
                        v-if="openExpertiseType === true"
                        class="form-group"
                      >
                        <div class="row mb-3">
                          <ul class="list-unstyled col-md-6">
                            <div v-for="(type) in expertiseTypes" :key="type.id">
                              <li>
                                <div class="tabs-sub-menu-item">
                                  <a
                                    v-if="expertiseTypeSelection.includes(type.id)" 
                                    role="button"
                                    @click="handleSelectExpertiseType(type.id)"
                                  >
                                    <img 
                                      src="~assets/images/checkbox-checked.svg" 
                                      class="p-1 mr-1" 
                                    />
                                    <label class="form-check-label sort-label">
                                      {{ type.name }}
                                    </label>
                                  </a>
                                  <a
                                    v-else 
                                    role="button"
                                    @click="handleSelectExpertiseType(type.id)"
                                  >
                                    <img 
                                      src="~assets/images/checkbox-unchecked.svg" 
                                      class="p-1 mr-1" 
                                    />
                                    <label class="form-check-label sort-label">
                                      {{ type.name }}
                                    </label>
                                  </a>
                                </div>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                      <div
                        class="form-group checkbox d-flex justify-content-between align-items-center"
                      >
                        <label class="filter-modal-content" @click="handleFavourite">
                          <span>Favourites</span>
                        </label>
                        <a 
                          v-if="favouritesIsChecked === false" 
                          role="button"
                          class="btn"
                          @click="handleFavourite"
                        >
                          <img src="~assets/images/checkbox-unchecked.svg" class="img-fluid" />
                        </a>
                        <a 
                          v-else
                          role="button"
                          class="btn"
                          @click="handleFavourite"
                        >
                          <img src="~assets/images/checkbox-checked.svg" class="img-fluid"/>
                        </a>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <div class="w-100">
                        <button
                          type="button"
                          class="btn btn-primary px-5 w-100 mb-2"
                          style="
                            background-color: #009DDD !important;
                            border-color: #009DDD !important;
                            border-radius: 40px;
                          "
                          @click="applyAllFilters"
                        >
                          Apply
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-primary px-5 w-100"
                          style="
                            border-color: #009DDD !important;
                            border-radius: 40px;
                          "
                          @click="toggleFilter = false"
                        >
                          Cancel
                        </button>
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
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
let delayTimer = null;

export default {
  mixins: [ clickaway ],
  props: {
    expertiseTypes: {
      type: Array,
      default: () => [],
    },
    selectedExpertiseTypes: {
      type: Array,
      default: () => [],
    },
    showFavourites: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      toggleFilter: false,
      sortIsOpen: false,
      sortNewest: true,
      expertiseTypeIsOpen: false,
      expertiseTypeSelection: [],
      dealClosedIsOpen: false,
      favouritesIsChecked: this.showFavourites,
      moreFiltersModalIsOpen: false,
      selectedDealClosed: null,
      openPreferredDealSize: false,
      moreFilters: {
        preferredDealSize: null,
        showHiddenAdvisors: false,
      },
      openSort: false,
      openExpertiseType: false,
      searchValue: null
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
        this.sortIsOpen = false
        this.expertiseTypeIsOpen = false
        this.dealClosedIsOpen = false
        this.moreFiltersModalIsOpen = false
      }
    },
    away_sort () {
      this.sortIsOpen = false
    },
    away_expertiseType () {
      this.expertiseTypeIsOpen = false
    },
    away_dealClosed () {
      this.dealClosedIsOpen = false
    },
    away_moreFilter () {
      this.moreFiltersModalIsOpen = false
    },
    toggleSort() {
      this.sortIsOpen = !this.sortIsOpen
      this.expertiseTypeIsOpen = false
      this.dealClosedIsOpen = false
    },
    toggleExpertiseType() {
      this.sortIsOpen = false
      this.expertiseTypeIsOpen = !this.expertiseTypeIsOpen
      this.dealClosedIsOpen = false
    },
    toggleDealClosed() {
      this.sortIsOpen = false
      this.expertiseTypeIsOpen = false
      this.dealClosedIsOpen = !this.dealClosedIsOpen
    },
    handleShowFavourite() {
      this.favouritesIsChecked = !this.favouritesIsChecked
      this.$emit('showFavouritesBtnToggle', this.favouritesIsChecked)
    },
    handleSetDealClosed() {
      this.$emit('setDealClosed', this.selectedDealClosed)
    },
    handleSelectDealClosed(value) {
      this.selectedDealClosed = value
    },
    handleResetDealClosed() {
      this.selectedDealClosed = null;
    },
    handleCancelDealClosed() {
      this.dealClosedIsOpen = false
    },
    handleApplySort() {
      this.$emit('applySort', this.sortNewest)
      this.sortIsOpen = false
    },
    handleCancelSort() {
      this.sortIsOpen = false
    },
    handleSelectExpertiseType(value) {
      let expTypes = this.expertiseTypeSelection;
      if(expTypes.includes(value)){
        const index = expTypes.indexOf(value);
        if (index !== -1) {
          expTypes.splice(index, 1);
        }
      }else{
        expTypes = [...expTypes, value]
      }
      this.expertiseTypeSelection = expTypes;
    },
    handleSetExpertiseTypes() {
      this.$emit('setExpertiseTypes', this.expertiseTypeSelection)
      this.expertiseTypeIsOpen = false
    },
    handleResetExpertiseTypes() {
      this.expertiseTypeSelection = []
    },
    handleCancelExpertiseTypes() {
      this.expertiseTypeIsOpen = false
    },
    handleCloseExpertiseAge() {
      this.openStartupAge = false
      this.moreFilters.startupAge = {
        from: 1,
        to: 10,
      }
    },
    handleClosePreferredDealSize() {
      this.openPreferredDealSize = false
      // this.moreFilters.preferredDealSize = {}
    },
    handleTogglePreferredDealSize() {
      if (this.openPreferredDealSize === true) {
        this.handleClosePreferredDealSize()
      } else {
        this.openPreferredDealSize = true
      }
    },
    handleModalClear() {
      this.moreFiltersModalIsOpen = false
      this.moreFilters = {
        preferredDealSize: null,
        showHiddenAdvisors: false,
      }
      this.openPreferredDealSize = false
    },
    handleModalApply() {
      const submitData = {
        showHiddenAdvisors: this.moreFilters.showHiddenAdvisors,
      }
      if (this.openStartupAge) {
        submitData.startupAge = {
          from: this.moreFilters.startupAge.from,
          to: this.moreFilters.startupAge.to,
        }
      }
      if (this.openNumberOfCustomers) {
        submitData.numberOfCustomers = {
          from: this.moreFilters.numberOfCustomers.from,
          to: this.moreFilters.numberOfCustomers.to,
        }
      }
      this.$emit('setAdditionalFilters', submitData)
      this.moreFiltersModalIsOpen = false;
    },
    handleSearch(event){
      const func = this;
      clearTimeout(delayTimer);
      delayTimer = setTimeout(function() {
        func.$emit('searchFunc', event.target.value)
      }, 1000);
    },
    applyAllFilters(){
      this.toggleFilter = false
      this.$emit('allFiltersFunc', {
        isFavourite: this.favouritesIsChecked,
        selectedExpertiseTypes: this.expertiseTypeSelection,
        sortNewest: this.sortNewest
      })
    },
    handleFavourite() {
      this.favouritesIsChecked = !this.favouritesIsChecked
    },
  },
}
</script>

<style>
.marketplace-tab {
  height: 52px;
  width: 167px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #D8D8D8;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: "Avenir LT Std";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #272D4E;

}

.marketplace-search-tab {
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 157, 221, 0.06);
  border-radius: 30px;
}

.marketplace-tab:hover,
.marketplace-search-tab:hover {
  text-decoration: none;
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

.tab-advisor-sort {
  left: 89px;
}

.input-radio,
.input-checkbox {
  padding-left: 35px;
}

.tab-advisor-expertise {
  left: 173px;
  min-width: 345px !important;
}

.tab-right-buttons {
  display: flex;
  justify-content: flex-end;
}

.tab-advisor-dealClosed {
  left: 163px;
  min-width: 325px !important;
}

.search-input {
  background: none;
  border: none;
  outline: none;
  padding-left: .5rem;
}

.price-input {
  background: none !important;
  border: none !important;
  outline: none !important;
}

.price-div {
  background: rgba(0, 157, 221, 0.06);
  border-radius: 3px;
}

.sort-label {
  font-family: "Avenir LT Std";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #272D4E;
}

/* .control-buttons-top {
  border-top: 2px solid #E6F4F1;
  min-height: 42px;
} */

/* .control-buttons {
  font-family: "Avenir LT Std";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: rgba(39, 45, 78, 0.6);
} */

.list-unstyled {
  padding-left: 0;
  padding-right: 0
}

.filter-modal-header {
  font-family: "Avenir LT Std";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: #272D4E;
}

.filter-modal-content {
  font-family: "Avenir LT Std";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: #272D4E;
}

.tab-pointer {
  cursor: pointer;
}

.modal-fullscreen{
  width: 100% !important;
  margin: 0 !important;
  max-width: none !important;
  height: 100% !important;
}
</style>
