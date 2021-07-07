<template>
  <button class="px-3 py-2 bg-green-300 rounded-sm hover:bg-green-400">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "button-vue",
  methods: {
    onClick() {},
  },
};
</script>
<style></style>
