<template>
  <div class="basket">
    <div class="basket-header">
      <div class="content__header">
        <h2>Корзина</h2>
        <button @click="close()" class="close"></button>
      </div>
      <div class="basket-content">
        <span>{{ basket_data.length }} товара</span>
        <span @click="clearBasket">очистить список</span>
      </div>
    </div>
    <basketItem
      v-for="(item, index) in basket_data"
      :basket_data="item"
      :key="index"
      :id="item.id"
      @delFromBasket="delFromBasket(index)"
    />
    <div class="basket__footer">
      <div class="footer-sum">
        <span>Итого</span>
        <span class="sum">{{ sum }}₽</span>
      </div>
      <div class="footer-btn">
        <button>оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<script>
import basketItem from "@/components/basketItem.vue";
import { mapActions } from "vuex";
export default {
  components: { basketItem },
  methods: {
    ...mapActions(["DELETE_FROM_BASKET", "cleanBasket"]),
    close() {
      this.$emit("close");
    },
    delFromBasket(index) {
      this.DELETE_FROM_BASKET(index);
    },
    clearBasket() {
      this.cleanBasket(this.basket_data);
    },
  },
  computed: {
    sum() {
      if (this.basket_data.length) {
        return this.basket_data
          .map((i) => i.price * i.quantity)
          .reduce((acc, cur) => acc + cur)
          .toLocaleString("ru");
      }
    },
  },
  props: ["basket_data"],
};
</script>

<style lang="scss" scoped>
.basket {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 9999;
  background-color: #fff;
  padding: 20px 40px 0px 40px;
  width: 520px;
  max-height: 100vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
}
.basket-content {
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  font-size: 14px;
  line-height: 112%;
  color: #1f2020;
  border-bottom: 1px solid #ccc;
  span {
    margin-bottom: 11px;
    cursor: pointer;
  }
}
.content__header {
  margin-bottom: 69px;
  display: flex;
  button {
    outline: none;
    cursor: pointer;
    margin-left: 356px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-top: 16px;
    border: 1px solid #ccc;
    // background-color: rgba(0, 0, 0, 0);
    background: url("../assets/x.svg") no-repeat 50% 50%;
  }
}
.basket-header {
  h2 {
    font-weight: 500;
    font-size: 30px;
    line-height: 88%;
    letter-spacing: -0.04em;
    color: #1f2020;
  }
}

.basket__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0;
}
.footer-sum {
  display: flex;
  flex-direction: column;
  span {
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #1f2020;
  }
  .sum {
    font-weight: 500;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #1f2020;
  }
}
.footer-btn {
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: #7bb899;
    border-radius: 4px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 20px 50px 20px 50px;
  }
}
</style>