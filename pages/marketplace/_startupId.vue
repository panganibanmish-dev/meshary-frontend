<template>
  <div class="container new-background">
    <br /><br />
    <div class="row">
      <div class="col-12 mt-4 mb-4">
        <NuxtLink
          :to="localePath(`/marketplace`)"
          class="btn back-btn d-flex align-items-center justify-content-center"
        >
          <font-awesome-icon color="#009DDD" :icon="['fas', 'arrow-left-long']"/>
        </NuxtLink>
      </div>
      <div v-if="startup" class="col-sm-12 mb-5">
        <div class="mystartup-dashboard-block">
          <div class="dashboard-header mb-5">
            <div class="dashboard-header-text">Basic Information about Startup number and History</div>
            <div class="dashboard-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
          <div v-for="category in startup.queryCategories" :key="category.id" class="startup-category mb-4">
            <div>
              <div class="startup-form">
                <div class="d-flex justify-content-between pb-3">
                  <div>
                    <h1>{{ category.name }}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>  
                  <a class="btn startup-info-edit-btn" role="button" @click="listing_toggle">
                    <font-awesome-icon :icon="['fas', 'pencil']"/>
                    Edit Info
                  </a>
                </div>
                <div class="row">
                  <div v-if="category.name === 'Public Information'" class="col-12 pb-4">
                    <a class="btn openToOffers d-flex text-gray fw-600 fs-13" role="button">
                      Open to Offers
                    </a>
                  </div>
                  <div v-for="query in $options.filters.noDescription(category.startup_type_queries)" :key="query.id" :class="getClass(category)">
                    <div class="startup-info-header">{{ query.label }}</div>
                    <div class="startup-info-text">{{ query | displayType }}</div>
                  </div>
                  <!-- <div class="col-md-4 pb-4">
                    <div class="startup-info-header">Asking Price</div>
                    <div class="startup-info-text">$ {{user.startupData.listing.askingPrice}}</div>
                  </div>
                  <div class="col-md-4 pb-4">
                    <div class="startup-info-header">Number of Customer</div>
                    <div class="startup-info-text">{{user.startupData.listing.numberOfCustomers.from}} - {{user.startupData.listing.numberOfCustomers.to}}</div>
                  </div>
                  <div class="col-md-4 pb-4">
                    <div class="startup-info-header">Startup Team Size</div>
                    <div class="startup-info-text">{{user.startupData.listing.teamSize}}</div>
                  </div>
                  <div class="col-md-4 pb-4">
                    <div class="startup-info-header">Annual Revenue</div>
                    <div class="startup-info-text">$ {{user.startupData.listing.annualRevenue}}</div>
                  </div>
                  <div class="col-md-4 pb-4">
                    <div class="startup-info-header">Date Founded</div>
                    <div class="startup-info-text">{{user.startupData.listing.dateFounded}}</div>
                  </div> -->
                  <div v-if="category.name === 'Public Information'" class="col-12 pb-4">
                    <div class="startup-info-header">Description</div>
                    <div class="startup-info-text-description" v-html="category.startup_type_queries.find(query => query.label === 'Description').query_values[0].value"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="startup-category mb-4">
            <div v-if="!listing.input">
              <div v-if="user.startupData.listing === null" class="startup-content">
                <h1>Your Listing</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button
                  type="button"
                  class="btn btn-primary dashboard-btn px-4 fs-14"
                  @click="listing_toggle"
                >
                  Add Information
                </button>
              </div>
              <div v-else class="startup-form">
                <div class="d-flex justify-content-between pb-3">
                  <div>
                    <h1>Your Listing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>  
                  <a class="btn startup-info-edit-btn" role="button" @click="listing_toggle">
                    <font-awesome-icon :icon="['fas', 'pencil']"/>
                    Edit Info
                  </a>
                </div>
                <div class="row">
                  <div v-if="user.startupData.listing.openToOffers" class="col-md-12 pb-4">
                    <a class="btn openToOffers" role="button">
                      Open to Offers
                    </a>
                  </div>
                  <div class="col-md-4 pb-4">
                    <div class="startup-info-header">Asking Price</div>
                    <div class="startup-info-text">$ {{user.startupData.listing.askingPrice}}</div>
                  </div>
                  <div class="col-md-4 pb-4">
                    <div class="startup-info-header">Number of Customer</div>
                    <div class="startup-info-text">{{user.startupData.listing.numberOfCustomers.from}} - {{user.startupData.listing.numberOfCustomers.to}}</div>
                  </div>
                  <div class="col-md-4 pb-4">
                    <div class="startup-info-header">Startup Team Size</div>
                    <div class="startup-info-text">{{user.startupData.listing.teamSize}}</div>
                  </div>
                  <div class="col-md-4 pb-4">
                    <div class="startup-info-header">Annual Revenue</div>
                    <div class="startup-info-text">$ {{user.startupData.listing.annualRevenue}}</div>
                  </div>
                  <div class="col-md-4 pb-4">
                    <div class="startup-info-header">Date Founded</div>
                    <div class="startup-info-text">{{user.startupData.listing.dateFounded}}</div>
                  </div>
                  <div class="col-md-12 pb-4">
                    <div class="startup-info-header">Description</div>
                    <div class="startup-info-text-description">{{user.startupData.listing.description}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="startup-form">
              <div class="pb-3">
                <h1>Your Listing</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <form class="form-group">
                <label for="startupType" class="mb-3 text-center">
                  Startup type
                  <a
                    href="#"
                    class="ml-2"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  >
                    <img
                      src="~/assets/imgs/help-tooltip.png"
                      class="help-tooltip-icon"
                    />
                  </a>
                </label>
                <select
                  id="startupType"
                  v-model="user.listing.startupType"
                  name="startupType"
                  class="form-control"
                  required
                >
                  <option
                    v-for="item in listing.startupTypes"
                    :key="item.id"
                    :value="item"
                  >
                    {{ item.name }}
                  </option>
                </select>
                <br />
                <InputField
                  v-for="query in listing.queries"
                  :id="query.id"
                  :key="query.id"
                  v-model="query.value"
                  :type="query.type"
                  :name="query.label"
                />
                <div class="startup-form-buttons">
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn px-5"
                    @click="saveListing"
                  >
                    SAVE
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary dashboard-btn px-5"
                    @click="listing_toggle"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="startup-category mb-4">
            <div v-if="!highlights.input">
              <div v-if="user.startupData.features === null" class="startup-content">
                <h1>Startup Highlights</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button
                  type="button"
                  class="btn btn-primary dashboard-btn px-4 fs-14"
                  @click="highlights_toggle"
                >
                  Add Information
                </button>
              </div>
              <div v-else class="startup-form">
                <div class="d-flex justify-content-between pb-3">
                  <div>
                    <h1>Company Features</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>  
                  <a class="btn startup-info-edit-btn" role="button" @click="highlights_toggle">
                    <font-awesome-icon :icon="['fas', 'pencil']"/>
                    Edit Info
                  </a>
                </div>
                <div class="row">
                  <div class="col-md-12 pb-4"></div>
                  <div class="col-md-12 pb-4">
                    <div class="startup-info-header">What is your bussiness model and pricing?</div>
                    <div class="startup-info-text-description">{{user.startupData.features.category}}</div>
                  </div>
                  <div class="col-md-12 pb-4">
                    <div class="startup-info-header">What tech stack is this product built on?</div>
                    <div class="startup-info-text-description">{{user.startupData.features.techStack}}</div>
                  </div>
                  <div class="col-md-12 pb-4">
                    <div class="startup-info-header">Who is your competitor?</div>
                    <div class="startup-info-text-description">{{user.startupData.features.competitor}}</div>
                  </div>
                  <div class="col-md-12 pb-4">
                    <div class="startup-info-header">Growth Opportunity</div>
                    <div class="startup-info-text-description">{{user.startupData.features.growthOpportunity}}</div>
                  </div>
                  <div class="col-md-12 pb-4">
                    <div class="startup-info-header">Key Assets</div>
                    <div class="startup-info-text-description">{{user.startupData.features.keyAssets}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="startup-form">
              <div class="pb-3">
                <h1>Company Features</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <form class="form-group">
                <InputField
                  v-for="query in highlights.queries"
                  :id="query.id"
                  :key="query.id"
                  v-model="query.value"
                  :type="query.type"
                  :name="query.label"
                />

                <div class="startup-form-buttons">
                  <button 
                    type="button" 
                    class="btn btn-primary dashboard-btn px-5"
                  >
                    SAVE
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary dashboard-btn px-5"
                    @click="highlights_toggle"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="startup-category mb-4">
            <div v-if="!selling.input">
              <div v-if="user.startupData.sellingDetails === null" class="startup-content">
                <h1>Why are you selling?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button
                  type="button"
                  class="btn btn-primary dashboard-btn px-4 fs-14"
                  @click="selling_toggle"
                >
                  Add Information
                </button>
              </div>
              <div v-else class="startup-form">
                <div class="d-flex justify-content-between pb-3">
                  <div>
                    <h1>Selling Details</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>  
                  <a class="btn startup-info-edit-btn" role="button" @click="selling_toggle">
                    <font-awesome-icon :icon="['fas', 'pencil']"/>
                    Edit Info
                  </a>
                </div>
                <div class="row">
                  <div class="col-md-12 pb-4"></div>
                  <div class="col-md-12 pb-4">
                    <div class="startup-info-header">Reason for Selling</div>
                    <div class="startup-info-text-description">{{user.startupData.sellingDetails.reasonForSelling}}</div>
                  </div>
                  <div class="col-md-12 pb-4">
                    <div class="startup-info-header">Financing</div>
                    <div class="startup-info-text-description">{{user.startupData.sellingDetails.financing}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="startup-form">
              <div class="pb-3">
                <h1>Selling Details</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <form class="form-group">
                <InputField
                  v-for="query in selling.queries"
                  :id="query.id"
                  :key="query.id"
                  v-model="query.value"
                  :type="query.type"
                  :name="query.label"
                />
                <div class="startup-form-buttons">
                  <button type="button" class="btn btn-light">SAVE</button>
                  <button
                    type="button"
                    class="btn btn-light"
                    @click="selling_toggle"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="startup-category mb-4">
            <div v-if="!performance.input">
              <div v-if="user.startupData.financialDetails === null" class="startup-content">
                <h1>Startup Performance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button
                  type="button"
                  class="btn btn-primary dashboard-btn px-4 fs-14"
                  @click="performance_toggle"
                >
                  Add Information
                </button>
              </div>
              <div v-else class="startup-form">
                <div class="d-flex justify-content-between pb-3">
                  <div>
                    <h1>Financial Details</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>  
                  <a class="btn startup-info-edit-btn" role="button" @click="performance_toggle">
                    <font-awesome-icon :icon="['fas', 'pencil']"/>
                    Edit Info
                  </a>
                </div>
                <div class="row">
                  <div class="col-md-12 pb-4"></div>
                  <div class="col-md-12 pb-4">
                    <div class="startup-info-header">Do you have financial summary or P&L?</div>
                    <div class="startup-info-text-description">{{user.startupData.financialDetails.financialSummaryOrPNL}}</div>
                  </div>
                  <div class="col-md-12 pb-4">
                    <div class="startup-info-header">What was total revenue last month?</div>
                    <div class="startup-info-text-description">{{user.startupData.financialDetails.lastMonth.totalRevenue}}</div>
                  </div>
                  <div class="col-md-12 pb-4">
                    <div class="startup-info-header">What was total profit last month?</div>
                    <div class="startup-info-text-description">{{user.startupData.financialDetails.lastMonth.totalProfit}}</div>
                  </div>
                  <div class="col-md-12 pb-4">
                    <div class="startup-info-header">What was total revenue over the past 12 months?</div>
                    <div class="startup-info-text-description">{{user.startupData.financialDetails.lastYear.totalRevenue}}</div>
                  </div>
                  <div class="col-md-12 pb-4">
                    <div class="startup-info-header">What was total profit over the past 12 months?</div>
                    <div class="startup-info-text-description">{{user.startupData.financialDetails.lastYear.totalProfit}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="startup-form">
              <div class="pb-3">
                <h1>Financial Details</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <form class="form-group">
                <InputField
                  v-for="query in performance.queries"
                  :id="query.id"
                  :key="query.id"
                  v-model="query.value"
                  :type="query.type"
                  :name="query.label"
                />
                <div class="startup-form-buttons">
                  <button 
                    type="button" 
                    class="btn btn-primary dashboard-btn px-5"
                  >
                    SAVE
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary dashboard-btn px-5"
                    @click="performance_toggle"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div> -->
        </div>
        <!-- <div v-show="$auth.user.roles[0].id !== 2" class="row">
          <div class="col-md-12 dashboard-header my-5">
            <div class="dashboard-header-text mb-2">Public Information</div>
            <div class="dashboard-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
          <div class="col-md-12 startup-page-startup-card row mx-0">
            <div class="row col-md-12 pr-0">
              <div class="col-md-2 d-flex justify-content-end">
                <div class="marketplace-startup-card-circle-dashboard">
                  <img src="~assets/images/Ellipse_712.png" class="img-fluid" />
                </div>
              </div>
              <div class="row col-md-10 pr-0">
                <div class="col-md-12 pr-0">
                  <div class="d-flex justify-content-between align-items-center pr-0">
                    <div class="startup-page-startup-card-title">
                      {{ startup.name }}
                      <a class="btn openToOffers ml-4" role="button">
                        Open to Offers
                      </a>
                    </div>
                    <div class="d-flex pr-0">
                      <button class="btn advisor-card-options mr-2 fs-15 text-left">
                        <font-awesome-icon :icon="['fas', 'heart']"/> Add to Favorites
                      </button>
                      <button class="btn advisor-card-options">
                        <font-awesome-icon :icon="['fas', 'eye-slash']"/> Hide this Startup
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row col-md-12">
                  <div class="col-md-12 startup-page-card-rating">
                    <client-only>
                      <star-rating
                        read-only
                        :rating="5"
                        :show-rating="false"
                        :padding="2.5"
                        :star-size="25"
                      ></star-rating>
                    </client-only>
                  </div>
                  <div class="col-md-8 col-sm-12 startup-page-card-description pb-5" v-html="startup.queryCategories[0].startup_type_queries.find(query => query.label === 'Description').query_values[0].value"></div>
                  <div v-for="category in startup.queryCategories" :key="category.id" class="row col-md-8 col-sm-12 pb-4">
                    <div v-if="category.name !== 'Public Information'" class="col-md-12 startup-page-startup-card-title mb-3">
                      {{ category.name }}
                    </div>
                    <div v-for="query in $options.filters.noDescription(category.startup_type_queries)" :key="query.id" :class="getClass(category)">
                      <div v-if="category.name === 'Public Information'" class="startup-info-header"> {{ query.label }} </div>
                      <div v-else class="startup-info-header-1"> {{ query.label }} </div>
                      <div class="startup-info-text-1"> {{ query | displayType }} </div>
                    </div>
                    <div class="col-md-12 my-4">
                      <div class="startup-border"></div>
                    </div>
                  </div>
                  <div class="row col-md-8 col-sm-12 pb-4">
                    <div class="col-md-12 startup-page-startup-card-title">
                      Buyers Reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row col-md-12 d-flex justify-content-end pt-3 pb-5">
              <div class="col-md-11 col-sm-12 startup-page-carousel">
                <VueSlickCarousel 
                  :arrows="false"
                  :dots="true"
                  :slidesPerRow="3"
                >
                  <div class="py-3 px-2">
                    <div class="d-flex justify-content-center">
                      <div class="row startup-page-card-review-card">
                        <div class="col-md-12 d-flex justify-content-center">
                          <div class="marketplace-startup-card-review-circle-dashboard">
                            <img src="~assets/images/Ellipse_712.png" class="img-fluid" />
                          </div>
                        </div>
                        <div class="row col-md-12 mt-5 pl-4 pr-1">
                          <div class="col-sm-12 startup-page-card-testimony pr-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi nulla proin eget in diam accumsan. Duis morbi consequat egestas in hendrerit sed. Egestas proin sapien, aliquet nunc, egestas.
                          </div>
                        </div>
                        <div class="row col-md-12 mt-4 mb-3 pl-4 pr-0">
                          <div class="col-sm-6">
                            <div class="startup-page-card-name">John Willis</div>
                            <div class="startup-page-card-address">Berlin, Germany</div>
                          </div>
                          <div class="col-sm-6 d-flex justify-content-end pr-0">
                            <client-only>
                              <star-rating
                                read-only
                                :rating="5"
                                :show-rating="false"
                                :padding="8"
                                :star-size="14"
                              ></star-rating>
                            </client-only>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="py-3 px-2">
                    <div class="d-flex justify-content-center">
                      <div class="row startup-page-card-review-card">
                        <div class="col-md-12 d-flex justify-content-center">
                          <div class="marketplace-startup-card-review-circle-dashboard">
                            <img src="~assets/images/Ellipse_712.png" class="img-fluid" />
                          </div>
                        </div>
                        <div class="row col-md-12 mt-5 pl-4 pr-1">
                          <div class="col-sm-12 startup-page-card-testimony pr-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi nulla proin eget in diam accumsan. Duis morbi consequat egestas in hendrerit sed. Egestas proin sapien, aliquet nunc, egestas.
                          </div>
                        </div>
                        <div class="row col-md-12 mt-4 mb-3 pl-4 pr-0">
                          <div class="col-sm-6">
                            <div class="startup-page-card-name">John Willis</div>
                            <div class="startup-page-card-address">Berlin, Germany</div>
                          </div>
                          <div class="col-sm-6 d-flex justify-content-end pr-0">
                            <client-only>
                              <star-rating
                                read-only
                                :rating="5"
                                :show-rating="false"
                                :padding="8"
                                :star-size="14"
                              ></star-rating>
                            </client-only>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="py-3 px-2">
                    <div class="d-flex justify-content-center">
                      <div class="row startup-page-card-review-card">
                        <div class="col-md-12 d-flex justify-content-center">
                          <div class="marketplace-startup-card-review-circle-dashboard">
                            <img src="~assets/images/Ellipse_712.png" class="img-fluid" />
                          </div>
                        </div>
                        <div class="row col-md-12 mt-5 pl-4 pr-1">
                          <div class="col-sm-12 startup-page-card-testimony pr-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi nulla proin eget in diam accumsan. Duis morbi consequat egestas in hendrerit sed. Egestas proin sapien, aliquet nunc, egestas.
                          </div>
                        </div>
                        <div class="row col-md-12 mt-4 mb-3 pl-4 pr-0">
                          <div class="col-sm-6">
                            <div class="startup-page-card-name">John Willis</div>
                            <div class="startup-page-card-address">Berlin, Germany</div>
                          </div>
                          <div class="col-sm-6 d-flex justify-content-end pr-0">
                            <client-only>
                              <star-rating
                                read-only
                                :rating="5"
                                :show-rating="false"
                                :padding="8"
                                :star-size="14"
                              ></star-rating>
                            </client-only>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="py-3 px-2">
                    <div class="d-flex justify-content-center">
                      <div class="row startup-page-card-review-card">
                        <div class="col-md-12 d-flex justify-content-center">
                          <div class="marketplace-startup-card-review-circle-dashboard">
                            <img src="~assets/images/Ellipse_712.png" class="img-fluid" />
                          </div>
                        </div>
                        <div class="row col-md-12 mt-5 pl-4 pr-1">
                          <div class="col-sm-12 startup-page-card-testimony pr-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi nulla proin eget in diam accumsan. Duis morbi consequat egestas in hendrerit sed. Egestas proin sapien, aliquet nunc, egestas.
                          </div>
                        </div>
                        <div class="row col-md-12 mt-4 mb-3 pl-4 pr-0">
                          <div class="col-sm-6">
                            <div class="startup-page-card-name">John Willis</div>
                            <div class="startup-page-card-address">Berlin, Germany</div>
                          </div>
                          <div class="col-sm-6 d-flex justify-content-end pr-0">
                            <client-only>
                              <star-rating
                                read-only
                                :rating="5"
                                :show-rating="false"
                                :padding="8"
                                :star-size="14"
                              ></star-rating>
                            </client-only>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="py-3 px-2">
                    <div class="d-flex justify-content-center">
                      <div class="row startup-page-card-review-card">
                        <div class="col-md-12 d-flex justify-content-center">
                          <div class="marketplace-startup-card-review-circle-dashboard">
                            <img src="~assets/images/Ellipse_712.png" class="img-fluid" />
                          </div>
                        </div>
                        <div class="row col-md-12 mt-5 pl-4 pr-1">
                          <div class="col-sm-12 startup-page-card-testimony pr-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi nulla proin eget in diam accumsan. Duis morbi consequat egestas in hendrerit sed. Egestas proin sapien, aliquet nunc, egestas.
                          </div>
                        </div>
                        <div class="row col-md-12 mt-4 mb-3 pl-4 pr-0">
                          <div class="col-sm-6">
                            <div class="startup-page-card-name">John Willis</div>
                            <div class="startup-page-card-address">Berlin, Germany</div>
                          </div>
                          <div class="col-sm-6 d-flex justify-content-end pr-0">
                            <client-only>
                              <star-rating
                                read-only
                                :rating="5"
                                :show-rating="false"
                                :padding="8"
                                :star-size="14"
                              ></star-rating>
                            </client-only>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </VueSlickCarousel>
              </div>
            </div>
            <div class="row col-md-12">
              <div class="col-md-12 d-flex justify-content-end">
                <button type="button" class="btn btn-primary dashboard-btn px-4 fs-14" @click="imInterestedFunc">Im Interested!</button>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// // optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'StartupPage',
  // components: {
  //   [process.browser && 'star-rating']: () => import('vue-star-rating'),
  //   VueSlickCarousel
  // },
  filters: {
    noDescription(queries) {
      return queries.filter((query) => query.label !== 'Description')
    },
    displayType(query) {
      if(!query.query_values[0].value) return 'Hidden'

      if(query.type === 'float') {
        return '$ ' + Number(query.query_values[0].value).toLocaleString()
      } else {
        return query.query_values[0].value
      }
    },
  },
  layout: 'auth-layout',
  middleware: 'auth',
  asyncData({ params }) {
    const startupId = params.startupId
    return { startupId }
  },
  data() {
    return {
      startup: null,
      user: {
        id: 1,
        profile: {
          id: '',
          first_name: '',
          last_name: '',
        },
        startup: {
          id: null,
          name: '',
        },
        listing: {
          startupType: null,
        },
        highlights: {},
        selling: {},
        performance: {},
        startupData: {
          listing: null,
          features: null,
          sellingDetails: null,
          financialDetails: null
        }
      },
      listing: {
        empty: true,
        input: false,
        startupTypes: [],
        queries: [],
      },
      highlights: {
        empty: true,
        input: false,
        queries: [],
      },
      selling: {
        empty: true,
        input: false,
        queries: [],
      },
      performance: {
        empty: true,
        input: false,
        queries: [],
      },
    }
  },
  mounted() {
    this.getMyListing()

    if (this.$auth.loggedIn) {
      this.user = { 
        ...this.user, 
        ...this.$auth.user,
        startupData: {
          listing: {
            openToOffers: true,
            askingPrice: "123",
            numberOfCustomers: {
              from: 10,
              to: 100,
            },
            teamSize: "123",
            annualRevenue: "232.42 M",
            dateFounded: "Mar 07",
            description: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi nulla proin eget in diam accumsan. Duis morbi consequat egestas in hendrerit sed. Egestas proin sapien, aliquet nunc, egestas.
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi nulla proin eget in diam accumsan. Duis morbi consequat egestas in hendrerit sed. Egestas proin sapien, aliquet nunc, egestas.
            `
          },
          features: {
            category: "Sass",
            techStack: "Python, Django, JavaScript, AWS",
            competitor: "Canvass, Jopwell",
            growthOpportunity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            keyAssets: "Codebase, Web application, Domain"
          },
          sellingDetails: {
            reasonForSelling: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            financing: "Raised $133, 000 in abc investment"
          },
          financialDetails: {
            financialSummaryOrPNL: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            lastMonth: {
              totalRevenue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              totalProfit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            lastYear: {
              totalRevenue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              totalProfit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          }
        }
      }
    }
    this.getUserInfo()
    this.getListing()
    this.getHighlights()
    this.getSelling()
    this.getPerformance()
  },
  methods: {
    imInterestedFunc() {
      this.$toasted.info('We will notify you once the seller accept your request.', {
        duration: 5000,
        keepOnHover: true,
        position: "bottom-right",
        theme: "bubble",
        className: ["toast-notify"],
        containerClass: ["toast-container"],
        // icon: <font-awesome-icon icon="fa-solid fa-arrow-left-long"/>,
        icon: "✔",
        action: {
          text: '⮿',
          onClick : (e, toastObject) => {
            toastObject.goAway(0);
          },
          class: ['toast-close-btn']
        },
      })
    },
    getMyListing() {
      this.$axios.get(`/api/marketplace/${this.startupId}`).then(response => {
        this.startup = {
          ...response.data.data
        }
      })
    },
    uploadImage(event) {
      if(event.target.files[0]){
        this.user.photo = {
          data: event.target.files[0],
          url: URL.createObjectURL(event.target.files[0])
        } 
      }else{
        this.user.photo = {
          data: {},
          url: null
        } 
      }
    },
    getUserInfo() {
      this.$axios
        .get('/api/profiles')
        .then((response) => {
          if (response.data.data) {
            this.user.profile = response.data.data
          }
        })
        .catch((e) => {})
    },
    getListing() {
      this.$axios
        .get('/api/startups/info')
        .then((response) => {
          this.listing.startupTypes = response.data.data.startupTypes
          this.listing.queries = response.data.data.queries.map((query) => ({
            ...query,
            value: '',
          }))
        })
        .catch((e) => {})
    },
    listing_toggle() {
      // this.listing.empty = !this.listing.empty
      this.listing.input = !this.listing.input
    },
    saveListing() {},
    getHighlights() {
      this.$axios
        .get('/api/startups/' + this.user.id + '/queries?')
        .then((response) => {
          this.user.startup = response.data.data.startup
          this.highlights.queries = response.data.data.queries.map((query) => ({
            ...query,
            value: '',
          }))
        })
        .catch((e) => {})
    },
    highlights_toggle() {
      this.highlights.empty = !this.highlights.empty
      this.highlights.input = !this.highlights.input
    },
    saveHighlights() {},
    getSelling() {
      this.$axios
        .get('/api/startups/' + this.user.id + '/queries?page=2')
        .then((response) => {
          this.selling.queries = response.data.data.queries.map((query) => ({
            ...query,
            value: '',
          }))
        })
        .catch((e) => {})
    },
    selling_toggle() {
      this.selling.empty = !this.selling.empty
      this.selling.input = !this.selling.input
    },
    saveSelling() {},
    getPerformance() {
      this.$axios
        .get('/api/startups/' + this.user.id + '/queries?page=3')
        .then((response) => {
          this.performance.queries = response.data.data.queries.map(
            (query) => ({
              ...query,
              value: '',
            })
          )
        })
        .catch((e) => {})
    },
    performance_toggle() {
      this.performance.empty = !this.performance.empty
      this.performance.input = !this.performance.input
    },
    savePerformance() {},
    getClass(category) {
      if(category.name !== 'Public Information') {
        return 'col-md-12 pb-4'
      } else {
        return 'col-md-4 pb-4'
      }
    },
  },
}
</script>

<style>
</style>