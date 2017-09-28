<template>
  <div class="container">
    <div class="home-tab">
      <s-witches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></s-witches>
    </div>
    <div class="tab-list">
      <div class="tab-listOne" v-if="currentIndex===0">
        <div v-if="sliderData.length" class="slider-wrapper">
          <div class="slider-content">
            <slider ref="slider">
              <div v-for="item in sliderData">
                <a :href="item.linkUrl">
                  <img class="needsclick" @load="loadImage" :src="item.picUrl">
                </a>
              </div>
            </slider>
          </div>
        </div>
      </div>
      <div class="tab-listSecond" v-if="currentIndex===1">
        2222
      </div>
      <div class="tab-listThree" v-if="currentIndex===2">
        3333
      </div>
      <div class="tab-listFour" v-if="currentIndex===3">
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
import { ERR_OK } from 'src/components/api/config'
import { getSliderData } from 'src/components/api/home'

export default {
  data() {
    return {
      sliderData: [],
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
  },
  methods: {
    _getSliderData() {
      getSliderData().then((res) => {
        if (res.code === ERR_OK) {
          this.sliderData = res.data.slider
          console.log(this.sliderData)
        }
      })
    },
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true
        setTimeout(() => {
          this.$refs.scroll.refresh()
        }, 20)
      }
    },
    switchItem(index) {
      this.currentIndex = index
    }
  },
  components: {
    SWitches,
    Slider
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
  .tab-list{
    min-height: 0.01rem;
    .tab-listOne{
      height: 100%;
      overflow: hidden;
      .slider-wrapper{
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 40%;
        overflow: hidden;
        .slider-content{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
    .tab-listSecond{
      font-size: 0.2rem;
      color: green;
    }
    .tab-listThree{
      font-size: 0.2rem;
      color: green;
    }
    .tab-listFour{
      font-size: 0.2rem;
      color: green;
    }
  }
}
</style>


