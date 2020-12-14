<template>
  <div id="chanquan">
    <header>
      <div class="title">
        <i class="iconfont icon-zuo" @click="goBack"></i>
        <span class="titleText">现场机械管理系统</span>
        <i class="iconfont icon-didianmianxing"></i>
      </div>
      <div class="listTitle">
        <input type="text" name="" id="" placeholder="搜索单位名称" />
      </div>
    </header>

    <main>
      <ul v-for="(item,index) in datas" :key="index">
        <li :class="clicks==index? 'lan':''" @click="cuts(index)">{{item.name}}</li>
      </ul>
    </main>
  </div>
</template>

<script>
import { getproperty } from "@/public/httpApi.js";
export default {
  name: "chanquan",
  data() {
    return {
      datas: [],
      clicks:null
    };
  },
  async mounted() {
    let msg = await getproperty();
    // console.log(msg.data.result.records);
    this.datas = msg.data.result.records;
  },
  methods:{
      cuts(variate){
         this.clicks=variate
      },
      goBack(){
         this.$router.go(-1) 
      }
  }
};
</script>

<style lang="scss">
#chanquan {
  //   box-sizing: border-box;
  //   padding: 50px 20px 0 20px;
  background: #2988ff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    box-sizing: border-box;
    padding: 50px 20px 0 20px;
    flex-shrink: 1;
    height: 210px;
    .title {
      font-size: 36px;
      align-items: center;
      color: #ffff;
      height: 49px;
      display: flex;
      justify-content: space-between;
    }
    .listTitle {
      height: 100px;
      width: 100%;
      & > input {
        width: 100%;
     
        height: 55px;
        background: #f5f5f5;
        outline: none;
        border: none;
        margin-top: 40px;
        text-align: center;
        line-height: 55px;
      }
    }
  }

  main {
    flex: 1;
    background-color: #fff;
    & > ul {
      // font-size: 26px;
      & > li {
        padding-left: 8px;
        box-sizing: border-box;
        height: 100px;
        width: 100%;
        border-bottom: 2px solid gray;
        font-size: 36px;
        line-height: 100px;
        text-align: left;
      }
      &>.lan{
          color: #2988ff;
      }
    }
  }
}
</style>