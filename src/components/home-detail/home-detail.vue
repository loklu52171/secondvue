<template>
    <transition name="slide">
        <div class="div1">111</div>
    </transition>
</template>

<script type="text/ecmascript-6">

//   import {mapGetters} from 'vuex'

  export default {
  }
</script>

<style lang="scss">
  .div1 {
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    background-color: red;
    width: 100%;
    height: 100%;
  }

  .slide-enter-active,.slide-leave-active {
    transition: all 0.3s;
  }
  .slide-enter,.slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>