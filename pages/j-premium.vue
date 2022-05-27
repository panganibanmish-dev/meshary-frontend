<template>
  <div class="mt-5 pt-4">
    <BeAPremiumSection :sectionTitle="$t('lorem_title')" />
    <section
      :style="{ backgroundImage: `url('${bgImage8}')` }"
      style="
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 100% 25rem;
      "
    >
      <b-container>
        <div class="row">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <b-container>
              <h3 class="label-text text-center text-md-left fade-up bold my-4">
                The Easy Way to Start Your Set Up steps
              </h3>
              <div class="label2">
                <p class="p-text text-center text-md-left mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Adipiscing lacus malesuada lorem id ut mi gravida auctor
                  felis.
                </p>
              </div>

              <div>
                <img
                  class="d-block d-lg-none"
                  src="~assets/images/create-listing-group.svg"
                  alt=""
                  style="width: 100%"
                />
              </div>

              <div id="setup-list">
                <b-list-group class="setup-list-group" flush>
                  <b-list-group-item class="d-flex align-items-center">
                    <img
                      class="list-check mr-4"
                      src="~assets/images/list-check.svg"
                      alt=""
                    />
                    <span>Describe your Listing</span>
                  </b-list-group-item>
                  <b-list-group-item class="d-flex align-items-center">
                    <img
                      class="list-check mr-4"
                      src="~assets/images/list-check.svg"
                      alt=""
                    /><span
                      >Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.</span
                    >
                  </b-list-group-item>
                  <b-list-group-item class="d-flex align-items-center">
                    <img
                      class="list-check mr-4"
                      src="~assets/images/list-check.svg"
                      alt=""
                    /><span
                      >Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.</span
                    >
                  </b-list-group-item>
                  <b-list-group-item class="d-flex align-items-center">
                    <img
                      class="list-check mr-4"
                      src="~assets/images/list-check.svg"
                      alt=""
                    /><span
                      >Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.</span
                    >
                  </b-list-group-item>
                  <b-list-group-item class="d-flex align-items-center">
                    <img
                      class="list-check mr-4"
                      src="~assets/images/list-check.svg"
                      alt=""
                    /><span
                      >Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.</span
                    >
                  </b-list-group-item>
                </b-list-group>
              </div>
            </b-container>
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0 d-none d-lg-block">
            <!-- <div class="rounded float-right"> -->
            <img
              src="~assets/images/create-listing-group.svg"
              alt=""
              style="width: 100%"
              align="right"
            />
            <!-- </div> -->
          </div>
        </div>

        <b-container class="info-buy-container mb-5">
          <div class="w-lg-75 bold text-center mx-auto mt-5">
            <h3 class="label-text fade-up bold text-center mb-5">
              Table breakdown of Experiences on using the website between being
              a Premium Buyer and Basic Buyer
            </h3>
            <p class="p-text text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Adipiscing lacus malesuada lorem id ut mi gravida auctor felis.
            </p>
          </div>
          <b-row class="text-center">
            <b-col cols="12" lg="6">
              <img
                src="~assets/images/premium-basic-buyer.png"
                alt="premium-basic-buyer"
                class="m-auto pb-0"
              />
            </b-col>
            <b-col cols="12" lg="6">
              <img
                src="~assets/images/premium-premium-buyer.png"
                alt="premium-premium-buyer"
                class="m-auto pb-0"
              />
            </b-col>
          </b-row>
          <div class="d-flex justify-content-center">
            <a
              href=""
              class="
                btn btn-primary btn-join
                label-join
                btn-cta
                d-flex
                align-items-center
                justify-content-center
                mt-4
              "
            >
              Be a Premium User
            </a>
          </div>
          <b-row> </b-row>
        </b-container>
      </b-container>
    </section>

    <!-- <section>
      <b-container class="pb-5">
        <h4 class="label-text-1 fade-up">
          The Easy Way to Start Your Set Up steps
        </h4>
        <div class="row">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <br />
            <div class="label4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing lacus malesuada lorem id ut mi gravida auctor felis.
                Suspendisse lacus ornare ipsum neque egestas tellus orci cras.
                Arcu magnis id iaculis viverra ut. Elit id interdum tellus
                vestibulum pellentesque eu ultrices ut massa
              </p>
            </div>
            <div class="label5 text-lg-start">
              <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
                >Describe your Listing
              </b-form-checkbox>
              <b-form-checkbox
                id="checkbox-2"
                name="checkbox-2"
                value="accepted"
                unchecked-value="not_accepted"
                >Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</b-form-checkbox
              >
              <b-form-checkbox
                id="checkbox-3"
                name="checkbox-3"
                value="accepted"
                unchecked-value="not_accepted"
                >Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</b-form-checkbox
              >
              <b-form-checkbox
                id="checkbox-4"
                name="checkbox-4"
                value="accepted"
                unchecked-value="not_accepted"
                >Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</b-form-checkbox
              >
              <b-form-checkbox
                id="checkbox-5"
                name="checkbox-5"
                value="accepted"
                unchecked-value="not_accepted"
                >Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</b-form-checkbox
              >
            </div>
          </div>
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="rounded float-right">
              <br />
              <div class="card" style="width: 30rem">
                <div class="card-body">
                  <p class="startUpListing card-title" color="#94A2B3">
                    Create your listing
                  </p>
                  <div class="row">
                    <div class="col-lg-6">
                      <b-form-checkbox
                        id="checkbox-6"
                        name="checkbox-6"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >Startup name
                        <p
                          style="color: #94a2b3 font-family: Roboto font-style: normal font-weight: bold"
                        >
                          Saas
                        </p>
                      </b-form-checkbox>
                      <b-form-checkbox
                        id="checkbox-7"
                        name="checkbox-7"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >Startup type
                        <p
                          style="color: #94a2b3 font-family: Roboto font-style: normal font-weight: bold"
                        >
                          Saas
                        </p>
                      </b-form-checkbox>
                    </div>
                    <div class="col-lg-6">
                      <b-form-checkbox
                        id="checkbox-8"
                        name="checkbox-8"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >Asking Price
                        <p
                          style="color: #94a2b3 font-family: Roboto font-style: normal font-weight: bold"
                        >
                          Saas
                        </p>
                      </b-form-checkbox>
                      <b-form-checkbox
                        id="checkbox-9"
                        name="checkbox-9"
                        value="accepted"
                        unchecked-value="not_accepted"
                        >Annual revenue
                        <p
                          style="color: #94a2b3 font-family: Roboto font-style: normal font-weight: bold"
                        >
                          $ 232.42 M USD
                        </p>
                      </b-form-checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-container>
    </section> -->

    <!-- <section>
      <b-container> -->
    <!-- <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="rounded float-left"><br /><br /><br />
            <div class="card" style="width: 30rem"><br />
              <div class="card-body">
                <p class="startUpListing card-title" color="#94A2B3">Create your listing</p>
                <div class="row">
                  <div class="col-lg-6">
                    <b-form-checkbox id="checkbox-10" name="checkbox-10" value="accepted" unchecked-value="not_accepted">Startup name
                      <p style="color: #94a2b3 font-family: Roboto font-style: normal font-weight: bold">Saas</p>
                    </b-form-checkbox>
                    <b-form-checkbox id="checkbox-11" name="checkbox-11" value="accepted" unchecked-value="not_accepted">Startup type
                      <p style="color: #94a2b3 font-family: Roboto font-style: normal font-weight: bold">Saas</p>
                    </b-form-checkbox>
                  </div>
                  <div class="col-lg-6">
                    <b-form-checkbox id="checkbox-12" name="checkbox-12" value="accepted" unchecked-value="not_accepted">Asking Price
                      <p style="color: #94a2b3 font-family: Roboto font-style: normal font-weight: bold">Saas</p>
                    </b-form-checkbox>
                    <b-form-checkbox id="checkbox-13" name="checkbox-13" value="accepted" unchecked-value="not_accepted">Annual revenue
                      <p style="color: #94a2b3 font-family: Roboto font-style: normal font-weight: bold">$ 232.42 M USD</p>
                    </b-form-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
    <!-- <h6 class="label-text fade-up bold text-center">
          Informations about being a Seller using the website
        </h6>
        <br />
        <div class="label4 text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
            lacus malesuada lorem id ut mi gravida auctor felis.
          </p>
        </div>
      </b-container>
    </section> -->
    <Footer />
  </div>
</template>

<script>
import bgimage8 from '../assets/images/bg-group-8.png'
export default {
  name: 'PremiumPage',
  layout: 'default-layout',
  data() {
    return {
      value: 5,
      active: 4,
      bgImage8: bgimage8,
    }
  },
}
</script>
<style lang="scss" scoped>
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
.label-text {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: 750;
  color: #272d4e;
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
  font-weight: 150;
  @include scalefont(24);
  @include scalelineheight(21);
  color: #4a94e9;
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
.header {
  width: 2500px;
  height: 600px;
  left: 0px;
  top: 0px;
  background-color: #f1fbff;
}
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
  @include scalefont(36);
  line-height: 42px;
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

.card.illustration {
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(0, 157, 221, 0.1);
  border-radius: 10px;
  border: 0;
}

#setup-list {
  .setup-list-group {
    background: transparent;
    .list-group-item {
      font-weight: 750;
      font-size: 14px;
      line-height: 17px;
      background-color: transparent;
      color: #272d4e;
      border: 0;
      padding-left: 0;

      @media screen and (min-width: 992px) {
        @include scalefont(20);
        @include scalelineheight(24);
      }
      .list-check {
        height: 16px;
        width: 16px;
        @media screen and (min-width: 992px) {
          @include scaleheight(36);
          @include scalewidth(36);
        }
      }
    }
  }
}

.info-buy-container {
  img {
    // @include scaleheight(498);
    // @include scalewidth(967);
    width: 75%;
    margin: auto;
    padding-bottom: 10rem;
  }
}
</style>
