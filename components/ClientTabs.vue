<template>
  <div class="row col-12 d-flex justify-content-between">
    <div class="mobile-no-display-xs filter-div col-lg-9 col-12 pl-0 mb-4">
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
    showFavourites: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sortIsOpen: false,
      sortNewest: true,
      openSort: false,
      favouritesIsChecked: this.showFavourites,
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
      }
    },
    away_sort () {
      this.sortIsOpen = false
    },
    toggleSort() {
      this.sortIsOpen = !this.sortIsOpen
    },
    handleShowFavourite() {
      this.favouritesIsChecked = !this.favouritesIsChecked
      this.$emit('showFavouritesBtnToggle', this.favouritesIsChecked)
    },
    handleApplySort() {
      this.$emit('applySort', this.sortNewest)
      this.sortIsOpen = false
    },
    handleCancelSort() {
      this.sortIsOpen = false
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
</style>
