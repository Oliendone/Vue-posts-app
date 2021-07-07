<template lang="">
  <div>
    <h2 v-if="posts.length > 0">Posts List</h2>
    <post-item
      v-for="post of posts"
      :key="post.id"
      :post="post"
      @remove="$emit('remove', post.id)"
    ></post-item>
    <slot></slot>
  </div>
</template>
<script>
import PostItem from "./PostItem.vue";
export default {
  components: {
    PostItem,
  },

  props: {
    posts: {
      type: Array,
    },
  },
};
</script>
<style lang=""></style>
