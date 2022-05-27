<template>
    <div></div>
</template> 
<script>
export default {
    name: 'PlanCallback',
    data() {
        return {
            chargeId: '',
        }
    },
    mounted() {
        this.chargeId = this.$route.query.tap_id
        this.postSubscription()
    },
    methods: {
        postSubscription() {
          this.$axios.post(`/api/subscriptions/post?charge_id=${this.chargeId}`)
            .then(response => {
            //   this.$router.push(this.localePath('/subscription/plan'))
              window.location.href = "/subscription/plan";
            }).catch(err => {
              console.log(err)
              window.location.href = "/subscription/plan";
            })
        }
        
    }
}
</script>