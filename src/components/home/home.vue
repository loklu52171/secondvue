<template>
  <div class="container">
    <div class="tab">
      <router-link tag="div" class="tab-nav" to="/remen">
        <span class="tab-link">热门</span>
      </router-link>
      <router-link tag="div" class="tab-nav" to="/dongtai">
        <span class="tab-link">动态</span>
      </router-link>
      <router-link tag="div" class="tab-nav" to="/faxian">
        <span class="tab-link">发现</span>
      </router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
// import footNav from '../foot-nav/foot-nav'

export default {

}
</script>

<style lang="scss">
.container {
  overflow: hidden;
  .tab {
    display: flex;
    height: 0.7rem;
    font-size: 0.22rem;
    box-sizing: border-box;
    .tab-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      text-align: center;
      .tab-link {
        padding-bottom: 0.05rem;
        color:black;
        font-size: 0.24rem;
      }
      &.router-link-active {
        border-bottom: 0.02rem solid blue;
      }
    }
  }
}
</style>