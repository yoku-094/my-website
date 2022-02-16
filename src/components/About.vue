<template>
  <div class="about">
    <div class="contaner">
      <div class="personal-data">
        <div class="row">
          <div class="first-name">Y</div>
          <div class="underline-area">
            <span class="family-name">.okushima</span>
            <span class="birthday">1988.07</span>
          </div>
        </div>
      </div>
      <div class="work-history">
        <div class="row">
          <div class="history-col">
            <span class="period">2020 -</span>
            <span class="job-title">application developer</span>
          </div>
          <div class="history-col">
            <span class="period">2018 - 2019</span>
            <span class="job-title">school administrator</span>
          </div>
          <div class="history-col">
            <span class="period">2011 - 2017</span>
            <span class="job-title">housewife</span>
          </div>
          <div class="history-col">
            <span class="period">2007 - 2010</span>
            <span class="job-title">government official</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>

<style lang="scss" scoped>
.about {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #290707;

  .contaner {
    padding-top: 30px;
    padding-left: 70px;
    padding-bottom: 70px;
    filter: drop-shadow(-30px 30px 12px rgb(31 0 0));
    transform: rotate(-5deg);
    background: whitesmoke;
  }
}
/** 名前・生年月 */
.personal-data {
  display: inline-block;
  text-align: center;
  height: 130px;
  padding-right: 170px;

  .row {
    display: flex;
    font-family: "qubeckmagnetic";
    letter-spacing: 4px;
    text-align: center;
    padding-right: calc(100% - 950px);

    .first-name {
      width: 100px;
      font-size: 50px;
      font-weight: 900;
    }
    .family-name {
      font-size: 30px;
      padding-left: 14px;
      border-bottom: 100px;
    }
    .birthday {
      padding-left: 260px;
      font-size: 20px;
    }

    /** 下線 */
    .underline-area {
      width: 500px;
      height: 58px;
      padding-top: 50px;
      border-bottom: 1px solid #290707;
    }
  }
}

/** 職歴 */
.work-history {
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    height: 70px;
  }

  .history-col {
    display: grid;
    grid-template-columns: 250px 300px;
    padding-left: 50px;
    text-align: left;
    letter-spacing: 4px;
  }
}
</style>
