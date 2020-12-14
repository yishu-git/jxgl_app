<template>
  <div id="names">
    <header>
      <Classa :title="title" :goBackmsg="goBackmsg" />
    </header>
    <main ref="main">
      <ul v-for="item in lists" :key="item.id">
        <li @click="choiced(item)" :class="{ 'active': (item.id== activeId) }">
          <span> {{ item.name }} </span> <span> {{ item.specification }}</span>
        </li>
        <li>
          <span>单位</span> <span>{{ item.unit }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>
<style lang='scss'>
#names {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  main {
    padding: 0 25px;
    box-sizing: border-box;
    flex: 1;
    overflow: hidden;
    ul {
      height: 91px;
      display: flex;
      font-size: 32px;
      align-items: center;
      border-bottom: 1px solid #999999;
      justify-content: space-between;
      .active {
        color: blue;
      }
      li {
        &:nth-of-type(2) {
          color: #999999;
        }
      }
    }
  }
}
</style>
<script>
import Classa from '@/components/classA.vue'
import BScroll from 'better-scroll'
import { getnames } from '@/public/httpApi.js'
export default {
  components: {
    Classa
  },
  data () {
    return {
      goBackmsg: 'newlyAdded',
      title: '机械名称-型号',
      lists: [],
      scroll: null,
      activeId: null
    }
  },
  methods: {
    choiced (e) {
     
      this.activeId = e.id

    }

  },
  async mounted () {

    let data = await getnames({ id: '1230029003514249217' })

    this.lists = data.data.data.result.records
    console.log(this.lists);

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

