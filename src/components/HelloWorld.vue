<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<template>
  <div m-a mt-200px>
    <div text-center text-10em font-500 v-text="text" />
  </div>
</template>
