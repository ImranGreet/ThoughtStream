<template>
  <div class="w-full flex flex-col justify-between min-h-screen">
    <Navbar />
    <Trending/>
    <TagList/>
    <Who/>
    <div>
      <slot></slot>
    </div>
    <footer class="w-full bg-gray-900 text-white py-20">
      <Profile />
    </footer>
  </div>
</template>
