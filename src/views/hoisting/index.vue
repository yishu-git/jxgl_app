<template>
  <div id="hoisting">
    <header>
      <Classa :title="title" :goBackmsg="goBackmsg" />
    </header>
    <main>
      <div class="time">
        <p>2020.11.30 <i class="iconfont"></i></p>
        <p>
          <label
            ><input
              type="checkbox"
              name="sex"
              value="只看未生效"
            />只看未生效</label
          >
        </p>
      </div>
      <div class="car">
        <p>汽车起重机吊装令</p>
        <p style="color: #959595">(0)</p>
      </div>
      <div class="carry">
        <div>
          <p>携带式起重机吊装令</p>
          <p style="color: #959595">(2)</p>
        </div>
        <ul>
          <li>
            <span>11:00</span>
            <span>13:00</span>
          </li>
          <li></li>
          <li>
              <div>2020.11.30 携带式起重机 QUY50A </div>
              <div>项目设备编码：QZJ-08-078-Z386 <span>司机：杨富</span></div>
          </li>
        </ul>
        <ul>
          <li>
            <span>11:00</span>
            <span>13:00</span>
          </li>
          <li></li>
          <li>
                            <div>2020.11.30 携带式起重机 QUY50A <span style="color:red">未生效</span></div>
              <div>项目设备编码：QZJ-08-078-Z386 <span>司机：杨富</span></div>
          </li>
        </ul>
      </div>
      <div class="gate">
        <p>门式起重机吊装令</p>
        <p style="color: #959595">(0)</p>
      </div>
      <div class="tower">
        <p>塔式起重机吊装令</p>
        <p style="color: #959595">(0)</p>
      </div>
    </main>
    <footer>+ 吊装令填写</footer>
  </div>
</template>

<script>
import Classa from "@/components/classA.vue";
export default {
  name: "hoisting",
  data() {
    return {
      title: "吊装作业情况",
      goBackmsg: "nume1",
    };
  },
  components: {
    Classa,
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#hoisting {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  & > main {
    flex: 1;
    background: #f5f2f9;
    & > div {
      width: 100%;
      height: 105px;
      padding: 0px 35px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      background: #fff;
      font-size: 26px;
    }
    & > .time {
      color: #3082e5;

      & > p {
        &:nth-child(2) {
          color: #616161;
          & > label {
            width: 185px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-right: 20px;
          }
        }
      }
    }
    & > .carry {
      height: auto;
      display: flex;
      flex-direction: column;
      padding: 0;
      & > div {
        width: 100%;
        height: 105px;
        padding: 0px 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        font-size: 26px;
      }
      & > ul {
        width: 100%;
        height: 140px;
        padding: 30px;
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #ccc;
        &:nth-of-type(1){
            padding-top: 0;
        }
        & > li {
          height: 100%;
          &:nth-child(1) {
            display: flex;
            flex-direction: column;
            align-content: space-between;
            justify-content: space-between;
          }
          &:nth-child(2){
              height: 100%;
              border:3px solid #56bf20;
              background: #56bf20;
              margin: 0px 16px ;
          }
          &:nth-child(3){
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              &>div{
                  display: flex;
                  justify-content: space-between;
                  &:nth-child(1){
                      font-size: 24px;
                  }
                  &:nth-child(2){
                      font-size: 20px;
                      color: #262626;
                  }
              }
          }
        }
      }
    }
  }
  & > footer {
    width: 100%;
    height: 100px;
    background: #2988fc;
    line-height: 100px;
    text-align: center;
    color: #fff;
    font-size: 32px;
  }
}
</style>