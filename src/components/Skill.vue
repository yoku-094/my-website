<template>
  <div class="skill">
    <!-- スキルボックス -->
    <div class="skill-contaner">
      <div class="outer-frame">
        <div class="skill-card">
          <div class="title">Work</div>
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
            <img
              class="java"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            />
            <img
              class="swift"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
            />
            <img
              class="vuejs"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            />
            <img
              class="spring"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
            />
            <img
              class="mysql"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            />
            <img
              class="gitlab"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
            />
            <img
              class="sourcetree"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sourcetree/sourcetree-original.svg"
            />
            <img
              class="figma"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            />
            <img
              class="jira"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
            />
            <img
              class="slack"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
            />
          </div>
          <modal :modalItems="modalItems[0]"></modal>
        </div>
      </div>
      <div class="outer-frame">
        <div class="skill-card">
          <div class="title">Other</div>
          <div class="icon-group back-lang">
            <img
              class="github"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
            <img
              class="postgresql"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            />
            <img
              class="adobexd"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"
            />
          </div>
          <modal :modalItems="modalItems[1]"></modal>
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
          modalTtl: "coming soon...",
          // modalContent1: "モーダル１が立ち上がった",
        },
        {
          modalTtl: "coming soon...",
          // modalContent: "モーダル２が立ち上がった",
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
  width: calc(100% - 200px);
  height: 100%;
  background-color: rgba(39, 190, 132, 0.5);

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
  grid-template-columns: repeat(2, calc(100% - 508px));
  column-gap: 60px;

  button {
    padding: 0px;
  }

  .outer-frame {
    background: #fffefa;
    padding: 20px;
    border: solid #cecece;
  }

  .skill-card {
    background: #fffefa;
    padding: 20px;
    border: solid 2px #007054;
    outline: solid 4px #007054;
    outline-offset: 5px;
    margin: 6px;

    .title {
      width: 150px;
      margin: 10px auto 20px;
      padding-top: 10px;
      padding-bottom: 10px;
      border-top: dotted 2px #007054;
      border-bottom: dotted 2px #007054;
      color: #007054;
    }

    /** アイコン整列用グリッド */
    .icon-group {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);

      /** アイコン */
      img {
        width: 60px;
        padding: 14px;
      }
    }
  }
}
</style>
