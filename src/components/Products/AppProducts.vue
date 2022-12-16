<template>
  <div>
    <AppProduct
      v-for="product in $store.state.products"
      :key="product.id"
      :product="product"
    />
  </div>
  <div>
    Meu carrinho
    <div>
      {{ $store.state.cart }}
    </div>
  </div>
  <div>
    Total no carrinho <span>{{ $store.getters.totalCart }}</span>
  </div>
</template>
<script>
import AppProduct from "@/components/Products/AppProduct.vue";

export default {
  name: "AppProducts",
  components: {
    AppProduct,
  },
};
</script>
