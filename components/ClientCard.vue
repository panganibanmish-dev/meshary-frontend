<template>
  <div class="col-xl-6 col-12">
    <div class="startup-category mb-4">
      <div class="advisor-form row">
        <div class="col-12 mb-4 px-2 d-flex">
          <div class="advisor-page-circle-dashboard advisor-photo mr-4">
            <img v-if="advisor.photos" :src="advisor.photos.medium" class="img-fluid" />
            <img v-else src="~assets/images/user-avatar.svg" class="img-fluid" width="90" height="90" />
          </div>
          <div>
            <div class="advisor-card-advisor-name">
              {{ advisor | full_name }}
            </div>
            <div class="advisor-card-advisor-achievements">
              <a class="btn openToOffers d-flex text-gray fw-600 fs-13 mr-4" role="button">
                <img src="~assets/images/star.svg" class="img-fluid mr-1" /> Top Closer
              </a>
            </div>
            <div class="advisor-card-advisor-address d-flex align-items-center">
              <img src="~assets/images/location-icon.svg" class="img-fluid mr-1" />
              <div class="row d-flex align-items-center" style="height: 52px">
                <div v-if="advisor.profile.complete_address" class="ml-2 col-lg-8 col-md-10 col-12">
                  <span>{{ advisor.profile.complete_address }}</span>
                </div>
                <div v-else class="ml-2 col-lg-8 col-md-10 col-12">
                  <span>{{ advisor.profile.address_street }}</span>
                  <span>{{ advisor.profile.address_city }}, {{ advisor.profile.address_country }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row col-12 px-2">
          <div class="col-12 mb-4">
            <div class="advisor-info-header-1">Bio</div>
            <div class="advisor-info-content advisor-info-bio">{{ advisor | bio }}</div>
          </div>
          <div class="row col-12 mb-4">
            <div class="col-4">
              <div class="advisor-info-header-2">Date Joined</div>
              <div class="advisor-info-content">{{ $moment(advisor.created_at).format('YYYY-MM-DD') }}</div>
            </div>
          </div>
        </div>
        <div class="col-12 my-4 px-0">
          <div class="advisor-bottom-border"></div>
        </div>
        <div class="col-12 mt-2 px-1 d-flex justify-content-between align-items-center">
          <div v-if="!advisor.pivot.active"  class="d-flex ">
            <a class="btn btn-primary advisor-card-btn px-4" @click="acceptRequest">
              Accept
            </a>
          </div>
          <div class="d-flex">
            <a v-if="favorite !== true" class="btn advisor-card-options mr-2 fs-13 text-left d-flex align-items-center" @click="toggleFavourite">
              <img src="~assets/images/heart-outline_2.svg" class="img-fluid" />
              <div class="mobile-no-display-text-sm ml-1">
                Add to Favorites
              </div>
            </a>
            <a v-else class="btn advisor-card-options mr-2 fs-13 text-left d-flex align-items-center" @click="toggleFavourite">
              <img src="~assets/images/heart-solid.svg" class="img-fluid" />
              <div class="mobile-no-display-text-sm ml-1">
                Remove from Favorites
              </div>
            </a>
            <a v-if="advisorHidden == true" class="btn advisor-card-options mr-2 fs-13 text-left d-flex align-items-center" @click="toggleAdvisorHidden">
              <img src="~assets/images/Show.svg" class="img-fluid" />
              <div class="mobile-no-display-text-sm ml-1">
                Show this Startup
              </div>
            </a>
            <a v-else class="btn advisor-card-options mr-2 fs-13 text-left d-flex align-items-center" @click="toggleAdvisorHidden">
              <img src="~assets/images/Hide.svg" class="img-fluid" />
              <div class="mobile-no-display-text-sm ml-1">
                Hide this Startup
              </div>
            </a>
          </div>
          <div class="d-flex align-items-center justify-content-end">
            <NuxtLink class="btn btn-primary advisor-card-btn px-4" :to="localePath(`/clients/${advisor.id}`)">
              View Profile
              <img src="~assets/images/Arrow_Right_white.svg" class="img-fluid ml-2" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    full_name(user) {
      return user.profile.first_name + " " + user.profile.last_name
    },
    bio(user) {
    const maxLength = 200
    if(user.profile.bio){
      if(user.profile.bio.length > maxLength) {
        return user.profile.bio.substring(0, maxLength-3)+'...'
      }else{
        return user.profile.bio
      }
    }else{
      return "N/A"
    }
    },
  },
  props: {
    advisor: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      favorite: false,
      advisorHidden: false
    }
  },
  mounted(){
    if(this.advisor.client_favorites === true){
      this.favorite = true;
    } 
  },
  methods: {
    acceptRequest() {
      this.$axios.post(`/api/clients/${this.advisor.id}`)
        .then((response) => {
          console.log(response.data)
          this.$router.push(this.localePath('/messages/seller'))
        }).catch(err => {
          console.log(err)
        })
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
.advisor-photo > img {
  border-radius: 3em;
}
.advisor-card-btn{
  min-width: 180px;
  height: 38px;
  left: 1140px;
  top: 864px;

  background: #009DDD;
  border-radius: 30px;
}
</style>