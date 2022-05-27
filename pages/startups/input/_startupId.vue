<template>
  <div class="container new-background">
    <ToastCard :toastMessage="toastMessage" />
    <br /><br />

    <div class="row">
      <div class="col-12 mt-4 mb-4">
        <NuxtLink
          :to="localePath('/startups')"
          class="btn back-btn d-flex align-items-center justify-content-center"
        >
          <font-awesome-icon
            color="#009DDD"
            :icon="['fas', 'arrow-left-long']"
          />
        </NuxtLink>
      </div>
      <div v-if="startup" class="col-12 mb-5">
        <div class="mystartup-dashboard-block">
          <div class="dashboard-header mb-5">
            <div class="dashboard-header-text">
              Basic Information about Startup number and History
            </div>
            <div class="dashboard-header-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>

          <div
            v-for="category in startup.queryCategories"
            :key="category.id"
            class="startup-category mb-4"
          >
            <div>
              <div class="startup-form">
                <div class="d-flex justify-content-between pb-3">
                  <div>
                    <h1>{{ category.name }}</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <a
                    v-show="startup.user_id === $auth.user.id"
                    class="btn startup-info-edit-btn d-flex align-items-center"
                    role="button"
                    @click="toggleEditStartup(category)"
                  >
                    <img src="~assets/images/Edit.svg" class="img-fluid" />
                    <div class="mobile-no-display-text-sm ml-1">
                      Edit Info
                    </div>
                  </a>
                </div>
                <form
                  v-if="editStartup && category === activeCategory"
                  class="form-group"
                >
                  <InputField
                    v-for="query in $options.filters.noDescription(
                      category.startup_type_queries
                    )"
                    :id="query.id"
                    :key="query.id"
                    v-model="query.value"
                    :type="query.type"
                    :name="query.label"
                  />
                  <div class="startup-form-buttons mobile-no-display-xs">
                    <button
                      type="button"
                      class="btn btn-primary dashboard-btn px-5"
                      @click="saveQueries"
                    >
                      SAVE
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-primary dashboard-btn px-5"
                      @click="editStartup = false"
                    >
                      CANCEL
                    </button>
                  </div>
                  <div class="mobile-display-xs flex-column-reverse">
                    <button
                      type="button"
                      class="btn btn-outline-primary dashboard-outline-btn w-100 px-3"
                      @click="editStartup = false"
                    >
                      CANCEL
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary dashboard-btn w-100 px-3 mb-2"
                      @click="saveQueries"
                    >
                      SAVE
                    </button>
                  </div>
                </form>
                <div v-else class="row">
                  <div
                    v-if="category.name === 'Public Information'"
                    class="col-12 pb-4"
                  >
                    <a
                      class="btn openToOffers d-flex text-gray fw-600 fs-13"
                      role="button"
                    >
                      <img
                        src="~assets/images/Offer_money_1.svg"
                        class="img-fluid mr-1"
                      />
                      Open to Offers
                    </a>
                  </div>
                  <div
                    v-for="query in $options.filters.noDescription(
                      category.startup_type_queries
                    )"
                    :key="query.id"
                    :class="getClass(category)"
                  >
                    <div class="startup-info-header">{{ query.label }}</div>
                    <div
                      v-if="query.type === 'boolean' && query.value"
                      class="startup-info-text"
                    >
                      <font-awesome-icon
                        :icon="[
                          'fas',
                          query.value === 'true'
                            ? 'circle-check'
                            : 'circle-xmark',
                        ]"
                      />
                    </div>
                    <div v-else class="startup-info-text">
                      {{ query | displayType }}
                    </div>
                  </div>
                  <div
                    v-if="category.name === 'Public Information'"
                    class="col-12 pb-4"
                  >
                    <div class="startup-info-header">Description</div>
                    <div
                      class="startup-info-text-description"
                      v-html="
                        category.startup_type_queries.find(
                          (query) => query.label === 'Description'
                        ).query_values[0].value
                      "
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              v-if="$auth.user.id !== startup.user_id"
              type="button"
              class="btn btn-primary dashboard-btn px-5"
              @click="sendRequest"
            >
              I'm Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToastCard from '../../../components/ToastCard.vue'
export default {
  name: 'MyStartupInputPage',
  components: {
    ToastCard,
  },
  filters: {
    noDescription(queries) {
      return queries.filter((query) => query.label !== 'Description')
    },
    displayType(query) {
      // console.log(query)
      if (query.value === null) {
        return 'N/A'
      }
      // if(!query.value) {
      //   return 'Hidden'
      // }
      if (query.type === 'float') {
        return '$ ' + Number(query.value).toLocaleString()
      }
      return query.value
    },
  },
  layout: 'auth-layout',
  middleware: 'auth',

  asyncData({ params }) {
    const startupId = params.startupId
    return { startupId }
  },
  data() {
    return {
      startup: null,
      user: {
        id: 1,
        profile: {
          id: '',
          first_name: '',
          last_name: '',
        },
        startup: {
          id: null,
          name: '',
        },
        listing: {
          startupType: null,
        },
        highlights: {},
        selling: {},
        performance: {},
        startupData: {
          listing: null,
          features: null,
          sellingDetails: null,
          financialDetails: null,
        },
      },
      listing: {
        empty: true,
        input: false,
        startupTypes: [],
        queries: [],
      },
      highlights: {
        empty: true,
        input: false,
        queries: [],
      },
      selling: {
        empty: true,
        input: false,
        queries: [],
      },
      performance: {
        empty: true,
        input: false,
        queries: [],
      },
      editStartup: false,
      activeCategory: null,
      toastMessage: '',
    }
  },
  mounted() {
    this.getMyListing()

    if (this.$auth.loggedIn) {
      this.user = {
        ...this.user,
        ...this.$auth.user,
        startupData: {
          listing: {},
          features: {},
          sellingDetails: {},
          financialDetails: {},
        },
      }
    }
    this.getUserInfo()
    this.getListing()
    this.getHighlights()
    this.getSelling()
    this.getPerformance()
  },
  methods: {
    sendRequest() {
      this.$store.commit('messages/selectTab', 'requests')
      this.$axios.post(`/api/messages/${this.startupId}`).then(() => {
        this.$router.push(this.localePath('/messages/seller'))
      })
    },
    reverseFloat(queries) {
      return queries.map((query) => {
        if (query.value !== null && query.type === 'float') {
          query.value = query.value.replaceAll(',', '')
        }
        return query
      })
    },
    async saveQueries() {
      if (this.activeCategory) {
        await this.$axios.post(`/api/startups/${this.startup.id}`, {
          queries: this.reverseFloat(this.activeCategory.startup_type_queries),
        })
        await this.getMyListing()
        this.toastMessage = `Successfully Updated ${this.activeCategory.name}`
        this.$bvToast.show('custom-toast')
        this.editStartup = false
      }
    },
    toggleEditStartup(category) {
      this.activeCategory = category
      this.editStartup = !this.editStartup
    },
    getMyListing() {
      this.$axios.get(`/api/marketplace/${this.startupId}`).then((response) => {
        const startup = response.data.data
        this.startup = {
          ...startup,
          queryCategories: startup.queryCategories.map((category) => {
            return {
              ...category,
              startup_type_queries: category.startup_type_queries.map(
                (typeQuery) => {
                  return {
                    ...typeQuery,
                    value: typeQuery.query_values[0].value,
                  }
                }
              ),
            }
          }),
        }
      })
    },
    uploadImage(event) {
      if (event.target.files[0]) {
        this.user.photo = {
          data: event.target.files[0],
          url: URL.createObjectURL(event.target.files[0]),
        }
      } else {
        this.user.photo = {
          data: {},
          url: null,
        }
      }
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
    getListing() {
      this.$axios
        .get('/api/startups/info')
        .then((response) => {
          this.listing.startupTypes = response.data.data.startupTypes
          this.listing.queries = response.data.data.queries.map((query) => ({
            ...query,
            value: '',
          }))
        })
        .catch((e) => {})
    },
    listing_toggle() {
      // this.listing.empty = !this.listing.empty
      this.listing.input = !this.listing.input
    },
    saveListing() {},
    getHighlights() {
      this.$axios
        .get('/api/startups/' + this.user.id + '/queries?')
        .then((response) => {
          this.user.startup = response.data.data.startup
          this.highlights.queries = response.data.data.queries.map((query) => ({
            ...query,
            value: '',
          }))
        })
        .catch((e) => {})
    },
    highlights_toggle() {
      this.highlights.empty = !this.highlights.empty
      this.highlights.input = !this.highlights.input
    },
    saveHighlights() {},
    getSelling() {
      this.$axios
        .get('/api/startups/' + this.user.id + '/queries?page=2')
        .then((response) => {
          this.selling.queries = response.data.data.queries.map((query) => ({
            ...query,
            value: '',
          }))
        })
        .catch((e) => {})
    },
    selling_toggle() {
      this.selling.empty = !this.selling.empty
      this.selling.input = !this.selling.input
    },
    saveSelling() {},
    getPerformance() {
      this.$axios
        .get('/api/startups/' + this.user.id + '/queries?page=3')
        .then((response) => {
          this.performance.queries = response.data.data.queries.map(
            (query) => ({
              ...query,
              value: '',
            })
          )
        })
        .catch((e) => {})
    },
    performance_toggle() {
      this.performance.empty = !this.performance.empty
      this.performance.input = !this.performance.input
    },
    savePerformance() {},
    getClass(category) {
      if (category.name !== 'Public Information') {
        return 'col-md-12 pb-4'
      } else {
        return 'col-md-4 pb-4'
      }
    },
  },
}
</script>

<style>
.startup-info-text > .fa-circle-check {
  color: #009ddd;
}
</style>