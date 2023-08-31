<template>
  <header class="header">
    <div class="header__container container">
      <h1 class="header__title">Blog App</h1>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  name: "VHeader",
  computed: {},
  props: {},
  data: () => ({}),
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  background: $primary;
  color: white;
  padding: 30px 0;
  margin: 0 0 80px;
  &__title {
    font-size: 40px;
    color: white;
    font-style: italic;
    font-weight: 700;
  }
}
</style>
