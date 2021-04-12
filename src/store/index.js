import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartData: [
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        img: "qq.png",
        available: true,
        new: false,
        pop: false,
        id: "1",
        category: 'contract',
      },
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        img: "w.png",
        available: false,
        new: true,
        pop: false,
        id: "2",
        category: 'exclusive'
      },
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        img: "q.png",
        available: true,
        new: false,
        pop: false,
        id: "3",
        category: 'sale'
      },
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        img: "e.png",
        available: false,
        new: false,
        pop: true,
        id: "4",
        category: 'contract'
      },
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 3400,
        img: "r.png",
        available: true,
        new: false,
        pop: true,
        id: "5",
        category: "sale"
      },
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        img: "t.png",
        available: true,
        new: true,
        pop: false,
        id: "6",
        category: "new"
      },
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        img: "i.png",
        available: false,
        new: true,
        pop: false,
        id: "7",
        category: "exclusive",
      },
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        img: "i.png",
        available: true,
        new: false,
        pop: true,
        id: "8",
        category: "available"
      },
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        img: "o.png",
        available: false,
        new: false,
        pop: true,
        id: "9",
        category: "available",
      },
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 3400,
        img: "p.png",
        available: true,
        new: true,
        pop: false,
        id: "10",
        category: "new",

      },
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        img: "t.png",
        available: true,
        new: true,
        pop: false,
        id: "11",
        category: "sale"
      },
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        img: "i.png",
        available: false,
        new: false,
        pop: true,
        id: "12",
        category: "exclusive"
      },
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        img: "i.png",
        available: true,
        new: true,
        pop: false,
        id: "13",
        category: "contract"
      },
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        img: "o.png",
        available: false,
        new: false,
        pop: true,
        id: "14",
        category: "exclusive"
      },
      {
        title: "Краска Wallquest, Brownsone MS90102",
        price: 3400,
        img: "p.png",
        available: true,
        new: true,
        pop: false,
        id: "15",
        category: "available"
      },
    ],
    basket: [],
    isOpen: false,
  },
  mutations: {
    SET_BASKET: (state, product) => {
      if (state.basket.length) {
        let isItemExists = false;
        state.basket.map(function (item) {
          if (item.id == product.id) {
            isItemExists = true;
            item.quantity++;
          }
        })
        if (!isItemExists) {
          state.basket.push(product)
        }
      } else {
        state.basket.push(product)
      }
    },
    modalClose: (state) => {
      state.isOpen = !state.isOpen
    },
    REMOVE_FROM_BASKET: (state, index) => {
      state.basket.splice(index, 1)
    },
    clean: (state) => {
      state.basket = []
    }
  },
  actions: {
    add_to_cart({ commit }, product) {
      commit('SET_BASKET', product)
    },
    close({ commit }, data) {
      commit('modalClose', data)
    },
    DELETE_FROM_BASKET({ commit }, index) {
      commit('REMOVE_FROM_BASKET', index)
    },
    cleanBasket({ commit }, data) {
      commit('clean', data)
    }
  },
  getters: {
    BASKET(state) {
      return state.basket
    },
    ISOPEN(state) {
      return state.isOpen
    },
    PRODUCTS(state) {
      return state.cartData
    }
  },
  modules: {
  }
})
