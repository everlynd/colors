<template>
  <div class="mainSection">
    <div class="mobile__heading" v-show="watcher">
      <div class="mobile__breadcrumbs">
        <span>главная</span>
        <div class="dot"></div>
        <span>продукты</span>
        <div class="dot"></div>
        <span>краски</span>
      </div>
      <h1>Краски</h1>
    </div>
    <div class="overlay" v-if="droped" @click="drop"></div>
    <div class="overlay" v-if="mbShow" @click="mobileShow"></div>
    <aside :class="{ mobileShow: mbShow }">
      <div
        class="checkbox__container"
        v-for="(item, index) in boxes"
        :key="index"
      >
        <input
          type="checkbox"
          v-model="item.checked"
          class="toggle__input"
          :name="item.title"
          :id="index"
          @click="sortByCategories(item)"
        />
        <label :for="index" class="toggle__text">
          {{ item.title }}
        </label>
      </div>
    </aside>
    <div class="mainsection__container">
      <div class="info__container">
        <span class="items mobile-none">412 товаров</span>
        <span class="items mobile-filter" @click="mobileShow">фильтры</span>
        <div class="wrapper" @click="drop">
          <Select
            :options="options"
            :selected="selected"
            @sortMin="sortMin"
            @sortMax="sortMax"
            @sortPop="sortPop"
            @sortNew="sortNew"
          />
        </div>
      </div>
      <div class="cart__section">
        <!-- <template v-if="isFiltered"></template> -->
        <cart
          @addToBasket="addToBasket"
          v-for="(cart, index) in filteredProducts"
          :key="index"
          :cart="cart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import cart from "@/components/Cart.vue";
import Select from "@/components/select.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      boxes: [
        {
          title: "новинки",
          checked: false,
          value: "new",
        },
        {
          title: "есть в наличии",
          checked: false,
          value: "available",
        },
        {
          title: "контрактные",
          checked: false,
          value: "contract",
        },
        {
          title: "эксклюзивные",
          checked: false,
          value: "exclusive",
        },
        {
          title: "распродажа",
          checked: false,
          value: "sale",
        },
      ],
      droped: false,
      options: [
        { name: "сначала дорогие", value: "rich" },
        { name: "сначала недорогие", value: "chip" },
        { name: "сначала популярные", value: "pop" },
        { name: "сначала новые", value: "new" },
      ],
      selected: "Сначала дорогие",
      sortedProducts: [],
      mbShow: false,
    };
  },
  computed: {
    ...mapGetters(["BASKET", "PRODUCTS"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
    watcher() {
      if (this.width <= 390) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ...mapActions(["add_to_cart"]),
    mobileShow() {
      this.mbShow = !this.mbShow;
    },

    addToBasket(data) {
      this.add_to_cart(data);
    },
    drop() {
      this.droped = !this.droped;
    },
    sortMin() {
      this.filteredProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
      this.selected = "Сначала недорогие";
    },
    sortMax() {
      this.filteredProducts.sort((a, b) => (b.price > a.price ? 1 : -1));
      this.selected = "Сначала дорогие";
    },
    sortPop() {
      this.filteredProducts.sort((a) => (a.pop ? -1 : 0));
      this.selected = "Сначала популярные";
    },
    sortNew() {
      this.filteredProducts.sort((a) => (a.new ? -1 : 0));
      this.selected = "Сначала новые";
    },
    sortByCategories(item) {
      this.PRODUCTS.map((i) => {
        if (!item.checked) {
          if (i.category === item.value) {
            this.sortedProducts.push(i);
          }
        } else {
          const idx = this.sortedProducts.findIndex(
            (n) => n.category == item.value
          );
          if (idx !== -1) {
            this.sortedProducts.splice(idx, 1);
          }
        }
      });
    },
  },
  components: { cart, Select },
  props: ["width"],
};
</script>


<style lang="scss" scoped>
.mainSection {
  display: flex;
  margin-top: 40px;
  padding: 30px 40px 30px 40px;
}
aside {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 8rem 0 0;

  label {
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;
  }
}

.checkbox__container {
  display: flex;
  margin: 10px 0;
}
.info__container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 5px 6px 5px 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.cart__section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

input[type="checkbox"] + label {
  cursor: pointer;
}
input[type="checkbox"]:not(checked) {
  position: absolute;
  opacity: 0;
}
input[type="checkbox"]:not(checked) + label {
  position: relative;
  padding: 0 0 0 70px;
}
input[type="checkbox"]:not(checked) + label:before {
  content: "";
  position: absolute;
  top: -5px;
  left: 21px;
  width: 36px;
  height: 22px;
  border-radius: 40px;
  background: #f2f2f2;
}
input[type="checkbox"]:not(checked) + label:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 29px;
  width: 8px;
  height: 8px;
  border-radius: 10px;
  background: #1f2020;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
}
input[type="checkbox"]:checked + label:before {
  background: #7bb899;
}
input[type="checkbox"]:checked + label:after {
  left: 42px;
}

.items:last-child {
  cursor: pointer;
  position: relative;
}

.dropdown {
  position: absolute;
  width: 231px;
  z-index: 7;
  top: -17px;
  left: -85px;
  background-color: #fff;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #1f2020;
  div {
    text-align: left;
    padding: 18px 0px 18px 25px;
    width: 90%;
    &:hover {
      background: #7bb899;
    }
  }
}
.overlay {
  width: 110%;
  top: 0px;
  right: 0;
  height: 147rem;
  position: absolute;
  z-index: 6;
  background: rgba(0, 0, 0, 0.5);
}
.mobile-filter {
  display: none;
}
.mobileShow {
  bottom: 0px !important;
  z-index: 9999 !important;
  display: flex !important;
  position: fixed !important;
  background: white !important;
  border-radius: 24px 24px 0px 0px !important;
  left: 0 !important;
  width: 100vw !important;
  padding: 50px 0 100px 0 !important;
  &::after {
    content: "";
    position: absolute;
    width: 28px;
    height: 4px;
    background: #1f2020;
    opacity: 0.6;
    border-radius: 40px;
    top: 12px;
    left: 46%;
  }
}
.mobile__heading {
  position: relative;
  margin-left: 8px;
  .mobile__breadcrumbs {
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #1f2020;
    opacity: 0.3;
    position: absolute;
    bottom: 102px;
    h1 {
      font-weight: normal;
      font-size: 36px;
      line-height: 88%;
      letter-spacing: -0.04em;
      color: #1f2020;
    }
    .dot {
      width: 5px;
      height: 5px;
      background: #c4c4c4;
      opacity: 0.8;
      border-radius: 50%;
      margin: 0 8px;
    }
  }
}
</style>