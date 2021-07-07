<template lang="">
  <div class="p-5 my-2 bg-gray-500 rounded ">
    <p>{{ post.name }}</p>
    <p>{{ post.description }}</p>
    <button-vue @click="$emit('remove', post)">Delete</button-vue>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
p {
  @apply text-white;
}
</style>
