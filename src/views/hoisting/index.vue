<template>
  <div id="hoisting">
    <header>
      <Classa :title="title" :goBackmsg="goBackmsg" />
    </header>
    <main></main>
    <footer>

    </footer>
  </div>
</template>

<script>
import Classa from '@/components/classA.vue'
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
#hoisting{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    &>main{
        flex: 1;
    }
    &>footer{
        width: 100%;
        height: 95px;
        background: #2988fc;
    }
}
</style>