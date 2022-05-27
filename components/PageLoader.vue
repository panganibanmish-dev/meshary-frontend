<template lang="html">
  <v-overlay v-if="loading" class="loading-page">
    <v-progress-circular
      indeterminate
      size="64"
      color="primary"
    ></v-progress-circular>
    <img src="../assets/images/rolling-1s-200px.svg"/>
  </v-overlay>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    overlay: false,
  }),
  methods: {
    start() {
      this.loading = false
      this.overlay = false
    },
    finish() {
      this.loading = false
      this.overlay = false
    },
    fail(error) {
      console.log(error)
    },
    increase(num) {
      // console.log(num)
    },
  },
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 1000;
  img {
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
  }
}
</style>