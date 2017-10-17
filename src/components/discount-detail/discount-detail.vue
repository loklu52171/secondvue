<template>
  <transition name="slide">
   <div class="div2">111</div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="scss">
.div2 {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  background-color: green;
  width: 100%;
  height: 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>