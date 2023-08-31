<script setup>
import { usePostsStore } from "~/store/postsStore";
import { storeToRefs } from "pinia";

import VButton from "@/components/UI/VButton.vue";

const router = useRouter();
const route = useRoute();

const postsStore = usePostsStore();

const { currentPost } = storeToRefs(postsStore);
const { getCurrentPost } = postsStore;

getCurrentPost(route.params.id);
</script>

<template>
  <div class="current-post">
    <div class="current-post__btn container">
      <VButton
        :label="'Go back'"
        :color="'primary'"
        :size="'large'"
        @emitClickButton="router.push('/')"
      />
    </div>
    <client-only>
      <div v-if="currentPost" class="current-post__container container">
        <h1 class="current-post__title">{{ currentPost.title }}</h1>
        <h2 class="current-post__author">{{ currentPost.author }}</h2>
        <p class="current-post__text">{{ currentPost.text }}</p>
      </div>
      <div v-else class="current-post__empty container">
        <h1 class="current-post__title">Post not found...</h1>
      </div>
      <template #fallback>
        <div class="current-post__empty container">
          <h1 class="current-post__title">Pending...</h1>
        </div>
      </template>
    </client-only>
  </div>
</template>

<style lang="scss" scoped>
.current-post {
  &__btn {
    margin-bottom: 30px;
  }
  &__title {
    font-size: 35px;
    margin: 0 0 30px;
  }

  &__author {
    font-size: 18px;
    margin: 0 0 20px;
    color: $textColorLight;
  }

  &__text {
    font-size: 22px;
  }
}
</style>
