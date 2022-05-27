<template>
  <div>
    <div class="mt-5 pt-4">
      <JoinNowSection
        :sectionTitle="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
      />
      <section class="mb-0 mb-md-5">
        <b-container class="pb-5">
          <h3 class="label-text fade-up bold text-center mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
          <div class="row text-center mb-0 mb-md-5">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="card illustration">
                <div class="card-body">
                  <img
                    src="~assets/images/Illustration.png"
                    class="rounded float-start"
                    alt="Random Name"
                    style="width: 50%"
                  />
                  <h3 class="label3 bold text-center">
                    {{ $t('lorem_title') }}
                  </h3>
                  <p class="label2 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Adipiscing nulla diam ut tortor fames vitae, libero.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="card illustration">
                <div class="card-body">
                  <img
                    src="~assets/images/Illustration-1.png"
                    class="rounded float-start"
                    alt="Random Name"
                    style="width: 50%"
                  />
                  <h3 class="label3 bold text-center">
                    {{ $t('lorem_title') }}
                  </h3>
                  <p class="label2 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Adipiscing nulla diam ut tortor fames vitae, libero.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="card illustration">
                <div class="card-body">
                  <img
                    src="~assets/images/Illustration-2.png"
                    class="rounded float-start"
                    alt="Random Name"
                    style="width: 50%"
                  />
                  <h3 class="label3 bold text-center">
                    {{ $t('lorem_title') }}
                  </h3>
                  <p class="label2 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Adipiscing nulla diam ut tortor fames vitae, libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </b-container>
      </section>
      <section
        class="container-fluid"
        :style="{ backgroundImage: `url('${bgImage6}')` }"
        style="
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 100% 25rem;
        "
      >
        <b-container>
          <div class="row">
            <div class="col-lg-6 mb-5 mb-lg-0 pl-0 pl-lg-5">
              <b-container>
                <h3
                  class="label-text text-center text-md-left fade-up bold my-4"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
                <div class="label2">
                  <p class="p-text text-center text-md-left mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Adipiscing lacus malesuada lorem id ut mi gravida auctor
                    felis. Suspendisse lacus ornare ipsum neque egestas tellus
                    orci cras. Arcu magnis id iaculis viverra ut. Elit id
                    interdum tellus vestibulum pellentesque eu ultrices ut massa
                  </p>
                </div>
                <div
                  class="
                    text-lg-start
                    d-flex
                    justify-content-center justify-content-md-start
                  "
                >
                  <a
                    class="
                      btn btn-primary btn-join
                      label-join
                      btn-cta
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                    style="background-color: #009ddd"
                    href="#"
                    ><span>Learn More </span></a
                  >
                </div>
              </b-container>
            </div>
            <div class="col-lg-6 mb-5 mb-lg-0">
              <!-- <div class="rounded float-right"> -->
              <img
                src="~assets/images/Group_4.svg"
                alt=""
                style="width: 100%"
                align="right"
              />
              <!-- </div> -->
            </div>
          </div>
        </b-container>
        <b-container>
          <div class="row mt-5">
            <div class="col-lg-5 mb-5 order-12 order-lg-1 mb-lg-0">
              <div id="startup-listing" class="card mr-lg-5 p-1 p-lg-3">
                <div class="card-body">
                  <p class="startUpListing card-title" color="#94A2B3">
                    Startup listing
                  </p>
                  <h6 class="card-subtitle mb-2 text-muted">
                    <span class="startUpShownNumber text-lg-left"
                      ><b class="shownNumber">78,042</b> Startup shown</span
                    >
                  </h6>
                  <ul class="list-group">
                    <li
                      class="
                        list-group-item
                        d-flex
                        align-items-center
                        px-0 px-md-3
                        py-1 py-md-3
                      "
                    >
                      <img src="~assets/images/listing-mark-green.svg" alt="" />
                      MicroSaaS
                      <!-- <a
                        type="button"
                        class="btn btn-primary fontweight-bold border-0 ml-auto"
                        href="#"
                        >View Listing</a> -->

                      <NuxtLink
                        :to="localePath(`/marketplace/`)"
                        class="btn btn-primary fontweight-bold border-0 ml-auto"
                      >
                        View Listing
                      </NuxtLink>
                    </li>
                    <li
                      class="
                        list-group-item
                        d-flex
                        align-items-center
                        px-0 px-md-3
                        py-1 py-md-3
                      "
                    >
                      <img src="~assets/images/listing-mark-blue.svg" alt="" />
                      eCommerce
                      <NuxtLink
                        :to="localePath(`/marketplace/`)"
                        class="btn btn-primary fontweight-bold border-0 ml-auto"
                      >
                        View Listing
                      </NuxtLink>
                    </li>
                    <li
                      class="
                        list-group-item
                        d-flex
                        align-items-center
                        px-0 px-md-3
                        py-1 py-md-3
                      "
                    >
                      <img src="~assets/images/listing-mark-green.svg" alt="" />
                      MicroSaaS
                      <NuxtLink
                        :to="localePath(`/marketplace/`)"
                        class="btn btn-primary fontweight-bold border-0 ml-auto"
                      >
                        View Listing
                      </NuxtLink>
                    </li>
                    <li
                      class="
                        list-group-item
                        d-flex
                        align-items-center
                        px-0 px-md-3
                        py-1 py-md-3
                      "
                    >
                      <img src="~assets/images/listing-mark-blue.svg" alt="" />
                      eCommerce
                      <NuxtLink
                        :to="localePath(`/marketplace/`)"
                        class="btn btn-primary fontweight-bold border-0 ml-auto"
                      >
                        View Listing
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-7 order-1 order-lg-12 mb-5 mb-lg-0">
              <h3 class="label-text text-center text-md-left fade-up bold mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <div class="label2">
                <p class="p-text text-center text-md-left w-100 w-md-75 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Adipiscing lacus malesuada lorem id ut mi gravida auctor
                  felis. Suspendisse lacus ornare ipsum neque egestas tellus
                  orci cras. Arcu magnis id iaculis viverra ut. Elit id interdum
                  tellus vestibulum pellentesque eu ultrices ut massa
                </p>
              </div>
              <div
                class="
                  text-lg-start
                  d-flex
                  justify-content-center justify-content-md-start
                "
              >
                <a
                  class="
                    btn btn-primary btn-join
                    label-join
                    btn-cta
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                  style="background-color: #009ddd"
                  href="#"
                  ><span>Learn More</span></a
                >
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div
              class="
                col-lg-6
                mb-5 mb-lg-0
                d-flex
                flex-column
                justify-content-center
              "
            >
              <h3
                class="
                  label-text
                  text-center text-md-left
                  fade-up
                  bold
                  mt-n5
                  mb-4
                "
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <div class="label2 mb-4">
                <p class="p-text text-center text-md-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Adipiscing lacus malesuada lorem id ut mi gravida auctor
                  felis. Suspendisse lacus ornare ipsum neque egestas tellus
                  orci cras. Arcu magnis id iaculis viverra ut. Elit id interdum
                  tellus vestibulum pellentesque eu ultrices ut massa
                </p>
              </div>
              <div
                class="
                  text-lg-start
                  d-flex
                  justify-content-center justify-content-md-start
                "
              >
                <a
                  class="
                    btn btn-primary btn-join
                    mb-lg-5
                    label-join
                    btn-cta
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                  style="background-color: #009ddd"
                  href="#"
                  ><span>Learn More</span></a
                >
              </div>
            </div>
            <div
              class="
                col-lg-6
                mb-5 mb-lg-0
                d-flex
                justify-content-center justify-content-md-end
              "
            >
              <img src="~assets/images/Group_1.svg" alt="" style="width: 90%" />
            </div>
          </div>
        </b-container>
      </section>
      <section
        class="mt-5"
        :style="{ backgroundImage: `url('${bgImage4}')` }"
        style="
          background-size: contain;
          background-repeat: no-repeat;
          background-position: bottom right;
        "
      >
        <b-container>
          <div class="row">
            <div
              class="
                col-lg-4
                mb-5 mb-lg-0
                d-flex
                flex-column
                justify-content-center
              "
            >
              <h3 class="label-text text-center text-md-left fade-up bold mb-5">
                Sharing our Success Stories
              </h3>
              <div class="label2">
                <p class="p-text text-center text-md-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Adipiscing lacus malesuada lorem id ut mi gravida auctor
                  felis. Suspendisse lacus ornare ipsum neque egestas tellus
                  orci cras. Arcu magnis id iaculis viverra ut. Elit id interdum
                  tellus vestibulum pellentesque eu ultrices ut massa
                </p>
              </div>
              <!-- <div class="text-lg-start">
                <a
                  type="button"
                  class="
                    btn btn-primary btn-join
                    label-join
                    btn-cta
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                  style="background-color: #009ddd"
                  href="#"
                  ><span>Learn More </span></a
                >
              </div> -->
            </div>
            <div class="col-lg-8 mb-5 mb-lg-0">
              <div
                id="featured-row"
                class="row position-relative justify-content-end"
              >
                <div class="col-lg-5 mt-lg-5">
                  <b-card
                    :title="$t('lorem_title')"
                    img-src="~assets/images/unsplash1.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="success-story-card text-center mb-3 mx-auto mx-lg-0"
                  >
                    <b-card-text class="text-center"
                      >We present you a proposal and discuss niffty-gritty like
                    </b-card-text>
                  </b-card>
                </div>
                <div class="col-lg-5 mt-lg-n5">
                  <b-card
                    :title="$t('lorem_title')"
                    img-src="~assets/images/unsplash2.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="success-story-card text-center mb-3 mx-auto mx-lg-0"
                  >
                    <b-card-text class="text-center">
                      We present you a proposal and discuss niffty-gritty like
                    </b-card-text>
                  </b-card>
                </div>
                <div class="col-lg-5">
                  <b-card
                    :title="$t('lorem_title')"
                    img-src="~assets/images/unsplash3.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="success-story-card text-center mb-3 mx-auto mx-lg-0"
                  >
                    <b-card-text class="text-center"
                      >We present you a proposal and discuss niffty-gritty
                      like</b-card-text
                    >
                  </b-card>
                </div>
                <div class="success-story-adjust col-lg-5 mt-lg-n5">
                  <b-card
                    :title="$t('lorem_title')"
                    img-src="~assets/images/unsplash4.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="success-story-card text-center mb-3 mx-auto mx-lg-0"
                  >
                    <b-card-text class="text-center"
                      >We present you a proposal and discuss niffty-gritty
                      like</b-card-text
                    >
                  </b-card>
                </div>
              </div>
            </div>
          </div>
        </b-container>
      </section>
      <section class="mb-4 mb-md-0">
        <b-container>
          <div class="bold text-center mt-5">
            <h3 class="label-text text-center fade-up bold text-center">
              Testimonials
            </h3>
            <p class="p-text text-center">
              Several selected clients, who already believe in our service.
            </p>
          </div>
          <b-row class="mb-5">
            <b-col
              order="12"
              order-lg="1"
              sm="8"
              class="text-center mt-5 mt-lg-0"
            >
              <b-row class="align-items-start align-items-md-center">
                <b-col cols="6" md="5">
                  <div class="rounded float">
                    <img
                      class="w-100"
                      src="~assets/images/Group_7.png"
                      alt=""
                    />
                  </div>
                </b-col>
                <!-- <b-form-rating v-model="value" stars="5" color="orange" class="star-rating" size="sm"></b-form-rating><br /> -->
                <b-col cols="6" md="7" class="pl-0 pl-lg-3 pt-3 pt-md-0">
                  <VueSlickCarousel
                    :arrows="false"
                    :dots="true"
                    :slidesPerRow="1"
                  >
                    <div>
                      <h3
                        class="
                          label2
                          testimonial-name
                          bold
                          fade-up
                          text-left text-dark
                          mb-0 mb-lg-2
                        "
                      >
                        Matthew Paul
                      </h3>
                      <!-- <b-form-rating v-model="value" stars="5" color="orange" class="star-rating" size="sm"></b-form-rating><br /> -->
                      <div class="mb-3 pl-0 pl-md-1 pt-0 pt-lg-2">
                        <client-only>
                          <star-rating
                            read-only
                            :rating="5"
                            :show-rating="false"
                            :padding="4"
                            :star-size="20"
                            :rounded-corners="true"
                          ></star-rating>
                        </client-only>
                      </div>
                      <p class="p-text text-left">
                        Several selected clients, who already believe in our
                        service.
                      </p>
                    </div>
                    <div>
                      <h3 class="label2 bold fade-up text-left">
                        Matthew Paul
                      </h3>
                      <!-- <b-form-rating v-model="value" stars="5" color="orange" class="star-rating" size="sm"></b-form-rating><br /> -->
                      <div class="mb-3 pl-0 pl-md-1 pt-0 pt-lg-2">
                        <client-only>
                          <star-rating
                            read-only
                            :rating="5"
                            :show-rating="false"
                            :padding="4"
                            :star-size="20"
                            :rounded-corners="true"
                          ></star-rating>
                        </client-only>
                      </div>
                      <p class="p-text text-left">
                        Several selected clients, who already believe in our
                        service.
                      </p>
                    </div>
                    <div>
                      <h3 class="label2 bold fade-up text-left">
                        Matthew Paul
                      </h3>
                      <!-- <b-form-rating v-model="value" stars="5" color="orange" class="star-rating" size="sm"></b-form-rating><br /> -->
                      <div class="mb-3 pl-0 pl-md-1 pt-0 pt-md-2">
                        <client-only>
                          <star-rating
                            read-only
                            :rating="5"
                            :show-rating="false"
                            :padding="4"
                            :star-size="20"
                            :rounded-corners="true"
                          ></star-rating>
                        </client-only>
                      </div>
                      <p class="p-text text-left">
                        Several selected clients, who already believe in our
                        service.
                      </p>
                    </div>
                  </VueSlickCarousel>
                </b-col>
              </b-row>
            </b-col>
            <b-col order="1" order-lg="12" sm="4" class="text-center mt-5 mt-lg-0">
              <b-row>
                <b-col>
                  <div class="rounded">
                    <img
                      src="~assets/images/Group_6.png"
                      alt=""
                      style="width: 70%"
                    />
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import JoinNowSection from '../components/JoinNowSection.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import bgimage4 from '../assets/images/bg-group-4.png'
import bgimage5 from '../assets/images/bg-group-5.png'
import bgimage6 from '../assets/images/bg-group-6.png'

export default {
  name: 'IndexPage',
  components: {
    [process.browser && 'star-rating']: () => import('vue-star-rating'),
    VueSlickCarousel,
    JoinNowSection,
  },
  layout: 'default-layout',
  middleware: 'guest',
  data() {
    return {
      loading: false,
      value: 5,
      active: 4,
      bgImage4: bgimage4,
      bgImage5: bgimage5,
      bgImage6: bgimage6,
    }
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="scss">
@import '../assets/css/vars.scss';
.btn-color {
  background: #009ddd;
  border-radius: 60px;
  width: 150px;
  height: 60px;
  left: 109px;
  top: 558px;
}
.btn-cta {
  @include scalefont(18);
  background: #009ddd;
  // min-height: 62px;
  height: 47px;
  // min-width: 279px;
  @include scalewidth(279);
  box-shadow: 0px 9px 20px -3px rgba(101, 150, 187, 0.25);
  border-radius: 60px;
  border: 0;
  @media screen and (min-width: 992px) {
    @include scaleheight(62);
  }
}

h2.label-text {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: 750;
  font-size: 26px;
  line-height: 26px;

  color: #272d4e;
  @media screen and (min-width: 992px) {
    @include scalefont(56);
    @include scalelineheight(65);
  }
}

h3.label-text {
  color: #272d4e;
  font-weight: 750;
  font-size: 24px;
  line-height: 32px;
  @media screen and (min-width: 992px) {
    @include scalefont(36);
    @include scalelineheight(48);
  }
}
.p-text {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16.8px;
  color: #94a2b3;
  @media screen and (min-width: 992px) {
    @include scalefont(18);
    @include scalelineheight(25);
  }
}
.span-text {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: 350;
  @include scalefont(100);
  @include scalelineheight(50);
}
.label1 {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: 750;
  @include scalefont(36);
  @include scalelineheight(48);
  text-align: center;
  color: #272d4e;
}
.label2 {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  color: #272d4e;
  font-size: 11px;
  line-height: 13.2px;
  color: #272d4e;
  @media screen and (min-width: 992px) {
    @include scalefont(18);
    @include scalelineheight(21.6);
  }
}
.label3 {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: 750;
  font-size: 14px;
  line-height: 16.8px;
  color: #272d4e;
  @media screen and (min-width: 992px) {
    @include scalefont(24);
    @include scalelineheight(65);
  }
}

#startup-listing {
  background: #ffffff;
  box-shadow: 0px 20px 60px rgba(2, 131, 233, 0.1);
  border: 0;
  border-radius: 38px;
  margin: auto;
  width: 80%;
  @media screen and (min-width: 992px) {
    width: 100%;
  }
  .list-group-item {
    color: #94a2b3;
    font-size: 10px;
    font-weight: bold;
    border: 0;
    @media screen and (min-width: 992px) {
      @include scalefont(18);
    }
  }
  a.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    line-height: 10.6px;
    height: 21px;
    max-width: 77px;
    font-weight: 500;
    @media screen and (min-width: 992px) {
      @include scalefont(14);
      @include scalelineheight(25);
      @include scaleheight(38);
      @include scalewidth(117);
    }
  }
}

/* .header {
  width: 1440px;
  height: 600px;
  left: 0px;
  top: 0px;
  background-color: #f1fbff;
} */
.startUpListing {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13.2px;
  color: #94a2b3;
  @media screen and (min-width: 992px) {
    @include scalefont(18);
    @include scalelineheight(25);
  }
}
.startUpShownNumber {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: bold;
  color: #383874;
}
.shownNumber {
  font-size: 21px;
  line-height: 24.61px;
  @media screen and (min-width: 992px) {
    @include scalefont(36);
    @include scalelineheight(42);
  }
}
.circle {
  left: 9.63%;
  right: 89.83%;
  top: 40.93%;
  bottom: 58.95%;
  background: #17d74d;
}
.pics {
  width: 270px;
  height: 199px;
  left: 633px;
  top: 3797px;
}
.star-rating {
  background-color: #f1fbff;
}
.py-4 {
  background-color: #0283e9;
}
.label-join {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: 500;
  @include scalefont(18);
  @include scalelineheight(21);
  /* identical to box height */
  text-align: center;
  color: #ffffff;
}
.footer-color {
  background-color: #0283e9;
}

.card.illustration {
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(0, 157, 221, 0.1);
  border-radius: 10px;
  border: 0;
  @media screen and (max-width: 767px) {
    width: 65%;
    margin: 0 auto;
  }
}

#featured-row article.card {
  color: #000;
  // max-width: 308px;
  @include scalewidth(308);
  @include scaleheight(379);
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.05);
  border-radius: 40px;
  padding: 1rem;
}

/* #featured-row > div:nth-child(odd) {
  position: absolute;
  top: 5%;
} */

#featured-row .card-title {
  font-family: Avenir LT Std;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 992px) {
    @include scalefont(24);
  }
}

#featured-row .card-text {
  font-family: Avenir LT Std;
  font-size: 11px;
  @media screen and (min-width: 992px) {
    @include scalefont(16);
  }
}

.slick-dots {
  display: flex !important;
  justify-content: flex-start;
  align-items: flex-start;
}

.slick-dots li {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
}

.slick-dots li button {
  font-size: 0;
  line-height: 0;
  display: block;
  width: 20px;
  height: 20px;
  padding: 5px;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
}

.slick-dots li button:before {
  font-family: 'slick';
  @include scalefont(16);
  @include scalelineheight(20);
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  content: '•';
  text-align: center;
  opacity: 0.75;
  color: #e6f4f1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: #009ddd;
}

.success-story-adjust {
  @media screen and (min-width: 992px) {
    top: -3rem;
  }
}

.success-story-card {
  .card-body {
    padding-bottom: 0;
    @media screen and (min-width: 992px) {
      padding-bottom: 2.5rem;
    }
  }
}

.testimonial-name {
  font-size: 14px;
}

.vue-star-rating {
  .vue-star-rating-star {
    height: 10px;
    width: 10px;
    @media screen and (min-width: 768px) {
      height: 24px;
      width: 20px;
    }
  }
}

.slick-dots {
  li {
    button::before {
      height: 6px;
      width: 6px;
      @media screen and (min-width: 768px) {
        height: 20px;
        width: 20px;
      }
    }
  }
}
</style>
