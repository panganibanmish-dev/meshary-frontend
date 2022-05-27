<template>
  <div class="container pt-5">
    <br /><br />
    <div class="row">
      <div class="col-sm-9 col-xs-12 mx-auto mb-5">
        <div class="subscription-plan-container-fee">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="subscription-plan-container-title">
              Secure payment info
            </div>
            <div class="subscription-plan-container-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
          </div>
          <form class="form-group row">
            <div class="col-md-12" style="padding-bottom: 10px; padding-top: 53px">
              <label for="card-name" class="card-input-label">
                Card
              </label>
              <div class="input-icons">
                <div class="input-icons-left">
                  <font-awesome-icon :icon="['fas', 'credit-card']" class="icon"/>
                </div>
                <input 
                  id="card-name"
                  class="input-field-name credit-card-name pr-3" 
                  type="text" 
                  placeholder="Name"
                />
              </div>
            </div>
            <div class="col-md-12" style="padding-bottom: 10px">
              <label for="card-number" class="card-input-label">
                Card Number
              </label>
              <div class="input-icons">
                <TheMask
                  id="card-number"
                  type="text"
                  :mask="['#### #### #### ####']"
                  placeholder="#### #### #### ####"
                  class="input-field credit-card-other-details px-3"
                  required
                ></TheMask>
                <div class="input-icons-right">
                  <img src="~assets/images/VISA.svg" />
                  <img src="~assets/images/Mastercard.svg" />
                  <img src="~assets/images/AMEX.svg" />
                  <img src="~assets/images/Discover.svg" />
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <label for="card-date" class="card-input-label">
                Expiry Date
              </label>
              <!-- <input 
                id="card-date"
                type="month" 
                min="2022-03" 
                value="2022-03"
                class="form-control pl-4 pr-4 card-input"
                required
              > -->
              <div class="input-icons">
                <TheMask
                  id="card-date"
                  type="text"
                  :mask="['## / ####']"
                  placeholder="MM / YYYY"
                  class="input-field credit-card-other-details px-3"
                  required
                ></TheMask>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <label for="card-code" class="card-input-label">
                Security Code
              </label>
              <div class="input-icons">
                <input
                  id="card-code"
                  type="text" 
                  pattern="!/\d/" 
                  maxlength="3"
                  class="input-field credit-card-other-details px-3"
                  required
                  placeholder="000"
                />
              </div>
            </div>
          </form>
          <div class="d-flex justify-content-between mt-5">
            <button role="button" class="btn btn-secondary credit-card-cancel">Cancel</button>
            <button role="button" class="btn btn-primary credit-card-premium">Become a premium buyer</button>
          </div>
        </div>
        <!-- <vue-paycard :value-fields="valueFields" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import {TheMask} from 'vue-the-mask'

export default {
  name: 'SubscriptionFeePage',
  components: {
    TheMask
  },
  layout: 'subscription-layout',
  data() {
    return {
      cardName: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cardCvv: "",
      minCardYear: new Date().getFullYear(),
      amexCardMask: "#### ###### #####",
      otherCardMask: "#### #### #### ####",
      cardNumberTemp: "",
      isCardFlipped: false,
      focusElementStyle: null,
      isInputFocused: false
    }
  },
  computed: {
    getCardType () {
      const number = this.cardNumber;
      if (/^(?:4[0-9]{12}(?:[0-9]{3})?)$/.test(number) !== false) return "visa";
      if (/^(?:3[47][0-9]{13})$/.test(number) !== false) return "amex";
      if (/^(?:5[1-5][0-9]{14})$/.test(number) !== false) return "mastercard";
      if (/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/.test(number) !== false) return "discover";
      // if (/9792/.test(number) !== false) return 'troy'
      return "visa"; // default type
    },
		generateCardNumberMask () {
			return this.getCardType === "amex" ? this.amexCardMask : this.otherCardMask;
    },
    minCardMonth () {
      if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
      return 1;
    },
  },
  watch: {
    cardYear () {
      if (this.cardMonth < this.minCardMonth) {
        this.cardMonth = "";
      }
    }
  },
  mounted() {
    this.cardNumberTemp = this.otherCardMask;
  },
  methods: {
    flipCard (status) {
      this.isCardFlipped = status;
    },
    checkExpirationDate(month, year){
      const today = new Date();
      const someday = new Date();
      someday.setFullYear(year, month, 1);

      if (someday < today) {
        // setExpirationDateError("The expiry date is before today's date. Please select a valid expiry date");
      }
    },
    cardVerify(value) {
      const val = value.split(' ')
      const ae = /^(?:3[47][0-9]{13})$/
      const visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
      const masterCard = /^(?:5[1-5][0-9]{14})$/
      const discover = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/
      if(ae.test(val.join(''))){
        // setCreditCardType({name: "American Express", code: "AM"})
        // setCreditCardNumberError('')
      }else if(visa.test(val.join(''))){
        // setCreditCardType({name: "Visa", code: "VI"})
        // setCreditCardNumberError('')
      }else if(masterCard.test(val.join(''))){
        // setCreditCardType({name: "MasterCard", code: "MA"})
        // setCreditCardNumberError('')
      }else if(discover.test(val.join(''))){
        // setCreditCardType({name: "Discover", code: "DI"})
        // setCreditCardNumberError('')
      }else{
        // setCreditCardType("")
        // setCreditCardNumberError('Credit Card not Validated')
      }
    }
  }
}
</script>

<style>
.card-input-label {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #4F5B76;
}

.card-input {
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
}

.input-icons-left {
  position: absolute;
  margin-top: 5px
}

.input-icons-right {
  position: absolute;
  right: 30px;
}
  
.input-icons {
  width: 100%;
  display: flex;
  align-items: center;
}

.credit-card-name {
  height: 64px
}

.credit-card-other-details {
  height: 43px;
}
  
.icon {
  padding: 10px;
  color: #0570DE;
  min-width: 50px;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 2px solid #ffffff00;
  background: #ffffff00;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
}

.input-field-name {
  width: 100%;
  padding: 10px;
  padding-left: 60px;
  border: 2px solid #ffffff00;
  background: #ffffff00;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
}

.input-field:focus, .input-field-name:focus {
  outline: none !important;
  background: #FFFFFF;
  border: 2px solid #0570DE !important;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
}

.credit-card-premium {
  background: #009DDD !important;
  border: none !important;
  border-radius: 4px;
  height: 56px;
  min-width: 238px;
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF !important;
}

.credit-card-cancel {
  background: #F6FBFF !important;
  border: none !important;
  border-radius: 5px;
  height: 56px;
  min-width: 114px;
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 134%;
  color: rgba(13, 111, 236, 0.8) !important;
}
</style>