<template>
  <b-container
    ><br /><br /><br />
    <div class="row justify-content-sm-center h-150">
      <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
        <div class="text-center my-2 my-md-5">
          <h1></h1>
          <br />
        </div>
        <div class="account-type-card card shadow">
          <div class="card-body">
            <div class="label-h5 text-center">
              <!-- <img src="~assets/images/logo.svg" class="img-fluid img" /> -->
              <h5 class="label-h5">Account Type</h5>
            </div>
            <div class="p1 text-center">
              <p class="p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <br />
            <form
              class="form-group-account needs-validation"
              novalidate=""
              autocomplete="off"
              @submit.prevent="() => {}"
            >
              <div class="d-flex p2" @click="selectRole('seller')">
                <input
                  id="defaultGroupSeller"
                  v-model="role"
                  type="radio"
                  name="role"
                  value="seller"
                />
                <label class="card-title text-left m-0 ml-3 p2" for="defaultGroupSeller"
                  >I want to sell a Startup</label
                >
              </div>
              <br />
              <div class="d-flex p2" @click="selectRole('buyer')">
                <input
                  id="defaultGroupBuyer"
                  v-model="role"
                  type="radio"
                  name="role"
                  value="buyer"
                  checked
                />
                <label class="card-title text-left m-0 ml-3 p2" for="defaultGroupBuyer"
                  >I want to buy a Startup</label
                >
              </div>
              <br />
              <div class="d-flex p2 mb-4" @click="selectRole('advisor')">
                <input
                  id="defaultGroupAdvisor"
                  v-model="role"
                  type="radio"
                  name="role"
                  value="advisor"
                />
                <label class="card-title text-left m-0 ml-3 p2" for="defaultGroupAdvisor">
                  I want to Advise</label
                >
              </div>
              <br />
              <div class="text-center">
                <button
                  class="btn btn-primary btn-accountype btn-block fs-16"
                  @click="postRole()"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <br /><br />
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
export default {
  name: 'AccountTypePage',
  layout: 'default-layout',
  data() {
    return {
      role: 'seller',
      prevRoute: null,
    }
  },
  mounted() {
    if (this.$auth.loggedIn && this.$auth.user?.roles.length) {
      this.$router.push(this.localePath('/startups'))
    }
  },
  methods: {
    getPath() {
      if (this.role === 'buyer' || this.role === 'advisor') {
        return this.localePath('/marketplace')
      } else {
        return this.localePath('/startups')
      }
    },
    selectRole(role) {
      this.role = role
    },
    postRole() {
      if (this.$auth.loggedIn) {
        this.$axios.post(`/api/roles/${this.role}`).then((response) => {
          this.$auth.setUser(response.data.data)
          this.$router.push(this.localePath('/startups'))
        })
      } else {
        this.$router.push(this.localePath(`/signup/${this.role}`))
      }
    },
  },
}
</script>
<style lang="scss">
@import '../assets/css/vars.scss';
.label-h5 {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 23px;
  align-items: center;
  text-align: center;
  color: #000000;
  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 125.3%;
  }
}
.p1 {
  font-family: Avenir LT Std;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 134%;
  align-items: center;
  text-align: center;
  color: rgba(26, 41, 61, 0.83);
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 134%;
  }
}
.p2 {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16.8px;
  align-items: center;
  color: rgba(26, 41, 61, 0.83);
  max-width: 227px;
  margin: auto;
  @media screen and (min-width: 992px) {
    font-size: 18px;
    line-height: 22px;
  }
}
.btn-accountype {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  height: 45px;
  font-size: 14px;
  left: 0px;
  top: 0px;
  background: #009ddd;
  border-radius: 40px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    border-radius: 4px;
    @include scaleheight(56);
  }
}
.form-group-account {
  height: 160px;
  left: 607px;
  top: 357px;
}

.card.shadow {
  border-radius: 15px;
  border: 0;
}

.account-type-card {
  padding: 2rem;
  @media screen and (min-width: 1200px) {
    padding: 4rem 6.5rem 6rem 6.5rem;
  }
  .card-body {
    padding: 0;
  }
}
</style>
