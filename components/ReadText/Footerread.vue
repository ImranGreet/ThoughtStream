<template>
  <div
    class="w-full flex flex-col justify-center items-center shadow-lg border-y border-gray-600/25 py-3">
    <div
      class="flex justify-between flex-wrap lg:flex-nowrap items-center w-11/12 lg:w-5/12 mx-auto gap-x-3 lg:gap-x-0">
      <nuxt-link
        to="#"
        v-for="(cat, index) in categories"
        :key="index"
        >{{ cat }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Footerread",
  setup() {
    const categories = [
      "Help",
      "Status",
      "Writters",
      "Blogs",
      "Careers",
      "Privacy",
      "Terms",
      "About",
      "Text to speech",
      "Teams",
    ];
    return {
      categories,
    };
  },
};
</script>
