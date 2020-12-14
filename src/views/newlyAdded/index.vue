<template>
  <div id="newlyAdded">
    <header>
      <Classa :title="title" :goBackmsg='goBackmsg'/>
    </header>
    <main>
      <div class="main_title">
        <ul class="main_title_c">
          <i
            :class="whitap == 0 ? 'iconfont icon-yuan' : 'iconfont icon-circle'"
          ></i>
          <li>基本信息</li>
        </ul>
        <p></p>
        <ul class="main_title_c">
          <i
            :class="whitap == 1 ? 'iconfont icon-yuan' : 'iconfont icon-circle'"
          ></i>
          <li>基本信息</li>
        </ul>
      </div>
      <div class="bground"></div>
      <div v-show="close" class="tips">
        <li><span class="red">*</span> 红色星号为必填项</li>
        <li class="bluebox"><span class="blue">*</span> 蓝色星号为完善项</li>
        <li class="close" @click="close = false">x</li>
      </div>
      <div class="table">
        <ul class="table_cell">
          <li>机械类别<span class="red">*</span></li>
          <li @click="category" class="tojump">  {{jxlb?jxlb:'请选取>'}} </li>
        </ul>
        <ul class="table_cell">
          <li>机械名称-型号<span class="red">*</span></li>
          <li @click="names"  class="tojump">请选取></li>
        </ul>
        <ul class="table_cell">
          <li>项目设备编码<span class="red">*</span></li>
          <li class="tojump">请填写</li>
        </ul>
        <ul class="table_cell">
          <li>机械来源<span class="red">*</span></li>
          <li @click="source" class="tojump">请选取></li>
        </ul>
        <ul class="table_cell">
          <li>产权单位<span class="red">*</span></li>
          <li class="tojump">请选取></li>
        </ul>
        <ul class="table_cell">
          <li>车牌号<span class="red">*</span></li>
          <li class="tojump">请填写</li>
        </ul>
        <ul class="table_cell">
          <li>现场照片<span class="red">*</span></li>
          <li class="tojump"></li>
        </ul>
        <ul class="betw">
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <i slot="default" class="iconfont icon-shangchuantupian_l"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span v-if="!disabled" class="el-upload-list__item-delete">
                  <i class="el-icon-download"></i>
                </span>
                <span v-if="!disabled" class="el-upload-list__item-delete">
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" alt="" />
          </el-dialog>
        </ul>
      </div>
      <div class="bground"></div>
      <div class="dates">
        <ul class="dates_c">
          <li>实际进场时间 <span class="red">* </span></li>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </ul>
        <ul class="dates_c">
          <li>拟定退场时间</li>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </ul>
        <ul class="dates_c">
          <li>设备管理员</li>
          <li>请选取></li>
        </ul>
        <ul class="dates_c">
          <li>使用单位 <span class="red">* </span></li>
          <li>请选取></li>
        </ul>
        <ul class="dates_c">
          <li>安装拆除单位 <span class="red">* </span></li>
          <li>请选取></li>
        </ul>
        <p class="howUse">用途</p>
      </div>
      <div class="save">
        保存并继续
      </div>
    </main>
  </div>
</template>

<script>
import Classa from '@/components/classA.vue'
export default {
  data () {
    return {
      goBackmsg:'nume1',
      title: '新增机械',
      whitap: 0,
      close: true,
      dialogVisible: false,
      value1: null,
      jxlb:''
    }
  },
  mounted(){
   this.jxlb=this.$route.params.name
  },
  methods: {
    category(){
      this.$router.push({name:'category'})
    },
    names(){
      this.$router.push({name:'names'})
    },
    source(){
      this.$router.push({name:'source'})
    }
   
  },
  components: {
    Classa
  }


}
</script>

<style lang='scss'>
#newlyAdded {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  main {
    flex: 1;
    overflow-y: scroll;
    .main_title {
      padding: 0 53px;
      box-sizing: border-box;
      height: 156px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        width: 470px;
        height: 4px;
        background: #999999;
      }
      .main_title_c {
        .iconfont {
          font-size: 60px;
        }
        .icon-yuan {
          box-shadow: 0 0 5px 5px blue;
          border-radius: 50%;
          background: blue;
        }
        width: 118px;
        height: 118px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }
    .red {
      color: red;
    }
    .blue {
      color: blue;
    }
    .bground {
      width: 100%;
      height: 15px;
      background: #f5f5f5;
    }
    .tojump {
      color: #999999;
    }
    .tips {
      width: 707px;
      height: 57px;
      background: #fff1d6;
      border: 1px solid #dac46f;
      display: flex;
      align-items: center;
      padding: 0 15px;
      margin: 18px auto 35px;
    }
    .bluebox {
      flex: 1;
      margin-left: 15px;
    }
    .table {
      width: 100%;
      padding: 0 22px;
      box-sizing: border-box;

      .table_cell {
        height: 111px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #9999;
      }
      .betw {
        height: 226px;
        display: flex;
        align-items: center;
        padding: 0 62px;
      }
    }
    .dates {
      
      padding: 25px;
      box-sizing: border-box;
      .dates_c {
        height: 106px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #9999;
        align-items: center;
        .el-input__prefix {
          right: 0.06667rem;
          transition: all 0.3s;
        }
        input {
          border: none;
        }
      }
      .howUse{
        color: #999999;
        margin-top: 20px;
        font-size: 30px;
      }
    }
    .save{
      
      text-align: center;
      line-height: 91px;
      font-size: 40px;
      font-weight: 600;
      color: white;
      background: #2988fe;
      margin-top: 154px;
      height: 91px;
    }
  }
}
</style>