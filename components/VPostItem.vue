<script setup>
import VButton from "./UI/VButton.vue";
const router = useRouter();

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const getCurrentPost = (id) => {
  router.push({
    path: `/post/${id}`,
    params: {
      id: id,
    },
  });
};
</script>

<template>
  <div class="post-item">
    <div class="post-item__container">
      <h3 class="post-item__author">{{ post.author }}</h3>
      <h4 class="post-item__title">{{ post.title }}</h4>
      <p v-if="post.text.length > 200" class="post-item__text">
        {{ post.text.slice(0, 200) }}...
      </p>
      <p v-else class="post-item__text">{{ post.text }}</p>
      <VButton
        class="post-item__btn"
        :label="'Read more'"
        :color="'primary'"
        @emitClickButton="getCurrentPost(post.id)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-item {
  position: relative;
  width: 100%;
  &:not(:last-child) {
    margin: 0 0 20px;
  }

  &__container {
    position: relative;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    border-radius: $primaryBorderRadius;
    transition: $primaryTransition;
    border: 1px solid $primary;
    &:hover {
      border-radius: $largeBorderRadius;
      box-shadow: $primaryShadow;
    }
  }
  &__author {
    display: inline-block;
    font-size: 19px;
    color: $textColorLight;
    margin: 0 0 10px;
  }
  &__title {
    font-size: 28px;
    font-weight: 500;
    margin: 0 0 10px;
  }
  &__text {
    font-size: 17px;
    text-align: justify;
    margin: 0 0 15px;
  }
  &__btn {
    margin: auto 0 0;
    width: fit-content;
  }
}
</style>
