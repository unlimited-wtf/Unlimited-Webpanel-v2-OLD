<template>
  <div class="btn text-center text-white flex justify-center items-center">
    {{ label }}
    <slot></slot>
  </div>
</template>

<script setup>
defineProps(["label"]);
</script>

<style lang="scss" scoped>
.btn {
  font-size: 14px;
  line-height: 17px;
  width: 80%;
  box-sizing: border-box;
  position: relative;
  border: 1px solid;
  border-image: radial-gradient(
      rgba(255, 255, 255, 0.35),
      rgba(255, 255, 255, 0)
    )
    1;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 90%);
    width: 85%;
    height: 100%;
  }

  &:not(.transparent)::after {
    background: $primary;
    filter: blur(40px);
  }

  &.transparent {
    &:hover {
      cursor: pointer;
      border-image: radial-gradient($primary 0%, rgba(7, 224, 230, 0)) 1;

      &::after {
        background: $primary;
        filter: blur(40px);
      }
    }
  }

  &.hoverable {
    border-image-source: radial-gradient(
      52.67% 1008.9% at 50% 50%,
      $primary 0%,
      rgba(7, 224, 230, 0) 100%
    );

    &:hover {
      cursor: pointer;
      opacity: 0.8;
      transition: opacity 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    }
  }

  &.online {
    cursor: default;
    border-image-source: radial-gradient(
      52.67% 1008.9% at 50% 50%,
      $positive 0%,
      rgba($positive, 0) 100%
    );

    &::after {
      background: $positive;
    }
  }

  &.offline {
    cursor: default;
    border-image-source: radial-gradient(
      52.67% 1008.9% at 50% 50%,
      $red 0%,
      rgba($red, 0) 100%
    );

    &::after {
      background: $red;
    }
  }

  &.pending {
    cursor: default;
    border-image-source: radial-gradient(
      52.67% 1008.9% at 50% 50%,
      $orange 0%,
      rgba($orange, 0) 100%
    );

    &::after {
      background: $orange;
    }
  }
}
</style>
