<template>
  <div class="container new-background">
    <br /><br />
    <b-container>
      <div class="row">
        <div class="col-md-12 mb-5">
          <div class="message-nav-links mb-4">
            <div class="mt-5 d-flex justify-content-start">
              <div v-show="$store.state.role.selectedRole === 'Advisor'" class="mb-4 px-3">
                <a
                  class="
                    nav-link
                    messages-nav-link
                    text-center
                    font-weight-bold
                    m-0
                    fs-16
                  "
                  :class="isActive('myClients') ? 'border-bottom-active' : ''"
                  href="#myAdvisor" 
                  @click.prevent="setActive('myClients')"
                >
                  My Clients
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
          <!-- <AdvisorTabs
            :expertise-types="expertiseTypes"
            :show-favourites="filter.showFavourites"
            @showFavouritesBtnToggle="showFavouritesBtnToggle"
            @setDealClosed="setDealClosed"
            @setSort="setSort"
            @applySort="applySort"
          /> -->
          <ClientTabs
            :show-favourites="filter.showFavourites"
            @showFavouritesBtnToggle="showFavouritesBtnToggle"
            @applySort="applySort"
            @searchFunc="searchFunc"
            @allFiltersFunc="allFiltersFunc"
          />
          <div id="myTabContent" class="tab-content py-3">
            <div id="profile" class="tab-pane fade" :class="{ 'active show': isActive('myClients') }">
              <div class="mystartup-dashboard-block">
                <div class="dashboard-header mb-5">
                  <div class="dashboard-header-text">My Clients</div>
                  <div class="dashboard-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
                <div v-if="activeClients.data.length" class="row">
                  <ClientCard 
                    v-for="advisor in activeClients.data"
                    :key="advisor.id"
                    :advisor="advisor"
                  />
                  <div v-if="activeClients.hasNextPage" class="col-md-12 mb-5 px-5 d-flex align-items-center justify-content-center">
                    <button class="btn btn-outline-primary view-all-btn d-flex align-items-center justify-content-center px-5" @click="loadMoreClients">
                      <div class="pr-3">
                        Load More
                      </div>
                      <img src="~assets/images/Arrow_Right.svg" class="img-fluid" />
                    </button>
                  </div>
                </div>
                <div v-else class="row col-md-12">
                  No Clients Found..
                </div>
              </div>
            </div>
            <div id="profile" class="tab-pane fade" :class="{ 'active show': isActive('request') }">
              <div class="mystartup-dashboard-block">
                <div class="dashboard-header mb-5">
                  <div class="dashboard-header-text">Requests</div>
                  <div class="dashboard-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
                <div v-if="pendingClients.data.length" class="row">
                  <ClientCard 
                    v-for="advisor in pendingClients.data"
                    :key="advisor.id"
                    :advisor="advisor"
                  />
                  <div v-if="pendingClients.hasNextPage" class="col-md-12 mb-5 px-5 d-flex align-items-center justify-content-center">
                    <button class="btn btn-outline-primary view-all-btn d-flex align-items-center justify-content-center px-5" @click="loadMoreClients">
                      <div class="pr-3">
                        Load More
                      </div>
                      <img src="~assets/images/Arrow_Right.svg" class="img-fluid" />
                    </button>
                  </div>
                </div>
                <div v-else class="row col-md-12">
                  No Clients Found..
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
  name: 'ClientPage',
  layout: 'auth-layout',
  middleware: 'auth',
  data() {
    return {
      clients: {
        data: [],
        page: 1,
        totalPages: 0,
        hasNextPage: true
      },
      activeClients: {
        data: [],
        page: 1,
        totalPages: 0,
        hasNextPage: true
      },
      pendingClients: {
        data: [],
        page: 1,
        totalPages: 0,
        hasNextPage: true
      },
      activeItem: 'myClients',
      filter: {
        sortNewest: true,
        showFavourites: false,
        search: null
      }
    }
  },
  async mounted() {
    await this.getAvailableClients()
    await this.getActiveClients()
    await this.getPendingClients()
  },
  methods: {
    getAvailableClients() {
      this.$axios.get(`/api/clients?${this.filter.search ? 'search='+this.filter.search+'&' : ''}filters[sort]=${
        this.filter.sortNewest ? 'desc' : 'asc'}&page=${this.clients.page}${this.filter.showFavourites ? '&filters[favorites]=true' : ''}
      `).then(response => {
        this.clients.data = response.data.data
        if(!response.data.next_page_url) {
          this.clients.hasNextPage = false
        }
      })
    },
    getActiveClients() {
      this.$axios.get(`/api/clients/active?${this.filter.search ? 'search='+this.filter.search+'&' : ''}filters[sort]=${
        this.filter.sortNewest ? 'desc' : 'asc'}&page=${this.activeClients.page}${this.filter.showFavourites ? '&filters[favorites]=true' : ''}
      `).then(response => {
        this.activeClients.data = response.data.data
        if(!response.data.next_page_url) {
          this.activeClients.hasNextPage = false
        }
      })
    },
    getPendingClients() {
      this.$axios.get(`/api/clients/pending?${this.filter.search ? 'search='+this.filter.search+'&' : ''}filters[sort]=${
        this.filter.sortNewest ? 'desc' : 'asc'}&page=${this.pendingClients.page}${this.filter.showFavourites ? '&filters[favorites]=true' : ''}
      `).then(response => {
        this.pendingClients.data = response.data.data
        if(!response.data.next_page_url) {
          this.pendingClients.hasNextPage = false
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
    applySort(value) {
      this.filter.sortNewest = value;
      this.applyFilters()
    },
    searchFunc(value) {
      this.filter.search = value;
      this.applyFilters();
    },
    applyFilters() {
      if(this.isActive('directory')){
        this.clients.page = 0
        this.clients.hasNextPage = true
        this.getAvailableAdvisors()
      }else if(this.isActive('myClients')){
        this.activeClients.page = 0
        this.activeClients.hasNextPage = true
        this.getActiveClients()
      }else if(this.isActive('request')){
        this.pendingClients.page = 0
        this.pendingClients.hasNextPage = true
        this.getPendingClients() 
      }
    },
    loadMoreClients() {
      let page = null;
      if(this.isActive('directory')){
        this.clients.page++
        page = this.clients.page;
      }else if(this.isActive('myClients')){
        this.activeClients.page++
        page = this.activeClients.page;
      }else if(this.isActive('request')){
        this.pendingClients.page++
        page = this.pendingClients.page;
      }
      this.$axios.get(`/api/advisors/${this.isActive('directory') ? '' : '/'}${this.isActive('myAdvisor') ? 'active' : ''}${this.isActive('request') ? 'pending' : ''}?
        ${this.filter.search ? 'search='+this.filter.search+'&' : ''}
        filters[sort]=${this.filter.sortNewest ? 'desc' : 'asc'}&
        page=${page}${this.filter.showFavourites ? '&filters[favorites]=1' : ''}
      `).then((response) => {
        if(this.isActive('directory')) {
          this.clients.data = [...this.clients.data, ...response.data.data];
          if(!response.data.next_page_url) {
            this.clients.hasNextPage = false
            this.clients.page = 1
          } else {
            this.clients.page++
          }
        } else if(this.isActive('myClients')) {
          this.activeClients.data = [...this.activeClients.data, ...response.data.data];
          if(!response.data.next_page_url) {
            this.activeClients.hasNextPage = false
            this.activeClients.page = 1
          } else {
            this.activeClients.page++
          }
        } else if(this.isActive('request')){
          this.pendingClients.data = [...this.pendingClients.data, ...response.data.data];
          if(!response.data.next_page_url) {
            this.pendingClients.hasNextPage = false
            this.pendingClients.page = 1
          } else {
            this.pendingClients.page++
          }
        }
      })
      .catch((e) => {})
    },
    allFiltersFunc(data) {
      this.filter.sortNewest = data.sortNewest;
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