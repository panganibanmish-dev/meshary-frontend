<template>
  <div class="container new-background">
    <ToastCard :toastMessage="toastMessage" />
    <br /><br />
    <div class="row">
      <div class="col-md-12 mt-5 mb-4">
        <NuxtLink :to="localePath(`/marketplace`)" class="btn back-btn d-flex align-items-center justify-content-center">
          <font-awesome-icon color="#009ddd" :icon="['fas', 'arrow-left-long']" />
        </NuxtLink>
      </div>
      <div class="col-sm-12 mb-5">
        <div class="mystartup-dashboard-block">
          <div class="dashboard-header mb-5">
            <div class="dashboard-header-text">
              Basic Information about Startup number and History
            </div>
            <div class="dashboard-header-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div class="startup-category mb-4">
            <div v-if="!listing.input">
              <div class="startup-content">
                <h1>Your Listing</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button
                  type="button"
                  class="
                    btn btn-primary
                    dashboard-btn
                    px-4
                    fs-14
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  @click="listing_toggle"
                >
                  <font-awesome-icon :icon="['fas', 'plus']" />
                  <div class="pl-2">Add Information</div>
                </button>
              </div>
            </div>
            <div v-else class="startup-form">
              <div class="pb-3">
                <h1>Your Listing</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <form class="form-group">
                <InputField
                  :id="0"
                  v-model="user.listing.name"
                  type="string"
                  name="Startup Name"
                />
                <label for="startupType" class="mb-3 text-center">
                  Startup type
                  <a
                    href="#"
                    class="ml-2"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  >
                    <img
                      src="~/assets/imgs/help-tooltip.png"
                      class="help-tooltip-icon"
                      alt=""
                    />
                  </a>
                </label>
                <select
                  id="startupType"
                  v-model="user.listing.type_id"
                  name="startupType"
                  class="form-control"
                  required
                >
                  <option
                    v-for="item in listing.startupTypes"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <br />
                <InputField
                  v-for="query in listing.queries"
                  :id="query.id"
                  :key="query.id"
                  v-model="query.value"
                  :type="query.type"
                  :name="query.label"
                />
                <div class="startup-form-buttons">
                  <button
                    type="button"
                    class="btn btn-outline-primary dashboard-outline-btn px-5"
                    @click="listing_toggle"
                  >
                    CANCEL
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn px-5 ml-2"
                    @click="saveListing"
                  >
                    SAVE
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="startup-category mb-4">
            <div v-if="!highlights.input">
              <div class="startup-content">
                <h1>Startup Highlights</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button
                  type="button"
                  class="
                    btn btn-primary
                    dashboard-btn
                    px-4
                    fs-14
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  @click="highlights_toggle"
                >
                  <font-awesome-icon :icon="['fas', 'plus']" />
                  <div class="pl-2">Add Information</div>
                </button>
              </div>
            </div>
            <div v-else class="startup-form">
              <div class="pb-3">
                <h1>Company Features</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <form class="form-group">
                <InputField
                  v-for="query in highlights.queries"
                  :id="query.id"
                  :key="query.id"
                  v-model="query.value"
                  :type="query.type"
                  :name="query.label"
                />
                <div class="startup-form-buttons">
                  <button
                    type="button"
                    class="btn btn-outline-primary dashboard-outline-btn px-5"
                    @click="highlights_toggle"
                  >
                    CANCEL
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn px-5 ml-2"
                    @click="saveListing"
                  >
                    SAVE
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="startup-category mb-4">
            <div v-if="!selling.input">
              <div class="startup-content">
                <h1>Why are you selling?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button
                  type="button"
                  class="
                    btn btn-primary
                    dashboard-btn
                    px-4
                    fs-14
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  @click="selling_toggle"
                >
                  <font-awesome-icon :icon="['fas', 'plus']" />
                  <div class="pl-2">Add Information</div>
                </button>
              </div>
            </div>
            <div v-else class="startup-form">
              <div class="pb-3">
                <h1>Selling Details</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <form class="form-group">
                <InputField
                  v-for="query in selling.queries"
                  :id="query.id"
                  :key="query.id"
                  v-model="query.value"
                  :type="query.type"
                  :name="query.label"
                />
                <div class="startup-form-buttons">
                  <button
                    type="button"
                    class="btn btn-outline-primary dashboard-outline-btn px-5"
                    @click="selling_toggle"
                  >
                    CANCEL
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn px-5 ml-2"
                    @click="saveListing"
                  >
                    SAVE
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="startup-category mb-4">
            <div v-if="!performance.input">
              <div class="startup-content">
                <h1>Startup Performance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button
                  type="button"
                  class="
                    btn btn-primary
                    dashboard-btn
                    px-4
                    fs-14
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  @click="performance_toggle"
                >
                  <font-awesome-icon :icon="['fas', 'plus']" />
                  <div class="pl-2">Add Information</div>
                </button>
              </div>
            </div>
            <div v-else class="startup-form">
              <div class="pb-3">
                <h1>Financial Details</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <form class="form-group">
                <InputField
                  v-for="query in performance.queries"
                  :id="query.id"
                  :key="query.id"
                  v-model="query.value"
                  :type="query.type"
                  :name="query.label"
                />
                <div class="startup-form-buttons">
                  <button
                    type="button"
                    class="btn btn-outline-primary dashboard-outline-btn px-5"
                    @click="performance_toggle"
                  >
                    CANCEL
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn px-5 ml-2"
                    @click="saveListing"
                  >
                    SAVE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToastCard from '../../components/ToastCard.vue'
export default {
  name: 'MarketPlaceAddListingPage',
  components: {
    ToastCard,
  },
  layout: 'auth-layout',
  middleware: 'auth',
  data() {
    return {
      startupId: null,
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
          name: '',
          type_id: 1,
        },
        highlights: {},
        selling: {},
        performance: {},
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
      toastMessage: '',
    }
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.user = {
        ...this.user,
        ...this.$auth.user,
      }
    }
    this.getUserInfo()
    this.getListing()
    this.getHighlights()
    this.getSelling()
    this.getPerformance()
  },
  methods: {
    reverseFloat(queries) {
      return queries.map((query) => {
        if (query.type === 'float') {
          query.value = query.value.replaceAll(',', '')
        }
        return query
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
    saveListing() {
      const description = this.listing.queries.find((query) => {
        return query.label === 'Description'
      }).value

      let queries = this.listing.queries
      queries = queries.concat(this.highlights.queries)
      queries = queries.concat(this.selling.queries)
      queries = queries.concat(this.performance.queries)

      this.$axios
        .post('/api/startups', {
          ...this.user.listing,
          description,
          queries: this.reverseFloat(queries),
        })
        .then((response) => {
          const id = response.data.data.startup.id
          this.startupId = id
          this.toastMessage = response.data.message
          this.$bvToast.show('custom-toast')
          this.$router.push(this.localePath(`/marketplace/view/${id}`))
        })
        .catch(({ response }) => {
          // this.$toast.error(response.data.message)
          // this.handleShowToast()
          // this.toastMessage = []
          this.toastMessage = response.data.message
          this.$bvToast.show('custom-toast')
        })
    },
    getHighlights() {
      this.$axios
        .get('/api/startups/' + this.user.id + '/queries?page=1')
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
    saveHighlights() {
      this.$axios
        .post(`/api/startups/${this.startupId}`, {
          queries: this.highlights.queries,
        })
        .catch((err) => {
          alert(err.data)
        })
    },
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
    saveSelling() {
      this.$axios.post(`/api/startups/${this.startupId}`, {
        queries: this.selling.queries,
      })
    },
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
  },
}
</script>

<style>
</style>