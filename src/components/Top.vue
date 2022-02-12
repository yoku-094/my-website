<template>
  <div class="top">
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

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
