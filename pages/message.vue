<template>
  <div class="container-fluid">
    <div class="row pr-5 pl-5 mt-5">
      <div class="col-md-2 col-sm-12 mb-4">
          <NuxtLink class="nav-link" :to="localePath(`/messages/buyer`)">
          <p>Buyer</p>
        </NuxtLink>
      </div>
      <div class="col-md-2 col-sm-12 mb-4">
        <NuxtLink class="nav-link" :to="localePath(`/messages/advisor`)">
          <p>Advisor</p>
        </NuxtLink>
      </div>
       <MessageTabs />
      
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainMessagesPage',
  layout: 'auth-layout',
  
}
</script>
