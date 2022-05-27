<template>
  <div class="container new-background">
    <br /><br />
    <b-container>
      <div class="row">
        <div class="col-md-12 mb-5">
          <!-- <ul class="nav nav-tabs mb-4">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: isActive('directory') }" href="#directory" @click.prevent="setActive('directory')">Directory</a>
            </li>
            <li v-show="$auth.user.roles[0].id === 2" class="nav-item">
              <a class="nav-link" :class="{ active: isActive('myAdvisor') }" href="#myAdvisor" @click.prevent="setActive('myAdvisor')">My Advisors</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: isActive('request') }" href="#request" @click.prevent="setActive('request')">Request</a>
            </li>
          </ul> -->
          <div class="message-nav-links mt-4 mb-4">
            <div class="mt-5 d-flex justify-content-start">
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
                  :class="isActive('directory') ? 'border-bottom-active' : ''"
                  href="#directory" 
                  @click.prevent="setActive('directory')"
                >
                  Directory
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
                  :class="isActive('myAdvisor') ? 'border-bottom-active' : ''"
                  href="#myAdvisor" 
                  @click.prevent="setActive('myAdvisor')"
                >
                  My Advisors
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
                  :class="isActive('request') ? 'border-bottom-active' : ''"
                  href="#request" 
                  @click.prevent="setActive('request')"
                >
                  Request
                </a>
              </div>
            </div>
          </div>
          <AdvisorTabs
            :expertise-types="expertiseTypes"
            :show-favourites="filter.showFavourites"
            @showFavouritesBtnToggle="showFavouritesBtnToggle"
            @setExpertiseTypes="setExpertiseTypes"
            @setDealClosed="setDealClosed"
            @applySort="applySort"
            @searchFunc="searchFunc"
            @allFiltersFunc="allFiltersFunc"
          />
          <div v-show="$store.state.role.selectedRole === 'Seller'"  id="myTabContent" class="tab-content py-3">
            <div v-show="$store.state.role.selectedRole === 'Seller'" id="home" class="tab-pane fade" :class="{ 'active show': isActive('directory') }" >
              <div class="mystartup-dashboard-block">
                <div class="dashboard-header mb-5">
                  <div class="dashboard-header-text">Directory</div>
                  <div class="dashboard-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
                <div v-if="advisors.data.length" class="row">
                  <AdvisorCard 
                    v-for="advisor in advisors.data"
                    :key="advisor.id"
                    :advisor="advisor"
                  />
                  <div v-if="advisors.hasNextPage" class="col-md-12 mb-5 px-5 d-flex align-items-center justify-content-center">
                    <button class="btn btn-outline-primary view-all-btn d-flex align-items-center justify-content-center px-5" @click="loadMoreAdvisors">
                      <div class="pr-3">
                        Load More
                      </div>
                      <img src="~assets/images/Arrow_Right.svg" class="img-fluid" />
                    </button>
                  </div>
                </div>
                <div v-else class="row col-md-12">
                  No Advisor Found..
                </div>
              </div>
            </div>
            <div id="profile" class="tab-pane fade" :class="{ 'active show': isActive('myAdvisor') }">
              <div class="mystartup-dashboard-block">
                <div class="dashboard-header mb-5">
                  <div class="dashboard-header-text">My Advisors</div>
                  <div class="dashboard-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
                <div v-if="activeAdvisors.data.length" class="row">
                  <AdvisorCard 
                    v-for="advisor in activeAdvisors.data"
                    :key="advisor.id"
                    :advisor="advisor"
                  />
                  <div v-if="activeAdvisors.hasNextPage" class="col-md-12 mb-5 px-5 d-flex align-items-center justify-content-center">
                    <button class="btn btn-outline-primary view-all-btn d-flex align-items-center justify-content-center px-5" @click="loadMoreAdvisors">
                      <div class="pr-3">
                        Load More
                      </div>
                      <img src="~assets/images/Arrow_Right.svg" class="img-fluid" />
                    </button>
                  </div>
                </div>
                <div v-else class="row col-md-12">
                  No Advisor Found..
                </div>
              </div>
            </div>
            <div id="profile" class="tab-pane fade" :class="{ 'active show': isActive('request') }">
              <div class="mystartup-dashboard-block">
                <div class="dashboard-header mb-5">
                  <div class="dashboard-header-text">Requests</div>
                  <div class="dashboard-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
                <div v-if="pendingAdvisors.data.length" class="row">
                  <AdvisorCard 
                    v-for="advisor in pendingAdvisors.data"
                    :key="advisor.id"
                    :advisor="advisor"
                  />
                  <div v-if="pendingAdvisors.hasNextPage" class="col-md-12 mb-5 px-5 d-flex align-items-center justify-content-center">
                    <button class="btn btn-outline-primary view-all-btn d-flex align-items-center justify-content-center px-5" @click="loadMoreAdvisors">
                      <div class="pr-3">
                        Load More
                      </div>
                      <img src="~assets/images/Arrow_Right.svg" class="img-fluid" />
                    </button>
                  </div>
                </div>
                <div v-else class="row col-md-12">
                  No Advisor Found..
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AdvisorPage',
  layout: 'auth-layout',
  middleware: 'auth',
  data() {
    return {
      advisors: {
        data: [],
        page: 1,
        totalPages: 0,
        hasNextPage: true
      },
      activeAdvisors: {
        data: [],
        page: 1,
        totalPages: 0,
        hasNextPage: true
      },
      pendingAdvisors: {
        data: [],
        page: 1,
        totalPages: 0,
        hasNextPage: true
      },
      activeItem: 'directory',
      expertiseTypes: [],
      filter: {
        sortNewest: true,
        selectedExpertiseTypes: [],
        selectedDealClosed: {
          from: null,
          to: null
        },
        showFavourites: false,
        search: null
      }
    }
  },
  async mounted() {
    await this.getExpertiseTypes()
    await this.getAvailableAdvisors()
    await this.getActiveAdvisors()
    await this.getPendingAdvisors()
  },
  methods: {
    getExpertiseTypes() {
      this.$axios.get('/api/expertise').then((response) => {
        this.expertiseTypes = response.data
      })
    },
    loadMoreAdvisors() {
      let page = null;
      if(this.isActive('directory')){
        this.advisors.page++
        page = this.advisors.page;
      }else if(this.isActive('myAdvisor')){
        this.activeAdvisors.page++
        page = this.activeAdvisors.page;
      }else if(this.isActive('request')){
        this.pendingAdvisors.page++
        page = this.pendingAdvisors.page;
      }
      let types = ''
      if (this.filter.selectedExpertiseTypes.length) {
        this.filter.selectedExpertiseTypes.forEach((type, index) => {
          types += `filters[expertise][${index}]=${type}&`
        })
      }
      this.$axios.get(`/api/advisors/${this.isActive('directory') ? '' : '/'}${this.isActive('myAdvisor') ? 'active' : ''}${this.isActive('request') ? 'pending' : ''}?${
        this.filter.search ? 'search='+this.filter.search+'&' : ''
      }filters[sort]=${
        this.filter.sortNewest ? 'desc' : 'asc'
      }&${
        types
      }page=${
        page
      }${
        this.filter.showFavourites ? '&filters[favorites]=true' : ''
      }`).then((response) => {
        if(this.isActive('directory')) {
          this.advisors.data = [...this.advisors.data, ...response.data.data];
          if(!response.data.next_page_url) {
            this.advisors.hasNextPage = false
            this.advisors.page = 1
          } else {
            this.advisors.page++
          }
        } else if(this.isActive('myAdvisor')) {
          this.activeAdvisors.data = [...this.activeAdvisors.data, ...response.data.data];
          if(!response.data.next_page_url) {
            this.activeAdvisors.hasNextPage = false
            this.activeAdvisors.page = 1
          } else {
            this.activeAdvisors.page++
          }
        } else if(this.isActive('request')){
          this.pendingAdvisors.data = [...this.pendingAdvisors.data, ...response.data.data];
          if(!response.data.next_page_url) {
            this.pendingAdvisors.hasNextPage = false
            this.pendingAdvisors.page = 1
          } else {
            this.pendingAdvisors.page++
          }
        }
      })
      .catch((e) => {})
    },
    getAvailableAdvisors() {
      let types = ''
      if (this.filter.selectedExpertiseTypes.length) {
        this.filter.selectedExpertiseTypes.forEach((type, index) => {
          types += `filters[expertise][${index}]=${type}&`
        })
      }
      this.$axios.get(`/api/advisors?${
        this.filter.search ? 'search='+this.filter.search+'&' : ''
      }filters[sort]=${
        this.filter.sortNewest ? 'desc' : 'asc'
      }&${
        types
      }page=${
        this.advisors.page
      }${
        this.filter.showFavourites ? '&filters[favorites]=true' : ''
      }`).then(response => {
        this.advisors.data = response.data.data
        if(!response.data.next_page_url) {
          this.advisors.hasNextPage = false
        }
      })
    },
    getActiveAdvisors() {
      // const response = await this.$axios.get('/api/advisors/active')
      // this.activeAdvisors.data = response.data.data
      let types = ''
      if (this.filter.selectedExpertiseTypes.length) {
        this.filter.selectedExpertiseTypes.forEach((type, index) => {
          types += `filters[expertise][${index}]=${type}&`
        })
      }
      this.$axios.get(`/api/advisors/active?${
        this.filter.search ? 'search='+this.filter.search+'&' : ''
      }filters[sort]=${
        this.filter.sortNewest ? 'desc' : 'asc'
      }&${
        types
      }page=${
        this.activeAdvisors.page
      }${
        this.filter.showFavourites ? '&filters[favorites]=true' : ''
      }`).then(response => {
        this.activeAdvisors.data = response.data.data
        if(!response.data.next_page_url) {
          this.activeAdvisors.hasNextPage = false
        }
      })
    },
    getPendingAdvisors() {
      // const response = await this.$axios.get('/api/advisors/pending')
      // this.pendingAdvisors.data = response.data.data
      let types = ''
      if (this.filter.selectedExpertiseTypes.length) {
        this.filter.selectedExpertiseTypes.forEach((type, index) => {
          types += `filters[expertise][${index}]=${type}&`
        })
      }
      this.$axios.get(`/api/advisors/pending?${
        this.filter.search ? 'search='+this.filter.search+'&' : ''
      }filters[sort]=${
        this.filter.sortNewest ? 'desc' : 'asc'
      }&${
        types
      }page=${
        this.pendingAdvisors.page
      }${
        this.filter.showFavourites ? '&filters[favorites]=true' : ''
      }`).then(response => {
        this.pendingAdvisors.data = response.data.data
        if(!response.data.next_page_url) {
          this.pendingAdvisors.hasNextPage = false
        }
      })
    },
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },
    showFavouritesBtnToggle(value) {
      this.filter.showFavourites = value
      this.applyFilters()
    },
    setDealClosed(value) {
      const data = value.split('-');
      this.filter.selectedDealClosed = {
        from: data[0],
        to: data[1]
      }
      this.applyFilters()
    },
    applySort(value) {
      this.filter.sortNewest = value;
      this.applyFilters()
    },
    setExpertiseTypes(types) {
      this.filter.selectedExpertiseTypes = types
      this.applyFilters()
    },
    searchFunc(value) {
      this.filter.search = value;
      this.applyFilters();
    },
    applyFilters() {
      if(this.isActive('directory')){
        this.advisors.page = 0
        this.advisors.hasNextPage = true
        this.getAvailableAdvisors()
      }else if(this.isActive('myAdvisor')){
        this.activeAdvisors.page = 0
        this.activeAdvisors.hasNextPage = true
        this.getActiveAdvisors()
      }else if(this.isActive('request')){
        this.pendingAdvisors.page = 0
        this.pendingAdvisors.hasNextPage = true
        this.getPendingAdvisors() 
      }
    },
    allFiltersFunc(data) {
      this.filter.sortNewest = data.sortNewest;
      this.filter.selectedExpertiseTypes = data.selectedExpertiseTypes;
      this.filter.showFavourites = data.isFavourite;
      this.applyFilters()
    }
  }
}
</script>

<style>
  .expertise-container {
    display: flex;
    align-content: flex-start;
    grid-gap: 0.5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .expertise-item {
    flex: none;
    padding: 0.5rem;
    border: 1px solid #009DDD;
    border-radius: 8px;
    color: #009DDD;
  }
</style>