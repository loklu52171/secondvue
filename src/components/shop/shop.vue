<template>
  <div class="rank" ref="rank">
    <scroll :data="topList" class="toplist" ref="toplist">
      <ul>
        <li class="item" v-for="(item,index) in topList">
            <img :src="item.picUrl"/>
            <h4>{{index}}</h4>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'src/base/scroll/scroll'
  import {getTopList} from 'src/components/api/rank'
  import {ERR_OK} from 'src/components/api/config'

  export default {
    created() {
      this._getTopList()
    },
    data() {
      return {
        topList: []
      }
    },
    methods: {
      _getTopList() {
        getTopList().then((res) => {
          if (res.code === ERR_OK) {
            this.topList = res.data.topList
          }
        })
      }
    },
    watch: {
      topList() {
        setTimeout(() => {
          this.$refs.toplist.refresh()
        }, 20)
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style lang="scss">
  .rank{
    position: fixed;
    width: 100%;
    top: 0.88rem;
    bottom: 0;
    .toplist{
      height: 100%;
      overflow: hidden;
      .item{
        display: flex;
        margin: 0.5rem 0 0.5rem 0.5rem;
        align-items: center;
        &:last-child{
          padding-bottom: 0.2rem;
        }
      }
    }
  }
    
</style>