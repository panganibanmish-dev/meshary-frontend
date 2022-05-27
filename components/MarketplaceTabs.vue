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
          <div v-if="sortIsOpen" v-on-clickaway="away_sort" class="tabs-sub-menu tab-marketplace-sort">
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
                class="btn btn-clear control-buttons-cancel fs-14"
                @click="handleCancelSort"
              >
                Cancel
              </a>
              <a
                role="button"
                class="btn btn-clear control-buttons-apply fs-14 mx-2"
                @click="handleApplySort"
              >
                Apply
              </a>
            </div>
          </div>
        </transition>
      </div>
      <div class="dropdown mr-3">
        <a class="marketplace-tab" role="button" @click="toggleStartupType">
          Startup Type
          <div class="ml-2">
            <font-awesome-icon v-if="startupTypeIsOpen" :icon="['fas', 'chevron-up']"/>
            <font-awesome-icon v-else :icon="['fas', 'chevron-down']"/>
          </div>
        </a>
        <transition name="fade" appear>
          <div v-if="startupTypeIsOpen" v-on-clickaway="away_startupType" class="tabs-sub-menu tab-marketplace-startupType">
            <div class="tabs-sub-menu-item">
              <div class="row">
                <ul class="list-unstyled col-md-6">
                  <div v-for="(type, index) in startupTypes" :key="type.id">
                    <li v-if="index % 2 === 0 || index == 0">
                      <div class="tabs-sub-menu-item">
                        <!-- <input
                          :id="'startupType-' + type.id"
                          type="radio"
                          class="form-check-input"
                          name="selectStartupTypes"
                          :value="type.id"
                          @input="handleSelectStartupType(type.id)"
                        />
                        <label
                          class="form-check-label sort-label"
                          :for="'startupType-' + type.id"
                          >{{ type.name }}</label
                        > -->
                        <a
                          v-if="startupTypeSelection.includes(type.id)" 
                          role="button"
                          @click="handleSelectStartupType(type.id)"
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
                          @click="handleSelectStartupType(type.id)"
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
                  v-if="startupTypes.length !== 0"
                  class="list-unstyled col-md-6"
                >
                  <div v-for="(type, index) in startupTypes" :key="type.id">
                    <li v-if="index % 2 !== 0">
                      <div class="tabs-sub-menu-item">
                        <!-- <input
                          :id="'startupType-' + type.id"
                          type="radio"
                          class="form-check-input"
                          name="selectStartupTypes"
                          :value="type.id"
                          @input="handleSelectStartupType(type.id)"
                        />
                        <label
                          class="form-check-label sort-label"
                          :for="'startupType-' + type.id"
                          >{{ type.name }}</label
                        > -->
                        <a
                          v-if="startupTypeSelection.includes(type.id)" 
                          role="button"
                          @click="handleSelectStartupType(type.id)"
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
                          @click="handleSelectStartupType(type.id)"
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
                @click="handleCancelStartupTypes"
              >
                Cancel
              </a>
              <a
                role="button"
                class="btn btn-clear control-buttons-apply mx-2"
                @click="handleSetStartupTypes"
              >
                Apply
              </a>
            </div>
          </div>
        </transition>
      </div>
      <div class="dropdown mr-3">
        <a class="marketplace-tab" role="button" @click="togglePriceRange">
          Price Range
          <div class="ml-2">
            <font-awesome-icon v-if="priceRangeIsOpen" :icon="['fas', 'chevron-up']"/>
            <font-awesome-icon v-else :icon="['fas', 'chevron-down']"/>
          </div>
        </a>
        <transition name="fade" appear>
          <div v-if="priceRangeIsOpen" v-on-clickaway="away_priceRange" class="tabs-sub-menu tab-marketplace-priceRange">
            <div class="tabs-sub-menu-item">
              <div class="col-md-12">
                <label class="form-check-label mb-3 mt-3">Price</label>
              </div>
              <div class="row mb-3">
                <div class="col-md-5 pr-0">
                  <div class="d-flex justify-content-center align-items-center pl-2">
                    <!-- $
                    <input
                      v-model="priceRange.from"
                      type="number"
                      class="form-control price-input"
                    /> -->
                    <div class="input-icons">
                      <div class="input-icons-left">
                        <div class="icon-dollar">$</div>
                      </div>
                      <input 
                        v-model="priceRange.from"
                        class="form-control input-field pr-3 price-input" 
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-2 d-flex justify-content-center align-items-center px-0"
                >
                  -
                </div>
                <div class="col-md-5 pl-0">
                  <div class="d-flex justify-content-center align-items-center pl-2">
                    <!-- $
                    <input
                      v-model="priceRange.to"
                      type="number"
                      class="form-control price-input"
                    /> -->
                    <div class="input-icons">
                      <div class="input-icons-left">
                        <div class="icon-dollar">$</div>
                      </div>
                      <input 
                        v-model="priceRange.to"
                        class="form-control input-field pr-3 price-input" 
                        type="number" 
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="row">
                <div class="col-md-4">
                  <a
                    role="button"
                    class="btn btn-clear"
                    @click="handleResetPriceRange"
                    >Clear</a
                  >
                </div>
                <div class="col-md-8 d-flex justify-content-end">
                  <a
                    role="button"
                    class="btn btn-light mr-1"
                    @click="handleSetPriceRange"
                    >Apply</a
                  >
                  <a
                    role="button"
                    class="btn btn-light mr-1"
                    @click="handleCancelPriceRange"
                    >Cancel</a
                  >
                </div>
              </div> -->
            </div>
            <div class="d-flex justify-content-between align-items-center control-buttons-top">
              <a
                role="button"
                class="btn btn-clear control-buttons-cancel"
                @click="handleCancelPriceRange"
              >
                Cancel
              </a>
              <a
                role="button"
                class="btn btn-clear control-buttons-apply mx-2"
                @click="handleSetPriceRange"
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
                      <label class="filter-modal-content" @click="handleToggleStartupAge">
                        <span>Startup Age</span>
                      </label>
                      <a 
                        v-if="openStartupAge === false"
                        role="button"
                        class="btn"
                        @click="openStartupAge = true"
                      >
                        <img src="~assets/imgs/arrow-down.png" class="img-fluid"/>
                      </a>
                      <a
                        v-else
                        role="button"
                        class="btn"
                        @click="handleCloseStartupAge"
                      >
                        <img src="~assets/imgs/arrow-up.png" class="img-fluid"/>
                      </a>
                    </div>
                    <div
                      v-if="openStartupAge === true"
                      class="form-group px-5"
                    >
                      <div v-if="moreFilters.startupAge.from > 1" class="startup-age-label pb-3">
                        {{ moreFilters.startupAge.from }} Months
                      </div>
                      <div v-else class="startup-age-label pb-3">
                        {{ moreFilters.startupAge.from }} Month
                      </div>
                      <no-ssr>  
                        <vue-slider 
                          ref="slider"
                          v-model="moreFilters.startupAge.from" 
                          width="100%" 
                        />
                        <!-- <vue-range-slider ref="slider" v-model="moreFilters.startupAge.from"></vue-range-slider> -->
                      </no-ssr>
                      <div v-if="moreFilters.startupAge.to > 1" class="startup-age-label py-3">
                        {{ moreFilters.startupAge.to }} Years
                      </div>
                      <div v-else class="startup-age-label py-3">
                        {{ moreFilters.startupAge.to }} Year
                      </div>
                      <no-ssr>
                        <vue-slider 
                          ref="slider"
                          v-model="moreFilters.startupAge.to" 
                          width="100%" 
                        />
                        <!-- <vue-range-slider ref="slider" v-model="moreFilters.startupAge.to"></vue-range-slider> -->
                      </no-ssr>
                    </div>
                    <div
                      class="form-group checkbox d-flex justify-content-between align-items-center"
                    >
                      <label class="filter-modal-content" @click="handleToggleNumberOfCustomers">
                        <span>Number of Customers</span>
                      </label>
                      <a 
                        v-if="openNumberOfCustomers === false" 
                        role="button"
                        class="btn"
                        @click="openNumberOfCustomers = true"
                      >
                        <img src="~assets/imgs/arrow-down.png" class="img-fluid"/>
                      </a>
                      <a 
                        v-else
                        role="button"
                        class="btn"
                        @click="handleCloseNumberOfCustomers"
                      >
                      <img
                        src="~assets/imgs/arrow-up.png"
                        class="img-fluid"
                      />
                      </a>
                    </div>
                    <div
                      v-if="openNumberOfCustomers === true"
                      class="form-group d-flex justify-content-between align-items-center"
                    >
                      <div class="row mb-3">
                        <ul class="list-unstyled col-md-12" >
                          <li>
                            <div class="tabs-sub-menu-item input-checkbox">
                              <input
                                id="numOfCustomers-all"
                                type="radio"
                                class="form-check-input"
                                name="selectNumOfCustomers"
                                checked
                                @click="handleSelectNumberOfCustomers(null, null)"
                              />
                              <label
                                class="form-check-label sort-label ml-3"
                                for="numOfCustomers-all"
                              >
                                All
                              </label>
                            </div>
                          </li>
                          <li>
                            <div class="tabs-sub-menu-item input-checkbox">
                              <input
                                id="numOfCustomers-10-100"
                                type="radio"
                                class="form-check-input"
                                name="selectNumOfCustomers"
                                @click="handleSelectNumberOfCustomers(10, 100)"
                              />
                              <label
                                class="form-check-label sort-label ml-3"
                                for="numOfCustomers-10-100"
                              >
                                10 - 100
                              </label>
                            </div>
                          </li>
                          <li>
                            <div class="tabs-sub-menu-item input-checkbox">
                              <input
                                id="numOfCustomers-100-1000"
                                type="radio"
                                class="form-check-input"
                                name="selectNumOfCustomers"
                                @click="handleSelectNumberOfCustomers(100, 1000)"
                              />
                              <label
                                class="form-check-label sort-label ml-3"
                                for="numOfCustomers-100-1000"
                              >
                                100 - 1,000
                              </label>
                            </div>
                          </li>
                          <li>
                            <div class="tabs-sub-menu-item input-checkbox">
                              <input
                                id="numOfCustomers-1000-10000"
                                type="radio"
                                class="form-check-input"
                                name="selectNumOfCustomers"
                                @click="handleSelectNumberOfCustomers(1000, 10000)"
                              />
                              <label
                                class="form-check-label sort-label ml-3"
                                for="numOfCustomers-1000-10000"
                              >
                                1,000 - 10,000
                              </label>
                            </div>
                          </li>
                          <li>
                            <div class="tabs-sub-menu-item input-checkbox">
                              <input
                                id="numOfCustomers-10000-100000"
                                type="radio"
                                class="form-check-input"
                                name="selectNumOfCustomers"
                                @click="handleSelectNumberOfCustomers(10000, 100000)"
                              />
                              <label
                                class="form-check-label sort-label ml-3"
                                for="numOfCustomers-10000-100000"
                              >
                                10,000 - 100,000
                              </label>
                            </div>
                          </li>
                          <li>
                            <div class="tabs-sub-menu-item input-checkbox">
                              <input
                                id="numOfCustomers-100000-more"
                                type="radio"
                                class="form-check-input"
                                name="selectNumOfCustomers"
                                @click="handleSelectNumberOfCustomers(100000, null)"
                              />
                              <label
                                class="form-check-label sort-label ml-3"
                                for="numOfCustomers-100000-more"
                              >
                                More than 100,000
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="form-group checkbox d-flex justify-content-between align-items-center"
                    >
                      <label class="filter-modal-content" for="openToOffers">
                        <span>Open to Offers</span>
                      </label>
                      <!-- <input
                        id="openToOffers"
                        type="checkbox"
                        class="checkbox style-2 pull-right"
                        name="openToOffers"
                      /> -->
                      <toggle-button
                        v-model="moreFilters.openToOffers"
                        :sync="true"
                        color="#009DDD"
                      />
                    </div>
                    <div
                      class="form-group checkbox d-flex justify-content-between align-items-center"
                    >
                      <label class="filter-modal-content" for="preApproved">
                        <span>Pre-Approved for Financing</span>
                      </label>
                      <!-- <input
                        id="preApproved"
                        type="checkbox"
                        class="checkbox style-2 pull-right"
                        name="preApproved"
                      /> -->
                      <toggle-button
                        v-model="moreFilters.preApprovedForFinancing"
                        :sync="true"
                        color="#009DDD"
                      />
                    </div>
                    <div
                      class="form-group checkbox d-flex justify-content-between align-items-center"
                    >
                      <label class="filter-modal-content" for="underAdvisory">
                        <span>Under Advisory</span>
                      </label>
                      <!-- <input
                        id="underAdvisory"
                        type="checkbox"
                        class="checkbox style-2 pull-right"
                        name="underAdvisory"
                      /> -->
                      <toggle-button
                        v-model="moreFilters.underAdvisory"
                        :sync="true"
                        color="#009DDD"
                      />
                    </div>
                    <div
                      class="form-group checkbox d-flex justify-content-between align-items-center"
                    >
                      <label class="filter-modal-content" for="showHiddenStartups">
                        <span>Show Hidden Startups</span>
                      </label>
                      <!-- <input
                        id="showHiddenStartups"
                        type="checkbox"
                        class="checkbox style-2 pull-right"
                        name="showHiddenStartups"
                      /> -->
                      <toggle-button
                        v-model="moreFilters.showHiddenStartups"
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
          v-model="searchValue"
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
                        <label class="filter-modal-content" @click="openStartupType = !openStartupType">
                          <span>Startup Type</span>
                        </label>
                        <a 
                          v-if="openStartupType === false" 
                          role="button"
                          class="btn"
                          @click="openStartupType = true"
                        >
                          <img src="~assets/imgs/arrow-down.png" class="img-fluid"/>
                        </a>
                        <a 
                          v-else
                          role="button"
                          class="btn"
                          @click="openStartupType = false"
                        >
                        <img
                          src="~assets/imgs/arrow-up.png"
                          class="img-fluid"
                        />
                        </a>
                      </div>
                      <div
                        v-if="openStartupType === true"
                        class="form-group"
                      >
                        <div class="row mb-3">
                          <ul class="list-unstyled col-md-6">
                            <div v-for="(type) in startupTypes" :key="type.id">
                              <li>
                                <div class="tabs-sub-menu-item">
                                  <a
                                    v-if="startupTypeSelection.includes(type.id)" 
                                    role="button"
                                    @click="handleSelectStartupType(type.id)"
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
                                    @click="handleSelectStartupType(type.id)"
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
                        <label class="filter-modal-content" @click="openPriceRange = !openPriceRange">
                          <span>Price Range</span>
                        </label>
                        <a 
                          v-if="openPriceRange === false" 
                          role="button"
                          class="btn"
                          @click="openPriceRange = true"
                        >
                          <img src="~assets/imgs/arrow-down.png" class="img-fluid"/>
                        </a>
                        <a 
                          v-else
                          role="button"
                          class="btn"
                          @click="openPriceRange = false"
                        >
                        <img
                          src="~assets/imgs/arrow-up.png"
                          class="img-fluid"
                        />
                        </a>
                      </div>
                      <div
                        v-if="openPriceRange === true"
                        class="form-group"
                      >
                        <div class="tabs-sub-menu-item mb-3">
                          <div class="row">
                            <div class="col-5 pr-0">
                              <div class="d-flex justify-content-center align-items-center pl-0">
                                <div class="input-icons">
                                  <div class="input-icons-left">
                                    <div class="icon-dollar">$</div>
                                  </div>
                                  <input 
                                    v-model="priceRange.from"
                                    class="form-control input-field pr-3 price-input" 
                                    type="number"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-2 d-flex justify-content-center align-items-center px-0"
                            >
                              -
                            </div>
                            <div class="col-5 pl-0">
                              <div class="d-flex justify-content-center align-items-center pl-0">
                                <div class="input-icons">
                                  <div class="input-icons-left">
                                    <div class="icon-dollar">$</div>
                                  </div>
                                  <input 
                                    v-model="priceRange.to"
                                    class="form-control input-field pr-3 price-input" 
                                    type="number" 
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
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
import NoSSR from 'vue-no-ssr';
// import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
// import 'vue-range-component/dist/vue-range-slider.css'
// import VueRangeSlider from 'vue-range-component'
let delayTimer = null;
export default {
  components: {
    'no-ssr': NoSSR,
    // VueRangeSlider,
    [process.browser && 'vue-slider']: () => import('vue-slider-component'),
  },
  mixins: [ clickaway ],
  props: {
    startupTypes: {
      type: Array,
      default: () => [],
    },
    selectedStartupTypes: {
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
      startupTypeIsOpen: false,
      startupTypeSelection: [],
      priceRangeIsOpen: false,
      favouritesIsChecked: this.showFavourites,
      moreFiltersModalIsOpen: false,
      priceRange: {
        from: 1,
        to: 10000000,
      },
      oldPriceRange: {
        from: 1,
        to: 10000000,
      },
      openSort: false,
      openStartupType: false,
      openPriceRange: false,
      openStartupAge: false,
      openNumberOfCustomers: false,
      moreFilters: {
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
      },
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
        this.startupTypeIsOpen = false
        this.priceRangeIsOpen = false
        this.moreFiltersModalIsOpen = false
      }
    },
    away_sort () {
      this.sortIsOpen = false
    },
    away_startupType () {
      this.startupTypeIsOpen = false
    },
    away_priceRange () {
      this.priceRangeIsOpen = false
    },
    away_moreFilter () {
      this.moreFiltersModalIsOpen = false
    },
    toggleSort() {
      this.sortIsOpen = !this.sortIsOpen
      this.startupTypeIsOpen = false
      this.priceRangeIsOpen = false
    },
    toggleStartupType() {
      this.sortIsOpen = false
      this.startupTypeIsOpen = !this.startupTypeIsOpen
      this.priceRangeIsOpen = false
    },
    togglePriceRange() {
      this.sortIsOpen = false
      this.startupTypeIsOpen = false
      this.priceRangeIsOpen = !this.priceRangeIsOpen
    },
    handleShowFavourite() {
      this.favouritesIsChecked = !this.favouritesIsChecked
      this.$emit('showFavouritesBtnToggle', this.favouritesIsChecked)
    },
    handleFavourite() {
      this.favouritesIsChecked = !this.favouritesIsChecked
    },
    handleSetPriceRange() {
      this.$emit('adjustPriceRange', {
        from: parseInt(this.priceRange.from),
        to: parseInt(this.priceRange.to),
      })
      this.oldPriceRange = {
        from: parseInt(this.priceRange.from),
        to: parseInt(this.priceRange.to),
      }
    },
    handleResetPriceRange() {
      this.priceRange = {
        from: 1,
        to: 10000000,
      }
    },
    handleCancelPriceRange() {
      this.priceRangeIsOpen = false
      this.priceRange = {
        from: parseInt(this.oldPriceRange.from),
        to: parseInt(this.oldPriceRange.to),
      }
    },
    handleApplySort() {
      this.$emit('applySort', this.sortNewest)
      this.sortIsOpen = false
    },
    handleCancelSort() {
      this.sortIsOpen = false
    },
    handleSelectStartupType(value) {
      // const index = this.startupTypeSelection.indexOf(value)
      // if (index > -1) {
      //   this.startupTypeSelection.splice(index, 1)
      // } else {
      //   this.startupTypeSelection.push(value)
      // }
      // this.startupTypeSelection = [value]
      let startTypes = this.startupTypeSelection;
      if(startTypes.includes(value)){
        const index = startTypes.indexOf(value);
        if (index !== -1) {
          startTypes.splice(index, 1);
        }
      }else{
        startTypes = [...startTypes, value]
      }
      this.startupTypeSelection = startTypes;
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
    handleSelectNumberOfCustomers (toData, fromData) {
      this.moreFilters.numberOfCustomers = {
        to: toData,
        from: fromData
      }
    },
    handleModalApply() {
      const submitData = {
        openToOffers: this.moreFilters.openToOffers,
        preApprovedForFinancing: this.moreFilters.preApprovedForFinancing,
        underAdvisory: this.moreFilters.underAdvisory,
        showHiddenStartups: this.moreFilters.showHiddenStartups,
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
      this.oldPriceRange = {
        from: parseInt(this.priceRange.from),
        to: parseInt(this.priceRange.to),
      }
      this.$emit('allFiltersFunc', {
        isFavourite: this.favouritesIsChecked,
        priceRange: this.priceRange,
        selectedStartupTypes: this.startupTypeSelection,
        sortNewest: this.sortNewest
      })
    }
  },
}
</script>

<style lang="scss">
@import '../assets/css/vars.scss';
.marketplace-tab {
  // height: 52px;
  @include scaleheight(52);
  width: 138px;
  @include scalewidth(138);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #D8D8D8;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: "Avenir LT Std";
  font-style: normal;
  font-weight: normal;
  // font-size: 16px;
  @include scalefont(16);
  // line-height: 19px;
  @include scalelineheight(19);
  color: #272D4E;

}

.marketplace-search-tab {
  @include scalefont(14);
  // height: 52px;
  @include scaleheight(48);
  @include scalewidth(251);
  display: flex;
  justify-content: flex-start;
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

.tab-marketplace-sort {
  left: 89px;
}

.input-radio,
.input-checkbox {
  padding-left: 35px;
}

.tab-marketplace-startupType {
  left: 163px;
  width: 325px !important;
}

.tab-right-buttons {
  display: flex;
  justify-content: flex-end;
}

.tab-marketplace-priceRange {
  left: 244px;
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

.sort-label {
  font-family: "Avenir LT Std";
  font-style: normal;
  font-weight: normal;
  // @include scalefont(14);
  @include scalefont(14);
  // @include scalelineheight(18);
  @include scalelineheight(18);
  color: #272D4E;
}
/* 
.control-buttons-top {
  border-top: 2px solid #E6F4F1;
  min-height: 42px;
}

.control-buttons-cancel {
  font-family: "Avenir LT Std";
  font-style: normal;
  font-weight: normal;
  @include scalefont(14);
  @include scalelineheight(18);
  color: rgba(39, 45, 78, 0.6);
}

.control-buttons-apply {
  font-family: "Avenir LT Std";
  font-style: normal;
  font-weight: normal;
  @include scalefont(14);
  @include scalelineheight(18);
  letter-spacing: 0.2px;
  color: #009DDD;
} */

.list-unstyled {
  padding-left: 0;
  padding-right: 0
}

.filter-modal-header {
  font-family: "Avenir LT Std";
  font-style: normal;
  font-weight: 800;
  @include scalefont(14);
  @include scalelineheight(18);
  letter-spacing: 0.2px;
  color: #272D4E;
}

.filter-modal-content {
  font-family: "Avenir LT Std";
  font-style: normal;
  font-weight: normal;
  @include scalefont(14);
  @include scalelineheight(18);
  letter-spacing: 0.2px;
  color: #272D4E;
}

.input-icons-left {
  position: absolute;
}

.input-icons-right {
  position: absolute;
  right: 30px;
}
  
.input-icons {
  width: 100%;
  display: flex;
  align-items: center;
}

.icon-dollar {
  color: rgba(39, 45, 78, 0.6);
  min-width: 30px;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  padding-left: 30px;
  border: 2px solid #ffffff00;
  /* background: #ffffff00; */
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  border-radius: 6px; */
  background: rgba(0, 157, 221, 0.06) !important;
  border-radius: 3px;
  color: rgba(39, 45, 78, 0.6);
}

.startup-age-label {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  @include scalelineheight(18);
  letter-spacing: 0.2px;
  color: #272D4E;
}

.favouriteChecked{
  background: #009DDD;
}

.modal-fullscreen{
  width: 100% !important;
  margin: 0 !important;
  max-width: none !important;
  height: 100% !important;
}
</style>
