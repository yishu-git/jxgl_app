<template>
  <div id="weekly">
   
    <header>
      <div class="title">
        <i class="iconfont icon-icon-arrow-left2" @click="back"></i>
        <span class="titleText">日常检查情况</span>
        <i class="iconfont icon-lingdang"></i>
      </div>
      <div class="table">
        <p :class="cut==0? 'cuts':''" @click="cutclick(0)" >今日任务</p>
        <p :class="cut==1? 'cuts':''" @click="cutclick(1)" >周任务</p>
      </div>
    </header>
    <main>   <Week v-show="cut==0" /> 
    <Jinricao  v-show="cut==1" /></main>
    <footer><span>+</span>日常检查记录</footer>
  </div>
</template>


<script>
import Week from '@/components/Week.vue'
import Jinricao from '@/components/Jinricao'
export default {
components:{
    Week,
    Jinricao
},



  data() {
    return {
      cut: 0,
    };
  },
  mounted() {},
  methods: {
    cutclick(variate){
      this.cut = variate
    },
    back(){
      this.$router.push({name:'nume1'})
    }
  },
};
</script>

<style lang="scss">
#weekly {
  width: 100%;
  height: 100%;
  background: #f5f6f8;
  display: flex;
  flex-direction: column;
  header {
    .title {
      padding: 40px 20px 30px 20px;
      font-size: 40px;
      align-items: center;
      color: #ffff;
      height: 49px;
      display: flex;
      justify-content: space-between;
      background: #2988ff;
      i {
        font-size: 40px;
      }
      .titleText {
        margin-right: 107px;
      }
    }
    .table {
      width: 100%;
      height: 104px;
      padding: 0 170px;
      display: flex;
      box-sizing: border-box;
      background: white;
      justify-content: space-between;
      & > P {
        text-align: center;
        line-height: 104px;
        width: 170px;
        height: 100%;
        font-size: 26px;
        color: #353535;
        box-sizing: border-box;
      }
      &>.cuts{
        color: #2988ff;
        border-bottom: 6px solid #2988ff;
      }
    }
  }
  main {
    flex: 1;
    overflow-y: scroll;
  }
  footer {
    width: 100%;
    height: 94px;
    background: #2988fc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    color: white;
    & > span {
      margin-right: 18px;
      font-size: 50px;
    }
  }
}


</style>