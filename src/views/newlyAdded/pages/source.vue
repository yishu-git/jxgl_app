<template>
  <div id="source">
    <header>
      <Classa :title="title" :goBackmsg="goBackmsg" />
    </header>
    <main ref="main">
        <div class="main_left">
            <li @click="tap_change(1)"  > <span :class="{'active':tap_id==1}">租凭</span> </li>
            <li @click="tap_change(2)" > <span :class="{'active':tap_id==2}">自有</span> </li>
            <li @click="tap_change(3)" ><span :class="{'active':tap_id==3}">分包自带</span> </li>
        </div>
        <div class="mian_right">
            <Nume1 v-show="tap_id==1"> {{title}}  </Nume1>
            <Nume2 v-show="tap_id==2"> 我是二号插槽 </Nume2>
            <Nume3 v-show="tap_id==3"/>
        </div>

    </main>
  </div>
</template>
<style lang='scss'>
#source {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  main {
      flex: 1;
      display: flex;
      .main_left{
      background: #f5f5f5;
      width: 200px;
      li{
          width: 100%;
          height: 80px ;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
      }
      .active{
          color: blue;
          border-bottom: 1px solid blue;
      }
      }
      .main_right{
          flex: 1;
          
      }
  }
}
</style>
<script>
import Classa from '@/components/classA.vue'
import Nume1 from '@/components/source/nume1.vue'
import Nume2 from '@/components/source/nume2.vue'
import Nume3 from '@/components/source/nume3.vue'

import BScroll from 'better-scroll'
//接口
// import { getnames } from '@/public/httpApi.js'
export default {
  components: {
    Classa,
    Nume1,
    Nume2,
    Nume3
  },
  data () {
    return {
      goBackmsg: 'newlyAdded',
      title: '机械来源',
      scroll: null,
      tap_id:1
    }
  },
  methods: {
      tap_change(e){
          this.tap_id=e
      }


    

  },
mounted () {



    // this.$nextTick(() => {
    //   //$refs绑定元素
    //   if (!this.scroll) {
    //     this.scroll = new BScroll(this.$refs.main, {
    //       //开启点击事件 默认为false
    //       click: true
    //     })
    //   } else if (!this.$refs.main) {
    //     return
    //   }
    //   else {
    //     this.scroll.refresh()
    //   }
    // })


  }


}
</script>

