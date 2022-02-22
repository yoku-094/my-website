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
      <el-tab-pane label="skill" class="work"><Skill></Skill></el-tab-pane>
      <el-tab-pane label="blog" class="blog"><Blog></Blog></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Top from "../components/Top.vue";
import About from "../components/About.vue";
import Skill from "../components/Skill.vue";
import Blog from "../components/Blog.vue";
import "../assets/sass/style.scss";

export default {
  name: "Home",
  components: {
    Top,
    About,
    Skill,
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
