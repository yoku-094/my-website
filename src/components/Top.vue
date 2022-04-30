<template>
  <div class="top">
    <div class="greeting">
      <p>Welcome to my site</p>
      <h1>This is Yu's portfolio</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.greeting {
  width: calc(100% - 300px);
  margin: 0 auto;

  .title {
    padding-bottom: 50px;
    white-space: nowrap;
  }
  .text {
    text-align: left;
  }
}
</style>
