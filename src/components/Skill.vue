<template>
  <div class="skill">
    <!-- スキルボックス -->
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
        <modal :modalItems="modalItems[0]"></modal>
      </div>
      <div class="skill-card">
        <div class="icon-group back-lang">
          <img
            class="java"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          />
        </div>
        <modal :modalItems="modalItems[1]"></modal>
      </div>
      <div class="skill-card">
        <div class="icon-group cellphone-lang">
          <img
            class="swift"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
          />
        </div>
      </div>
      <div class="skill-card">
        <div class="icon-group framework">
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
        <div class="icon-group database">
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
        <div class="icon-group source-admin">
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
        <div class="icon-group dev-tools">
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
        <div class="icon-group tools">
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
import Modal from "../components/modal/Modal.vue";

export default {
  name: "Work",
  components: {
    Modal,
  },
  data() {
    return {
      showContent: false,
      modalItems: [
        {
          modalTtl: "モダール１",
          modalContent: "モーダル１が立ち上がった",
        },
        {
          modalTtl: "モダール２",
          modalContent: "モーダル２が立ち上がった",
        },
      ],
    };
  },
  methods: {
    openModal: function () {
      this.showContent = true;
    },
    closeModal: function () {
      this.showContent = false;
    },
  },
};
</script>

<style lang="scss" scoped>
/** 画面設定 */
.skill {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/** モーダル */
#overlay {
  /** 要素を重ねた時の順番 */
  z-index: 1;

  /** 画面全体を覆う設定 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /**画面の中央に要素を表示させる設定 */
  display: flex;
  align-items: center;
  justify-content: center;
}
#content {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}

.skill-contaner {
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 40px;

  button {
    padding: 0px;
  }

  .skill-card {
    background: whitesmoke;

    /** アイコン整列用グリッド */
    .icon-group {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);

      /** アイコン */
      img {
        width: 50px;
        padding: 10px;
      }
    }
  }
  .skill-card:hover {
    box-shadow: 0px 0px 8px 12px rgb(50 0 0);
  }
}
</style>
