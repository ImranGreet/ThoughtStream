<template>
  <section class="w-11/12 lg:w-3/5 mx-auto space-y-24">
    <div class="w-full space-y-5">
      <Headline />
      <ReadSection />
      <TextImage />
      <Code />
    </div>
    <!-- recommeded -->
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 pb-16">
      <Recommended />
      <Recommended />
      <Recommended />
      <Recommended />
    </div>
  </section>
</template>

<script>
export default {
  name: "Readpost",
  setup() {
    definePageMeta({
      layout: "readtext",
    });
  },
};
</script>
