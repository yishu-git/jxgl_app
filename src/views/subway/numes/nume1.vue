<template>
  <div id="subway_nume1">
    <header>
      <div class="title">
        <i class="iconfont icon-caidan"></i>
        <span class="titleText">现场机械管理系统</span>
        <i class="iconfont icon-lingdang"></i>
      </div>
      <div class="listTitle">
        <span @click="toOrganization">地铁12号线建设工程</span>
        <i class="iconfont icon-xia"></i>
      </div>
      
    </header>
    <main>
      <div class="search">
        <i class="iconfont icon-saoma"></i>
        <input type="text">
        <i class="iconfont icon-detail"></i>
      </div>
      <div class="taps">
        <li @click="taps('all')" :class="{'active':tapId=='all'}" >全部</li>
        <li @click="taps('daishenhe')" :class="{'active':tapId=='daishenhe'}">未申报</li>
        <li @click="taps('weishenbao')" :class="{'active':tapId=='weishenbao'}">待审核</li>
      </div>
       <router-view/>
    </main>
    <footer>
       <div class="down">
         <li> 日常检查 </li>
         <li @click="tonewly" class="middle"> <span class="middle_c">+</span> </li>
         <li @click="hoisting"> 吊装作业 </li>
       </div>
    </footer>
  </div>
</template>

<script>
import { getMachineryList } from '@/public/httpApi.js'
import { otherProp, status, perfectFlag } from '@/public/type.js'
import bus from '@/unitl/bus.js'
export default {
  data () {
    return {
      machineryList: {},
      otherProp,
      status,
      perfectFlag,
      tapId:null,

    }
  },
  methods: {
    taps(e){
      this.tapId=e
      this.$router.push({name:e})
    },

    tonewly(){
     this.$router.push({name:'newlyAdded'})
    },
    detailed (e) {
      this.$router.push({ name: 'archives' })
      sessionStorage.setItem('archices',JSON.stringify(e) )
      bus.$emit('getArchices', e)
    },
    toOrganization () {
      this.$router.push({ name: 'organ' })
      
    },
    // 点击跳转吊装作业
    hoisting(){
      this.$router.push({ name: 'hoisting' })
    }

  },
  async mounted () {
    let data = await getMachineryList()
    this.machineryList = data.data.result.content
    
     this.tapId=this.$route.name

  }

}
</script>

<style lang='scss'>
#subway_nume1 {
  box-sizing: border-box;
  padding: 50px 20px 0 20px;
  background: #2988ff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    flex-shrink: 1;
    height: 239px;
    .title {
      font-size: 36px;
      align-items: center;
      color: #ffff;
      height: 49px;
      display: flex;
      justify-content: space-between;
      .titleText {
        margin-right: 107px;
      }
    }
    .listTitle {
      margin-top: 50px;
      text-align: center;
      font-size: 30px;
      color: #ffffff;
    }
  }
  main{
    padding: 0 25px;
    box-sizing: border-box;
    flex: 1;
    background: #ffffff;
    .search{
      height: 85px;
      display: flex;
      align-items: center;
      justify-content: space-between;
       .iconfont{
          font-size:37px ;
        }
      input{
        width: 558px;
        border-radius: 50px;
        height: 55px;
        background: #f5f5f5;
        outline: none;
        border: none;
       
      }
    }
    .taps{
      height: 100px;
      display: flex;
  
     li{
       flex: 1;
       display: flex;
       justify-content: center;
       align-items: center;
       font-size: 30px;
     }
     .active{
       color: #2a87ff;
       border-bottom: 3px solid #2a87ff;
     }
    }
  }
  footer{
    height: 92px;
    background: #f5f5ff;
    padding:0 25px;
    box-sizing: border-box;
    .down{
      background: #f5f5f5;
      height: 92px;
      display: flex;
      justify-content: space-between;
      font-size: 30px;
      color:#2c87fa ;
      align-items: center;
      .middle{
        height: 130px;
        width: 130px;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        left: 50%;
        background: #f5f5f5;
        z-index: 555;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateX(-50%);
        .middle_c{
          height: 96px;
          width: 96px;
          border-radius: 50%;
          background: #2a87ff;
          font-size: 85px;
          font-weight: 500;
          color: #ffffff;
          line-height: 96px;
          text-align: center;
        }
      }
        

      
    }
    
  }
}
</style>