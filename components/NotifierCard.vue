<template>
  <div
    class="
      notifier-card notifier-position
      d-flex
      align-items-center
      justify-content-center
      fs-18
      text-center
      m-auto
    "
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      mobile: false,
    }
  },
  mounted() {
    this.mobile = this.isMobile()
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../assets/css/vars.scss';
.notifier-card {
  color: #fff;
  background-color: #009ddd;
  border-radius: 5px;
  @include scaleheight(60);
  max-width: 680px;
  z-index: 10;
}
@media only screen and (max-width: 767px) {
  .notifier-card {
    color: #fff;
    background-color: #009ddd;
    border-radius: 5px;
    @include scaleheight(60);
    // max-width: 680px;
    // z-index: 10;
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  .notifier-card {
    color: #fff;
    background-color: #009ddd;
    border-radius: 5px;
    @include scaleheight(60);
    // max-width: 680px;
    // z-index: 10;
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
  .notifier-card {
    color: #fff;
    background-color: #009ddd;
    border-radius: 5px;
    @include scaleheight(60);
    // max-width: 680px;
    // z-index: 10;
  }
}
</style>