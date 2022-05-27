<template>
  <div class="startup-category mb-4">
    <div class="startup-form">
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <h1>{{startup.startup_type.name}}</h1>
          <div class="openToOffers-mobile-sm ml-4 mb-2">
            <img
              src="~assets/images/Offer_money_1.svg"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="d-flex align-items-center">
          <div class="mobile-no-display-sm">
            <div class="d-flex pr-0 pb-3">
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
              <a v-if="startupHidden == true" class="btn advisor-card-options mr-2 fs-13 text-left d-flex align-items-center" @click="toggleStartupHidden">
                <img src="~assets/images/Show.svg" class="img-fluid" /> 
                <div class="mobile-no-display-text-sm ml-1">
                  Show this Startup
                </div>
              </a>
              <a v-else class="btn advisor-card-options mr-2 fs-13 text-left d-flex align-items-center" @click="toggleStartupHidden">
                <img src="~assets/images/Hide.svg" class="img-fluid" /> 
                <div class="mobile-no-display-text-sm ml-1">
                  Hide this Startup
                </div>
              </a>
            </div>
          </div>
          
        </div>
      </div>
      <div class="col-12 mb-5 mt-2 px-0">
        <div class="advisor-bottom-border"></div>
      </div>
      <div v-show="startup.publicInfo" class="row pb-5">
        <div class="col-lg-5 col-12">
          <div class="startup-info-text-description" v-html="$options.filters.description(startup.publicInfo)"></div>
        </div>
        <div class="row col-lg-7 col-12 mobile-left-padding-none">
          <!-- <div class="row"> -->
          <div v-for="info in $options.filters.noDescription(startup.publicInfo)" :key="info.label" class="col-xl-4 col-lg-6 col-12 pb-4 pr-1">
            <div>
              <div class="startup-info-header">{{ info.label }}</div>
              <div class="startup-info-text">{{ info | displayType }}</div>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </div>
      <div class="col-12 px-0 marketplace-bottom-buttons">
        <div class="d-flex justify-content-between align-items-center">
          <div class="openToOffers-sm mr-4">
            <img src="~assets/images/Offer_money_1.svg" class="img-fluid mr-2" />
            <div class="mobile-no-display-text-sm">
              Open to Offers
            </div>
          </div>
          <NuxtLink
            :to="localePath(`/marketplace/view/${startup.id}`)"
            class="btn btn-primary marketplace-btn px-4 font-weight-bold fs-14 d-flex align-items-center justify-content-center"
          >
            View Listing 
            <img src="~assets/images/Arrow_Right_white.svg" class="img-fluid ml-3" />
          </NuxtLink>
        </div>
      </div>
      <div class="col-12 px-0 mobile-icon-buttons-sm">
        <div class="d-flex align-items-center" style="width: 100%">
          <div class="d-flex" style="width: 100%">
            <NuxtLink
              :to="localePath(`/marketplace/view/${startup.id}`)"
              class="btn btn-primary marketplace-btn w-100 px-4 font-weight-bold fs-14 d-flex align-items-center justify-content-center"
            >
              View Listing 
              <img src="~assets/images/Arrow_Right_white.svg" class="img-fluid ml-3" />
            </NuxtLink>
            <div class="d-flex">
              <a v-if="favorite !== true" class="btn marketplace-fav-hide-buttons ml-2" @click="toggleFavourite">
                <img src="~assets/images/heart-outline_2.svg" class="img-fluid"/> 
              </a>
              <a v-else class="btn marketplace-fav-hide-buttons ml-2" @click="toggleFavourite">
                <img src="~assets/images/heart-solid.svg" class="img-fluid" />
              </a>
              <a v-if="startupHidden == true" class="btn marketplace-fav-hide-buttons ml-2" @click="toggleStartupHidden">
                <img src="~assets/images/Show.svg" class="img-fluid" /> 
              </a>
              <a v-else class="btn marketplace-fav-hide-buttons ml-2" @click="toggleStartupHidden">
                <img src="~assets/images/Hide.svg" class="img-fluid" /> 
              </a>
            </div>
              
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  props: {
    startup: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      favorite: false,
      startupHidden: false
    }
  },
  mounted() {
    // console.log(this.startup)
    if(this.startup.user_startup_favorite.length !== 0){
      this.favorite = true;
    } 
  },
  methods: {
    toggleStartupHidden () {
      this.startupHidden = !this.startupHidden
    },
    toggleFavourite () {
      this.$axios
        .post(`/api/marketplace/favorites/${this.startup.id}`).then(response => {
          console.log(response.data)
          this.favorite = !this.favorite
        })
    }
  }
}
</script>

<style>

</style>