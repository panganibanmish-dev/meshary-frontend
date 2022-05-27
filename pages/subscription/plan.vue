<template>
  <div class="container pt-5">
    <br /><br />
    <div class="row">
      <div class="col-sm-9 col-xs-12 mx-auto mb-5">
        <div class="subscription-plan-container-plan row">
          <div class="subscription-plan-container-title col-md-12 d-flex justify-content-center">
            Choose your plan
          </div>
          <div class="subscription-plan-container-subtitle col-md-12 d-flex justify-content-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </div>
          <div class="col-md-12 d-flex justify-content-center">
            <!-- <div class="subscription-plan-card d-flex flex-column justify-content-between">
              <div class="subscription-plan-card-design-1"></div>
              <div class="subscription-plan-card-design-2"></div>
              <div class="d-flex flex-column justify-content-center">
                <div class="subscription-plan-card-title d-flex justify-content-center">Free for 30 days trial</div>
                <div class="subscription-plan-card-subtitle d-flex justify-content-center">Lorem ipsum dolor sit</div>
              </div>
              <div class="subscription-plan-card-amount d-flex justify-content-center align-items-center"> FREE </div>
              <button role="button" class="btn btn-primary btn-block">Select</button>
            </div>
            <div class="subscription-plan-card d-flex flex-column justify-content-between">
              <div class="subscription-plan-card-design-1"></div>
              <div class="subscription-plan-card-design-2"></div>
              <div class="d-flex flex-column justify-content-center">
                <div class="subscription-plan-card-title d-flex justify-content-center">Monthly</div>
                <div class="subscription-plan-card-subtitle d-flex justify-content-center">Lorem ipsum dolor sit</div>
              </div>
              <div class="subscription-plan-card-amount d-flex flex-column justify-content-center align-items-center"> 
                <div class="py-1">
                  <img src="~assets/images/subscription-check.svg" />
                </div>
                <div class="pb-4">$100</div> 
              </div>
              <button role="button" class="btn btn-primary btn-block">Select</button>
            </div> -->
            <div class="subscription-plan-card d-flex flex-column justify-content-between">
              <div class="subscription-plan-card-design-1"></div>
              <div class="subscription-plan-card-design-2"></div>
              <div class="d-flex flex-column justify-content-center">
                <div class="subscription-plan-card-title d-flex justify-content-center">Yearly</div>
                <div class="subscription-plan-card-subtitle d-flex justify-content-center">Lorem ipsum dolor sit</div>
              </div>
              <div class="subscription-plan-card-amount d-flex flex-column justify-content-center align-items-center"> 
                <div class="py-1">
                  <img src="~assets/images/subscription-check.svg" />
                </div>
                <div class="pb-4">SR 299</div> 
              </div>
              <button role="button" class="btn btn-primary btn-block" :disabled="subscription" @click="createSubscription">{{ subscription ? 'Activated' : 'Select'}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyerPlanPage',
  layout: 'subscription-layout',
  data(){
    return {
      subscription: null,
    }
  },
  mounted() {
    this.fetchSubscription()
  },
  methods: {
    fetchSubscription() {
      this.$axios.get('/api/subscriptions')
        .then(response => {
          console.log(response.data.data)
          this.subscription = response.data.data
        })
    },
    createSubscription() {
      this.$axios.post('/api/subscriptions/create')
        .then(response => {
          const { url } = response.data.data
          window.location.href = url
          // const newWindow = window.open(url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
          // newWindow.onbeforeunload(() => {
          //   this.$router.go()
          // })
        })
    },
  }
}
</script>

<style>
</style>