<template>
  <div class="container" v-show="$route.meta.navShow">
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/home" exact>
        <i class="tab-i iconfont icon-shouye"></i>
        <span class="tab-link">首页</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/shop">
        <i class="tab-i iconfont icon-tuijian"></i>
        <span class="tab-link">好店</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/discount">
        <i class="tab-i iconfont icon-youhui"></i>
        <span class="tab-link">优惠</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/personal">
        <i class="tab-i iconfont icon-wode"></i>
        <span class="tab-link">个人</span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

}
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #eee;
  .tab {
    display: flex;
    height: 1.1rem;
    font-size: 0.24rem;
    padding-top: 0.2rem;
    box-sizing: border-box;
    z-index: 9999;
    .tab-item {
      flex: 1;
      text-align: center;
      .tab-i {
        display: block;
        font-size: 0.4rem;
      }
      .tab-link {
        padding-bottom: 0.05rem;
        color: #666;
        font-size: 0.2rem;
      }
      &.router-link-active {
        .tab-link,.tab-i {
          color: #D0021B;
        }
      }
    }
  }
}
</style>