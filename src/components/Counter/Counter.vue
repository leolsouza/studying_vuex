<template>
  <div class="counter" :style="{ color: $store.state.counter.colorCode }">
    <h1>{{ $store.state.counter.countNumber }}</h1>
  </div>
</template>

<script>
export default {};
</script>
