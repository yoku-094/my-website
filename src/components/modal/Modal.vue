<template>
  <div>
    <ModalBtn :modalFlg="modalFlg" @modal-clicked="modalFlg = $event" />
    <ModalContents
      :modalFlg="modalFlg"
      @modal-clicked="modalFlg = $event"
      :modalTtl="modalItems.modalTtl"
      :modalContent="modalItems.modalContent"
    />
  </div>
</template>

<script>
import ModalContents from "./ModalContents.vue";
import ModalBtn from "./ModalBtn.vue";

export default {
  name: "Modal",
  components: {
    ModalContents,
    ModalBtn,
  },
  props: ["modalItems"],
  data() {
    return {
      modalFlg: false,
    };
  },
};
</script>
