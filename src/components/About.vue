<template>
  <div class="about">
    <div class="contaner">
      <div class="personal-data">
        <p>
          1988年生まれ、しし座のO型。<br />
          出生地は栃木県、出身地は福岡県。<br />
        </p>
        <p>
          幼少から引っ越しを繰り返し、総計10回。<br />
          歴代居住地は、福岡、愛知、静岡、東京、千葉、埼玉、栃木。<br />
          好きなことは、ひとり旅。好きなものは、神社と刀剣。<br />
        </p>
      </div>
      <div class="work-history">
        <p>
          高校卒業後、国家公務員として約4年間勤務。のちに結婚し、専業主婦として家庭内サポートに専念。<br />
          婚姻関係解消後は倉庫バイト、小学校事務を経て、職業訓練校にてWebアプリ開発を学ぶ機会を得る。<br />
          職業訓練校修了後、ご縁あって現勤務先に出会い、エンジニアとして無事に再出発を果たす。<br />
        </p>
        <p>
          現在は、飲食店向けのWeb・iOSアプリ開発に携わっている。<br />
          フロント・バック分け隔て無く開発をこなし、デザインツールで画面レイアウト作成を行うことも。<br />
          それをきっかけにデザイン全般に興味を持ち、時間を見つけて知識と技術の習得、研鑽に努めている。<br />
        </p>
      </div>
      <div class="future-goals">
        <p>目標は、デザインのできるWebエンジニアになること。</p>
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
  font-size: 16px;

  .contaner {
    padding: 4% 8%;
    text-align: left;
    filter: drop-shadow(0px 0px 6px rgb(0, 113, 70));
    transform: rotate(-4deg);
    background: whitesmoke;
    line-height: 2;
  }

  p {
    color: #f36974;
  }
}
.personal-data,
.future-goals {
  display: inline-block;
}
</style>
