<template>
  <div id="App">
    <div class="mobile-icons__header" v-show="width <= 390">
      <div class="time">{{ time }}</div>
      <div class="status-icons">
        <div class="signal-icon">
          <img :src="require(`@/assets/signal.svg`)" alt="" />
        </div>
        <div class="wifi-icon">
          <img :src="require(`@/assets/wifi.svg`)" alt="" />
        </div>
        <div class="battery-icon">
          <img :src="require(`@/assets/battery.svg`)" alt="" />
        </div>
      </div>
    </div>
    <div class="overlay" v-if="ISOPEN" @click="close"></div>
    <Basket v-show="ISOPEN" :basket_data="BASKET" @close="close" />
    <header>
      <nav>
        <div class="header__burger" @click="switcher"><span></span></div>
        <div class="header__logo">
          <a href="#">colors</a>
        </div>
        <ul class="header__nav" v-show="width >= 1065 || toggle">
          <li class="close-btn" @click="switcher">&times;</li>
          <li class="nav__item"><a href="#">продукты</a></li>
          <li class="nav__item"><a href="#">цвета</a></li>
          <li class="nav__item"><a href="#">вдохновение</a></li>
          <li class="nav__item"><a href="#">советы</a></li>
          <li class="nav__item"><a href="#">найти магазин</a></li>
        </ul>
      </nav>
      <div class="icons__block">
        <div class="header-phone__block">
          <span class="phone">+7 (495) 221-77-69</span>
          <span class="phone__notice">Заказать звонок</span>
        </div>
        <div class="header__icons">
          <div class="search__icon">
            <img src="@/img/search.svg" alt="searchIcon" />
          </div>
          <div class="profile__icon">
            <img src="@/img/profile.svg" alt="profileIcon" />
          </div>
          <div class="heart__icon">
            <img src="@/img/heart.svg" alt="heartIcon" />
          </div>
          <div class="cart__icon" @click="close">{{ BASKET.length }}</div>
        </div>
      </div>
    </header>
    <slider />
    <cartsection :width="width" />

    <footer></footer>
  </div>
</template>

<script>
import cartsection from "@/components/cartsection.vue";
import slider from "@/components/slider.vue";
import Basket from "@/components/Basket.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: { cartsection, slider, Basket },
  data() {
    return {
      toggle: true,
      width: 391,
    };
  },
  computed: {
    ...mapGetters(["BASKET", "ISOPEN"]),
    widthWatcher() {
      if (document.documentElement.clientWidth <= 1920) {
        return this.width;
      }
    },
    time() {
      return `${new Date()
        .getHours()
        .toLocaleString()}:${new Date().getMinutes().toLocaleString()}`;
    },
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  },
  props: ["basket_data"],
  methods: {
    ...mapActions(["close"]),
    switcher() {
      this.toggle = !this.toggle;
    },
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
};
</script>




<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap");
@import "@/assets/media.scss";
@import "normalize-scss";
@include normalize();
#App {
  font-family: "Inter", sans-serif;
}
.overlay {
  width: 100%;
  height: 147rem;
  position: absolute;
  z-index: 6;
  background: rgba(0, 0, 0, 0.5);
}
.container {
  width: 1920px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px 30px 40px;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
footer {
  height: 320px;
  background: #000000;
  margin-top: 150px;
}
a {
  text-decoration: none;
  color: black;
}
.header__logo {
  a {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 500;
    position: relative;
    &:after {
      top: 5px;
      left: 123px;
      position: absolute;
      content: "";
      width: 8px;
      height: 8px;
      background-color: black;
      display: block;
      border-radius: 50%;
    }
  }
}
.header__nav {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 0;
  letter-spacing: 0.06em;
  font-size: 14px;
  margin-left: 11em;
  .nav__item {
    margin: 0 0 0 24px;
  }
  .close-btn {
    display: none;
    outline: none;
    cursor: pointer;
    font-size: 30px;
    margin: -13px 0 0 0;
  }
}

.icons__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-phone__block {
  display: flex;
  flex-direction: column;
  margin-right: 6em;
  .phone {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
  }
  .phone__notice {
    color: #1f2020;
    font-size: 14px;
  }
}
.header__icons {
  display: flex;
  img {
    cursor: pointer;
  }
  .cart__icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #7bb899;
    text-align: center;
    font-size: 12px;
    line-height: 21px;
    font-weight: 500;
    cursor: pointer;
  }

  div {
    margin: 0 13px;
  }
}
.mobile-icons__header {
  z-index: 9999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 22px;
}
.status-icons {
  div {
    margin: 0px 5px;
  }
  display: flex;
}
</style>
