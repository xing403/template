<script setup lang="ts">
const model = defineModel<number>({ required: true })

const increase = () => model.value++
const reset = () => model.value = 0
</script>

<template>
  <div m-a mt-200px flex="~ col" items-center gap-2>
    <span>{{ model }}</span>
    <div>
      <button btn @click="increase">
        click increase
      </button>
      <button btn @click="reset">
        click reset
      </button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
button+button {
  @apply: ml-2;
}
</style>
