<script setup lang="ts" generic="T extends any, O extends any">
const num = ref(0)
</script>

<template>
  <div>
    <HelloWorld v-model="num" />
  </div>
</template>
