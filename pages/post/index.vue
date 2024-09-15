<template>
  <section
    class="bg-white w-full min-h-screen flex-col flex justify-center items-center">
    <AddPost />
  </section>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: "addpost",
    });
    return {};
  },
};
</script>
