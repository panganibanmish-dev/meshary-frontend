<template>
  <div class="container new-background">
    <br /><br />
    <b-container>
      <div class="row">
        <div class="col-12 mt-5 mobile-no-display-xs">
          <MarketplaceTabs
            :startup-types="startupTypes"
            :show-favourites="filter.showFavourites"
            @showFavouritesBtnToggle="showFavouritesBtnToggle"
            @adjustPriceRange="adjustPriceRange"
            @applySort="applySort"
            @setStartupTypes="setStartupTypes"
            @setAdditionalFilters="setAdditionalFilters"
            @searchFunc="searchFunc"
          />
        </div>
        <div class="col-12 mb-5">
          <!-- <ul v-show="$auth.user.roles[0].id === 2" class="nav nav-tabs message-nav-links">
            <li class="nav-item">
              <a class="nav-link messages-nav-link text-center font-weight-bold ml-3" :class="{ active: isActive('yourListing') }" href="#yourListing" @click.prevent="setActive('yourListing')">Your Listing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link messages-nav-link text-center font-weight-bold ml-3" :class="{ active: isActive('availableListing') }" href="#availableListing" @click.prevent="setActive('availableListing')">Available Listing</a>
            </li>
          </ul> -->
          <div v-show="$store.state.role.selectedRole === 'Seller'" class="message-nav-links mb-4">
            <div
              class="mt-5 d-flex justify-content-start"
            >
              <div class="mb-4 px-3">
                <a
                  class="
                    nav-link
                    messages-nav-link
                    text-center
                    font-weight-bold
                    m-0
                    fs-16
                  "
                  :class="isActive('yourListing') ? 'border-bottom-active' : ''"
                  href="#yourListing"
                  @click.prevent="setActive('yourListing')"
                >
                  Your Listing
                </a>
              </div>
              <div class="mb-4 px-3">
                <a
                  class="
                    nav-link
                    messages-nav-link
                    text-center
                    font-weight-bold
                    m-0
                    fs-16
                  "
                  :class="isActive('availableListing') ? 'border-bottom-active' : ''"
                  href="#availableListing"
                  @click.prevent="setActive('availableListing')"
                >
                  Available Listing
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 px-0 mt-3 mb-3 mobile-display-xs" style="width:100%">
            <MarketplaceTabs
              :startup-types="startupTypes"
              :show-favourites="filter.showFavourites"
              @showFavouritesBtnToggle="showFavouritesBtnToggle"
              @adjustPriceRange="adjustPriceRange"
              @applySort="applySort"
              @setStartupTypes="setStartupTypes"
              @setAdditionalFilters="setAdditionalFilters"
              @searchFunc="searchFunc"
              @allFiltersFunc="allFiltersFunc"
            />
          </div>
          <div id="myTabContent" class="tab-content py-3">
            <div id="home" class="tab-pane fade" :class="{ 'active show': isActive('yourListing') }" >
              <div class="mystartup-dashboard-block">
                <div class="d-flex justify-content-between mb-5">
                  <div class="dashboard-header">
                    <div class="dashboard-header-text">My Listing</div>
                    <div class="dashboard-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  </div>
                  <NuxtLink
                    :to="localePath(`/marketplace/add`)"
                    class="btn btn-primary marketplace-btn px-4 d-flex justify-content-center align-items-center"
                  >
                    <font-awesome-icon :icon="['fas', 'plus']"/> <div class="fs-16 pl-2">Add More Listing</div>
                  </NuxtLink>
                </div>
                <div v-if="myListings.length !== 0">
                  <MarketplaceCard1
                    v-for="startup in myListings"
                    :key="startup.id"
                    :startup="startup"
                  />
                  <div v-if="hasNextPage" class="col-md-12 mb-5 px-5 d-flex align-items-center justify-content-center">
                    <button class="btn btn-outline-primary view-all-btn d-flex align-items-center justify-content-center px-5" @click="loadMoreListings">
                      <div class="pr-3">
                        Load More
                      </div>
                      <img src="~assets/images/Arrow_Right.svg" class="img-fluid" />
                    </button>
                  </div>
                </div>
                <b-card
                  v-else
                  class="no-message text-center mx-auto"
                >
                  <b-card-text class="no-message-header">
                    You don't have any Listings yet
                  </b-card-text>
                  <b-card-text class="no-message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </b-card-text>
                </b-card>
              </div>
            </div>
            <div id="profile" class="tab-pane fade" :class="{ 'active show': isActive('availableListing') }">
              <div class="mystartup-dashboard-block">
                <div v-if="availableStartups.length !== 0">
                  <div class="page-info mb-3 d-flex justify-content-between">
                    <div>Showing {{availableStartups.length}} startups</div>
                    <div>page {{page}} of {{totalPages}}</div>
                  </div>
                  <MarketplaceCard2
                    v-for="startup in availableStartups"
                    :key="startup.id"
                    :startup="startup"
                  />
                  <div v-if="hasNextPage" class="col-md-12 mb-5 px-5 d-flex align-items-center justify-content-center">
                    <button class="btn btn-outline-primary view-all-btn d-flex align-items-center justify-content-center px-5" @click="loadMoreListings">
                      <div class="pr-3">
                        Load More
                      </div>
                      <img src="~assets/images/Arrow_Right.svg" class="img-fluid" />
                    </button>
                  </div>
                </div>
                <b-card
                  v-else
                  class="no-message text-center mx-auto"
                >
                  <b-card-text class="no-message-header">
                    There aren't any listings available right now...
                  </b-card-text>
                  <b-card-text class="no-message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </b-card-text>
                </b-card>
              </div>
            </div>
          </div>
        </div>
        <!-- <div v-show="$auth.user.roles[0].id !== 2" class="col-md-12 px-5">
          <div v-for="startup in availableStartups" :key="startup.id"  class="startup-page-startup-card row mx-0 mb-5">
            <div class="row col-md-12 pr-0">
              <div class="col-md-2 d-flex justify-content-end">
                <div class="marketplace-startup-card-circle-dashboard">
                  <img src="~assets/images/Ellipse_712.png" class="img-fluid" />
                </div>
              </div>
              <div class="row col-md-10 pr-0">
                <div class="col-md-12 pr-0">
                  <div class="d-flex justify-content-between align-items-center pr-0">
                    <div class="startup-page-startup-card-title">{{startup.name}}</div>
                    <div class="d-flex pr-0">
                      <button class="btn advisor-card-options mr-2 fs-15 text-left">
                        <font-awesome-icon :icon="['fas', 'heart']"/> Add to Favorites
                      </button>
                      <button class="btn advisor-card-options">
                        <font-awesome-icon :icon="['fas', 'eye-slash']"/> Hide this Startup
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row col-md-12">
                  <div class="col-md-12 startup-page-card-rating">
                    <client-only>
                      <star-rating
                        read-only
                        :rating="5"
                        :show-rating="false"
                        :padding="7.5"
                        :star-size="25"
                      ></star-rating>
                    </client-only>
                  </div>
                  <div v-show="startup.publicInfo" class="col-md-8 col-sm-12 startup-page-card-description" v-html="$options.filters.description(startup.publicInfo)">
                  </div>
                </div>
              </div>
            </div>
            <div class="row col-md-12 d-flex justify-content-end pt-3 pb-5">
              <div class="col-md-11 col-sm-12 startup-page-carousel">
                <VueSlickCarousel
                  :arrows="false"
                  :dots="true"
                  :slidesPerRow="3"
                >
                  <div class="py-3 px-2">
                    <div class="d-flex justify-content-center">
                      <div class="row startup-page-card-review-card">
                        <div class="col-md-12 d-flex justify-content-center">
                          <div class="marketplace-startup-card-review-circle-dashboard">
                            <img src="~assets/images/Ellipse_712.png" class="img-fluid" />
                          </div>
                        </div>
                        <div class="row col-md-12 mt-5 pl-4 pr-1">
                          <div class="col-sm-12 startup-page-card-testimony pr-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi nulla proin eget in diam accumsan. Duis morbi consequat egestas in hendrerit sed. Egestas proin sapien, aliquet nunc, egestas.
                          </div>
                        </div>
                        <div class="row col-md-12 mt-4 mb-3 pl-4 pr-0">
                          <div class="col-sm-6">
                            <div class="startup-page-card-name">John Willis</div>
                            <div class="startup-page-card-address">Berlin, Germany</div>
                          </div>
                          <div class="col-sm-6 d-flex justify-content-end pr-0">
                            <client-only>
                              <star-rating
                                read-only
                                :rating="5"
                                :show-rating="false"
                                :padding="8"
                                :star-size="14"
                              ></star-rating>
                            </client-only>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="py-3 px-2">
                    <div class="d-flex justify-content-center">
                      <div class="row startup-page-card-review-card">
                        <div class="col-md-12 d-flex justify-content-center">
                          <div class="marketplace-startup-card-review-circle-dashboard">
                            <img src="~assets/images/Ellipse_712.png" class="img-fluid" />
                          </div>
                        </div>
                        <div class="row col-md-12 mt-5 pl-4 pr-1">
                          <div class="col-sm-12 startup-page-card-testimony pr-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi nulla proin eget in diam accumsan. Duis morbi consequat egestas in hendrerit sed. Egestas proin sapien, aliquet nunc, egestas.
                          </div>
                        </div>
                        <div class="row col-md-12 mt-4 mb-3 pl-4 pr-0">
                          <div class="col-sm-6">
                            <div class="startup-page-card-name">John Willis</div>
                            <div class="startup-page-card-address">Berlin, Germany</div>
                          </div>
                          <div class="col-sm-6 d-flex justify-content-end pr-0">
                            <client-only>
                              <star-rating
                                read-only
                                :rating="5"
                                :show-rating="false"
                                :padding="8"
                                :star-size="14"
                              ></star-rating>
                            </client-only>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="py-3 px-2">
                    <div class="d-flex justify-content-center">
                      <div class="row startup-page-card-review-card">
                        <div class="col-md-12 d-flex justify-content-center">
                          <div class="marketplace-startup-card-review-circle-dashboard">
                            <img src="~assets/images/Ellipse_712.png" class="img-fluid" />
                          </div>
                        </div>
                        <div class="row col-md-12 mt-5 pl-4 pr-1">
                          <div class="col-sm-12 startup-page-card-testimony pr-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi nulla proin eget in diam accumsan. Duis morbi consequat egestas in hendrerit sed. Egestas proin sapien, aliquet nunc, egestas.
                          </div>
                        </div>
                        <div class="row col-md-12 mt-4 mb-3 pl-4 pr-0">
                          <div class="col-sm-6">
                            <div class="startup-page-card-name">John Willis</div>
                            <div class="startup-page-card-address">Berlin, Germany</div>
                          </div>
                          <div class="col-sm-6 d-flex justify-content-end pr-0">
                            <client-only>
                              <star-rating
                                read-only
                                :rating="5"
                                :show-rating="false"
                                :padding="8"
                                :star-size="14"
                              ></star-rating>
                            </client-only>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="py-3 px-2">
                    <div class="d-flex justify-content-center">
                      <div class="row startup-page-card-review-card">
                        <div class="col-md-12 d-flex justify-content-center">
                          <div class="marketplace-startup-card-review-circle-dashboard">
                            <img src="~assets/images/Ellipse_712.png" class="img-fluid" />
                          </div>
                        </div>
                        <div class="row col-md-12 mt-5 pl-4 pr-1">
                          <div class="col-sm-12 startup-page-card-testimony pr-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi nulla proin eget in diam accumsan. Duis morbi consequat egestas in hendrerit sed. Egestas proin sapien, aliquet nunc, egestas.
                          </div>
                        </div>
                        <div class="row col-md-12 mt-4 mb-3 pl-4 pr-0">
                          <div class="col-sm-6">
                            <div class="startup-page-card-name">John Willis</div>
                            <div class="startup-page-card-address">Berlin, Germany</div>
                          </div>
                          <div class="col-sm-6 d-flex justify-content-end pr-0">
                            <client-only>
                              <star-rating
                                read-only
                                :rating="5"
                                :show-rating="false"
                                :padding="8"
                                :star-size="14"
                              ></star-rating>
                            </client-only>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="py-3 px-2">
                    <div class="d-flex justify-content-center">
                      <div class="row startup-page-card-review-card">
                        <div class="col-md-12 d-flex justify-content-center">
                          <div class="marketplace-startup-card-review-circle-dashboard">
                            <img src="~assets/images/Ellipse_712.png" class="img-fluid" />
                          </div>
                        </div>
                        <div class="row col-md-12 mt-5 pl-4 pr-1">
                          <div class="col-sm-12 startup-page-card-testimony pr-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi nulla proin eget in diam accumsan. Duis morbi consequat egestas in hendrerit sed. Egestas proin sapien, aliquet nunc, egestas.
                          </div>
                        </div>
                        <div class="row col-md-12 mt-4 mb-3 pl-4 pr-0">
                          <div class="col-sm-6">
                            <div class="startup-page-card-name">John Willis</div>
                            <div class="startup-page-card-address">Berlin, Germany</div>
                          </div>
                          <div class="col-sm-6 d-flex justify-content-end pr-0">
                            <client-only>
                              <star-rating
                                read-only
                                :rating="5"
                                :show-rating="false"
                                :padding="8"
                                :star-size="14"
                              ></star-rating>
                            </client-only>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="py-3 px-2">
                    <div class="d-flex justify-content-center">
                      <div class="row startup-page-card-review-card">
                        <div class="col-md-12 d-flex justify-content-center">
                          <div class="marketplace-startup-card-review-circle-dashboard">
                            <img src="~assets/images/Ellipse_712.png" class="img-fluid" />
                          </div>
                        </div>
                        <div class="row col-md-12 mt-5 pl-4 pr-1">
                          <div class="col-sm-12 startup-page-card-testimony pr-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi nulla proin eget in diam accumsan. Duis morbi consequat egestas in hendrerit sed. Egestas proin sapien, aliquet nunc, egestas.
                          </div>
                        </div>
                        <div class="row col-md-12 mt-4 mb-3 pl-4 pr-0">
                          <div class="col-sm-6">
                            <div class="startup-page-card-name">John Willis</div>
                            <div class="startup-page-card-address">Berlin, Germany</div>
                          </div>
                          <div class="col-sm-6 d-flex justify-content-end pr-0">
                            <client-only>
                              <star-rating
                                read-only
                                :rating="5"
                                :show-rating="false"
                                :padding="8"
                                :star-size="14"
                              ></star-rating>
                            </client-only>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </VueSlickCarousel>
              </div>
            </div>
            <div class="row col-md-12">
              <div class="col-md-12 d-flex justify-content-end">
                <NuxtLink
                  :to="localePath(`/marketplace/${startup.id}`)"
                  class="btn btn-primary dashboard-btn px-4 fs-14 d-flex justify-content-center align-items-center"
                >
                  <div class="pr-2">View Listing</div> <font-awesome-icon :icon="['fas', 'arrow-right-long']"/>
                </NuxtLink>
              </div>
            </div>
            <div class="row col-md-12">
              <div class="col-md-12 d-flex justify-content-end">
                <NuxtLink
                  :to="localePath(`/marketplace/${startup.id}`)"
                  class="btn btn-primary dashboard-btn px-4 fs-14 d-flex justify-content-center align-items-center"
                >
                  <div class="pr-2">View Listing</div> <font-awesome-icon :icon="['fas', 'arrow-right-long']"/>
                </NuxtLink>
              </div>
            </div>
            <div class="row col-md-12">
              <div class="col-md-12 d-flex justify-content-end">
                <NuxtLink
                  :to="localePath(`/marketplace/${startup.id}`)"
                  class="btn btn-primary dashboard-btn px-4 fs-14 d-flex justify-content-center align-items-center"
                >
                  <div class="pr-2">View Listing</div> <font-awesome-icon :icon="['fas', 'arrow-right-long']"/>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div v-if="hasNextPage" class="col-md-12 mb-5 px-0">
            <button class="btn btn-primary btn-block view-all-btn" @click="loadMoreListings">Load More...</button>
          </div>
          <div v-if="hasNextPage" class="col-md-12 mb-5 px-0">
            <button class="btn btn-primary btn-block view-all-btn" @click="loadMoreListings">Load More...</button>
          </div>
          <div v-if="hasNextPage" class="col-md-12 mb-5 px-0">
            <button class="btn btn-primary btn-block view-all-btn" @click="loadMoreListings">Load More...</button>
          </div>
        </div> -->
      </div>
    </b-container>
  </div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// // optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MarketplacePage',
  // components: {
  //   [process.browser && 'star-rating']: () => import('vue-star-rating'),
  //   VueSlickCarousel,
  // },
  filters: {
    description(info) {
      if(typeof info === 'object') {
        const description = info.find((i) => i.label === 'Description').value
        if(description.length > 600) {
          return description.replaceAll('<p>','').replaceAll('</p>','').substring(0,600)+'...'
        }
      }
      return ''
    },
    noDescription(info) {
      if(typeof info === 'object') {
        return info.filter((i) => i.label !== 'Description')
      }
    },
    displayType(info) {
      if(info.type === 'float') {
        return '$ ' + Number(info.value).toLocaleString()
      } else if(info.type === 'text') {
        if(info.value.length > 200) {
          return info.replaceAll('<p>','').replaceAll('</p>','').substring(0,200)+'...'
        }
      }
      return info.value
    },
  },
  layout: 'auth-layout',
  middleware: 'auth',
  data() {
    return {
      activeItem: 'availableListing',
      user: {
        id: 1,
        profile: {
          id: '',
          first_name: '',
          last_name: '',
        },
      },
      myListings: [],
      availableStartups: [],
      startupTypes: [],
      filter: {
        sortNewest: true,
        selectedStartupTypes: [],
        priceRange: {
          from: 1,
          to: 10000000,
        },
        showFavourites: false,
      },
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
      search: '',
      hasNextPage: true,
      page: 1,
      totalPages: 0,
    }
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.user = { ...this.user, ...this.$auth.user }
    }
    this.getUserInfo()
    this.getStartupTypes()
    this.getMarketplaceListings()
    if(this.$store.state.role.selectedRole === 'Seller'){
      this.activeItem = "yourListing"
      this.getMyListings()
    }
    if(this.hasNextPage) {
      this.page = 1
    }
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },
    searchFunc(value) {
      this.search = value;
      this.applyFilters();
    },
    getUserInfo() {
      this.$axios
        .get('/api/profiles')
        .then((response) => {
          if (response.data.data) {
            this.user.profile = response.data.data
          }
        })
        .catch((e) => {})
    },
    getMyListings() {
      let types = ''
      if (this.filter.selectedStartupTypes.length) {
        this.filter.selectedStartupTypes.forEach((type, index) => {
          types += `filters[types][${index}]=${type}&`
        })
      }
      this.$axios
        .get(
          `/api/marketplace/mystartups?${this.search.length ? 'search='+this.search+'&' : ''}filters[sort]=${
            this.filter.sortNewest ? 'desc' : 'asc'
          }&${types}filters[price][price_min]=${
            this.filter.priceRange.from
          }&filters[price][price_max]=${this.filter.priceRange.to}&page=${this.page}${this.filter.showFavourites ? '&filters[favorites]=1' : ''}`
        )
        .then((response) => {
          this.myListings = response.data.data.map((startup) => {
              const publicInfo = startup.startup_query_values.filter(value => value.startup_type_query.category.name === 'Public Information').map((value) => {
              return {
                label: value.startup_type_query.label,
                value: value.value,
                type: value.startup_type_query.type,
              }
            })
            return {
              ...startup,
              publicInfo,
            }
          })
          if(!response.data.next_page_url) {
            this.hasNextPage = false
          }
        })
        .catch((e) => {})
    },
    getStartupTypes() {
      this.$axios.get('/api/startups/info').then((response) => {
        this.startupTypes = response.data.data.startupTypes
      })
    },
    getMarketplaceListings() {
      let types = ''
      if (this.filter.selectedStartupTypes.length) {
        this.filter.selectedStartupTypes.forEach((type, index) => {
          types += `filters[types][${index}]=${type}&`
        })
      }
      this.$axios
        .get(
          `/api/marketplace?${this.search.length ? 'search='+this.search+'&' : ''}filters[sort]=${
            this.filter.sortNewest ? 'desc' : 'asc'
          }&${types}filters[price][price_min]=${
            this.filter.priceRange.from
          }&filters[price][price_max]=${this.filter.priceRange.to}&page=${this.page}${this.filter.showFavourites ? '&filters[favorites]=1' : ''}`
        )
        .then((response) => {
          this.totalPages = response.data.last_page;
          this.availableStartups = response.data.data.map((startup) => {
            const publicInfo = startup.startup_query_values.filter(value => value.startup_type_query.category.name === 'Public Information').map((value) => {
              return {
                label: value.startup_type_query.label,
                value: value.value,
                type: value.startup_type_query.type,
              }
            })
            return {
              ...startup,
              publicInfo,
            }
          })
          if(!response.data.next_page_url) {
            this.hasNextPage = false
          }
        })
        .catch((e) => {})
    },
    showFavouritesBtnToggle(value) {
      this.filter.showFavourites = value
      this.applyFilters()
    },
    adjustPriceRange(priceRangeValues) {
      this.filter.priceRange = {
        to: priceRangeValues.to,
        from: priceRangeValues.from,
      }
      this.applyFilters()
    },
    applySort(value) {
      this.filter.sortNewest = value;
      this.applyFilters()
    },
    setStartupTypes(types) {
      this.filter.selectedStartupTypes = types
      this.applyFilters()
    },
    setAdditionalFilters(info) {
      this.filter.moreFilters = info
      this.applyFilters()
    },
    applyFilters() {
      this.page = 1
      if(this.isActive('yourListing')) {
        this.getMyListings()
      } else {
        this.getMarketplaceListings()
      }
    },
    loadMoreListings() {
      this.page++
      let types = ''
      if (this.filter.selectedStartupTypes.length) {
        this.filter.selectedStartupTypes.forEach((type, index) => {
          types += `filters[types][${index}]=${type}&`
        })
      }
      this.$axios.get(
          `/api/marketplace/${this.isActive('yourListing') ? 'mystartups' : ''}?${this.search.length ? 'search='+this.search+'&' : ''}filters[sort]=${
            this.filter.sortNewest ? 'desc' : 'asc'
          }&${types}filters[price][price_min]=${
            this.filter.priceRange.from
          }&filters[price][price_max]=${this.filter.priceRange.to}&page=${this.page}${this.filter.showFavourites ? '&filters[favorites]=1' : ''}`
        )
        .then((response) => {
          if(this.isActive('yourListing')) {
            this.myListings = this.myListings.concat(response.data.data.map((startup) => {
              const publicInfo = startup.startup_query_values.filter(value => value.startup_type_query.category.name === 'Public Information').map((value) => {
                return {
                  label: value.startup_type_query.label,
                  value: value.value,
                  type: value.startup_type_query.type,
                }
              })
              return {
                ...startup,
                publicInfo,
              }
            }))
          } else {
            this.availableStartups = this.availableStartups.concat(response.data.data.map((startup) => {
              const publicInfo = startup.startup_query_values.filter(value => value.startup_type_query.category.name === 'Public Information').map((value) => {
                return {
                  label: value.startup_type_query.label,
                  value: value.value,
                  type: value.startup_type_query.type,
                }
              })
              return {
                ...startup,
                publicInfo,
              }
            }))
          }
          if(!response.data.next_page_url) {
            this.hasNextPage = false
            this.page = 1
          } else {
            this.page++
          }
        })
        .catch((e) => {})
    },
    allFiltersFunc(data) {
      this.filter.sortNewest = data.sortNewest;
      this.filter.selectedStartupTypes = data.selectedStartupTypes;
      this.filter.showFavourites = data.isFavourite;
      this.filter.priceRange = {
        to: data.priceRange.to,
        from: data.priceRange.from
      }
      this.applyFilters()
    }
  },
}
</script>

<style>
</style>
