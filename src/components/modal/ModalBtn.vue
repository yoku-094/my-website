<template>
  <button class="btn modal" @click="modalClick">more</button>
</template>

<script>
export default {
  props: ["modalFlg"],
  data() {
    return {
      childModalFlg: this.modalFlg,
    };
  },
  methods: {
    modalClick() {
      this.childModalFlg = !this.modalFlg;
      this.$emit("modal-clicked", this.childModalFlg);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  background: #429e87;
  color: #fff;
  font-size: 20px;
  font-family: "OriginalSurfer-Regular";
  border: none;
  border-radius: 4px;
  padding: 14px 40px;
  margin-top: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
}
</style>
