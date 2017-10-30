<template>
  <div class="song-list">
    <ul>
      <li @click="selectItem(song, index)" class="item" v-for="(song, index) in songs">
        <div class="rank" v-show="rank">
          <span :class="getRankCls(index)" v-text="getRankText(index)"></span>
        </div>
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      songs: {
        type: Array,
        default: []
      },
      rank: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      selectItem(item, index) {
        this.$emit('select', item, index)
      },
      getDesc(song) {
        return `${song.singer}·${song.album}`
      },
      getRankCls(index) {
        if (index <= 2) {
          return `icon icon${index}`
        } else {
          return 'text'
        }
      },
      getRankText(index) {
        if (index > 2) {
          return index + 1
        }
      }
    }
  }
</script>

<style lang="scss">
  .song-list{
    .item{
      display: flex;
      align-items: center;
      box-sizing: border-box;
      font-size:0.22rem;
      .rank{
        flex: 0 0 25px;
        width: 25px;
        margin-right: 30px;
        text-align: center;
        .icon{
          display: inline-block;
          width: 25px;
          height: 24px;
          background-size: 25px 24px;
        .text{
          color: #eee;
          font-size: 0.24rem;
        }
        } 
      }   
    }
      .content{
        flex: 1;
        overflow: hidden;
        margin-bottom: 0.2rem;
        .name{
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          color:#eee;
        }
        .desc{
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin-top: 4px;
          color: #666;
        } 
      }
  }
</style>