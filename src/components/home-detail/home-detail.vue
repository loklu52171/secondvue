<template>
  <transition name="slide">
    <div class="div1">111</div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { getSongList } from 'src/components/api/home'
import { ERR_OK } from 'src/components/api/config'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'disc'
    ])
  },
  data() {
    return {
      songs: []
    }
  },
  created() {
    this._getSongList()
  },
  methods: {
    _getSongList() {
      if (!this.disc.dissid) {
        this.$router.push('/home')
        return
      }
      console.log(this.disc)
      getSongList(this.disc.dissid).then((res) => {
        if (res.code === ERR_OK) {
          console.log(res)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.div1 {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  background-color: red;
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