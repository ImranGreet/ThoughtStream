<template>
  <div class="w-3/5 mx-auto flex justify-between">
    <div class="w-1/3">
      <Trending />
      <TagList />
      <Profile />
      <div class="space-y-20">
        <Who />
        <Who />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
};
</script>

<style></style>
