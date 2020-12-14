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
        <input type="text" />
        <i class="iconfont icon-detail" @click="showFilter(isShowFilter)"></i>
      </div>
      <div class="taps">
        <li @click="taps('all')" :class="{ active: tapId == 'all' }">全部</li>
        <li
          @click="taps('daishenhe')"
          :class="{ active: tapId == 'daishenhe' }"
        >
          未申报
        </li>
        <li
          @click="taps('weishenbao')"
          :class="{ active: tapId == 'weishenbao' }"
        >
          待审核
        </li>
      </div>
      <router-view />
    </main>
    <footer>
      <div class="down">
        <li @click="inspection">日常检查</li>
        <li @click="tonewly" class="middle"><span class="middle_c">+</span></li>
        <li @click="hoisting">吊装作业</li>
      </div>
    </footer>
    <div class="showFliter" v-if="isShowFilter">
      <div class="content">
        <div class="main">
          <div
            :key="index"
            v-for="(item, index) in filterlist"
            :class="item.calssName"
          >
            <div class="top">{{ item.name }}</div>
            <div class="bottom">
              <div
                v-for="item in item.list"
                :key="item.id"
                @click="pithOn(item.name)"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="property"></div>
        </div>
        <div class="footer">
          <button class="reset" @click="cancelPithOn">重置</button>
          <button class="affirm" @click="affirm">确认</button>
        </div>
      </div>
    </div>
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
      tapId: null,
      isShowFilter: false,
      filterlist: [
        {
          name: '状态',
          calssName: 'status',
          list: [
            {
              id: 1,
              name: '未申报',
            },
            {
              id: 2,
              name: '待审核',
            },
            {
              id: 3,
              name: '使用中',
            },
            {
              id: 4,
              name: '已停用',
            },
            {
              id: 5,
              name: '正在维保',
            },
            {
              id: 6,
              name: '已退场',
            }
          ],
        },
        {
          name: '属性',
          calssName: 'property',
          list: [
            {
              id: 1,
              name: '特种机械',
            },
            {
              id: 2,
              name: '大型机械',
            },
            {
              id: 3,
              name: '其他机械',
            },
          ]
        },
        {
          name: '来源',
          calssName: 'source',
          list: [
            {
              id: 1,
              name: '自有',
            },
            {
              id: 2,
              name: '租赁',
            },
            {
              id: 3,
              name: '分包自带',
            },
          ]
        }
      ],
    }
  },
  methods: {

    inspection () {
      this.$router.push({ name: 'weekly' })
    },
    taps (e) {
      this.tapId = e
      this.$router.push({ name: e })
    },
    // 点击选中高亮
    pithOn (name) {
      // 未完成
      console.log(name);
    },
    // 点击重置
    cancelPithOn () {
      console.log("点击重置");
      // 需要把calss名取消
      // 未完成
    },
    // 点击确认
    affirm () {
      console.log("已点击确认");
      this.isShowFilter = false;
    },
    // 筛选出现/隐藏
    showFilter (b) {
      console.log(b);
      this.isShowFilter = !b
    },
    taps (e) {
      this.tapId = e
      this.$router.push({ name: e })
    },
    tonewly () {
      this.$router.push({ name: 'newlyAdded' })
    },
    detailed (e) {
      this.$router.push({ name: 'archives' })
      sessionStorage.setItem('archices', JSON.stringify(e))
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

    this.tapId = this.$route.name

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
  position: relative;
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
  main {
    padding: 0 25px;
    box-sizing: border-box;
    flex: 1;
    background: #ffffff;
    .search {
      height: 85px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .iconfont {
        font-size: 37px;
      }
      input {
        width: 558px;
        border-radius: 50px;
        height: 55px;
        background: #f5f5f5;
        outline: none;
        border: none;
      }
    }
    .taps {
      height: 100px;
      display: flex;

      li {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
      }
      .active {
        color: #2a87ff;
        border-bottom: 3px solid #2a87ff;
      }
    }
  }
  footer {
    height: 92px;
    background: #f5f5ff;
    padding: 0 25px;
    box-sizing: border-box;
    .down {
      background: #f5f5f5;
      height: 92px;
      display: flex;
      justify-content: space-between;
      font-size: 30px;
      color: #2c87fa;
      align-items: center;
      .middle {
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
        .middle_c {
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
  .showFliter {
    position: absolute;
    top: 150px;
    right: 0;
    width: 100%;
    height: 1184px;
    z-index: 999;
    background: #0000006e;
    & > .content {
      position: absolute;
      top: 0;
      right: 0;
      width: 70%;
      height: 1184px;
      display: flex;
      flex-direction: column;
      & > .main {
        padding: 0 50px;
        box-sizing: border-box;
        flex: 1;
        background: #fff;
        & > .status,
        .property,
        .source {
          margin-top: 46px;
          width: 100%;
          height: auto;
          & > .top {
            font-size: 28px;
            font-weight: 500;
            margin-bottom: 40px;
          }
          & > .bottom {
            height: 120px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: space-between;
            & > div {
              width: 130px;
              height: 50px;
              line-height: 50px;
              text-align: center;
              padding: 0 20px;
              box-sizing: border-box;
              font-size: 22px;
              background: #ccc;
              border-radius: 26px;
            }
          }
        }
      }
      & > .footer {
        width: 100%;
        height: 94px;
        display: flex;
        flex-shrink: 0;
        & > button {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 34px;
          outline: none;
          border: none;
          color: #fff;
        }
        .reset {
          background: #ccc;
        }
        .affirm {
          background: #2988ff;
        }
      }
    }
  }
}
</style>