<script setup>
import { ref, computed } from "vue";

import { usePostsStore } from "~/store/postsStore";

import VInput from "./UI/VInput.vue";
import VButton from "./UI/VButton.vue";

import useVuelidate from "@vuelidate/core";
import { helpers, minLength, required } from "@vuelidate/validators";

const postsStore = usePostsStore();

const { setNewPost } = postsStore;

const postAuthor = ref("");
const postTitle = ref("");
const postText = ref("");

const clearAllInputs = () => {
  v.value.$reset();
  postAuthor.value = "";
  postTitle.value = "";
  postText.value = "";
};

const createNewPost = () => {
  v.value.$touch();
  if (v.value.$error) return console.log(v.value.$errors);
  setNewPost(postAuthor.value, postTitle.value, postText.value);
  clearAllInputs();
};

const validateRules = computed(() => ({
  postAuthor: {
    minLength: helpers.withMessage(
      "Please enter at least 3 characters!",
      minLength(3)
    ),
    required: helpers.withMessage("Required field!", required),
  },
  postText: {
    minLength: helpers.withMessage(
      "Please enter at least 10 characters!",
      minLength(10)
    ),
    required: helpers.withMessage("Required field!", required),
  },
}));

const v = useVuelidate(validateRules, {
  postAuthor,
  postText,
});
</script>

<template>
  <form @submit.prevent class="form">
    <VInput
      :label="'Author'"
      :name="'author'"
      :placeholder="'Input author name'"
      v-model:value="v.postAuthor.$model"
      :errors="v.postAuthor.$errors"
    />
    <VInput
      :label="'Title'"
      :name="'title'"
      :placeholder="'Input post title'"
      v-model:value="postTitle"
    />
    <VInput
      :label="'Text'"
      :name="'text'"
      :placeholder="'Input post text'"
      v-model:value="v.postText.$model"
      :errors="v.postText.$errors"
    />
    <div class="form__buttons">
      <VButton
        :label="'Clear all'"
        :color="'danger'"
        @emitClickButton="clearAllInputs"
      />
      <VButton
        :label="'Save post'"
        :color="'success'"
        @emitClickButton="createNewPost"
      />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.form {
  position: sticky;
  top: 80px;
  height: fit-content;
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    margin: 0 0 30px;
  }
  &__buttons {
    display: flex;
    gap: 20px;
  }
}
</style>
