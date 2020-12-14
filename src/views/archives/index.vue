<template>
  <div id="archives">
    <header>
    <Classa :title="title" :goBackmsg='goBackmsg'/>
    </header>
    <main ref="newmain">
      <div class="main_title">
        <li class="up">
          <span class="status">{{ status[archives.status] }}</span>
          <span class="machineryName">{{ archives.machineryName }}</span>
          <span class="specification">{{ archives.specification }}</span>
        </li>
        <li class="middle">
          <span class="projectEquipmentCode">{{
            archives.projectEquipmentCode
          }}</span>
          <span class="otherProp">{{ otherProp[archives.otherProp] }}</span>
          <span class="perfectFlag">{{
            perfectFlag[archives.perfectFlag]
          }}</span>
        </li>
        <li class="down">
          <span class="projectName">
            <span>所属工点:</span> {{ archives.projectName }}</span
          >
          <span class="actualApproachDate">
            <span>进场时间</span> {{ archives.actualApproachDate }}</span
          >
        </li>
        <li class="down">
          <span class="projectName">
            <span>申报人:</span> {{ archives.createBy }}</span
          >
          <span class="actualApproachDate">
            <span>申报时间</span> {{ archives.createTime }}</span
          >
        </li>
      </div>
      <div class="main_tap">
        <p @click="tapClick(1)" :class="{ active: tapId === 1 }">设备信息</p>
        <p @click="tapClick(2)" :class="{ active: tapId === 2 }">设备资料</p>
        <p @click="tapClick(3)" :class="{ active: tapId === 3 }">检查及维保</p>
        <p @click="tapClick(4)" :class="{ active: tapId === 4 }">更多信息</p>
      </div>
      <div class="essential">
        <div class="essentCeli">
          <div class="essentialEvery">
            <ul class="essential_title">
              基本信息
            </ul>
            <li>
              <span>机械名称</span>
              <span> {{ archives.machineryTypeName }} </span>
            </li>
            <li>
              <span>规格型号</span> <span>{{ archives.specification }} </span>
            </li>
            <li>
              <span>项目设备编码</span> {{ archives.projectEquipmentCode
              }}<span></span>
            </li>
            <li>
              <span>属性</span> <span>{{ archives.remark }}</span>
            </li>
            <div v-show="flag && whichmore == 1">newdataa</div>
            <p class="more" @click="more(1)">
              {{flag && whichmore == 1?'点击收起':'点击展开' }}<i :class="flag && whichmore == 1?'iconfont icon-shang':'iconfont icon-xia'"></i>
            </p>
          </div>
        </div>

        <div class="essentCeli">
          <div class="essentialEvery">
            <ul class="essential_title">
              使用信息
            </ul>
            <li>
              <span>进场时间</span>
              <span> {{ archives.actualApproachDate }} </span>
            </li>
            <li>
              <span>拟退场时间</span> <span>{{ archives.specification }} </span>
            </li>
            <li>
              <span>设备管理员</span> {{ archives.machineryTypeName
              }}<span></span>
            </li>
            <li>
              <span>使用单位</span> <span>{{ archives.departmentName }}</span>
            </li>
            <div v-show="flag && whichmore == 2">addkljfklsad</div>
            <p class="more" @click="more(2)">
              查看更多<i class="iconfont icon-xia"></i>
            </p>
          </div>
        </div>
        <div class="essentCeli">
          <div class="essentialEvery"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Classa from '@/components/classA.vue'
import BScroll from 'better-scroll'
import bus from '@/unitl/bus.js'
import { otherProp, status, perfectFlag } from '@/public/type.js'
export default {
  data () {
    return {
      title:'详细信息',
      goBackmsg:'subway',
      archives: {},
      otherProp,
      status,
      perfectFlag,
      tapId: 1,
      scroll: null,
      whichmore: null,
      flag: false
    }
  },
  components:{
    Classa
  },
  methods: {
    more (e) {
      this.whichmore = e
      this.flag = !this.flag
    },
    tapClick (e) {
      this.tapId = e

    },
 
  },
  mounted () {
    this.archives = JSON.parse(sessionStorage.getItem('archices'))
    bus.$on('getArchices', (data) => {
      this.archives = data
    })
 
    // this.$nextTick(() => {
    //   //$refs绑定元素
    //   if (!this.scroll) {
    //     this.scroll = new BScroll(this.$refs.newmain, {
    //       //开启点击事件 默认为false
    //       click: true
    //     })
    //   } else if (!this.$refs.newmain) {
    //     return
    //   }
    //   else {
    //     this.scroll.refresh()
    //   }
    // })

  }

}
</script>

<style lang='scss'>
#archives {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;


  main {
    overflow-y: scroll;
    // overflow: hidden;
    box-sizing: border-box;
    // position: relative;
    flex: 1;
    .main_title {
      padding: 0 35px;
      box-sizing: border-box;
      height: 353px;
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
    .main_tap {
      display: flex;
      p {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 33px;
        height: 87px;
      }
      .active {
        color: #60a5c5;
        font-size: 600;
        border-bottom: 4px solid #60a5c5;
      }
    }
    .essential {
      .essentCeli {
        height: 483px;
        background: #f5f5f5;
        padding: 20px 20px 0;
        box-sizing: border-box;
        .essentialEvery {
          padding: 58px 31px 48px 31px;
          box-sizing: border-box;
          ul {
            font-size: 32px;
            font-weight: 700;
          }
          li {
            margin-top: 21px;
            &:nth-of-type(1) {
              margin-top: 25px;
            }
            display: flex;
            span {
              display: block;
              &:nth-of-type(1) {
                width: 254px;
                color: #999999;
                font-size: 30px;
              }
            }
          }
          p {
            margin-top: 30px;
            width: 250px;
            height: 66px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            background: #f5f5f5;
            border-radius: 50px;
            margin: 0 auto;
          }

          background: #ffffff;
          border-radius: 50px;
          height: 100%;
        }
      }
    }
  }
}
</style>
