<template>
  <div class="error-card" :class="variant == 'alert' ? 'alert' : 'success'">
    <ul>
      <li v-for="error in errors" :key="error" class="fs-16">
        <img class="mr-2" src="~assets/images/info-error.svg" alt="" />{{
          error
        }}
      </li>
    </ul>
  </div>
</template>
    
<script>
export default {
  props: {
     errors: {
      type: Array,
      default: () => [],
    },
    variant: {
      type: String,
      default: 'alert',
    },
  },
}
</script>

<style lang="scss">
@import '../assets/css/vars.scss';
.error-card {
  position: absolute;
  border-radius: 5px;
  &.alert {
    ul {
      list-style: none;
      padding: 0 1rem;
      background: #BB2D3B;
      box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      li {
        padding: 0.6rem 0.5rem;
        display: flex;
        align-items: center;
        min-height: 38px;
        @include scalefont(14);
        @include scalelineheight(16);
        color: #ffffff;
      }
    }
  }
  &.success {
    ul {
      list-style: none;
      padding: 0 1rem;
      background: #6596bb;
      box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      li {
        padding: 0.6rem 0.5rem;
        display: flex;
        align-items: center;
        min-height: 38px;
        @include scalefont(14);
        @include scalelineheight(16);
        color: #ffffff;
      }
    }
  }
}
</style>