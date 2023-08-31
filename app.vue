<template>
  <div class="wrapper">
    <VHeader />
    <main class="main">
      <NuxtPage />
    </main>
    <footer class="footer">footer</footer>
  </div>
</template>

<script>
import VHeader from "./components/VHeader.vue";

export default {
  components: { VHeader },
  name: "",
  computed: {},
  props: {},
  data: () => ({}),
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>

</style>
