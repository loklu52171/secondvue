<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>  
    <keep-alive>
    	<router-view></router-view>
    </keep-alive>
    <tab></tab>    
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from './components/m-header/m-header'
  import Tab from './components/tab/tab'

  export default {
    components: {
      MHeader,
      Tab
    }
  }
</script>

<style src="./style/reset.scss" lang="scss">

</style>
