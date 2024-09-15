<template>
  <div class="w-full mx-auto rounded-xl">
    <div
      class="w-full flex flex-col justify-center items-center rounded-t-lg bg-gradient-to-tr from-rose-50/20 via-rose-100/40 to-rose-600/40">
      <img
        src="https://images.unsplash.com/photo-1694971088939-fc606bc5a1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        alt=""
        class="w-full lg:w-20 h-36 lg:h-20 mx-auto rounded-full object-cover ring  ring-rose-300 p-[1px] hover:ring-rose-500 transition duration-300 ease-in-out" />
    </div>
    <div
      class="w-full flex flex-col justify-between items-start border-gray-400/20">
      <div class="w-full flex flex-col justify-center items-start p-4">
        <h1 class="text-xl font-bold">Imran Hossain</h1>
        <p class="text-sm text-gray-500">Author Bio</p>
      </div>

      <div
        class="w-full flex justify-between items-center px-4 border-t py-1 border-gray-400/20">
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-xl font-bold">100</h1>
          <p class="text-sm text-gray-500">Posts</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-xl font-bold">100</h1>
          <p class="text-sm text-gray-500">Followers</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-xl font-bold">100</h1>
          <p class="text-sm text-gray-500">Following</p>
        </div>
      </div>

      <div class="w-full flex justify-center items-center p-4">
        <button
          class="w-full bg-indigo-600 text-white rounded-lg py-2 px-4 tracking-wide">
          Follow
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorProfile",
};
</script>
