<template>
    <div class="loading">
        <img class="loading_img" src="./loading.gif">
        <p class="desc">{{title}}</p>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>
<style lang="scss">
.loading {
    width: 100%;
    text-align: center;
    .loading_img {
        width: 0.5rem;
        height: 0.5rem;
    }
    .desc {
        line-height: 20px;
        font-size: 0.24rem;
        color: #666;
    }
}
</style>
