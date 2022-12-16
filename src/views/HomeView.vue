<template>
  <div class="home">
    <AppProducts />
    <Counter />
    <div class="counter-squared">
      {{ countNumber }}<sup>2</sup> = {{ countSquared }}
    </div>
    <div class="buttons">
      <button @click="increaseCounter()">+</button>
      <button @click="decreaseCounter()">-</button>
    </div>
    <div class="input">
      <input type="text" placeholder="Enter color code" v-model="colorCode" />
    </div>
    <!-- <div class="input">
      <input
        type="text"
        placeholder="Enter color code"
        :value="colorCode"
        @input="setColorCode"
      />
    </div> -->
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import AppProducts from "@/components/Products/AppProducts.vue";
import Counter from "@/components/Counter/Counter.vue";
import { createNamespacedHelpers, useStore } from "vuex";
import { INCREASE_COUNTER, DECREASE_COUNTER } from "../store/mutations-types";
import { computed } from "vue";

const { mapGetters, mapState, mapActions } = createNamespacedHelpers("counter");

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    AppProducts,
    Counter,
  },
  setup() {
    const store = useStore();

    const countNumber = computed(() => store.state.countNumber);
    const countSquared = computed(
      () => store.getters["counter/showCountSquared"]
    );

    const colorCode = computed({
      get() {
        return store.state.counter.colorCode;
      },
      set(newValue) {
        store.dispatch("counter/SET_COLOR_CODE", newValue);
      },
    });

    const increaseCounter = () => store.dispatch("counter/INCREASE_COUNTER");
    const decreaseCounter = () => store.dispatch("counter/DECREASE_COUNTER");

    return {
      store,
      countNumber,
      countSquared,
      increaseCounter,
      decreaseCounter,
      colorCode,
    };
  },
  //   computed: {
  //     ...mapState(["countNumber"]),
  //     ...mapGetters(["countSquared"]),

  //     colorCode: {
  //       get() {
  //         return this.$store.state.counter.colorCode;
  //       },
  //       set(newValue) {
  //         this.$store.dispatch("counter/SET_COLOR_CODE", newValue);
  //       },
  //     },
  //   },
  //   methods: {
  //     ...mapActions({
  //       increaseCounter: INCREASE_COUNTER,
  //       decreaseCounter: DECREASE_COUNTER,
  //     }),
  //   },
};
</script>

<style>
.home {
  text-align: center;
}
.counter {
  margin-top: 50px;
  text-align: center;
}

.buttons button {
  width: 100px;
  font-size: 20px;
}

.counter-squared {
  margin: 5px;
}
.input {
  margin-top: 10px;
}
</style>
