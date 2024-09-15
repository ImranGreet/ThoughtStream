<template>
  <nuxt-link
    to="#"
    class="w-full bg-white shadow-sm lg:shadow-sm border border-gray-400/30 rounded-lg block">
    <div class="w-full flex flex-col md:flex-row justify-between items-stretch">
      <div
        class="flex flex-col justify-center items-center w-full lg:w-1/2 p-4">
        <img
          src="https://images.unsplash.com/photo-1694687530321-7ecd3c9163b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          alt=""
          class="w-full h-36 md:h-36 xl:h-64 rounded-md object-cover" />
      </div>
      <div
        class="w-full lg:w-1/2 flex flex-col justify-between p-2 xl:p-4 space-y-1 xl:space-y-2">
        <div>
          <h1
            class="text-base md:text-md xl:text-xl tracking-wider font-medium">
            You can also use variant modifiers to target media queries
          </h1>
        </div>
        <div class="flex">
          <p
            class="text-sm xl:text-base tracking-wider font-semibold indent-8"
            style="line-height: 1.7em">
            So I started to walk into the water. I won't lie to you boys, I was
            terrified. But I pressed on, and as I made my way past the breakers
            a strange calm came over me. I don't know if it was divine
            intervention or the kinship of all living things but I tell you
            Jerry at that moment, I was a marine biologist.
          </p>
        </div>
        <div class="flex justify-between items-center w-full">
          <div class="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/7/girl-flowers.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              class="w-12 h-12 rounded-full mr-2" />
            <div class="font-semibold">
              <h1 class="tracking-wider text-base">Xennifer Ahmed</h1>
              <p>17-09-2023</p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "WrittenText",
  setup() {
    const AuthorText = ref({
      publicationDate: "17-09-2021",
    });
    return {};
  },
};
</script>
