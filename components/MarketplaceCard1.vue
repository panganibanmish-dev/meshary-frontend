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
        <div class="d-flex align-items-center pb-3">
          <div class="d-flex align-items-center pb-3">
            <div class="openToOffers-sm mr-4">
              <img
                src="~assets/images/Offer_money_1.svg"
                class="img-fluid mr-1"
              />
              <div class="mobile-no-display-text-sm">
                Open to Offers
              </div>
            </div>
            <NuxtLink
              :to="localePath(`/marketplace/view/${startup.id}`)"
              class="btn startup-info-edit-btn d-flex align-items-center"
            >
              <img src="~assets/images/Edit.svg" class="img-fluid mr-1" />
              <div class="mobile-no-display-text-sm">
                Edit Info
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="col-12 mb-5 mt-2 px-0">
        <div class="advisor-bottom-border"></div>
      </div>
      <div v-show="startup.publicInfo" class="row pb-4">
        <div class="col-lg-5 col-12">
          <div class="startup-info-text-description" v-html="$options.filters.description(startup.publicInfo)"></div>
        </div>
        <div class="row col-lg-7 col-12 mobile-left-padding-none">
          <div v-for="info in $options.filters.noDescription(startup.publicInfo)" :key="info.label" class="col-xl-4 col-lg-6 col-12 pb-4 pr-1">
            <div class="startup-info-header">{{ info.label }}</div>
            <div class="startup-info-text">{{ info | displayType }}</div>
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
  methods: {
    toggleStartupHidden () {
      this.startupHidden = !this.startupHidden
    },
    toggleFavourite () {
      this.favorite = !this.favorite
    }
  }
}
</script>

<style>

</style>