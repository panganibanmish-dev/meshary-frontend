<template>
  <div
    class="messages-container-gradient"
  >
    <ToastCard
      :toastMessage="toastMessage"
    />
    <div
      class="container pb-4"
    >
      <br /><br />
      <br /><br />
      <div
        class="message-nav-links mb-4 pl-3"
      >
        <div
          v-show="!selectedRequest"
          class="row mt-3 d-flex justify-content-start"
        >
          <div
            v-show="$store.state.role.selectedRole !== 'Seller'"
            class="col-6 mb-4"
          >
            <a
              class="
                nav-link
                messages-nav-link
                text-center
                fs-16
                font-weight-bold
                ml-3
                cursor-pointer
              "
              :class="role == 'seller' ? 'border-bottom-active' : ''"
              @click="handleRoleTab('Seller')"
            >
              Seller
            </a>
          </div>
          <div
            v-show="$store.state.role.selectedRole != 'Buyer'"
            class="col-6 mb-4"
          >
            <a
              class="
                nav-link
                messages-nav-link
                text-center
                fs-16
                font-weight-bold
                m-0
                cursor-pointer
              "
              :class="role == 'buyer' ? 'border-bottom-active' : ''"
              @click="handleRoleTab('Buyer')"
            >
              Buyer
            </a>
          </div>
          <div
            v-show="$store.state.role.selectedRole != 'Advisor'"
            class="col-6 mb-4"
          >
            <a
              class="
                nav-link
                messages-nav-link
                text-center
                fs-16
                font-weight-bold
                m-0
                cursor-pointer
              "
              :class="role == 'advisor' ? 'border-bottom-active' : ''"
          
              @click="handleRoleTab('Advisor')"
            >
              Advisor
            </a>
          </div>
        </div>
      </div>
      <div
        class="container-fluid"
      
      >
        <MessageTabs v-if="!selectedRequest" @applySort="applySort" />
        <B-button
          v-else
          variant="light"
          class="rounded-circle p-0"
          style="
            background: #ffffff;
            border: 1px solid #d8d8d8;
            box-sizing: border-box;
            height: 50px;
            width: 50px;
          "
          @click="selectedRequest = !selectedRequest"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#009DDD"
            class="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </B-button>
      </div>
      <br />
      <div
        class="card messages container-fluid p-3"
        :class="selectedRequest ? 'p-md-3' : 'p-md-5'"
      >
        <div class="row">
          <div
            v-show="!selectedRequest"
            class="col-12 mb-4"
         
          >
            <div class="row">
              <div
                class="col-md-6 col-lg-7"
              >
                <h1
                  class="header-text"
                >
                  Messages
                </h1>
                <p
                  class="paragraph-text"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div
                class="col-sm-6 col-lg-5 d-flex"
         
              >
                <B-button
                  ref="messagesButton"
                  :class="
                    (!pendingRequest ? `active ` : '') +
                    `message-list-tab-btn
                    ml-auto
                    bg-transparent
                    shadow-none
                    outline-0
                    d-flex
                    align-items-center`
                  "
                  variant="light"
                  @click="fetchMessageRequests"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#009DDD"
                    class="bi bi-envelope-fill outline-0 mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                    />
                  </svg>
                  Messages
                  <!-- {{messageRequests ?`(${messageRequests.length})` : ""}} -->
                </B-button>
                <B-button
                  ref="requestsButton"
                  :class="
                    (pendingRequest ? `active ` : '') +
                    `message-list-tab-btn
                    bg-transparent
                    shadow-none
                    outline-0
                    d-flex
                    align-items-center`
                  "
                  variant="light"
                  @click="fetchPendingRequests"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#009DDD"
                    class="bi bi-chat-dots-fill outline-0 mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                    />
                  </svg>
                  Requests
                  <!-- {{messageRequests.messages ?`(${messageRequests.messages.length})` : "(0)"}} -->
                </B-button>
              </div>
            </div>
          </div>
        </div>

        <div class="row clearfix">
          <div class="col-lg-12">
            <div class="chat-app">
              <div id="plist" class="people-list bg-white px-0 w-100">
                <!-- card shows when there are no messages -->
                <b-card v-if="messageRequests.length == 0" class="no-message text-center mx-auto mb-5">
                  <b-card-text class="no-message-header">You don't have any message yet</b-card-text>
                  <b-card-text class="no-message-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
                </b-card>
                <ul class="list-unstyled chat-list mt-0 mb-0">
                  <li v-for="request in messageRequests" :key="request.id" class="clearfix">
                    <div
                      v-if="!selectedRequest"
                      class="about w-100"
     
                      @click="selectRequest(request)"
                    >
                      <!-- && request.recipient.active_role ===
                          $store.state.messages.selectedRoleTab -->
                      <!-- {{request}} -->
                      <div class="row d-flex align-items-center">
                        <div class="col-3 col-lg-3">
                          <div class="row">
                            <div
                              class="col-2 align-self-center">
                              <img
                                class="message-avatar mr-2"
                                src="~assets/images/icon-profile.jpg"
                                alt="avatar"/>
                            </div>
                            <div
                              class="col-10 name"
                           
                            >
                              <div
                                class="mb-0"
                                style="@include scalefont(14); font-weight: 400"
                         
                              >
                                {{ request.recipient.profile.first_name }}
                                {{ request.recipient.profile.last_name }}
                                <br />
                                <span class="text-left fs-14 text-light">
                                  <!-- {{
                                  request.recipient.roles[0].name
                                }} -->
                                  {{ request.recipient.active_role }}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex flex-column align-self-center">
                          <div
                            class="message-request-message"
                   
                          >
                            {{
                              request.messages.length
                                ? truncateText(
                                    request.messages[
                                      request.messages.length - 1
                                    ].message,
                                    64
                                  )
                                : 'No Messages Yet'
                            }}
                          </div>
                          <div
                            class="message-head-timestamp"
         
                          >
                            {{
                              request.messages.length
                                ? $moment(
                                    request.messages[
                                      request.messages.length - 1
                                    ].created_at
                                  ).fromNow()
                                : ''
                            }}
                          </div>
                        </div>
                        <div
                          v-if="
                            !request.active &&
                            $store.state.role.selectedRole === 'Seller'
                          "
                        
                          class="
                            col-4 col-lg-4
                            d-flex
                            justify-content-end
                            ml-auto
                          "
                        >
                          <B-button
                            class="confirm-button mx-2 font-weight-bold"
                            variant="primary"
                            pill
                           
                            @click="acceptRequest(request)"
                          >
                            Accept
                          </B-button>
                          <B-button
                            class="confirm-button mx-2 font-weight-bold"
                            variant="outline-primary"
                            pill
                      
                            @click="declineRequest(request)"
                          >
                            Decline
                          </B-button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                v-if="selectedRequest"
                id="chat-history-head"
                class="chat chat-list"
              >
                <!-- chat header -->
                <div class="chat-head-about w-100">
                  <div class="row align-items-center">
                    <div class="col-3 col-lg-3">
                      <b-row class="mt-4">
                        <b-col md="2">
                          <img
                            class="message-avatar mr-2"
                            src="~assets/images/icon-profile.jpg"
                            alt="avatar"
                          />
                        </b-col>
                        <b-col md="10">
                          <div class="name mb-2">
                            <!-- {{ selectedRequest.recipient}} -->
                            <p
                              class="font-weight-bold mb-0"
               
                            >
                              {{ selectedRequest.recipient.profile.first_name }}
                              {{ selectedRequest.recipient.profile.last_name }}

                              <span
                    
                                class="role text-center py-1 px-3 ml-2"
                              >
                                {{ selectedRequest.recipient.active_role }}
                              </span>
                            </p>
                          </div>
                          <div class="status d-flex">
                            <img
                              class="mr-2"
                              src="~assets/images/online-indicator.svg"
                              alt="avatar"
                              height="16px"
                              width="16px"
                            />
                            {{ 'Online' }}
                          </div>
                        </b-col>
                      </b-row>
                    </div>
                    <div class="col-5 col-lg-5"></div>
                  </div>
                </div>
                <!---chat history -->
                <div ref="chathistory" class="chat-history pb-0">
                  <ul class="m-b-0">
                    <li
                      v-for="message in selectedRequest.messages"
                      :key="message.id"
                      class="d-flex flex-row flex-column"
                    
                      :class="`justify-content-${
                        $auth.user.id === message.user_id ? 'end' : 'start'
                      }`"
                    >
                      <div
                
                        :class="`message other-message ${
                          $auth.user.id === message.user_id
                            ? 'ml-auto'
                            : 'recpient-message mr-auto'
                        }`"
                      >
                        {{ message.message }}
                      </div>
                      <div class="message-data">
                        <small
                          :class="`text-right float-${
                            $auth.user.id === message.user_id ? 'right' : 'left'
                          }`"

                        >
                          {{ $moment(message.created_at).fromNow() }}
                          <!-- {{ message.created_at }} -->
                        </small>
                      </div>
                    </li>
                    <li class="clearfix"></li>
                  </ul>
                </div>
                <div class="chat-message clearfix">
                  <NotifierCard
                    v-if="
                      !selectedRequest.active &&
                      requestorId === $auth.user.profile.id
                    "
                    :message="`Please wait for the ${selectedRequest.recipient.active_role} to accept your
                    message request.`"
                  />
                  <!-- ${selectedRequest.recipient.roles[0].name} -->
                  <!-- {{$store.state.role.selectedRole}} -->

                  <b-input-group
                    v-else
                    class="write-message-input-group p-2"
                    :class="!selectedRequest.active ? 'disabled' : 'active'"
                   
                    style=""
                    @keyup.enter="sendMessage"
                  >
                    <b-form-input
                      v-model="newMessage"
                 
                      class="border-0 bg-transparent shadow-none m-auto"
                      type="text"
                      placeholder="Type a message..."
                      :disabled="!selectedRequest.active"
                      style="
                        font-weight: 400;
                        @include scalefont(18);
                        line-height: 22px;
                        color: rgba(39, 45, 78, 0.6);
                      "
                    ></b-form-input>

                    <b-input-group-append @keyup.enter="sendMessage">
                      <B-button
                        class="border-0"
                        :disabled="!selectedRequest.active"
          
                        style="
                          background: #009ddd;
                          border-radius: 40px;
                          height: 60px;
                          width: 135.6px;
                        "
                        variant="primary"
                        @click="sendMessage"
                        >Send</B-button
                      >
                    </b-input-group-append>
                  </b-input-group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Pusher from 'pusher-js'
import NotifierCard from '../../components/NotifierCard.vue'
import ToastCard from '../../components/ToastCard.vue'
export default {
  name: 'MessageRequestPage',
  layout: 'auth-layout',
  middleware: ['auth'],
  componnents: {
    NotifierCard,
    ToastCard,
  },
  asyncData({ params }) {
    const role = params.role
    return { role }
  },
  data() {
    return {
      newMessage: '',
      messageRequests: [],
      selectedRequest: null,
      messages: [],
      searchUser: '',
      pendingRequest: false,
      toastMessage: '',
      filter: {
        sortNewest: true,
      },
      requestorId: '',
      roleTab: this.$store.state.messages.selectedRoleTab,
    }
  },
  created() {},
  mounted() {
    this.fetchMessageRequests()
    const app = this
    const chathistory = document.getElementsByClassName('chat-history')
    const channel = this.$echo.channel('chat-channel.' + this.$auth.user.id)
    channel.listen('.message', (response) => {
      app.pushMessage(response.message)
    })
    chathistory.scrollTop = chathistory.scrollHeight
    if (this.$store.state.messages.selectedTab === 'messages') {
      // this.$refs.messagesButton?.click()
      this.fetchMessageRequests()
      console.log('messages')
    } else if (this.$store.state.messages.selectedTab === 'requests') {
      // this.$refs.requestsButton?.click()
      this.fetchPendingRequests()
      console.log('requests')
    } else {
      this.$refs.messagesButton?.click()
      this.fetchMessageRequests()
      console.log('messages')
    }

    if (this.$store.state.messages.selectedRoleTab === 'Seller') {
      if (this.$store.state.role.selectedRole === 'Seller') {
        this.handleRoleTab('Buyer')
      } else {
        this.handleRoleTab('Seller')
      }
    } else if (this.$store.state.messages.selectedRoleTab === 'Buyer') {
      if (this.$store.state.role.selectedRole === 'Buyer') {
        this.handleRoleTab('Seller')
      } else {
        this.handleRoleTab('Buyer')
      }
    } else if (this.$store.state.messages.selectedRoleTab === 'Advisor') {
      this.handleRoleTab('Advisor')
    } else {
      this.handleRoleTab('Seller')
    }
  },
  methods: {
    async acceptRequest(request) {
      const response = await this.$axios.post(
        `/api/messages/${request.id}/accept`
      )
      this.fetchMessageRequests()
      // this.$toast.success(response.data.message)
      this.toastMessage = response.data.message
      this.$bvToast.show('custom-toast')
    },
    async fetchRequests(endpoint) {
      try {
        const response = await this.$axios.get(endpoint)
        this.messageRequests = response.data.data.map((request) => {
          const recipient = request.users.find(
            (user) => this.$auth.user.id !== user.id
          )
          return {
            ...request,
            recipient,
          }
        })
      } catch (e) {
        // alert(e)
        this.toastMessage = e
        this.$bvToast.show('custom-toast')
      }
    },
    async fetchMessageRequests() {
      await this.fetchRequests(
        `/api/messages/${this.role}?filters[sort]=${
          this.filter.sortNewest ? 'desc' : 'asc'
        }`
      )
      this.pendingRequest = false
    },

    async fetchPendingRequests() {
      this.selectedRequest = null

      // if (this.pendingRequest) {
      //   this.pendingRequest = !this.pendingRequest
      // }
      this.pendingRequest = true
      if (this.pendingRequest) {
        await this.fetchRequests(
          `/api/messages/inactive/${this.role}?filters[sort]=${
            this.filter.sortNewest ? 'desc' : 'asc'
          }`
        )
        this.pendingRequest = true
      } else {
        await this.fetchMessageRequests()
        this.pendingRequest = false
      }
    },
    declineRequest(request) {
      this.$axios
        .post(`/api/messages/${request.id}/decline`)
        .then((response) => {
          this.toastMessage = response.data.message
          this.toastMessage = 'Message request was declined'
        })
      this.toastMessage = 'Message request was declined'
      this.$bvToast.show('custom-toast')
      this.$router.push(this.localePath('/messages'))
    },
    async selectRequest(request) {
      this.newMessage = ''
      this.requestorId = request.users[0].id
      const response = await this.$axios.get(`/api/messages/${request.id}`)
      const recipient = response.data.data.users.find(
        (user) => this.$auth.user.id !== user.id
      )
      this.selectedRequest = {
        ...response.data.data,
        recipient,
      }
    },
    async sendMessage() {
      try {
        await this.$axios.post(
          `/api/messages/${this.selectedRequest.id}/post`,
          {
            message: this.newMessage,
            ...(this.newMessage = ''),
          }
        )
      } catch ($e) {
        console.log($e)
      }
    },
    pushMessage(message) {
      this.selectedRequest.messages.push(message)
    },
    applySort(value) {
      this.filter.sortNewest = value
      if (this.pendingRequest) {
        this.fetchPendingRequests()
      } else {
        this.fetchMessageRequests()
      }
    },
    /* eslint-disable object-shorthand */
    truncateText: function (text, length) {
      if (text.length > length) {
        return text.substring(0, length) + '...'
      } else {
        return text
      }
    },
    handleRoleTab(role) {
      // console.log(role)
      const r = role.toLowerCase()
      this.$router.push(this.localePath(`/messages/${r}`))
      this.$store.commit('messages/selectRoleTab', role)
      console.log(this.$store.state.messages.selectedRoleTab)
    },
  },
}
</script>
<style lang="scss">
@import '../../assets/css/vars.scss';
.navbar {
  min-height: 90px;
  background-color: #fff;
  padding: 0;
}

.messages-container-gradient {
  background: rgb(230, 244, 241);
  background: linear-gradient(
    180deg,
    rgba(230, 244, 241, 1) 0%,
    rgba(255, 255, 255, 1) 12.5%
  );
}
.option-tab {
  height: 52px;
  width: 167px;
  display: flex;
  justify-content: right !important;
  align-items: right !important;
  background-color: #ffffff;
  color: black;
}
body {
  background-color: #fefefe !important;
  font-family: Avenir LT Std;
  margin-top: 20px;
  color: #272d4e;
}
.header-text {
  font-weight: 750;
  @include scalefont(22);
}
.paragraph-text {
  font-weight: 400;
  @include scalefont(14);
}
.card {
  height: fit-content;
  background: #fff;
  transition: 0.5s;
  border: 0;
  margin-bottom: 30px;
  border-radius: 8px;
  position: relative;
  width: 100%;
  box-shadow: -2px 4px 45px rgba(0, 0, 0, 0.05);
}
.card.messages {
  background: #fff;
  max-width: 98%;
  min-height: 60vh;
  box-shadow: -2px 4px 45px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.chat-app .people-list {
  width: 280px;
  /* height: 350px; */
  position: absolute;
  left: 0;
  top: 0;
  // padding: 20px;
  z-index: 7;
}
// .chat-app .chat {
//   /* margin-left: 280px; */
//   /* border-left: 1px solid #eaeaea; */
// }

.people-list {
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.people-list .chat-list li {
  list-style: none;
  /* border: 1px solid #d8d8d8;
  box-sizing: border-box;
  border-radius: 4px 4px 0px 0px; */
}

.people-list .chat-list li .about {
  padding: 15px 15px;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  border-radius: 4px 4px 0px 0px;
}

.people-list .chat-list li:hover .about {
  cursor: pointer;
}

.chat .chat-list li .chat-head-about,
.chat .chat-head-about {
  padding: 20px 25px;
  background: transparent;
  cursor: default;
  border-bottom: 1px solid #f5f5f5;
}

.people-list .chat-list li.active {
  background: #efefef;
}

.people-list .chat-list li .name,
#chat-history-head .name {
  @include scalefont(15);
  @include scalelineheight(22);
}

.people-list .chat-list li .name .role,
#chat-history-head .role {
  font-weight: 600;
  @include scalefont(14);
  color: rgba(39, 45, 78, 0.6);
  background: #f0fbff;
  border-radius: 40px;
  min-width: 93px;
  scroll-behavior: smooth;
}

.people-list .chat-list .message-avatar,
.chat .message-avatar {
  // width: 45px;
  @include scalewidth(45);
  border-radius: 50%;
}

.people-list img {
  float: left;
  border-radius: 50%;
}

.people-list .about {
  float: left;
  padding-left: 8px;
}

.people-list .status,
.message-head-timestamp {
  color: rgba(39, 45, 78, 0.6);
  @include scalefont(13);
}

.chat .chat-header {
  padding: 15px 20px;
  border-bottom: 2px solid #c2eff5;
}

.chat .chat-header img {
  float: left;
  border-radius: 40px;
  width: 40px;
}

.chat .chat-header .chat-about {
  float: left;
  padding-left: 10px;
}

.chat .chat-history {
  max-height: 55vh;
  overflow-y: auto;
  padding: 25px;
  border-bottom: 2px solid #fff;
}

.chat .chat-history ul {
  padding: 0;
}

.chat .chat-history ul li {
  text-align: left;
  list-style: none;
  word-break: break-all;
  /* margin-bottom: 10px; */
}

.chat .chat-history ul li:last-child {
  margin-bottom: 0px;
}

.chat .chat-history .message-data {
  margin-bottom: 15px;
}

.chat .chat-history .message-data {
  color: #8e8ea1;
}

.chat .chat-history .message-data img {
  border-radius: 40px;
  width: 40px;
}

.chat .chat-history .message-data-time {
  color: #434651;
  padding-left: 6px;
}

.chat .chat-history .message {
  color: #444;
  padding: 18px 20px;
  font-weight: 400;
  @include scalefont(18);
  @include scalelineheight(26);
  border-radius: 7px;
  display: inline-block;
  position: relative;
}

/* .chat .chat-history .message:after {
  bottom: 100%;
  left: 7%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #fff;
  border-width: 10px;
  margin-left: -10px;
} */

.chat .chat-history .my-message {
  background: #009ddd;
}

/* .chat .chat-history .my-message:after {
  bottom: 100%;
  left: 30px;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #efefef;
  border-width: 10px;
  margin-left: -10px;
} */

.chat .chat-history .other-message {
  text-align: justify;
  background: #009ddd;
  text-align: right;
  color: #fff;
  border-radius: 20px 20px 20px 20px;
}

.chat .chat-history .recpient-message {
  text-align: justify;
  color: #272d4e;
  background: #f5f5f5;
}

.chat .chat-history ul li:nth-last-child(2) .other-message {
  border-radius: 20px 20px 0 20px;
}

.chat .chat-history ul li:nth-last-child(2) .recpient-message {
  border-radius: 20px 20px 20px 0;
}

/* .chat .chat-history .other-message:after {
  border-bottom-color: #e8f1f3;
  left: 93%;
}  */

.chat .chat-message {
  padding: 20px;
}

.online,
.offline,
.me {
  margin-right: 2px;
  font-size: 8px;
  vertical-align: middle;
}

.online {
  color: #86c541;
  fill: #86c541;
}

.offline {
  color: #e47297;
  fill: #e47297;
}

.me {
  color: #1d8ecd;
}

.float-right {
  float: right;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: ' ';
  clear: both;
  height: 0;
}

.no-message-header {
  font-weight: 750;
  @include scalefont(24);
  color: #272d4e;
}

.no-message-body {
  font-weight: 350;
  @include scalefont(14);
  color: #272d4e;
}

.card.no-message {
  align-content: center;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  border-radius: 7px;
  min-height: 330px;
  max-width: 98%;
}

.card.no-message .card-body {
  flex-flow: column;
  display: flex;
  justify-content: center;
}

.message-nav-links {
  width: fit-content;
}

.messages-nav-link {
  max-width: 100%;
}

.border-bottom-active {
  border-bottom: 3px solid #009ddd;
}

.confirm-button {
  width: 106px;
  // height: 48px;
  @include scaleheight(48);
  @include scalefont(14);
}

.confirm-button.btn-primary {
  background-color: #009ddd;
  border-color: #009ddd;
}

.confirm-button.btn-outline-primary {
  color: #009ddd;
  background-color: transparent;
  border-color: #009ddd;
}

.confirm-button.btn-outline-primary:hover {
  color: #009ddd;
}

#chat-history-head {
  .write-message-input-group {
    box-sizing: border-box;
    border-radius: 40px;
    height: 80px;
    // @include scaleheight(80);
    &.active {
      border: 2px solid #009ddd;
      .input-group-append {
        .btn {
          background: #009ddd;
        }
      }
    }
    &.disabled {
      border: 2px solid #d3d3d3;
      .input-group-append {
        .btn {
          background: #d3d3d3;
        }
      }
    }
  }
}

.message-list-tab-btn {
  font-weight: 750;
  // font-size: 16px;
  @include scalefont(16);
  color: #009ddd;
  svg {
    @include scalewidth(24);
    @include scaleheight(24);
  }
}
.message-request-message {
  @include scalefont(14);
  font-weight: 400;
}
.message-head-dots svg {
  @include scaleheight(16);
  @include scalewidth(16);
}

.notifier-position {
  top: -2rem;
}

@media only screen and (min-width: 1900px) {
  .chat-app .people-list {
    height: 465px;
    width: 100%;
    overflow-x: auto;
    background: #fff;
    left: -400px;
    display: none;
  }
  .chat-app .people-list.open {
    left: 0;
  }
  .chat-app .chat {
    margin: 0;
  }
  .chat-app .chat .chat-header {
    border-radius: 0.55rem 0.55rem 0 0;
  }
  .chat-app .chat-history {
    height: 300px;
    overflow-x: auto;
  }
}

// @media only screen and (max-width: 769px) {
//   .chat-app .people-list {
//     height: 465px;
//     width: 100%;
//     overflow-x: auto;
//     background: #fff;
//     left: -400px;
//     display: none;
//   }
//   .chat-app .people-list.open {
//     left: 0;
//   }
//   .chat-app .chat {
//     margin: 0;
//   }
//   .chat-app .chat .chat-header {
//     border-radius: 0.55rem 0.55rem 0 0;
//   }
//   .chat-app .chat-history {
//     height: 300px;
//     overflow-x: auto;
//   }
// }
// @media only screen and (min-width: 768px) and (max-width: 992px) {
//   .chat-app .people-list {
//     height: 465px;
//     width: 100%;
//     overflow-x: auto;
//     background: #fff;
//     left: -400px;
//     display: none;
//   }
//   .chat-app .people-list.open {
//     left: 0;
//   }
//   .chat-app .chat-list {
//     height: 650px;
//     overflow-x: auto;
//   }
//   .chat-app .chat-history {
//     height: 600px;
//     overflow-x: auto;
//   }
// }
// @media only screen and (max-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
//   .chat-app .chat-list {
//     height: 480px;
//     overflow-x: auto;
//   }
//   .chat-app .chat-history {
//     height: calc(100vh - 350px);
//     overflow-x: auto;
//   }
//   .bg-icon {
//     background-color: white;
//   }
//     .chat-app .people-list {
//     height: 465px;
//     width: 100%;
//     overflow-x: auto;
//     background: #fff;
//     left: -400px;
//     display: none;
//   }
//   .chat-app .people-list.open {
//     left: 0;
//   }
// }
</style>
