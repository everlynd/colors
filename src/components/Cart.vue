<template>
  <div class="cart">
    <div class="cart__item">
      <div class="img__container">
        <img
          :src="require(`@/assets/colors/${cart.img}`)"
          alt="картинка "
          @mouseover="mouseOver"
        />
      </div>
      <p>{{ cart.title }}</p>
      <div class="cart__info">
        <span>{{ cart.price }}</span>
        <button v-bind:class="{ active: isActive }" @click="addToBasket">
          +
        </button>
      </div>
      <!-- <hr /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    mouseOver() {
      this.isActive = !this.isActive;
    },
    addToBasket() {
      this.$emit("addToBasket", this.cart);
    },
  },

  props: ["cart"],
};
</script>

<style lang="scss" scoped>
.cart {
  font-weight: 300;
  font-size: 16px;
  line-height: 112%;
  flex-basis: 1px;
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.02em;
    color: #1f2020;
  }
  span {
    font-weight: 600;
    padding: 12px 0;
    &::after {
      content: "₽";
    }
  }
}
.cart__item {
  margin: 8px 12px 0 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}
.cart__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    cursor: pointer;
    outline: none;
    display: none;
    background: #7bb899;
    border-radius: 8px;
    border: none;
    padding: 0px 31px 0px 31px;
    font-size: 30px;
  }
}
.img__container {
  width: 278px;
  height: 278px;
  text-align: center;
  vertical-align: middle;
  line-height: 29;
}
.active {
  display: block !important;
}
</style>