<template>
  <div class="w-full bg-white shadow-lg rounded-xl">
    <div class="w-11/12 mx-auto bg-inherit py-3">
      <form
        action="#"
        class="w-full flex justify-center items-center py-2">
        <input
          type="text"
          placeholder="Search For Articles"
          class="px-3 py-3 rounded-l-xl focus:outline-none w-11/12 bg-gray-200" />
        <button class="bg-indigo-800/70 text-white  rounded-r-xl py-3 px-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </form>
    </div>
    <div class="w-11/12 mx-auto flex justify-between items-center p-3">
      <nuxt-link to="#"><span>#</span>Science</nuxt-link>
      <nuxt-link to="#"><span>#</span>Politics</nuxt-link>
      <nuxt-link to="#"><span>#</span>Movies</nuxt-link>
      <nuxt-link to="#"><span>#</span>Technology</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagList",
};
</script>
