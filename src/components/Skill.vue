<template>
  <div class="skill">
    <div class="skill-contaner">
      <div class="skill-card">
        <div class="icon-group front-lang">
          <img
            class="html5"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <img
            class="css3"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <img
            class="bootstrap"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
          />
          <img
            class="javascript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
        </div>
      </div>
      <div class="skill-card">
        <div class="back-lang">
          <img
            class="java"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          />
        </div>
      </div>
      <div class="skill-card">
        <div class="cellphone-lang">
          <img
            class="swift"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
          />
        </div>
      </div>
      <div class="skill-card">
        <div class="framework">
          <img
            class="vuejs"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
          />
          <img
            class="spring"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
          />
        </div>
      </div>
      <div class="skill-card">
        <div class="database">
          <img
            class="mysql"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          />
          <img
            class="postgresql"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          />
        </div>
      </div>
      <div class="skill-card">
        <div class="source-admin">
          <img
            class="git"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
          <img
            class="gitlab"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
          />
          <img
            class="github"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
          <img
            class="sourcetree"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sourcetree/sourcetree-original.svg"
          />
        </div>
      </div>
      <div class="skill-card">
        <div class="dev-tools">
          <img
            class="vscode"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          />
          <img
            class="adobexd"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"
          />
          <img
            class="figma"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          />
        </div>
      </div>
      <div class="skill-card">
        <div class="tools">
          <img
            class="jira"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
          />
          <img
            class="slack"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  components: {},
  data() {
    return {
      value: 3,
    };
  },
};
</script>

<style lang="scss" scoped>
.skill {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.skill-contaner {
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 40px;
  filter: drop-shadow(-30px 30px 12px rgb(31 0 0));
}
.skill-card {
  background: whitesmoke;
}
img {
  width: 50px;
  padding: 10px;
}
</style>
