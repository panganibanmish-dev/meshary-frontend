<template>
  <div class="toast-position">
    <!-- <b-button
      class="mb-2"
      variant="primary"
      @click="showToast"
    >
      Show toast
    </b-button> -->

    <b-toast
      id="custom-toast"
      :title="`${toastMessage}`"
      static
      solid
      append-toast
      auto-hide-delay="4400"
    >
      <!-- auto-hide-delay="5500" 
      no-auto-hide="true"-->
    </b-toast>
  </div>
</template>

<script>
export default {
  props: {
    toastMessage: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {
    //   showToast() {
    //       this.$bvToast.show('example-toast')
    //   }
  },
}
</script>
<style lang="scss">
@import '../assets/css/vars.scss';
.toast-position {
  position: fixed;
  right: 5%;
  top: 15%;
  z-index: 250;
}

#custom-toast {
  &.toast {
    background-color: #6596bb;
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: 0;
    padding: 0.5rem 0 0.5rem 0.5rem;
  }
  .toast-header {
    @include scalefont(12);
    @include scalefont(14);
    background-color: transparent;
    color: #ffffff;
    border: 0;
    strong {
      font-weight: 500;
    }
    .close {
      color: #ffffff;
      opacity: 1;
      margin-left: 1rem;
    }
  }
  .toast-body {
    display: none;
  }
}
</style>