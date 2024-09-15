<template>
  <section class="max-w-full">
    <Navbar />
    <div>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "AddPost",
};
</script>
