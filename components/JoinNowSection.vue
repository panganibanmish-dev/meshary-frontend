<template>
  <section
    class="mt-5"
    :style="{ backgroundImage: `url('${bgImage3}')` }"
    style="
      background-size: cover;
      background-repeat: no-repeat;
      background-position-y: 40%;
    "
  >
    <b-container class="pb-5">
      <div class="row mb-5">
        <div class="title-container col-12 col-lg-5 align-self-center">
          <h2 class="label-text fade-up mb-4" :class="$t('translation') == 'arabic' ? 'text-right w-100' : 'text-center text-md-left'">
            {{ sectionTitle }}
          </h2>
          <p class="p-text" :class="$t('translation') == 'arabic' ? 'text-right w-100' : 'text-center text-md-left'">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At volutpat
            eu lectus pellentesque scelerisque quis condimentum. Ultrices massa
            amet, nisl id elit, tincidunt dolor, et maecenas.
          </p>
          <div class="d-flex justify-content-center" :class="$t('translation') == 'arabic' ? 'justify-content-md-end' : 'justify-content-md-start'">
            <NuxtLink
              class="
                btn btn-primary btn-join
                label-join
                btn-cta
                d-flex
                align-items-center
                justify-content-center
                mt-4
              "
              style="background-color: #009ddd"
              :to="localePath('/accounttype')"
              >{{ $t('join_now') }}</NuxtLink
            >
          </div>
        </div>
        <div class="col-12 col-lg-7">
          <img
            class="w-100 mt-5 mt-md-0"
            src="~assets/images/Group_2_copy.svg"
            alt=""
            align="right"
          />
        </div>
        <!-- <b-col class="header">
                    <img src="~assets/images/Group_2.svg" class="rounded float-right" style="width: 100%" alt="" />
                  </b-col> -->
      </div>
    </b-container>
  </section>
</template>

<script>
import bgimage3 from '../assets/images/bg-group-3.png'
export default {
  props: {
    sectionTitle: {
      type: String,
      default: '',
      required: true,
    },
  },
  data() {
    return {
      bgImage3: bgimage3,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/vars.scss';


.title-container {

  h2 {
    width: unset;
  }
  p {
    width: unset;
    font-size: 14px;
    line-height: 16.8px;
  }
}

@media screen and (min-width: 767px) {
  .title-container {
    // margin-top: -9.5rem;
    h2 {
      @include scalewidth(621);
    }
    p {
      @include scalewidth(496);
      @include scalefont(18);
      @include scalelineheight(25);
    }
  }
}

</style>