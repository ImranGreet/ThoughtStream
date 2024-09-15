<template>
  <div
    class="shadow-sm w-full text-gray-950 rounded-lg border border-indigo-400/25">
    <div class="p-3 rounded-lg w-full">
      <div class="w-full flex justify-between items-center">
        <div class="w-1/2 flex flex-col justify-start items-start">
          <img
            :src="trendingImage"
            alt=""
            class="w-20 h-20 object-cover rounded-lg" />
        </div>
        <div class="w-1/2 flex flex-col justify-between items-start">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </span>
          <h1 class="text-base tracking-tight">Earn free verified</h1>
          <div class="flex justify-start items-center">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span class="w-4 h-4">*</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trending",
  setup() {
    const trendingImage = ref(
      "https://images.unsplash.com/photo-1694627382334-4c3406a84b79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    );
    return {
      trendingImage,
    };
  },
};
</script>

<style></style>
