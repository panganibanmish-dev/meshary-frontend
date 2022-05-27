<template>
  <div class="container-fluid">
    <br /><br />
    <div class="row pr-5 pl-5 mt-5">
      <div class="col-md-6 col-sm-12 mb-4">
        <div class="dashboard-block">
          <p class="startup-status">Your listing is 20% complete</p>
          <div class="loading-1"></div>
          <div class="loading-2"></div>
          <div class="loading-3"></div>
          <div class="position-bottom-right">
            <button type="button" class="btn btn-light">
              Complete your listing
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="dashboard-block">
          <div class="circle-dashboard">
            <span class="initials-dashboard">M</span>
          </div>
          <div class="loading-1"></div>
          <div class="loading-2"></div>
          <div class="loading-3"></div>
          <div class="position-bottom-right">
            <NuxtLink type="button" class="btn btn-light" :to="localePath('/advisors')">Find an advisor</NuxtLink>
          </div>
        </div>
      </div>
      <div class="col-sm-12 mb-4">
        <div class="dashboard-block">
          <div class="header mb-3">
            <div class="header-text">PRIVATE INFORMATION</div>
            <div class="header-button">
              <button type="button" class="btn btn-light">Edit</button>
            </div>
          </div>
          <div class="mb-5">
            <div class="loading-1">
              <p>Name:</p>
            </div>
            <div class="loading-2">{{}}</div>
            <div class="loading-3"></div>
          </div>
          <div class="mb-5">
            <div class="loading-1"></div>
            <div class="loading-2"></div>
            <div class="loading-3"></div>
          </div>
          <div class="mb-5">
            <div class="loading-1"></div>
            <div class="loading-2"></div>
            <div class="loading-3"></div>
          </div>
          <div>
            <div class="loading-4"></div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 mb-4">
        <div class="dashboard-block">
          <div class="header mb-5">
            <div class="header-text">
              Basic information about startup numbers and history
            </div>
          </div>
          <div class="startup-category mb-4">
            <div v-if="listing.empty" class="startup-content">
              <p>Your Listing</p>
              <div class="position-bottom">
                <button
                  type="button"
                  class="btn btn-light"
                  @click="listing_toggle"
                >
                  Add Information
                </button>
              </div>
            </div>
            <div v-if="listing.input" class="startup-form">
              <div class="pb-5">
                <p>Public Information</p>
                <sub
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</sub
                >
              </div>
              <form class="form-group">
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
                    />
                  </a>
                </label>
                <select
                  id="startupType"
                  v-model="user.listing.startupType"
                  name="startupType"
                  class="form-control"
                  required
                >
                  <option
                    v-for="item in listing.startupTypes"
                    :key="item.id"
                    :value="item"
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
                    class="btn btn-light"
                    @click="saveListing"
                  >
                    SAVE
                  </button>
                  <button
                    type="button"
                    class="btn btn-light"
                    @click="listing_toggle"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="startup-category mb-4">
            <div v-if="highlights.empty" class="startup-content">
              <p>Startup Highlights</p>
              <div class="position-bottom">
                <button
                  type="button"
                  class="btn btn-light"
                  @click="highlights_toggle"
                >
                  Add Information
                </button>
              </div>
            </div>
            <div v-if="highlights.input" class="startup-form">
              <div class="pb-5">
                <p>Company Features</p>
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
                  <button type="button" class="btn btn-light">SAVE</button>
                  <button
                    type="button"
                    class="btn btn-light"
                    @click="highlights_toggle"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="startup-category mb-4">
            <div v-if="selling.empty" class="startup-content">
              <p>Why are you selling?</p>
              <div class="position-bottom">
                <button
                  type="button"
                  class="btn btn-light"
                  @click="selling_toggle"
                >
                  Add Information
                </button>
              </div>
            </div>
            <div v-if="selling.input" class="startup-form">
              <div class="pb-5">
                <p>Selling Details</p>
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
                  <button type="button" class="btn btn-light">SAVE</button>
                  <button
                    type="button"
                    class="btn btn-light"
                    @click="selling_toggle"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="startup-category mb-4">
            <div v-if="performance.empty" class="startup-content">
              <p>Startup Performance</p>
              <div class="position-bottom">
                <button
                  type="button"
                  class="btn btn-light"
                  @click="performance_toggle"
                >
                  Add Information
                </button>
              </div>
            </div>
            <div v-if="performance.input" class="startup-form">
              <div class="pb-5">
                <p>Financial Detail</p>
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
                  <button type="button" class="btn btn-light">SAVE</button>
                  <button
                    type="button"
                    class="btn btn-light"
                    @click="performance_toggle"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 mb-4">
        <div class="dashboard-block">
          <div class="header mb-5">
            <div class="header-text">Metrics</div>
          </div>
          <div class="metric-content mb-5">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button type="button" class="btn btn-light">Add Metrics</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyStartupPage',
  layout: 'auth-layout',
  middleware: 'auth',
  data() {
    return {
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
      },
      userInfo: {},
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
    }
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.user = { ...this.user, ...this.$auth.user }
    }
    this.getUserInfo()
    this.getListing()
    this.getHighlights()
    this.getSelling()
    this.getPerformance()
  },
  methods: {
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
      this.listing.empty = !this.listing.empty
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
  },
}
</script>

<style lang="scss">
@import '../assets/css/vars.scss';
:root {
  --avatar-size-dashboard: 50px;
  /* change this value anything, e.g., 100px, 10rem, etc. */
}

.dashboard-block {
  position: relative;
  background: #ddeaf3;
  border-radius: 8px;
  padding: 18px 18px 19px 38px;
}

.startup-status {
  margin-top: 34px;
  font-style: normal;
  font-weight: 1000;
  @include scalefont(14);
  @include scalelineheight(18);
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  color: #000000;
}

.circle-dashboard {
  background-color: #ccc;
  border-radius: 50%;
  height: var(--avatar-size-dashboard);
  text-align: center;
  width: var(--avatar-size-dashboard);
  margin-bottom: 18px;
  margin-left: 5px;
}

.initials-dashboard {
  font-size: calc(var(--avatar-size-dashboard) / 2); /* 50% of parent */
  line-height: 1;
  position: relative;
  top: calc(var(--avatar-size-dashboard) / 4); /* 25% of parent */
}

.header {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 42px;
}

.header-text {
  font-style: normal;
  font-weight: 1000;
  @include scalefont(24);
  @include scalelineheight(18);
  letter-spacing: 0.2px;
  color: #000000;
}

.header-button {
  margin-left: 81px;
}

.position-bottom-right {
  position: absolute;
  bottom: 19px;
  right: 18px;
}

.position-bottom {
  position: absolute;
  bottom: 19px;
}

.startup-category {
  background: #bfd4e4;
}

.startup-content {
  position: relative;
  margin-right: 20px;
  height: 169px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.startup-content p,
.startup-form p {
  margin-bottom: 25px;
  font-style: normal;
  font-weight: 600;
  @include scalefont(24);
  @include scalelineheight(18);
  letter-spacing: 0.2px;
  color: #000000;
}

.startup-form sub {
  font-style: normal;
  font-weight: normal;
  @include scalefont(20);
  @include scalelineheight(30);
  color: rgba(0, 0, 0, 0.5);
}

.startup-form {
  padding: 3rem 6rem 4.5rem 6rem;
  @media screen and (min-width: 1440px) {
    padding: 3rem 7rem 4.5rem 7rem;
  }
}

.startup-form-buttons {
  float: right;
}

.help-tooltip-icon {
  height: 15px;
  width: 15px;
}

.metric-content {
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.metric-content h1 {
  margin-bottom: 16px;
  font-weight: 800;
  @include scalefont(24);
  @include scalelineheight(18);
  letter-spacing: 0.2px;
  color: #000000;
}

.metric-content p {
  margin-bottom: 37px;
  font-weight: normal;
  @include scalefont(14);
  @include scalelineheight(18);
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;
  color: #000000;
}
</style>