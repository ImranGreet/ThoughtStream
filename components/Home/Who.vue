<template>
  <div class="w-72 px-3 py-2 rounded-lg shadow-sm border border-gray-400/20">
    <div class="w-full flex justify-between items-center">
      <div class="w-1/2 rounded-full">
        <img
          :src="who"
          alt=""
          class="w-24 h-24 rounded-full object-cover ring ring-rose-300 p-[1px] hover:ring-rose-500 transition duration-300 ease-in-out" />
      </div>
      <div class="w-1/2">
        <div class="flex flex-col justify-start items-start gap-y-1">
          <h1 class="text-xl font-bold text-gray-950 tracking-tight">
            Imran Hossain
          </h1>

          <div class="flex flex-col gap-x-1 italic gap-y-[0.75px]">
            <span class="text-sm text-gray-950">
              <span class="text-rose-600">#</span> Tailwindcss</span
            >
            <span class="text-sm text-gray-950">
              <span class="text-rose-600">#</span> Javascript</span
            >
            <span class="text-sm text-gray-950">
              <span class="text-rose-600">#</span> Progrummer</span
            >
          </div>

          <button
            class="px-3 py-[1px] rounded-md border border-gray-300 tracking-wide bg-indigo-600 text-white">
            Follow
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Who",
  setup() {
    const who = ref(
      "https://images.unsplash.com/photo-1689044583715-8138a5bb0632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80"
    );
    return {
      who,
    };
  },
};
</script>
