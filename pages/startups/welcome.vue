<template>
  <div class="container new-background">
    <br /><br />
    <div></div>
    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12 mb-5">
        <div class="mystartup-dashboard-block mystartup-dashboard-header mystartup-dashboard-header-left h-100 pt-5">
          <div class="d-flex flex-row justify-content-start">
            <div class="mystartup-dashboard-startup-progress">
              <div class="circular-progress">
                <radial-progress-bar 
                  :diameter="125"
                  :completed-steps="totalCompletePercentage !== 0 ? totalCompletePercentage/myStartups.startups.length : 0"
                  :total-steps="100"
                  startColor="#009DDD"
                  stopColor="#009DDD"
                  innerStrokeColor="transparent"
                >
                  <div class="progress-text">{{ totalCompletePercentage !== 0 ? `${parseInt(totalCompletePercentage/myStartups.startups.length)}%` : "0%" }}</div>
                </radial-progress-bar>
              </div>
            </div>
            <div class="mystartup-dashboard-startup-header-content">
              <div v-if="myStartups.startups.length !== 0" class="startup-status">Your listing is {{ totalCompletePercentage !== 0 ? `${parseInt(totalCompletePercentage/myStartups.startups.length)}%` : "0%" }} complete</div>
              <div v-else class="startup-status">You have no Listings yet</div>
              <div class="startup-label pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec leo libero sed aliquet cursus. vulputate risus vitae feugiat.</div>
              <button 
                v-if="totalCompletePercentage/myStartups.startups.length !== 100 && totalCompletePercentage !== 0"
                type="button" 
                class="btn btn-primary dashboard-btn px-4 fs-14" 
                @click="$router.push(localePath(`/startups/input/${lastListingId}`))"
              >
                Complete your listing <img src="~assets/images/Arrow_Right_white.svg" class="img-fluid ml-2"/> 
              </button>
              <a 
                v-else-if="totalCompletePercentage === 0"
                role="button" 
                class="btn btn-primary dashboard-btn px-4 fs-14" 
                href="#viewListing"
              >
                <div class="d-flex justify-content-center align-items-center w-100 h-100">
                  Add your Listing <img src="~assets/images/Arrow_Right_white.svg" class="img-fluid ml-2"/> 
                </div>
              </a>
              <div v-else style="height: 48px;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 mb-5">
        <div class="mystartup-dashboard-block mystartup-dashboard-header mystartup-dashboard-header-right h-100 pt-5">
          <div class="d-flex flex-row justify-content-start">
            <div>
              <div class="circle-dashboard d-flex justify-content-center align-items-center">
                <img src="~assets/images/nav-advisors-icon.svg" class="img-fluid" width="40px" /> 
              </div>
            </div>
            <div class="mystartup-dashboard-startup-header-content">
              <div class="startup-status">Find professional in selling a startup</div>
              <div class="startup-label pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec leo libero sed aliquet cursus. vulputate risus vitae feugiat.</div>
              <div class="startup-position-bottom-right">
                <button type="button" class="btn btn-outline-primary dashboard-outline-btn px-4 fs-14 d-flex align-items-center justify-content-center" @click="$router.push(localePath('/advisors'))">Find an advisor <font-awesome-icon :icon="['fas', 'arrow-right-long']" class="ml-2"/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 mb-5">
        <div class="mystartup-dashboard-block">
          <div class="dashboard-header mb-5">
            <div class="dashboard-header-text">Private Information</div>
            <div class="dashboard-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
            <!-- <a  class="btn startup-info-edit-btn" role="button" @click="togglePrivateInfo()">
              <img src="~assets/images/Edit.svg" class="img-fluid" />Edit Info</a> -->
          <div class="row">
            <div class="col-md-6 pb-4">
              <div class="startup-private-info-header">Company 
                <a class="btn startup-info-edit-btn" role="button" @click="showModalStartupName = true">
                  <img src="~assets/images/Edit.svg" class="img-fluid mr-1" /></a>
              </div>
              <div class="startup-private-info"> {{ userInfo.company }} </div>
            </div>
            <div class="col-md-6 pb-4">
              <div class="startup-private-info-header">Contact Email
                 <a class="btn startup-info-edit-btn" role="button" @click="showModalContactEmail = true">
                  <img src="~assets/images/Edit.svg" class="img-fluid mr-1" /></a>
              </div>
              <div class="startup-private-info">{{ userInfo.contact_email }}</div>
            </div>
            <div class="col-md-6 pb-4">
              <div class="startup-private-info-header">Contact Name
                  <a class="btn startup-info-edit-btn" role="button" @click="showModalContactName = true">
                    <img src="~assets/images/Edit.svg" class="img-fluid mr-1" />
                  </a>
              </div>
              <div class="startup-private-info">  
              {{ userInfo.first_name }} {{ userInfo.last_name }}
              </div>
            </div>
            <!-- <div class="col-md-6 pb-4">
              <div class="startup-private-info-header">Website 
                <a class="btn startup-info-edit-btn" role="button" @click="showModalWebsite = true">
                  <img src="~assets/images/Edit.svg" class="img-fluid mr-1" /></a>
              </div>
              <a href="#" class="startup-private-info-link"> {{ userInfo.website }} </a>
                     <a href="#" class="startup-private-info-link">www.sample.com</a>
            </div> -->
            <div class="col-md-12">
              <div class="startup-private-info-header">Files or Documents</div>
              <div class="startup-private-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam nisl eu </div>
              <label for="file-input" class="startup-upload-btn d-flex justify-content-center align-items-center cursor-pointer">
                <img v-if="user.photo" :src="user.photo.url" class="preview-img"/>
                <div v-else class="d-flex flex-column align-items-center text-center mt-2" height="52px" width="52px">
                  <img src="~assets/images/add_photo.svg" height="52px" width="52px" class="add-img mb-2"/>
                  <p class="fs-14">Upload Photo</p>
                </div>
              </label>
              <input id="file-input" type="file" class="form-control-file" accept="image/*" hidden @change="uploadImage($event)">
            </div><br>
            <div class="col-md-6 mb-4">
              <div v-if="updatedInfo.length !== 0" class="save-private-btn mb-4">
                <button type="button" class="btn btn-primary dashboard-btn" @click="saveChanges()"> Save </button>
              </div>
          </div>
          </div>
        </div>
      </div>
      <div id="viewListing" class="col-sm-12 mb-5">
        <div class="mystartup-dashboard-block">
          <div v-if="myStartups.startups.length === 0" class="dashboard-header mb-5">
            <div class="dashboard-header-text">My Listing</div>
            <div class="dashboard-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
          <div v-else class="d-flex justify-content-between mb-5">
            <div class="dashboard-header">
              <div class="dashboard-header-text">My Listing</div>
              <div class="dashboard-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <NuxtLink
              :to="localePath(`/startups/input`)"
              class="btn btn-primary marketplace-btn px-4 d-flex justify-content-center align-items-center"
            >
              <font-awesome-icon :icon="['fas', 'plus']"/> <div class="fs-16 pl-2">Add More Listing</div>
            </NuxtLink>
          </div>
          <div v-if="myStartups.startups.length === 0" class="startup-no-content mb-5">
            <h1>Your Listing is Empty</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <NuxtLink class="btn btn-primary dashboard-btn px-4 fs-14 py-2 d-flex justify-content-center align-items-center" :to="localePath('/startups/input')">
              <font-awesome-icon :icon="['fas', 'plus']"/> <div class="pl-2">Add Listing</div>
            </NuxtLink>
          </div>
          <div v-for="startup in myStartups.startups" v-else :key="startup.id" class="startup-category mb-4">
            <div class="startup-form">
              <div class="d-flex justify-content-between pb-3">
                <h1>{{startup.name}}</h1>
                <div class="d-flex align-items-center pb-3">
                  <div class="openToOffers mr-4">
                    <img src="~assets/images/Offer_money_1.svg" class="img-fluid mr-1" />
                    Open to Offers
                  </div>
                  <NuxtLink 
                    class="btn startup-info-edit-btn" 
                    :to="localePath(`/startups/input/${startup.id}`)"
                  >
                    <img src="~assets/images/Edit.svg" class="img-fluid mr-1" />
                    Edit Info
                  </NuxtLink>
                </div>
              </div>
              <div class="row pb-4">
                <div class="col-md-5">
                  <div class="startup-info-text-description">{{startup.description}}</div>
                </div>
                <div class="row col-md-7 pl-5">
                  <div class="col-xl-4 col-lg-6 col-md-12 pb-4 pb-4">
                    <div class="startup-info-header">Category</div>
                    <div class="startup-info-text">{{startup.startup_type.name}}</div>
                  </div>
                  <div v-for="details in exceptDescription(startup.startup_query_values)" :key="details.id" class="col-xl-4 col-lg-6 col-md-12 pb-4 pb-4">
                    <div class="startup-info-header">{{ details.startup_type_query.label }}</div>
                    <div v-if="details.startup_type_query.type !== 'float'" class="startup-info-text">{{ details.value | sanitize }}</div>
                    <div v-else class="startup-info-text">$ {{ details.value }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 mb-5">
        <div class="mystartup-dashboard-block">
          <div class="dashboard-header mb-5">
            <div class="dashboard-header-text">Metrics</div>
            <div class="dashboard-header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
          <div class="startup-no-content mb-5">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button type="button" class="btn btn-primary dashboard-btn px-4 fs-14 py-2 d-flex justify-content-center align-items-center">
              <font-awesome-icon :icon="['fas', 'plus']"/> <div class="pl-2">Add Metrics</div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModalContactName" class="settings-modal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <form class="form-group">
                    <div class="position-relative">
                      <label
                        for="settings_fname"
                        class="mb-2 setting-input-label"
                      >
                        First Name
                      </label>
                      <input
                        id="settings_fname"
                        v-model="newInfo.new_first_name"
                        name="settings_fname"
                        type="text"
                        class="form-control mb-3"
                        @keypress="isOnlyLetter($event)" />
                      <!-- <input
                        id="settings_fname"
                        v-model="newInfo.new_first_name"
                        name="settings_fname"
                        type="text"
                        :class="
                          errors.first_name
                            ? 'form-control mb-3 is-invalid'
                            : 'form-control mb-3'
                        "
                        required
                        @keypress="isOnlyLetter($event)"
                       
                      /> -->
                      <!-- <ErrorCard
                        v-if="errors.first_name"
                        class="error-card-position-fields"
                        :errors="errors.first_name"
                        :variant="'alert'"
                      /> -->
                      <!-- <div class="invalid-input" style="display: block">
                        {{ errors.first_name }}
                      </div> -->
                    </div>
                    <div class="position-relative">
                      <label for="settings_lname" class="mb-2 setting-input-label">
                        Last Name
                      </label>
                      <input
                        id="settings_lname"
                        v-model="newInfo.new_last_name"
                        name="settings_lname"
                        type="text"
                        class="form-control mb-3"
                        @keypress="isOnlyLetter($event)" />
                      <!-- <input
                        id="settings_lname"
                        v-model="newInfo.new_last_name"
                        name="settings_lname"
                        type="text"
                        :class="
                          errors.last_name
                            ? 'form-control mb-3 is-invalid'
                            : 'form-control mb-3'
                        "
                        required
                        @keypress="isOnlyLetter($event)"
                      /> -->
                      <!-- <div class="invalid-input" style="display: block">
                        {{ errors.last_name }}
                      </div> -->
                      <!-- <ErrorCard
                        v-if="errors.last_name"
                        class="error-card-position-fields"
                        :errors="errors.last_name"
                        :variant="'alert'"
                      /> -->
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-light border-0 dashboard-btn modal-btn"
                    @click="closeModal('name')"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn modal-btn d-flex align-items-center justify-content-center"
                    :disabled="
                      errors.last_name || errors.first_name || newInfo.new_first_name === userInfo.first_name || newInfo.new_last_name === userInfo.last_name ? true : false
                    "
                    @click="updateDataName()"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModalStartupName" class="settings-modal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <form class="form-group">
                    <div class="position-relative">
                      <label
                        for="settings_cname"
                        class="mb-2 setting-input-label"
                      >
                        Company
                      </label>
                     <input
                        id="settings_cname"
                        v-model="newInfo.new_company"
                        name="settings_cname"
                        type="text"
                        class="form-control mb-3"
                      />
                      <!-- <input
                        id="settings_cname"
                        v-model="newInfo.new_company"
                        name="settings_cname"
                        type="text"
                        :class="
                          errors.company
                            ? 'form-control mb-3 is-invalid'
                            : 'form-control mb-3'
                        "
                      /> -->
                      <!-- <ErrorCard
                        v-if="errors.company"
                        class="error-card-position-fields"
                        :errors="errors.company"
                        :variant="'alert'"
                      /> -->
                      <!-- <div class="invalid-input" style="display: block">
                        {{ errors.company }}
                      </div> -->
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-light border-0 dashboard-btn modal-btn"
                    @click="closeModal('company')"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn modal-btn d-flex align-items-center justify-content-center"
                    :disabled="
                     errors.company || newInfo.new_company === userInfo.company ? true : false
                    "
                    @click="updateCompanyName()"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModalWebsite" class="settings-modal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <form class="form-group">
                    <div class="position-relative">
                      <label
                        for="settings_website"
                        class="mb-2 setting-input-label"
                      >
                        Website
                      </label>
                      <input
                        id="settings_website"
                        v-model="newInfo.new_website"
                        name="settings_website"
                        type="text"
                        class="form-control mb-3"
                      />
                      <!-- <input
                        id="settings_website"
                        v-model="newInfo.new_website"
                        name="settings_website"
                        type="text"
                        :class="
                          errors.website
                            ? 'form-control mb-3 is-invalid'
                            : 'form-control mb-3'
                        "
                      /> -->
                      <!-- <ErrorCard
                        v-if="errors.website"
                        class="error-card-position-fields"
                        :errors="errors.website"
                        :variant="'alert'"
                      /> -->
                      <!-- <div class="invalid-input" style="display: block">
                        {{ errors.website }}
                      </div> -->
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-light border-0 dashboard-btn modal-btn"
                    @click="closeModal('website')"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn modal-btn d-flex align-items-center justify-content-center"
                    :disabled="
                     errors.website || newInfo.new_website === userInfo.website ? true : false
                    "
                    @click="updateWebsite()"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModalContactEmail" class="settings-modal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-body">
                  <form class="form-group">
                    <div class="position-relative">
                      <label
                        for="settings_cename"
                        class="mb-2 setting-input-label"
                      >
                        Contact Email
                      </label>
                      <input
                        id="settings_cename"
                        v-model="newInfo.new_contact_email"
                        name="settings_cename"
                        type="text"
                        class="form-control mb-3"
                      />
                      <!-- <input
                        id="settings_cename"
                        v-model="newInfo.new_contact_email"
                        name="settings_cename"
                        type="text"
                        :class="
                          errors.contact_email
                            ? 'form-control mb-3 is-invalid'
                            : 'form-control mb-3'
                        "
                        required
                      /> -->
                      <!-- <ErrorCard
                        v-if="errors.company"
                        class="error-card-position-fields"
                        :errors="errors.company"
                        :variant="'alert'"
                      /> -->
                      <!-- <div class="invalid-input" style="display: block">
                        {{ errors.company }}
                      </div> -->
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-light border-0 dashboard-btn modal-btn"
                    @click="closeModal('email')"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary dashboard-btn modal-btn d-flex align-items-center justify-content-center"
                    :disabled="
                     errors.email || newInfo.new_contact_email === userInfo.email ? true : false
                    "
                    @click="updateContactEmail()"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModal.welcome">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper modal-wrapper-startups">
            <div class="modal-dialog" role="document">
              <div class="modal-content modal-startups modal-startups-welcome">
                <div class="modal-body">
                  <div class="d-flex justify-content-between">
                    <div class="modal-startup-title pb-3">Welcome to Rounup</div>
                    <a role="button" @click="showModal.welcome = false">
                      <img src="~assets/images/Close_Icon.svg" class="img-fluid" />
                    </a>
                  </div>
                  <div class="modal-startup-content">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit id augue et, aliquam 
                    lacus convallis egestas turpis maecenas etiam semper himenaeos phasellus, 
                    faucibus ac tincidunt urna lacinia nam dictumst ullamcorper rhoncus.
                  </div>
                </div>
                <div class="modal-footer modal-footer-div d-flex justify-content-between align-items-center">
                  <div class="d-flex justify-content-between align-items-center">
                    <div :class="showModal.welcome ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.myStartups ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.messages ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.marketplace ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.advisor ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.resources ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary modal-startup-next-btn py-3 px-4"
                    @click="
                      showModal.welcome = false; 
                      showModal.myStartups = true;
                    "
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModal.myStartups">
      <transition name="modal">
        <div class="modal-mask-startups">
          <div class="modal-wrapper modal-wrapper-startups">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content modal-startups modal-startups-mystartup">
                <div class="modal-body">
                  <div class="d-flex justify-content-between">
                    <div class="modal-startup-title pb-3">My Startup</div>
                    <a role="button" @click="showModal.myStartups = false">
                      <img src="~assets/images/Close_Icon.svg" class="img-fluid" />
                    </a>
                  </div>
                  <div class="modal-startup-content">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit id augue et, aliquam 
                    lacus convallis egestas turpis maecenas etiam semper himenaeos phasellus, 
                    faucibus ac tincidunt urna lacinia nam dictumst ullamcorper rhoncus.
                  </div>
                </div>
                <div class="modal-footer modal-footer-div d-flex justify-content-between align-items-center">
                  <div class="d-flex justify-content-between align-items-center">
                    <div :class="showModal.welcome ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.myStartups ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.messages ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.marketplace ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.advisor ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.resources ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary modal-startup-next-btn py-3 px-4"
                    @click="
                      showModal.myStartups = false;
                      showModal.messages = true; 
                    "
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModal.messages">
      <transition name="modal">
        <div class="modal-mask-startups">
          <div class="modal-wrapper modal-wrapper-startups">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content modal-startups modal-startups-messages">
                <div class="modal-body">
                  <div class="d-flex justify-content-between">
                    <div class="modal-startup-title pb-3">Messages</div>
                    <a role="button" @click="showModal.messages = false">
                      <img src="~assets/images/Close_Icon.svg" class="img-fluid" />
                    </a>
                  </div>
                  <div class="modal-startup-content">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit id augue et, aliquam 
                    lacus convallis egestas turpis maecenas etiam semper himenaeos phasellus, 
                    faucibus ac tincidunt urna lacinia nam dictumst ullamcorper rhoncus.
                  </div>
                </div>
                <div class="modal-footer modal-footer-div d-flex justify-content-between align-items-center">
                  <div class="d-flex justify-content-between align-items-center">
                    <div :class="showModal.welcome ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.myStartups ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.messages ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.marketplace ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.advisor ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.resources ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary modal-startup-next-btn py-3 px-4"
                    @click="
                      showModal.messages = false;
                      showModal.marketplace = true; 
                    "
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModal.marketplace">
      <transition name="modal">
        <div class="modal-mask-startups">
          <div class="modal-wrapper modal-wrapper-startups">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content modal-startups modal-startups-marketplace">
                <div class="modal-body">
                  <div class="d-flex justify-content-between">
                    <div class="modal-startup-title pb-3">Marketplace</div>
                    <a role="button" @click="showModal.marketplace = false">
                      <img src="~assets/images/Close_Icon.svg" class="img-fluid" />
                    </a>
                  </div>
                  <div class="modal-startup-content">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit id augue et, aliquam 
                    lacus convallis egestas turpis maecenas etiam semper himenaeos phasellus, 
                    faucibus ac tincidunt urna lacinia nam dictumst ullamcorper rhoncus.
                  </div>
                </div>
                <div class="modal-footer modal-footer-div d-flex justify-content-between align-items-center">
                  <div class="d-flex justify-content-between align-items-center">
                    <div :class="showModal.welcome ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.myStartups ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.messages ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.marketplace ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.advisor ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.resources ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary modal-startup-next-btn py-3 px-4"
                    @click="
                      showModal.marketplace = false;
                      showModal.advisor = true; 
                    "
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModal.advisor">
      <transition name="modal">
        <div class="modal-mask-startups">
          <div class="modal-wrapper modal-wrapper-startups">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content modal-startups modal-startups-advisor">
                <div class="modal-body">
                  <div class="d-flex justify-content-between">
                    <div class="modal-startup-title pb-3">Advisor</div>
                    <a role="button" @click="showModal.advisor = false">
                      <img src="~assets/images/Close_Icon.svg" class="img-fluid" />
                    </a>
                  </div>
                  <div class="modal-startup-content">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit id augue et, aliquam 
                    lacus convallis egestas turpis maecenas etiam semper himenaeos phasellus, 
                    faucibus ac tincidunt urna lacinia nam dictumst ullamcorper rhoncus.
                  </div>
                </div>
                <div class="modal-footer modal-footer-div d-flex justify-content-between align-items-center">
                  <div class="d-flex justify-content-between align-items-center">
                    <div :class="showModal.welcome ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.myStartups ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.messages ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.marketplace ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.advisor ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.resources ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary modal-startup-next-btn py-3 px-4"
                    @click="
                      showModal.advisor = false;
                      showModal.resources = true; 
                    "
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showModal.resources">
      <transition name="modal">
        <div class="modal-mask-startups">
          <div class="modal-wrapper modal-wrapper-startups">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content modal-startups modal-startups-resources">
                <div class="modal-body">
                  <div class="d-flex justify-content-between">
                    <div class="modal-startup-title pb-3">Resources</div>
                    <a role="button" @click="showModal.resources = false">
                      <img src="~assets/images/Close_Icon.svg" class="img-fluid" />
                    </a>
                  </div>
                  <div class="modal-startup-content">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit id augue et, aliquam 
                    lacus convallis egestas turpis maecenas etiam semper himenaeos phasellus, 
                    faucibus ac tincidunt urna lacinia nam dictumst ullamcorper rhoncus.
                  </div>
                </div>
                <div class="modal-footer modal-footer-div d-flex justify-content-between align-items-center">
                  <div class="d-flex justify-content-between align-items-center">
                    <div :class="showModal.welcome ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.myStartups ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.messages ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.marketplace ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.advisor ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                    <div :class="showModal.resources ? 'modal-circle-active' : 'modal-circle-inactive'"></div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary modal-startup-next-btn py-3 px-4"
                    @click="showModal.resources = false;"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyStartupPage',
  components: {
    [process.browser && 'radial-progress-bar']: () => import('vue-radial-progress'),
  },
  filters: {
    sanitize(value) {
      if(value !== null){
        if(value.length > 100) {
          return value.substring(0, 100)+'...'
        } else {
          return value
        }
      }else{
        return value
      }
    }
  },
  layout: 'auth-layout',
  middleware: ['auth','seller'],
  data() {
    return {
      updatedInfo: [],
      showModalContactName: false,
      showModalStartupName: false,
      showModalContactEmail: false,
      showModalWebsite: false,
      showModal: {
        welcome: false,
        myStartups: false,
        messages: false,
        marketplace: false,
        advisor: false,
        resources: false
      },
      totalCompletePercentage: 0,
      lastListingId: null,
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
        photo: {
          data: {},
          url: null
        },
      },
      myStartups: {
        startups: [],
        page: 1,
        hasNextPage: true,
      },
      userInfo: {},
      newInfo: {
        new_company: null,
        new_contact_email: null,
        new_website: null,
        new_first_name: null,
        new_last_name: null,
      },
      errors: {
        email: null,
        first_name: null,
        last_name: null,
        company: null,
        website: null,
      },
    }
  },
  mounted() {
    const newUser = localStorage.getItem('newUser')
    if(newUser === "true"){
      this.showModal.welcome = true;
    }
    localStorage.removeItem("newUser")
    if (this.$auth.loggedIn) {
      this.user = { 
        ...this.user, 
        ...this.$auth.user, 
        photo: {
          data: {},
          url: null
        }
      }
    }
    this.getUserInfo()
    this.getStartups()
  },
  methods: {
    isOnlyLetter(e) {
      const char = String.fromCharCode(e.keyCode); // Get the character
      if(/^[A-Za-z]+$/.test(char)) return true; // Match with regex 
      else e.preventDefault(); // If not match, don't add to input text
    },
    getStartups() {
      this.$axios
        .get(`/api/marketplace/mystartups`)
        .then((response) => {
          this.myStartups.startups = response.data.data;
          this.getStartupInfo(response.data.data);
          if(!response.data.next_page_url) {
            this.myStartups.hasNextPage = false
            this.myStartups.page = 1
          } else {
            this.myStartups.page++
          }
        })
        .catch((e) => {})
    },
    getStartupInfo(data) {
      data.forEach(element => {
        this.$axios.get(`/api/marketplace/${element.id}`).then(response => {
          let currentPercentage = 20;
          response.data.data.queryCategories.forEach(categories => {
            let error1 = false;
            if(categories.name === 'Public Information'){
              for(let x = 0; x < categories.startup_type_queries.length; x++){
                if(categories.startup_type_queries[x].query_values[0].value === null){
                  error1 = true;
                  // break;
                }else{
                  currentPercentage += 20 / categories.startup_type_queries.length
                }
              }
            }else if(categories.name === 'Company Features'){
              for(let x = 0; x < categories.startup_type_queries.length; x++){
                if(categories.startup_type_queries[x].query_values[0].value === null){
                  error1 = true;
                  // break;
                }else{
                  currentPercentage += 30 / categories.startup_type_queries.length
                }
              }
            }else if(categories.name === 'Selling Details'){
              for(let x = 0; x < categories.startup_type_queries.length; x++){
                if(categories.startup_type_queries[x].query_values[0].value === null){
                  error1 = true;
                  // break;
                }else{
                  currentPercentage += 10 / categories.startup_type_queries.length
                }
              }
            }else if(categories.name === 'Financial Details'){
              for(let x = 0; x < categories.startup_type_queries.length; x++){
                if(categories.startup_type_queries[x].query_values[0].value === null){
                  error1 = true;
                  // break;
                }else{
                  currentPercentage += 20 / categories.startup_type_queries.length
                }
              }
            }
            if(error1){
              if(this.lastListingId === null){
                this.lastListingId = response.data.data.id;
              }
            }
          })
          this.totalCompletePercentage += parseInt(currentPercentage);
        })
      });
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
    fetchUser() {
      this.$axios.get('/api/profiles').then((response) => {
        this.userInfo = response.data.data
        this.newInfo = {
          new_company: response.data.data.company,
          new_contact_email: response.data.data.contact_email,
          new_first_name: response.data.data.first_name,
          new_last_name: response.data.data.last_name,
          new_website: response.data.data.website,
        }
        // eslint-disable-next-line no-console
        console.log(response.data.data)
        this.loading = false;
      })
    },
    saveChanges() {
      const formData = {}
      this.updatedInfo.forEach((data) => {
        formData[data.name] = data.value
      })
      this.$axios
        .post(`/api/profiles`, formData)
        .then((response) => {
          this.userInfo = response.data.data
          this.newInfo = {
            new_company: response.data.data.company,
            new_contact_email: response.data.data.contact_email,
            new_first_name: response.data.data.first_name,
            new_last_name: response.data.data.last_name,
            new_website: response.data.data.website,
          }
          this.updatedInfo = []
          // this.$toast.success(response.data.message)
          this.toastMessage= response.data.message
          this.$bvToast.show('custom-toast')
        })
        .catch(({ response }) => {
          const errors = response.data.errors
          Object.keys(errors).forEach((key) => {
            this.$toast.error(errors[key][0])
          })
          // console.log(response)
          // this.$toast.error(response.data)
        })
    },
    closeModal(type) {
      if (type === 'email') {
        this.newInfo.new_contact_email = this.userInfo.contact_email
        this.errors.email = null
        this.showModalContactEmail = false
      } else if (type === 'name') {
        this.newInfo.new_first_name = this.userInfo.first_name
        this.newInfo.new_last_name = this.userInfo.last_name
        this.errors.first_name = null
        this.errors.last_name = null
        this.showModalContactName = false
      } else if (type === 'company') {
        this.newInfo.new_company = this.userInfo.company
        this.errors.company = null
        this.showModalStartupName = false
      } else if (type === 'website') {
        this.newInfo.new_website = this.userInfo.website
        this.errors.website = null
        this.showModalWebsite = false
      }
    },
    updateCompanyName(){
      const dataList = []
      const currentList = this.updatedInfo
      if (this.newInfo.new_company !== this.userInfo.company) {
        const objIndex = currentList.findIndex(
          (obj) => obj.name === 'company'
        )
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'company',
            value: this.newInfo.new_company,
          }
        } else {
          dataList.push({
            name: 'company',
            value: this.newInfo.new_company,
          })
        }
        this.userInfo.company = this.newInfo.new_company
      }
      this.updatedInfo = [...dataList, ...currentList]
      this.showModalStartupName = false
    },
    updateWebsite(){
      const dataList = []
      const currentList = this.updatedInfo
      if (this.newInfo.new_website !== this.userInfo.website) {
        const objIndex = currentList.findIndex(
          (obj) => obj.name === 'website'
        )
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'website',
            value: this.newInfo.new_website,
          }
        } else {
          dataList.push({
            name: 'website',
            value: this.newInfo.new_website,
          })
        }
        this.userInfo.website = this.newInfo.new_website
      }
      this.updatedInfo = [...dataList, ...currentList]
      this.showModalWebsite = false
    },
    updateContactEmail(){
      const dataList = []
      const currentList = this.updatedInfo
      if (this.newInfo.new_contact_email !== this.userInfo.contact_email) {
        const objIndex = currentList.findIndex(
          (obj) => obj.name === 'contact_email'
        )
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'contact_email',
            value: this.newInfo.new_contact_email,
          }
        } else {
          dataList.push({
            name: 'contact_email',
            value: this.newInfo.new_contact_email,
          })
        }
        this.userInfo.contact_email = this.newInfo.new_contact_email
      }
      this.updatedInfo = [...dataList, ...currentList]
      this.showModalContactEmail = false
    },
    updateDataName() {
      const dataList = []
      const currentList = this.updatedInfo
      if (this.newInfo.new_first_name !== this.userInfo.first_name) {
        const objIndex = currentList.findIndex(
          (obj) => obj.name === 'first_name'
        )
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'first_name',
            value: this.newInfo.new_first_name,
          }
        } else {
          dataList.push({
            name: 'first_name',
            value: this.newInfo.new_first_name,
          })
        }
        this.userInfo.first_name = this.newInfo.new_first_name
      }
      if (this.newInfo.new_last_name !== this.userInfo.last_name) {
        const objIndex = currentList.findIndex(
          (obj) => obj.name === 'last_name'
        )
        if (objIndex !== -1) {
          currentList[objIndex] = {
            name: 'last_name',
            value: this.newInfo.new_last_name,
          }
        } else {
          dataList.push({
            name: 'last_name',
            value: this.newInfo.new_last_name,
          })
        }
        this.userInfo.last_name = this.newInfo.new_last_name
      }
      this.updatedInfo = [...dataList, ...currentList]
      this.showModalContactName = false
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
    exceptDescription(details) {
      return details.filter(detail => {
        return detail.startup_type_query.label !== 'Description'
      });
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/css/vars.scss';
.progress-text {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #009DDD;
}

.modal-startups {
  background: #ffffff;
  box-shadow: 0px 20px 60px rgba(2, 131, 233, 0.1);
  border-radius: 15px;
  padding: 10px;
  margin-top: 70px;
}

.modal-startups-welcome {
  margin-top: 85px !important;
}

.modal-startups-mystartup {
  position: absolute;
  left: -400px
}

.modal-startups-messages {
  position: absolute;
  left: -245px
}

.modal-startups-marketplace {
  position: absolute;
  left: -105px
}

.modal-startups-advisor {
  position: absolute;
  left: 60px
}

.modal-startups-resources {
  position: absolute;
  left: 190px
}

.modal-startup-title {
  padding-top: 5px;
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 750;
  font-size: 32px;
  line-height: 38px;
  color: #009DDD;
}

.modal-startup-content {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  @include scalefont(14) ;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: rgba(27, 43, 65, 0.72);
}

.modal-startup-next-btn {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 19px !important;
  color: #FFFFFF;
}

.modal-footer-div {
  border-top: none !important;
  padding-right: 1.75rem;
  padding-left: 1.75rem;
}

.modal-circle-active {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #009DDD;
  margin-right: 8px;
}

.modal-circle-inactive {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(101, 150, 187, 0.28);
  margin-right: 8px;
}

.modal-mask-startups {
  position: fixed;
  /* z-index: 9998; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #F0FBFF 0%, rgba(240, 251, 255, 0.6) 92.51%, rgba(240, 251, 255, 0) 100%);
  display: table;
  transition: opacity 0.5s ease;
}

.modal-wrapper-startups {
  vertical-align: unset !important;
}
</style>
