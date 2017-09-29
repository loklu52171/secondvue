<template>
  <div class="container">
    <div class="home-tab">
      <s-witches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></s-witches>
    </div>
    <div class="tab-list">
      <scroll class="listOne" v-if="currentIndex===0" :data="DiscListData" ref="scrolls">
        <div>
          <div v-if="sliderData.length" class="slider-wrapper">
            <div class="slider-content">
              <slider ref="slider">
                <div v-for="item in sliderData">
                  <a :href="item.linkUrl">
                    <img @load="loadImage" :src="item.picUrl">
                  </a>
                </div>
              </slider>
            </div>
          </div>
          <div class="discList-wrapper">
            <h1 class="list-title">热门歌曲推荐</h1>
            <ul>
              <li class="disc-list" v-for="item in DiscListData">
                <div class="list_left">
                  <img :src="item.imgurl" alt="">
                </div>
                <div class="list_right">
                  <h2 class="list_right_title" v-html="item.dissname"></h2>
                  <p class="list_right_text" v-html="item.creator.name"></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </scroll>
      <scroll class="listSecond" v-if="currentIndex===1">
        <div>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>rrrrrrrrrrrrrrrrrrr</p>
          <p>111</p>
          <p>111</p>
          <p>qqqqqqqqqqq</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>11f1</p>
          <p>ffffffffccccccccccccccc</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>dddddddddddddddddddddd</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>fccccccccccceeeeeeeeeeeeeeeee</p>
          <p>111</p>
          <p>111</p>
          <p>jjjjjjjjjjjjjjjjjjjjj</p>
          <p>111</p>
          <p>111</p>
          <p>llllllllllllllll</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>ffffffffffffffff</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>ddddddddddd</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>4444ds</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>dsadasda</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>222</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>1311</p>
          <p>111</p>
          <p>11331</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
          <p>111</p>
        </div>
      </scroll>
      <div class="listThree" v-if="currentIndex===2">
        3333
      </div>
      <div class="listFour" v-if="currentIndex===3">
        4444
      </div>

    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import SWitches from 'src/base/switches/switches'
import Slider from 'src/base/slider/slider'
import Scroll from 'src/base/scroll/scroll'
import { ERR_OK } from 'src/components/api/config'
import { getSliderData, getDiscList } from 'src/components/api/home'

export default {
  data() {
    return {
      sliderData: [],
      DiscListData: [],
      currentIndex: 0,
      switches: [
        { name: '热点' },
        { name: '新闻' },
        { name: '发现' },
        { name: '社会' }
      ]
    }
  },
  created() {
    this._getSliderData()
    this._getDiscList()
  },
  methods: {
    _getSliderData() {
      getSliderData().then((res) => {
        if (res.code === ERR_OK) {
          this.sliderData = res.data.slider
        }
      })
    },
    _getDiscList() {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.DiscListData = res.data.list
        }
      })
    },
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true
        setTimeout(() => {
          this.$refs.scrolls.refresh()
        }, 20)
      }
    },
    switchItem(index) {
      this.currentIndex = index
    }
  },
  components: {
    SWitches,
    Slider,
    Scroll
  }
}
</script>

<style lang="scss">
.container {
  overflow: hidden;
  .home-tab {
    height: 0.7rem;
    font-size: 0.22rem;
    box-sizing: border-box;
    margin-bottom: 0.06rem;
    .home-tab-nav {
      display: flex;
      text-align: center;
      height: 0.7rem;
      line-height: 0.7rem;
      .home-tab-link {
        padding-bottom: 0.05rem;
        flex: 1;
        color: black;
        font-size: 0.24rem;
      }
    }
  }
  .tab-list {
    .listOne {
      height: 100%;
      overflow: hidden;
      .slider-wrapper {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 40%;
        overflow: hidden;
        .slider-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      .discList-wrapper {
        .list-title {
          margin-bottom: 0.2rem;
          background-color: #eee;
          font-size: 0.24rem;
          height: 0.7rem;
          line-height: 0.7rem;
          letter-spacing: 0.08rem;
          text-align: center;
        }
        .disc-list {
          display: flex;
          align-items: center;
          padding: 0 0 0 0.4rem;
          box-sizing: border-box;
          .list_left {
            margin-right: 0.24rem;
            img {
              width: 0.9rem;
              height: 0.9rem;
            }
          }
          .list_right {
            display: flex;
            flex-direction: column;
            .list_right_title {
              font-size: 0.2rem;
            }
            .list_right_text {
              font-size: 0.2rem;
            }
          }
        }
      }
    }
    .listSecond {
      font-size: 0.2rem;
      color: green;
    }
    .listThree {
      font-size: 0.2rem;
      color: green;
    }
    .listFour {
      font-size: 0.2rem;
      color: green;
    }
  }
}
</style>


