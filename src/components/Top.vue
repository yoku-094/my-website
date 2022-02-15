<template>
  <div class="top">
    <h1>This is an top page This is an top page</h1>
    <h2>This is an top page</h2>
    <h3>This is an top page</h3>
    <h1>This is an top page</h1>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
h1,
h2,
h3 {
  margin: 0px;
}
</style>
