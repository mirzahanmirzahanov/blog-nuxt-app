<script setup>
const props = defineProps({
  label: {
    type: String,
    required: false,
    default: "Button",
  },
  color: {
    type: String,
    required: false,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  rounded: {
    type: Boolean,
    required: false,
    default: false,
  },
  outlined: {
    type: Boolean,
    required: false,
    default: false,
  },
  size: {
    type: String,
    required: false,
    default: "normal",
  },
});

const emit = defineEmits(["emitClickButton"]);

const clickButton = () => {
  emit("emitClickButton");
};
</script>

<template>
  <button
    :class="[
      'btn',
      `btn--${color}`,
      { 'btn--rounded': rounded },
      { 'btn--outlined': outlined },
      { 'btn--large': size === 'large' },
    ]"
    :disabled="disabled"
    @click="clickButton"
  >
    <span>{{ label }}</span>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 0 20px;
  height: 40px;
  color: #fff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 17px;
  transition: $primaryTransition;
  &--primary {
    background: $primary;
    border: 1px solid $primary;
    &:enabled:hover {
      background: $primaryHover;
    }
  }
  &--second {
    background: $second;
    border: 1px solid $second;
    &:enabled:hover {
      background: $secondHover;
    }
  }
  &--success {
    background: $success;
    border: 1px solid $success;
    &:enabled:hover {
      background: $successHover;
    }
  }
  &--warning {
    background: $warning;
    border: 1px solid $warning;
    &:enabled:hover {
      background: $warningHover;
    }
  }
  &--danger {
    background: $danger;
    border: 1px solid $danger;
    &:enabled:hover {
      background: $dangerHover;
    }
  }
  &--rounded {
    border-radius: 15px;
  }
  &--outlined {
    background: transparent;
    color: #000;
    &:enabled:hover {
      color: #fff;
    }
  }
  &--icon {
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  &--large {
    height: 50px;
    padding: 0 30px;
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
}
</style>
