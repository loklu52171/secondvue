<template>
    <ul class="switches">
        <li class="switch-item" v-for="(item,index) in switches" :class="{'active':currentIndex === index}" @click="switchItem(index)">
            <span>{{item.name}}</span>
        </li>
    </ul>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    switches: {
      type: Array,
      default: []
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    switchItem(index) {
      this.$emit('switch', index)
    }
  }
}
</script>

<style scoped lang="scss">
  .switches {
    display: flex;
    text-align: center;
    height: 0.7rem;
    line-height: 0.7rem;
    .switch-item {
      padding-bottom: 0.05rem;
      flex: 1;
      font-size: 0.24rem;
      &.active{
        border-bottom: 0.02rem solid #666;
      }  
    }
  }

//   .switches
//     display: flex
//     align-items: center
//     width: 240px
//     margin: 0 auto
//     border: 0.01rem solid yellow 
//     border-radius: 5px
//     .switch-item
//       flex: 1
//       padding: 8px
//       text-align: center
//       font-size: 0.18rem
//       color: $color-text-d
//       &.active
//         background: yellow
//         color: $color-text
</style>