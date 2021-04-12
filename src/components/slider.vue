<template>
  <div class="wrap">
    <!--  -->
    <div
      class="slider"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + 'vw' }"
    >
      <sliderItem
        v-for="(item, index) in sliderItems"
        :key="item.id"
        :item="item"
        @nextSlide="nextSlide"
      />
    </div>
    <!-- <button @click="prevSlide">prev</button> -->
    <!-- <button @click="nextSlide" class="btn-next arrow arrow-right"></button> -->

    <div class="bullets">
      <div
        class="dots"
        :class="{ active: index == currentSlideIndex }"
        v-for="(item, index) in sliderItems"
        :key="item.id"
        @click="choseSlide(index)"
      ></div>
    </div>
  </div>
</template>

<script>
import sliderItem from "@/components/sliderItem.vue";
export default {
  name: "slider",
  data() {
    return {
      sliderItems: [
        {
          id: 1,
          title: "Краски",
          body: "Идеально подходят для стен и других поверхностей.",
          p: " Найди свой идеальный цвет!",
        },
        {
          id: 2,
          title: "Краски",
          body: "Идеально подходят для стен и других поверхностей.",
          p: " Найди свой идеальный цвет!",
        },
        {
          id: 3,
          title: "Краски",
          body: "Идеально подходят для стен и других поверхностей.",
          p: " Найди свой идеальный цвет!",
        },
        {
          id: 4,
          title: "Краски",
          body: "Идеально подходят для стен и других поверхностей.",
          p: " Найди свой идеальный цвет!",
        },
        {
          id: 5,
          title: "Краски",
          body: "Идеально подходят для стен и других поверхностей. ",
          p: " Найди свой идеальный цвет!",
        },
        {
          id: 6,
          title: "Краски",
          body: "Идеально подходят для стен и других поверхностей. ",
          p: " Найди свой идеальный цвет!",
        },
      ],
      currentSlideIndex: 0,
    };
  },
  methods: {
    // prevSlide() {
    //   if (this.currentSlideIndex > 0) {
    //     this.currentSlideIndex--;
    //   }
    //   console.log(this.currentSlideIndex);
    // },
    nextSlide() {
      if (this.currentSlideIndex >= this.sliderItems.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    },
    choseSlide(index) {
      this.currentSlideIndex = index;
    },
  },
  components: {
    sliderItem,
  },
};
</script>

<style lang="scss" scoped>
.bullets {
  align-items: center;
  padding: 13px 24px;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  bottom: 41px;
  display: flex;
  left: 47%;
  .dots {
    width: 6px;
    height: 6px;
    background: #ffffff;
    opacity: 0.2;
    border-radius: 50%;
    margin: 0 4px;
    cursor: pointer;
  }
}
.active {
  opacity: 0.9 !important;
}
.wrap {
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  width: 100%;
}
.slider {
  display: flex;
  transition: all ease 0.5s;
}
</style>