<template>
  <div class="container new-background">
    <ToastCard :toastMessage="toastMessage" />
    <br /><br />
    <div class="row">
      <div class="col-12 mt-4 mb-4">
        <NuxtLink 
          :to="localePath(`/clients`)" 
          class="btn back-btn d-flex align-items-center justify-content-center"
        >
          <font-awesome-icon color="#009DDD" :icon="['fas', 'arrow-left-long']" />
        </NuxtLink>
      </div>
      <div class="client-div col-12 mb-4">
        <div class="row">
          <div class="d-flex justify-content-center" style="width: 100%">
            <div class="col-lg-8 col-md-10 col-12 advisor-profile-card">
              <div class="d-flex justify-content-end">
                <div class="d-flex">
                  <a v-if="favorite !== true" class="btn advisor-card-options mr-2 fs-13 text-left d-flex align-items-center" @click="toggleFavourite">
                    <img src="~assets/images/heart-outline_2.svg" class="img-fluid mr-1" /> Add to Favorites
                  </a>
                  <a v-else class="btn advisor-card-options mr-2 fs-13 text-left d-flex align-items-center" @click="toggleFavourite">
                    <img src="~assets/images/heart-solid.svg" class="img-fluid mr-1" /> Remove from Favorites
                  </a>
                  <a v-if="advisorHidden == true" class="btn advisor-card-options mr-2 fs-13 text-left d-flex align-items-center" @click="toggleAdvisorHidden">
                    <img src="~assets/images/Show.svg" class="img-fluid mr-1" /> Show this Advisor
                  </a>
                  <a v-else class="btn advisor-card-options mr-2 fs-13 text-left d-flex align-items-center" @click="toggleAdvisorHidden">
                    <img src="~assets/images/Hide.svg" class="img-fluid mr-2" /> Hide this Advisor
                  </a>
                </div>
              </div>
              <div class="advisor-profile-card-content">
                <div class="row d-flex align-items-center">
                  <div class="col-md-2 col-3">
                    <div class="advisor-profile-card-circle-dashboard">
                      <!-- <span class="initials-dashboard">
                        T
                      </span> -->
                      <img v-if="advisor.photos" :src="advisor.photos.medium" class="img-fluid" />
                      <img v-else src="~assets/images/user-avatar.svg" class="img-fluid" style="width: 100%"/>
                    </div>
                  </div>
                  <div class="col-md-10 col-9">
                    <div class="advisor-card-advisor-name">
                      {{ advisor | full_name }}
                    </div>
                    <div class="advisor-card-advisor-achievements">
                      <a class="btn openToOffers d-flex text-gray fw-600 fs-13 mr-4" role="button">
                        <font-awesome-icon :icon="['fas', 'star']" /> Top Closer
                      </a>
                    </div>
                    <div class="advisor-card-advisor-address d-flex align-items-center">
                      <img
                        src="~assets/images/location-icon.svg"
                        class="img-fluid mr-1"
                      />
                      <div v-if="advisor.profile.complete_address" class="pl-2" style="width: 400px">
                        <span>{{ advisor.profile.complete_address }}</span>
                      </div>
                      <div v-else class="pl-2">
                        <span>{{ advisor.profile.address_street }}</span>
                        <span>{{ advisor.profile.address_city }}, {{ advisor.profile.address_country }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 py-5">
                  <div class="row">
                    <div class="col-md-6 col-12 py-2">
                      <div class="row">
                        <div class="col-12 mb-5 px-0">
                          <div class="advisor-info-header-1 mb-3">Bio</div>
                          <div v-if="advisor.profile.bio !== null" class="advisor-info-content">{{ advisor | sanitize_profile('bio') }}</div>
                          <div v-else class="advisor-info-content">N/A</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-12 py-2">
                      <div class="row">
                        <div class="col-12 mb-5 px-0">
                          <div class="advisor-other-info py-4 mr-5 d-flex justify-content-around">
                            <div class="px-3">
                              <div
                                class="
                                  d-flex
                                  align-items-center
                                  justify-content-center
                                "
                              >
                                <img
                                  src="~assets/images/dateJoined-icon.svg"
                                  class="img-fluid mr-1"
                                />
                                <div>
                                  <div class="advisor-info-header-1">
                                    Date Joined
                                  </div>
                                  <div class="advisor-info-content">
                                    {{
                                      $moment(advisor.created_at).format(
                                        'YYYY/MM/DD'
                                      )
                                    }}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 mb-5 px-0">
                          <div class="advisor-info-header-1 mb-3">LinkedIn</div>
                          <a v-if="advisor.profile.linkedin_url !== ''" :href="advisor.profile.linkedin_url" class="advisor-info-link">{{ advisor.profile.linkedin_url }}</a>
                          <div v-else class="advisor-info-link">No LinkedIn Profile Provided</div>
                        </div>
                        <div class="col-12 mb-5 px-0">
                          <div class="advisor-info-header-1 mb-3">Website</div>
                          <a v-if="advisor.profile.website !== ''" :href="advisor.profile.website" class="advisor-info-link">{{ advisor.profile.website }}</a>
                          <div v-else class="advisor-info-link">No Website Provided</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end mt-4">
                <button v-if="buttonName=='Accept Request'" class="btn btn-primary advisor-card-btn font-weight-bold d-flex align-items-center justify-content-center px-4 mr-3" @click="cancelRequest">
                  Decline Request
                </button>
                <button
                  class="btn btn-primary font-weight-bold advisor-card-btn d-flex align-items-center justify-content-center px-4"
                  :disabled="!buttonActive"
                  @click="acceptRequest"
                >
                  {{ buttonName }}
                  <font-awesome-icon class="ml-2" :icon="['fas', 'arrow-right-long']" />
                </button>
              </div>
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
  name: 'ViewClientPage',
  filters: {
    full_name(user) {
      if(user.profile?.first_name === undefined && user.profile?.last_name === undefined){
        return ""
      }
      return user.profile?.first_name + ' ' + user.profile?.last_name
    },
    sanitize_profile(user, field) {
      // ensure field is not accessed if no profile property
      return user.profile?.[field]
    },
  },
  components: {
    ToastCard,
  },
  layout: 'auth-layout',
  middleware: 'auth',
  asyncData({ params }) {
    const clientId = params.clientId
    return { clientId }
  },

  data() {
    return {
      advisor: {
        profile: {
          complete_address: null
        }
      },
      buttonName: 'Lets work together',
      buttonActive: false,
      favorite: false,
      advisorHidden: false,
      toastMessage: '',
    }
  },
  watch: {
    advisor(newAdvisor) {
      if (newAdvisor.advisors?.length) {
        this.buttonName = newAdvisor.advisors[0].pivot.active
          ? 'Go To Messages'
          : 'Accept Request'
        this.buttonActive = true
      } else {
        this.buttonName = 'Lets work together'
        this.buttonActive = true
      }
    },
  },
  async mounted() {
    await this.fetchAdvisor()
  },
  methods: {
    acceptRequest() {
      if (this.advisors?.length && this.advisor.advisors[0].pivot.active) {
        this.$router.push(this.localePath('/messages/seller'))
      } else {
        this.$axios.post(`/api/clients/${this.advisor.id}`).then((response) => {
          console.log(response.data)
          this.$router.push(this.localePath('/messages/seller'))
        }).catch(err => {
          console.log(err)
        })
      }
    },
    fetchAdvisor() {
      this.$axios.get(`/api/advisors/${this.clientId}?type=Client`).then(response => {
        this.advisor = response.data.data
        console.log(response.data.data)
        if(response.data.data.client_favorites){
          this.favorite = true;
        }
      })
    },
    sendRequest() {
      this.buttonActive = false;
      this.$axios
        .post(`/api/advisors/${this.clientId}/request`)
        .then((response) => {
          // alert(response.data.message)
          this.toastMessage = response.data.message
          this.$bvToast.show('custom-toast')
          this.fetchAdvisor()
        })
    },
    cancelRequest() {
      this.$axios.post(`/api/clients/${this.clientId}/decline`).then(response => {
        // console.log(response.data)
        // this.fetchAdvisor()
        this.toastMessage = response.data.message
        this.$bvToast.show('custom-toast')
        this.$router.push(this.localePath('/clients'))
      })
    },
    getRequest() {
      return this.advisor.sellers ?? []
    },
    toggleAdvisorHidden () {
      this.advisorHidden = !this.advisorHidden
    },
    toggleFavourite () {
      this.$axios
        .post(`/api/clients/favorites/${this.advisor.id}`).then(response => {
          console.log(response.data)
          this.favorite = !this.favorite
        })
    }
  }
}
</script>

<style>
.advisor-profile-card {
  background: #FFFFFF;
  box-shadow: -2px 4px 45px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 3.5rem 2rem;
}

.advisor-profile-card-content {
  padding-left: 4rem;
}

@media only screen and (max-width: 991px){
  .advisor-profile-card-content {
    padding-left: 0 !important;
  }

  .advisor-other-info {
    width: 100% !important;
  }
  /* .advisor-profile-card {
    padding: 0 !important;
  } */
}

.advisor-other-info {
  background: rgba(0, 157, 221, 0.06) !important;
  border: 1px solid #E7F0FC;
  box-sizing: border-box;
  border-radius: 6px;
}
</style>