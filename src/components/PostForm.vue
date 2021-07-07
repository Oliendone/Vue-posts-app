<template lang="">
  <form @submit.prevent="createPost" class="flex flex-col">
    <h2>Create post</h2>
    <input-vue type="text" placeholder="Task name" v-model="post.name" />
    <input-vue
      type="text"
      placeholder="Task description"
      v-model="post.description"
    />
    <button-vue>Create</button-vue>
  </form>
</template>
<script>
export default {
  data() {
    return {
      post: {
        name: "",
        description: "",
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        name: "",
        description: "",
      };
    },
  },
};
</script>
<style lang=""></style>
