<template>
  <div class="mt-5 pt-4">
    <section
      :style="{ backgroundImage: `url('${bgImage8}')` }"
      style="
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 100% 25rem;
      "
    >
      <b-container>
        <div class="terms-container p-5 mb-5 mt-3">
          <div class="d-flex justify-content-center flex-column mb-5">
            <div class="terms-header text-center">
              Terms and Conditions
            </div>
            <div class="terms-subheader text-center">
              Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse ante.
            </div>
          </div>
          <div class="terms-content">
            <p class="mb-5">
              <strong>1.1</strong>
              These Terms and Conditions constitute a legally binding agreement between you (either personally or on behalf of an entity you 
              represent) and Nakhla Information Systems Technology Company ("Rounup"), hereinafter referred to as "We", with respect to all aspects 
              of the tamara Payment Services and and/or your use of the Platform or your access to our website https://tamara.co, as well as any 
              other media form, media channel, website or mobile application related to, or linked to and through your access to and use of the 
              Platform. You acknowledge that you have read, understood and agreed to be bound by these Terms and Conditions, as amended from time to time. if you do not agree to these terms and conditions, you must stop using or accessing the platform immediately and if you are 
              using the platform on behalf of a third party including, without limitation, any business entity, you warrant that you are authorized 
              and have the authority to commit the third party to these Terms and Conditions.
            </p>
            <p class="mb-5">
              <strong>1.2</strong>
              The merchant from whom you purchase goods or services using tamara Payment Services is not a party to this Agreement, and any 
              applicable terms between you and the Merchant are independent of the terms of this Agreement.
            </p>
            <p class="mb-5">
              <strong>1.3</strong>
              We reserve the right, at our absolute discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason.
            </p>
            <p class="mb-5">
              <strong>1.4</strong>
              You acknowledge your responsibility to review these terms and conditions periodically for the latest developments, and you waive any 
              right to receive specific notice of each such change, and your continued use of the site and the platform after the date of publication of
              the revised terms and conditions constitutes an acknowledgment from you that you have read and understood the amendments and accepted the commitment.
            </p>
            <p class="mb-5">
              <strong>1.5</strong>
              This preamble is an integral part of the Agreement.
            </p>
          </div>
        </div>
      </b-container>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'TermsPage',
  layout: 'default-layout',
}
</script>

<style lang="scss">
@import '../assets/css/vars.scss';
.terms-container {
  background: #FFFFFF;
  box-shadow: 0px 20px 60px rgba(2, 131, 233, 0.1);
  border-radius: 15px;
}

.terms-header {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 750;
  @include scalefont(42);
  @include scalelineheight(50);
  color: #272D4E;
}

.terms-subheader {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  @include scalefont(18);
  @include scalelineheight(26);
  color: #272D4E;
}

.terms-content {
  font-family: 'Avenir LT Std';
  font-style: normal;
  font-weight: 400;
  @include scalefont(18);
  @include scalelineheight(26);
  color: #272D4E;
}
</style>