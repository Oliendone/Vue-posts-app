<template>
  <input
    :value="modelValue"
    @input="updateInput"
    :type="type"
    :placeholder="placeholder"
    class="border-2 border-green-100 pl-1 rounded my-1 outline-none"
  />
</template>
<script>
export default {
  name: "input-vue",

  props: {
    modelValue: [String, Number],
    placeholder: String,
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style lang=""></style>
