<template>
  <div id="subway">
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
      <div class="search">
        <span> 代办事项</span>
        <span> 待审核机械40</span>
      </div>
    </header>
    <main>
      <div class="main_list">最新登记机械</div>
      <div class="list_content">
        <ul
          @click="detailed(item)"
          v-for="item in machineryList"
          :key="item.id"
        >
          <li class="up">
            <span class="status">{{ status[item.status] }}</span>
            <span class="machineryName">{{ item.machineryName }}</span>
            <span class="specification">{{ item.specification }}</span>
          </li>
          <li class="middle">
            <span class="projectEquipmentCode">{{
              item.projectEquipmentCode
            }}</span>
            <span class="otherProp">{{ otherProp[item.otherProp] }}</span>
            <span class="perfectFlag">{{ perfectFlag[item.perfectFlag] }}</span>
          </li>
          <li class="down">
            <span class="projectName">{{ item.projectName }}</span>
            <span class="actualApproachDate">{{
              item.actualApproachDate
            }}</span>
          </li>
        </ul>
      </div>
    </main>
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
      perfectFlag
    }
  },
  methods: {
    detailed (e) {
      this.$router.push({ name: 'archives' })
      sessionStorage.setItem('archices',JSON.stringify(e) )
      bus.$emit('getArchices', e)
    },
    toOrganization () {
      this.$router.push({ name: 'organ' })
      
    }

  },
  async mounted () {
    let data = await getMachineryList()
    this.machineryList = data.data.result.content

  }

}
</script>

<style lang='scss'>
#subway {
  box-sizing: border-box;
  padding: 50px 20px 0 20px;
  background: #2988ff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    flex-shrink: 1;
    height: 250px;
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
    .search {
      margin-top: 27px;
      height: 79px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
      border-radius: 15px;
      font-size: 25px;
      padding: 0 25px;
      box-sizing: border-box;
    }
  }
  main {
    margin-top: 10px;

    overflow-y: scroll;
    flex: 1;
    background: #ffffff;
    border-radius: 10px;
    padding: 28px;
    box-sizing: border-box;
    .main_list {
      font-size: 30px;
    }
    .list_content {
      margin-top: 37px;
      ul {
        height: 222px;
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .up {
          .status {
            padding: 5px 10px;
            color: #ffffff;
            background: #2988ff;
            border-radius: 10px;
            margin-right: 15px;
          }
          .machineryName {
            margin-right: 15px;
            font-size: 29px;
          }
          .specification {
            font-size: 29px;
          }
        }
        .middle {
          margin-top: 22px;
          .projectEquipmentCode {
            font-size: 25px;
            font-size: #cccccc;
            margin-right: 15px;
          }
          .otherProp {
            background: #f6ecf0;
            padding: 1px 8px;
            border-radius: 20px;
            border: 1px solid #984049;
            color: #984049;
            margin-right: 15px;
          }
          .perfectFlag {
            padding: 1px 10px;
            border-radius: 20px;
            border: 1px solid #cccccc;
            color: #cccccc;
          }
        }
        .down {
          margin-top: 37px;
          display: flex;
          justify-content: space-between;
          font-size: 30px;
          color: #2f2f2d;
        }
      }
    }
  }
}
</style>