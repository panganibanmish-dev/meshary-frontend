<template>
  <div class="container-fluid mt-5">
    <br /><br />
    <div class="row">
      <div class="col-md-12 mb-5 pr-5 pl-5">
        <div class="marketplace-product-card">
          <div class="marketplace-product-card-title mb-1">
            Public Information
          </div>
          <div class="product-card-subtitle mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div class="row pl-2 pr-2">
            <div class="row col-md-12 mb-2">
              <div class="col-md-4 mb-3">
                <div class="product-info-header mb-3">Asking Price</div>
                <div class="d-flex justify-content-start align-items-start">
                  <div class="product-asking-price-circle mr-3"></div>
                  <div>
                    <div class="product-info"></div>
                    <div class="product-info-subtitle">Open to Offers</div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="product-info-header mb-3">Annual revenue</div>
                <div class="product-info"></div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="product-info-header mb-3">
                  Date Founded 
                </div>
                <div class="product-info"></div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="product-info-header mb-3">Startup Type</div>
                <div class="product-info"></div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="product-info-header mb-3">Number of Customers</div>
                <div class="product-info"></div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="product-info-header mb-3">Startup team size</div>
                <div class="product-info"></div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="product-info-header mb-3">Description</div>
              <div class="product-card-content-1"></div>
              <div class="product-card-content-2"></div>
              <div class="product-card-content-3"></div>
            </div>
          </div>
        </div>
        <div class="marketplace-product-card">
          <div class="marketplace-product-card-title mb-1">
            Company Features
          </div>
          <div class="product-card-subtitle mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div class="product-card-content-1"></div>
          <div class="product-card-content-2"></div>
          <div class="product-card-content-3"></div>
        </div>
        <div class="marketplace-product-card">
          <div class="marketplace-product-card-title mb-1">Selling Details</div>
          <div class="product-card-subtitle mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div class="product-card-content-1"></div>
          <div class="product-card-content-2"></div>
          <div class="product-card-content-3"></div>
        </div>
        <div class="marketplace-product-card">
          <div class="marketplace-product-card-title mb-1">
            Financial Details
          </div>
          <div class="product-card-subtitle mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div class="product-card-content-1"></div>
          <div class="product-card-content-2"></div>
          <div class="product-card-content-3"></div>
        </div>
      </div>
      <div
        class="col-md-12 d-flex justify-content-center align-items-center mb-5"
      >
        <NuxtLink
          class="
            product-bottom-buttons
            d-flex
            justify-content-center
            align-items-center
            pl-4
            pr-4
            mr-3
            ml-3
          "
          role="button"
          to="/marketplace"
          >Return to marketplace</NuxtLink
        >
        <a
          class="
            product-bottom-buttons
            d-flex
            justify-content-center
            align-items-center
            pl-4
            pr-4
            mr-3
            ml-3
          "
          role="button"
          >I'm interested</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarketplaceProductPage',
  layout: 'auth-layout',
  middleware: 'auth',
}
</script>

<style>
.product-card-subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.2px;
}

.product-card-content-1 {
  background: #ffffff;
  height: 20px;
  width: 763px;
  margin-bottom: 15px;
}

.product-card-content-2 {
  background: #ffffff;
  height: 20px;
  width: 516px;
  margin-bottom: 15px;
}

.product-card-content-3 {
  background: #ffffff;
  height: 20px;
  width: 848px;
  margin-bottom: 15px;
}

.product-info-header {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
}

.product-info {
  background: #ffffff;
  height: 20px;
  width: 136px;
}

.product-info-subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.5);
}

.product-asking-price-circle {
  width: 45px;
  height: 45px;
  background: #ffffff;
  border-radius: 25px;
}

.product-bottom-buttons {
  height: 52px;
  width: 200px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: #000000;
  background: #ddeaf3;
  border-radius: 2px;
}

.product-bottom-buttons:hover {
  text-decoration: none;
}
</style>