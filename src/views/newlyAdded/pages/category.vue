<template>
  <div id="organ">
    <header>
      <Classa  :title="title" :goBackmsg="goBackmsg" />
      <div class="search">
        <input type="text" />
        <div class="placehouder">
          <i class="iconfont icon-fangdajing"></i>
          <span>按名称过滤</span>
        </div>
      </div>
    </header>
    <main ref="main">
     <keep-alive>
       <Catetree :trees="trees" :id="id" />
     </keep-alive>
    </main>
  </div>
</template>
<style lang='scss'>
#organ {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    height: 250px;
    .title {
      padding: 0 25px;
      box-sizing: border-box;
      font-size: 36px;
      align-items: center;
      background: #2988fc;
      color: #ffff;
      height: 156px;
      display: flex;
      justify-content: space-between;
      .titleText {
        margin-right: 107px;
      }
    }
    .search {
      height: 92px;
      background: #f5f5f5;
      align-items: center;
      padding: 0 25px;
      position: relative;
      display: flex;
      input {
        width: 100%;
        height: 58px;
        border: none;
        outline: none;
        background: #ffffff;
        border-radius: 15px;
      }
      .placehouder {
        .icon-fangdajing {
          font-size: 30px;
          margin: 15px;
        }

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  main {
    padding: 50px;
    box-sizing: border-box;
    flex: 1;
    overflow: hidden;
  }
}
</style>
<script>
import Classa from '@/components/classA.vue'
import Catetree from '@/components/cateTree.vue'
import BScroll from 'better-scroll'
import { getcategory } from '@/public/httpApi.js'
import bus from '@/unitl/bus.js'
export default {
  components: {
    Catetree,
    Classa
  },
  data () {
    return {
      id:'',
      goBackmsg: 'newlyAdded',
      title: '机械类别',
      trees: null,
      scroll: null
    }
  },
  methods: {
    goBack () {
      this.$router.push({ name: 'subway' })
    },
  },
  async mounted () {

    let data = await getcategory()
    console.log(data);
    this.trees = data.data.result
    this.$nextTick(() => {
      //$refs绑定元素
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.main, {
          //开启点击事件 默认为false
          click: true
        })
      } else if (!this.$refs.main) {
        return
      }
      else {
        this.scroll.refresh()
      }
    })

    bus.$on('shuaxin', () => {
      this.scroll.refresh()
    })
  }


}
</script>

