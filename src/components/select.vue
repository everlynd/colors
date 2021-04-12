<template>
  <div class="select">
    <p class="select-title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}&#9660;
    </p>
    <div
      class="options"
      v-show="areOptionsVisible"
      v-for="name in options"
      :key="name.name"
    >
      <p @click="sorterMax">Сначала дорогие</p>
      <p @click="sorterMin">Сначала недорогие</p>
      <p @click="sorterPop">Сначала популярные</p>
      <p @click="sorterNew">Сначала новые</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    hideSelect() {
      this.areOptionsVisible = false;
    },
    sorterMin() {
      this.$emit("sortMin");
    },
    sorterMax() {
      this.$emit("sortMax");
    },
    sorterPop() {
      this.$emit("sortPop");
    },
    sorterNew() {
      this.$emit("sortNew");
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
  props: ["options", "selected"],
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  width: 200px;
  cursor: pointer;
  p {
    margin: 0;
  }
}
.options {
  position: absolute;
  background-color: #fff;
  top: -15px;
  right: 0;
  width: 100%;
  z-index: 10;
  p {
    padding: 15px;
  }
  text-align: left;
}
.select-title {
  text-align: left;
  padding: 0 15px;
  white-space: nowrap;
}
.options {
  p:hover {
    background: #7bb899;
  }
}
</style>