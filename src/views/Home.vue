<template>
  <div class="home">
    <el-tabs
      v-model="activeName"
      :tab-position="tabPosition"
      style="height: 200px"
      @tab-click="handleClick"
    >
      <el-tab-pane label="Home">Home</el-tab-pane>
      <el-tab-pane label="About">About</el-tab-pane>
      <el-tab-pane label="Work" name="first"><Work>Work</Work></el-tab-pane>
    </el-tabs>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Work from "../components/Work.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Work,
  },
  data() {
    return {
      imgPath: require("@/assets/logo.png"),
      tabPosition: "left",
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
