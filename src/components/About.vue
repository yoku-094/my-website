<template>
  <div class="about">
    <div class="outer-frame">
      <div class="contaner">
        <div class="personal-data">
          <p>
            1988年生まれ、しし座のO型。<br />
            エンジニア歴は、今年の４月で１年半になりました。<br />
          </p>
          <p>
            幼少から各地を渡り歩き、引っ越した回数は計10回。<br />
            一番長いのは愛知で、小学４年生から高校卒業まで過ごしました。<br />
            読書、旅行、刀剣や空想文学などが好きです。<br />
          </p>
        </div>
        <div class="work-history">
          <p>
            職業訓練校でWebアプリ開発を学ぶ機会を得て、エンジニアの道に進みました。<br />
            現在は、飲食店向けのWeb・iOSアプリ開発に携わっています。<br />
            フロント・バックともに分け隔て無く開発できる環境で、日々楽しく奮闘しています。
          </p>
          <p>
            最近は、デザインに関わっている時が一番ワクワクします。<br />
            知らないことが沢山あるので、知識や技術を学ぶのがとても楽しいです。<br />
            ただフロントを学べば学ぶほど、バックの知識の必要性も改めて実感します。<br />
          </p>
        </div>
        <div class="future-goals">
          <p>そんな今の目標は、デザインのできるWebエンジニアになることです。</p>
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
  font-size: 16px;

  .outer-frame {
    padding: 30px;
    background: repeating-linear-gradient(
      -45deg,
      #fad3e8,
      #fad3e8 5px,
      #ffffff 5px,
      #ffffff 12px
    );
    // transform: rotate(-4deg);
    border-radius: 50px;
    filter: drop-shadow(2px 4px 6px gray);

    .contaner {
      padding: 20px 40px;
      text-align: left;
      background: #ffffff;
      line-height: 2;
      border: solid 4px #f0838c;
      border-radius: 30px;
    }
  }

  p {
    color: #f06571;
    letter-spacing: 2px;
  }
}
.personal-data,
.future-goals {
  display: inline-block;
}
</style>
