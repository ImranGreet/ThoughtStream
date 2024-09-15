<template>
  <NuxtLink
    to="#"
    class="bg-inherit flex justify-center items-center flex-col gap-y-2">
    <div class="w-full flex flex-col justify-center items-center">
      <img
        :src="cardImage"
        alt=""
        class="w-full h-48" />
    </div>
    <!-- utility of text -->
    <div class="flex justify-start items-center gap-x-3 w-full">
      <img
        :src="writterProfile"
        alt=""
        class="w-10 h-10 rounded-full" />
      <small>Xennifer Rahman</small>
    </div>
    <div class="space-y-3">
      <h1 class="text-xl tracking-wide font-semibold text-gray-950">
        {{ textHead }}
      </h1>
      <p>{{ descriptionInShort }}</p>
    </div>
    <div class="w-full">
      <Textaction></Textaction>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "Recommended",
  setup() {
    const cardImage = ref(
      "https://images.unsplash.com/photo-1696513301944-90abb561b935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    );
    const writterProfile = ref(
      "https://images.unsplash.com/photo-1673616613722-60212e81aad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80"
    );
    const textHead = ref(
      "Vue (pronounced /vjuː/, like view) is a JavaScript framework"
    );
    const descriptionInShort = ref(
      "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex."
    );
    return {
      cardImage,
      writterProfile,
      //   text
      textHead,
      descriptionInShort,
    };
  },
};
</script>
