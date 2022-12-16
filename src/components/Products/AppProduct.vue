<template>
  <div class="card">
    {{ product.name }} - {{ product.price }}
    <button @click="addProduct(product)">Adicionar ao carrinho</button>
    <button @click="removeProduct(product.id)">Remover do carrinho</button>
  </div>
</template>
<script>
import { useStore } from "vuex";

export default {
  props: { product: Object },

  setup() {
    const store = useStore();

    const addProduct = (product) => store.dispatch("ADD_PRODUCT", product);
    const removeProduct = (id) => store.dispatch("REMOVE_PRODUCT", id);

    return {
      addProduct,
      removeProduct,
    };
  },
};
</script>
<style>
.card {
  margin: 5px;
  background-color: bisque;
  padding: 5px;
}
</style>
