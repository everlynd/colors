<template>
  <div class="slider-item">
    <button
      @click="$emit('nextSlide')"
      class="btn-next arrow arrow-right"
    ></button>
    <div class="breadcrumbs">
      <span>главная</span>
      <div class="dot"></div>
      <span>продукты</span>
      <div class="dot"></div>
      <span>краски</span>
    </div>
    <div class="text-block">
      <h1>{{ item.title }}</h1>
      <p>{{ item.body }}</p>
      <p>{{ item.p }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.3;
  position: absolute;
  top: 30px;
  margin-left: 60px;
  .dot {
    width: 5px;
    height: 5px;
    background: #c4c4c4;
    opacity: 0.8;
    border-radius: 50%;
    margin: 0 8px;
  }
}
.slider-item {
  display: flex;
  align-items: center;
  height: auto;
  background: url("../assets/img1.png") 100% 100% no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;

  h1 {
    font-weight: normal;
    font-size: 72px;
    line-height: 88%;
    letter-spacing: -0.02em;
    color: #ffffff;
    // margin: 0px 838px 28px;
    margin: 36px auto;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin: 0;
  }
}
.text-block {
  margin: 173px 0;
  padding-bottom: 40px;
  text-align: center;
  width: 100vw;
}
.btn-next {
  position: absolute;
  bottom: 168px;
  right: 19%;
  border: none;
  outline: none;
  background: rgba(0, 0, 0, 0);
}
.arrow {
  width: 30px;
  height: 30px;
  border-top: 2px solid white;
  border-right: 2px solid white;
  margin-right: 60px;
}
.arrow-right {
  transform: rotate(45deg);
}
</style>