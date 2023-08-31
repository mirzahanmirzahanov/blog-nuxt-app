<script setup>
import { usePostsStore } from "~/store/postsStore";
import { storeToRefs } from "pinia";
const postsStore = usePostsStore();

const { posts } = storeToRefs(postsStore);

import VPostForm from "~/components/VPostForm.vue";
import VPostItem from "~/components/VPostItem.vue";
import VButton from "~/components/UI/VButton.vue";

const pageNumber = ref(0);
const pageSize = ref(2);

const nextPage = () => {
  pageNumber.value++;
};
const prevPage = () => {
  pageNumber.value--;
};

const pageCount = computed(() => {
  let l = posts.value.length,
    s = pageSize.value;
  return Math.ceil(l / s);
});

const paginatedPosts = computed(() => {
  const start = pageNumber.value * pageSize.value,
    end = start + pageSize.value;
  return posts.value.slice(start, end);
});
</script>

<template>
  <div class="home">
    <div class="home__container container">
      <VPostForm />
      <client-only>
        <div v-if="paginatedPosts.length" class="home__column">
          <VPostItem
            v-for="post in paginatedPosts"
            :key="post.id"
            :post="post"
          />
          <div class="home__column-btns">
            <VButton
              :label="'previous'"
              :color="'primary'"
              :disabled="pageNumber === 0"
              @emitClickButton="prevPage"
            />
            <VButton
              :label="'next'"
              :color="'primary'"
              :disabled="pageNumber >= pageCount - 1"
              @emitClickButton="nextPage"
            />
          </div>
        </div>
        <div v-else class="home__empty">
          <h2>No posts...</h2>
        </div>
        <template #fallback>
          <div class="home__empty">
            <h2>Pending...</h2>
          </div>
        </template>
      </client-only>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__container {
    position: relative;
    display: grid;
    grid-template-columns: 35% 65%;

    @media (max-width: 768px) {
      display: block;
    }
  }
  &__column,
  &__empty {
    margin-left: 30px;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
  &__column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-btns {
      margin: auto 0 0;
      display: flex;
      column-gap: 20px;
    }
  }
  &__empty {
    h2 {
      font-size: 30px;
    }
  }
}
</style>
