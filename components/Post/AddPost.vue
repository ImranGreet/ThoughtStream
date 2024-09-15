<template>
  <div class="bg-inherit w-1/2 shadow-lg shadow-gray-800 mx-auto p-5">
    <div class="w-full flex flex-col justify-between items-stretch gap-y-3">
      <div class="w-full text-start text-gray-950">
        <h1 class="text-3xl tracking-wide leading-7">
          Empower Your Pen: Authoring in the Digital Age
        </h1>
      </div>
      <div
        class="w-full flex flex-row justify-start items-center text-start gap-x-3">
        <h4 class="text-xl tracking-wide leading-7">
          {{ authorProfile.name }}
        </h4>
        <img
          :src="authorProfile.profilePicture"
          :alt="authorProfile.name"
          class="w-12 h-12 rounded-full border border-gray-700" />
      </div>
      <div
        class="text-start text-gray-900 leading-normal font-semibold space-y-2">
        <div class="space-x-3">
          <h1 class="text-2xl inline-block">Add Title</h1>
          <button
            @click="addTitleToSpeech()"
            class="border border-gray-600 text-white bg-blue-600 w-8 h-8 rounded-md inline-block">
            +
          </button>
        </div>
        <div
          class="w-full flex justify-between items-center gap-x-3"
          :class="{ hidden: !addTitle, block: addTitle }">
          <input
            type="text"
            v-model="title"
            class="w-11/12 px-3 py-1 focus:outline-none border border-gray-700/60 rounded-lg" />
          <button
            @click="addTitleToContainer()"
            type="button"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 w-[8%] rounded">
            Add
          </button>
        </div>
        <div class="space-x-3">
          <button
            @click="addImageToSpeech()"
            class="border border-gray-600 text-white bg-blue-600 w-8 h-8 inline-block rounded-xl">
            <img
              :src="imageIcon"
              alt=""
              class="w-8 h-8 rounded-xl" />
          </button>
        </div>
        <div
          class="w-full flex justify-between items-center gap-x-3"
          :class="{ hidden: !addImage, block: addImage }">
          <input
            type="file"
            class="w-4/5 px-3 py-1 focus:outline-none border border-gray-700/60 rounded-lg" />
          <button
            @click="addImageToImageContainer()"
            type="button"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 w-[18%] rounded">
            Add 📲
          </button>
        </div>
      </div>
      <!-- textcontainer -->
      <div class="w-full flex flex-col justify-center items-center gap-y-3">
        <div class="w-full flex flex-col justify-center items-center">
          <textarea
            v-model="speech"
            class="w-full h-96 border border-gray-700/25 rounded-md p-2 focus:outline-none"
            rows="15"
            cols="30"></textarea>
        </div>
        <div class="w-full flex flex-row justify-end items-center">
          <button
            type="button"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded">
            Post
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AddPost",
  setup() {
    const addTitle = ref(false);
    const addImage = ref(false);
    const imageIcon = ref(
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?auto=format&fit=crop&q=80&w=1992&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    const title = ref("");
    const speechImage = ref("");
    const titleContainer = ref([]);
    const imageContainer = ref([]);
    const authorProfile = ref({
      name: "Xennifer Rahman",
      profilePicture:
        "https://images.unsplash.com/photo-1590650589327-3f67c43ad8a2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });
    const speech = ref("");
    const addTitleToSpeech = function () {
      addTitle.value = !addTitle.value;
    };
    const addTitleToContainer = function () {
      titleContainer.value.push(title.value);
      title.value = "";
      addTitle.value = false;
    };
    const addImageToSpeech = function () {
      addImage.value = !addImage.value;
    };
    const addImageToImageContainer = function () {};
    return {
      addImage,
      imageContainer,
      authorProfile,
      addTitle,
      title,
      titleContainer,
      speech,
      speechImage,
      imageIcon,
      /*methods*/
      addTitleToSpeech,
      addTitleToContainer,
      addImageToSpeech,
      addImageToImageContainer,
    };
  },
};
</script>
