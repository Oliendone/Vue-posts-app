<template>
  <div class="w-80">
    <post-form @create="createPost">
      <button-vue>Create</button-vue>
    </post-form>
    <post-list :posts="posts" @remove="removePost"> </post-list>
  </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import ButtonVue from "@/components/UI/ButtonVue.vue";

export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          name: "Car wash",
          description: "In the morning you need to wash a car",
        },
        {
          id: 2,
          name: "Cook some food",
          description: "Go to the market and buy products to cook a lunch",
        },
      ],
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    },

    removePost(post) {
      // console.log(post);

      console.log(
        this.posts.filter((p) => {
          p.id !== post;
        })
      );
      // this.posts = this.posts.filter((p) => {
      //   p.id !== post;
      // });
      // this.posts.filter((p) => {
      //   console.log(p.id !== post);
      // });
    },
  },

  components: {
    PostForm,
    PostList,
    ButtonVue,
  },
};
</script>
<style>
* {
  font-family: "Courier New", Courier, monospace;
}
</style>
