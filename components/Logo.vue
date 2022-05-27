<template>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="logo-images d-flex justify-content-center align-items-center">
                <img src="~assets/images/logo.svg" class="img-fluid" />
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'LogoPage'
}
</script>
<style lang="scss">
@import '../assets/css/vars.scss';
.logo-images {
//   width: 120px;
  @include scalewidth(120);
  height: 30px;
}
</style>