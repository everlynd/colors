<template>
  <div class="basket-item">
    <div class="img__container">
      <img
        :src="require(`@/assets/colors/${basket_data.img}`)"
        alt=""
        width="96px"
        height="96px"
      />
    </div>
    <div class="info__container">
      <p>{{ basket_data.title }}</p>
      <div>{{ basket_data.price * basket_data.quantity }}</div>
    </div>
    <div class="btns__container">
      <button @click="minus">-</button>
      <span>{{ basket_data.quantity }}</span>
      <button @click="plus">+</button>
      <span @click="delFromBasket" class="close-btn">&times;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["basket_data"],
  mounted() {
    this.$set(this.basket_data, "quantity", 1);
  },
  methods: {
    delFromBasket() {
      this.$emit("delFromBasket");
    },
    plus() {
      this.basket_data.quantity++;
    },
    minus() {
      if (this.basket_data.quantity == 0) {
        this.basket_data.quantity = 0;
      } else {
        this.basket_data.quantity--;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.basket-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
}
.info__container {
  padding: 8px;
  p {
    margin: 12px 0 0px 2px;
  }
  div {
    margin-top: 4px;
    font-weight: 600;
    padding: 12px 0;
    &::after {
      content: "₽";
    }
  }
}
.btns__container {
  display: flex;
  align-items: center;
  .close-btn {
    font-size: 30px;
    font-weight: 100;
    opacity: 0.2;
    padding-bottom: 5px;
    margin-left: 22px;
  }
  button {
    outline: none;
    border: none;
    background: #f2f2f2;
    border-radius: 4px;
    margin: 0 14px;
    padding: 0px 18px 0px 18px;
    font-size: 20px;
  }
}
</style>