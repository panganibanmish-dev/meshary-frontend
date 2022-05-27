<template>
  <div>
    <div
      :style="{ backgroundImage: `url('${auImage1}')` }"
      style="
        background-size: contain;
        background-repeat: no-repeat;
        background-position-y: 10%;
      "
    >
      <b-container class="mt-5" fluid="xl">
        <div
          class="row mb-4"
          :class="$t('translation') == 'arabic' ? 'flex-row-reverse' : ''"
        >
          <div class="col-lg-6 order-12 order-lg-1">
            <br class="d-none d-lg-block" /><br class="d-none d-lg-block" /><br
              class="d-none d-lg-block"
            /><br class="d-none d-lg-block" />
            <b-img
              src="~assets/images/content-company-pic-1.png"
              style="width: 100%; image-rendering: -webkit-optimize-contrast"
            ></b-img>
          </div>
          <div class="col-lg-6 pt-5">
            <br class="d-none d-lg-block" /><br class="d-none d-lg-block" /><br
              class="d-none d-lg-block"
            /><br class="d-none d-lg-block" /><br
              class="d-none d-lg-block"
            /><br class="d-none d-lg-block" />
            <h1
              class="h1-company mt-5 order-12 order-lg-1"
              :class="
                $t('translation') == 'arabic'
                  ? 'text-right'
                  : 'text-center text-lg-left'
              "
            >
              Welcome to Rounup!
            </h1>
            <h1
              class="h1-company"
              :class="
                $t('translation') == 'arabic'
                  ? 'text-right'
                  : 'text-center text-lg-left'
              "
            >
              {{ $t('about_us') }}
            </h1>
            <!-- <h1 class="h1-company">
              (the effort is on you and the opportunity is on us)
            </h1> -->
            <br />
            <!-- <p class="content-company">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing lacus malesuada lorem id ut mi gravida auctor felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing lacus malesuada lorem id ut mi gravida auctor felis.</p><br>
                    <p class="content-company">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing lacus malesuada lorem id ut mi gravida auctor felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing lacus malesuada lorem id ut mi gravida auctor felis.</p> -->
            <!-- <button class="btn btn-outline-primary btn-meet-crew d-flex align-items-center justify-content-center px-5" @click="meetTheCrew">
                      <div class="pr-3">Meet the crew</div><font-awesome-icon :icon="['fas', 'arrow-right-long']"/>
                    </button> -->
          </div>
          <!-- <div class="row mb-4" :style="{ backgroundImage: `url('${auImage1}')` }" style="background-size: cover; background-repeat: no-repeat; background-color: white"></div> -->
        </div>
      </b-container>

      <b-container>
        <br class="d-none d-lg-block" /><br class="d-none d-lg-block" />
        <h1 class="history-label text-center">
          History on creating the application
        </h1>
        <br />
        <p class="content-company text-center">
          Rounup is a Saudi company, established in the 2021 , aiming to enable
          entrepreneurs to present their products to investors or get a
          consultion in the field of entrepreneurship
        </p>
        <div>
          <b-carousel
            id="carousel-1"
            :interval="4000"
            controls
            background="#fffff"
            style="text-shadow: 1px 1px 2px #333"
          >
            <b-carousel-slide
              style="box-shadow: 10px 20px 50px #e6f4f1; border-radius: 19px"
              img-src="~assets/images/slide_1.png"
            ></b-carousel-slide>
            <b-carousel-slide
              style="box-shadow: 10px 20px 50px #e6f4f1; border-radius: 19px"
              img-src="~assets/images/slide_2.png"
            ></b-carousel-slide>
            <b-carousel-slide
              style="box-shadow: 10px 20px 50px #e6f4f1; border-radius: 19px"
              img-src="~assets/images/slide_3.png"
            ></b-carousel-slide>
          </b-carousel>
        </div>

        <br /><br /><br />
        <div class="row">
          <div class="col-lg-8 align-self-center">
            <h1 class="quote-label">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Adipiscing lacus malesuada lorem id ut mi gravida auctor felis.”
            </h1>
            <br class="d-none d-lg-block" /><br
              class="d-none d-lg-block"
            /><br />
            <h4 class="name-founder">Meshary</h4>
            <h6 class="role-title">CEO/Founder of Rounup</h6>
          </div>
          <div
            class="
              d-flex
              justify-content-center justify-content-lg-center
              col-lg-4
            "
          >
            <b-img
              class="founder-image"
              src="~assets/images/group-circle.png"
            ></b-img>
          </div>
        </div>
        <br />
      </b-container>
      <section id="company-team">
        <b-container>
          <div class="team-section-card p-4">
            <!-- <img
                src="~assets/images/group_layer.png"
                style="width: 100%; image-rendering: -webkit-optimize-contrast"
              /> -->
            <h1 class="history-label text-center mt-5 mb-4">
              The Team of the Company
            </h1>
            <p class="content-company text-center mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Adipiscing lacus malesuada lorem id ut mi gravida auctor felis.
              Suspendisse lacus ornare ipsum neque egestas tellus orci cras.
            </p>
            <div class="row">
              <b-col class="mb-4" md="6" xl="4">
                <div
                  class="card d-flex align-items-center position-relative px-4"
                >
                  <b-img
                    class="member-photo"
                    src="~assets/images/member-sample-photo.png"
                  ></b-img>
                  <h1 class="name-member mt-3">Rocky Dixon</h1>
                  <p class="role-member">Marketing</p>
                  <p class="qoute-member">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
                  </p>
                </div>
              </b-col>
              <b-col class="mb-4" md="6" xl="4">
                <div
                  class="card d-flex align-items-center position-relative px-4"
                >
                  <b-img
                    class="member-photo"
                    src="~assets/images/member-sample-photo.png"
                  ></b-img>
                  <h1 class="name-member mt-3">Rocky Dixon</h1>
                  <p class="role-member">Marketing</p>
                  <p class="qoute-member">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
                  </p>
                </div>
              </b-col>
              <b-col class="mb-4" md="6" xl="4">
                <div
                  class="card d-flex align-items-center position-relative px-4"
                >
                  <b-img
                    class="member-photo"
                    src="~assets/images/member-sample-photo.png"
                  ></b-img>
                  <h1 class="name-member mt-3">Rocky Dixon</h1>
                  <p class="role-member">Marketing</p>
                  <p class="qoute-member">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
                  </p>
                </div>
              </b-col>
            </div>
          </div>
        </b-container>
      </section>
      <b-container>
        <!-- <div class="row" :style="{ backgroundImage: `url('${auimage2}')` }" style="background-size: cover; background-repeat: no-repeat; background-color: white">
                <b-card class="team-card center" ><br><br><br>
                    <h1 class="team-label text-center">The Team of the Company</h1><br>
                    <p class="p-team">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing lacus</p>
                    <p class="p-team">malesuada lorem id ut mi gravida auctor felis.</p><br>
                    <div class="container" style="color: #fffff"><br>
                        <div class="row">
                            <div class="col-md">
                            <b-card class="card-member"><br>
                                    <h1 class="name-member">Rocky Dixon</h1>
                                    <p class="role-member">Marketing</p>
                                    <p class="qoute-member">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                                </b-card>
                            </div>
                            <div class="col-md">
                                <b-card class="card-member"><br>
                                    <h1 class="name-member">Wade Warren</h1>
                                    <p class="role-member">Marketing</p>
                                    <p class="qoute-member">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                                </b-card>
                            </div>
                            <div class="col-md">
                                <b-card class="card-member" ><br>
                                    <h1 class="name-member">Esther Howard</h1>
                                    <p class="role-member">Marketing</p>
                                    <p class="qoute-member">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                                </b-card>
                            </div>
                        </div><br><br>
                        <div class="row">
                            <div class="col-md">
                            <b-card class="card-member"><br>
                                    <h1 class="name-member">Leslie Alexander</h1>
                                    <p class="role-member">Marketing</p>
                                    <p class="qoute-member">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                                </b-card>
                            </div>
                            <div class="col-md">
                                <b-card class="card-member"><br>
                                    <h1 class="name-member">Robert Fox</h1>
                                    <p class="role-member">Marketing</p>
                                    <p class="qoute-member">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                                </b-card>
                            </div>
                            <div class="col-md">
                                <b-card class="card-member" ><br>
                                    <h1 class="name-member">Jacob Jones</h1>
                                    <p class="role-member">Marketing</p>
                                    <p class="qoute-member">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                                </b-card>
                            </div>
                        </div><br><br>
                        <div class="row">
                            <div class="col-md">
                            <b-card class="card-member"><br>
                                    <h1 class="name-member">Annette Black</h1>
                                    <p class="role-member">Marketing</p>
                                    <p class="qoute-member">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                                </b-card>
                            </div>
                            <div class="col-md">
                                <b-card class="card-member"><br>
                                    <h1 class="name-member">Floyd Miles</h1>
                                    <p class="role-member">Marketing</p>
                                    <p class="qoute-member">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                                </b-card>
                            </div>
                            <div class="col-md">
                                <b-card class="card-member" ><br>
                                    <h1 class="name-member">Jerome Bell</h1>
                                    <p class="role-member">Marketing</p>
                                    <p class="qoute-member">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                                </b-card>
                            </div>
                        </div><br><br>
                    </div>
                </b-card ><br><br><br><br><br>
            </div> -->
        <div>
          <br /><br /><br />
          <h1 class="name-label text-center">What We Want to Represent for</h1>
          <br />
          <p class="represent-text">
            Providing investors with viable products &amp; Providing
            Entrepreneurs with
          </p>
          <p class="represent-text">Real and Trusted Investors</p>
        </div>
        <b-row>
          <b-col id="represent-carousel" sm="12">
            <b-row>
              <b-col sm="4"> </b-col>
              <b-col lg="4">
                <VueSlickCarousel
                  :arrows="true"
                  :dots="true"
                  :slides-per-row="1"
                  :centerMode="true"
                  :focusOnSelect="true"
                >
                  <b-carousel-slide
                    img-src="~assets/images/card1.png"
                    style="
                      width: 100%;
                      image-rendering: -webkit-optimize-contrast;
                    "
                  ></b-carousel-slide>
                  <b-carousel-slide
                    img-src="~assets/images/card2.png"
                    style="
                      width: 100%;
                      image-rendering: -webkit-optimize-contrast;
                    "
                  ></b-carousel-slide>
                  <b-carousel-slide
                    img-src="~assets/images/card3.png"
                    style="
                      width: 100%;
                      image-rendering: -webkit-optimize-contrast;
                    "
                  ></b-carousel-slide>
                </VueSlickCarousel>
              </b-col>
              <b-col sm="4"></b-col><br class="d-none d-lg-block" /><br
                class="d-none d-lg-block"
              /><br class="d-none d-lg-block" /><br class="d-none d-lg-block" />
            </b-row>
          </b-col>
          <b-col sm="3"></b-col> </b-row
        ><br
          class="d-none d-lg-block"
        /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </b-container>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import auimage1 from '../assets/images/au_bg_group1.png'
import auimage2 from '../assets/images/au_bg_group2.png'
export default {
  name: 'AboutUsPage',
  components: {
    VueSlickCarousel,
  },
  layout: 'default-layout',
  data() {
    return {
      auImage1: auimage1,
      auImage2: auimage2,
    }
  },
}
</script>

<style lang="scss">
@import '../assets/css/vars.scss';
.h1-company {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 550;
  font-size: 26px;
  line-height: 26px;
  color: #272d4e;
  width: 90%;
  margin: auto;
  @media screen and (min-width: 992px) {
    @include scalefont(42);
    @include scalelineheight(48);
    width: 100%;
  }
}
.content-company {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #94a2b3;
  @media screen and (min-width: 992px) {
    @include scalefont(20);
    @include scalelineheight(31);
  }
}
.btn-meet-crew {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  color: #009ddd;
  border: 1px solid #009ddd;
  box-sizing: border-box;
  border-radius: 30px;
  height: 50px;
}
.history-label {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 750;
  font-size: 26px;
  line-height: 26px;
  color: #272d4e;
  width: 90%;
  margin: auto;
  @media screen and (min-width: 992px) {
    @include scalefont(36);
    @include scalelineheight(43);
    width: 100%;
  }
}
.quote-label {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 750;
  font-size: 14px;
  line-height: 17px;
  color: #272d4e;
  @media screen and (min-width: 992px) {
    @include scalefont(36);
    @include scalelineheight(50);
  }
}
.name-founder {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 750;
  font-size: 14px;
  line-height: 17px;
  color: #272d4e;
  @media screen and (min-width: 992px) {
    @include scalefont(26);
    @include scalelineheight(31);
  }
}
.role-title {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #272d4e;
  @media screen and (min-width: 992px) {
    @include scalefont(26);
    @include scalelineheight(31);
  }
}
.team-card {
  width: 1100px;
  /* height: 1273px;
        left: 73px;
        top: 2265px; */
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 50px #e6f4f1;
  border-radius: 22px;
}
.team-label {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 750;
  font-size: 36px;
  line-height: 43px;
  color: #000000;
}
.p-team {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #272d4e;
}
.team-name-card {
  background: #ffffff;
  box-shadow: 0px 89.761px 145.862px rgba(0, 0, 0, 0.05);
  border-radius: 19.1456px;
}
/* .img-team{  
        width: 1295px;
        height: 1273px;
        top: 2265px;
    } */
.name-member {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 750;
  font-size: 16px;
  line-height: 160.69%;
  color: #2d3150;
  text-align: center;
  @media screen and (min-width: 992px) {
    font-size: 24px;
  }
}
.role-member {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160.69%;
  text-align: center;
  color: #3c405f;
  @media screen and (min-width: 992px) {
    font-size: 16px;
  }
}
.qoute-member {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160.69%;
  text-align: center;
  color: #3c405f;
  width: 80%;
  @media screen and (min-width: 992px) {
    font-size: 16px;
  }
}
.card-member {
  background: #ffffff;
  box-shadow: 0px 89.761px 145.862px rgba(0, 0, 0, 0.05);
  border-radius: 19.1456px;
}
.name-label {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 750;
  font-size: 26px;
  line-height: 26px;
  color: #272d4e;
  @media screen and (min-width: 992px) {
    @include scalefont(36);
    @include scalelineheight(53);
    letter-spacing: 0.02em;
  }
}
.represent-text {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #272d4e;
  @media screen and (min-width: 992px) {
    @include scalefont(24);
    @include scalelineheight(29);
  }
}
.card-image {
  width: 485px;
  height: 416px;
  left: 481px;
  top: 3913px;

  background: #ffffff;
  box-shadow: 0px 4px 50px #e6f4f1;
  border-radius: 22px;
}
.carousel-inner img {
  margin: auto;
}
.slick-arrows li button::before {
  font-family: 'slick';
  font-size: 16px;
  line-height: 20px;
  position: absolute;
  left: 42.92%;
  right: 6.88%;
  top: 26.04%;
  bottom: 48.75%;
  border: 1.5px solid #009ddd;
  transform: rotate(90deg);
}
.slick-arrows li.slick-active button:before {
  opacity: 0.75;
  color: #009ddd;
}

#represent-carousel {
  .slick-dots {
    place-content: center;
    justify-items: center;
  }
}
.slick-dots li button:before {
  font-family: 'slick';
  font-size: 16px;
  line-height: 20px;
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

.founder-image {
  @include scaleheight(416);
  @include scalewidth(352);
}

.slick-active .carousel-item {
  z-index: 100;
}

// .slick-slide:not(.slick-active) .carousel-item {
//   position:relative;
//   left: 10rem;
// }

// .slick-active+.slick-slide:not(.slick-active) .carousel-item{
//   position: relative;
//     left: -10rem;
// }

.slick-arrow {
  position: absolute;
  z-index: 1000;
  top: 425px;
}

.slick-prev:before {
  content: url('~/assets/images/Arrow_Left.svg');
  color: #009ddd !important;
}

.slick-next:before {
  content: url('~/assets/images/Arrow_Right.svg');
  color: #009ddd !important;
}

.team-section-card {
  background: #ffffff;
  box-shadow: 0px 4px 50px #e6f4f1;
  border-radius: 22px;
}
#company-team {
  .card {
    margin-top: 4em;
    background: #ffffff;
    border: 0;
    box-shadow: 0px 89.761px 145.862px rgba(0, 0, 0, 0.05);
    border-radius: 19.1456px;
    padding-bottom: 0.6rem;
  }
  .member-photo {
    height: 78px;
    width: 78px;
    margin-top: -4em;
  }
}
</style>