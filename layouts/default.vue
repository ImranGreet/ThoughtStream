<template>
  <section class="w-full min-h-screen max-h-screen">
    <navbar class="fixed top-0 left-0 right-0 w-full" />
    <div
      class="w-[98%] lg:w-3/4 mx-auto flex justify-between mt-20 space-x-5 calculated">
      <div class="w-1/4 hidden lg:flex justify-between flex-col gap-y-6 h-full">
        <tag-list />
        <profile />
        <div class="w-full space-y-2">
          <trending />
          <trending />
          <trending />
        </div>
        <Footer />
      </div>
      <div
        class="w-full mx-auto lg:w-3/4 flex flex-col justify-between h-full overflow-y-scroll gap-y-4 lg:px-3 overflowController">
        <WrittenText />
        <WrittenText />
        <WrittenText />
        <WrittenText />
        <WrittenText />
        <WrittenText />
        <WrittenText />
        <WrittenText />
        <WrittenText />
        <WrittenText />
        <WrittenText />
      </div>
    </div>
  </section>
</template>

<style>
.calculated {
  height: 90vh;
}
.overflowController::-webkit-scrollbar {
  width: 6px;
}

.overflowController::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

.overflowController::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.overflowController::-webkit-scrollbar-thumb:active {
  background: #333;
}
</style>
