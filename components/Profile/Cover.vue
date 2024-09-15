<template>
  <div class="w-full bg-white shadow-sm rounded-b-lg">
    <div class="w-full flex flex-col justify-center items-center gap-y-1">
      <div class="w-full flex flex-col justify-center items-center rounded-lg">
        <img
          :src="cover"
          alt=""
          class="w-full md:h-16 lg:h-48 xl:h-48 object-fill object-center" />
      </div>
      <!-- nav -->
      <div
        class="w-full flex flex-col md:flex-row justify-start items-start px-3 pt-2 gap-x-3 font-semibold md:py-0.5 xl:py-4">
        <nuxt-link
          to="#"
          class="visited:underline visited:underline-offset-4 active:decoration-rose-950 underline underline-offset-8 decoration-rose-500"
          >Author</nuxt-link
        >
        <nuxt-link
          to="#"
          class="text-gray-900 tracking-wide"
          >Approved</nuxt-link
        >
        <nuxt-link
          to="#"
          class="text-gray-900 tracking-wide"
          >Officilly-Recognised</nuxt-link
        >
        <nuxt-link
          to="#"
          class="text-gray-900 tracking-wide"
          >About</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cover",
  setup() {
    const cover = ref(
      "https://images.unsplash.com/photo-1692822379734-e6c64c387121?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1954&q=80"
    );
    return {
      cover,
    };
  },
};
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
