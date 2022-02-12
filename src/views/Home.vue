<template>
  <div class="home">
    <!-- サイドメニュー（タブ）の設定 -->
    <el-tabs
      v-model="activeName"
      :tab-position="tabPosition"
      style="height: 200px"
      @tab-click="handleClick"
    >
      <el-tab-pane label="Top" name="first"><Top>Top</Top></el-tab-pane>
      <el-tab-pane label="About"><About>About</About></el-tab-pane>
      <el-tab-pane label="Work"><Work>Work</Work></el-tab-pane>
      <el-tab-pane label="Blog"><Blog>Blog</Blog></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Top from "../components/Top.vue";
import About from "../components/About.vue";
import Work from "../components/Work.vue";
import Blog from "../components/Blog.vue";

export default {
  name: "Home",
  components: {
    Top,
    About,
    Work,
    Blog,
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
