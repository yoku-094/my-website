<template>
  <div class="home">
    <!-- サイドメニュー（タブ）の設定 -->
    <el-tabs
      class="side-menu"
      v-model="activeName"
      :tab-position="tabPosition"
      @tab-click="handleClick"
    >
      <el-tab-pane label="Top" name="first" class="top">
        <Top></Top>
      </el-tab-pane>
      <el-tab-pane label="about" class="about"><About></About></el-tab-pane>
      <el-tab-pane label="work" class="work"><Work></Work></el-tab-pane>
      <el-tab-pane label="blog" class="blog"><Blog></Blog></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Top from "../components/Top.vue";
import About from "../components/About.vue";
import Work from "../components/Work.vue";
import Blog from "../components/Blog.vue";
import "../assets/sass/style.scss";

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

<style lang="scss" scoped>
.home {
  position: relative;
}
</style>
