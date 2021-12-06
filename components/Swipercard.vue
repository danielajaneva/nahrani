<template>
  <NuxtLink
    :to="{ name: 'caregiver', params: { id: item.id } }"
    class="card_link"
  >
    <div class="flex flex-col justify-between text-center">
      <div class="h-32 relative overflow-hidden">
        <img class="h-full w-full object-cover" :src="item.image" alt="image" />
        <img
          v-if="item.logo"
          class="absolute top-4 left-4 h-16 w-16"
          :src="item.logo"
          alt="logo"
        />
      </div>
      <div class="px-3">
        <h5 class="py-5">
          {{ item.name }}
        </h5>
        <p class="text-sm">
          {{ item.description }}
        </p>
      </div>
    </div>
    <div class="text-center py-5">
      <img
        src="../assets/img/location.png"
        alt="location"
        class="inline-block"
      />
      <label class="inline-block">{{ item.city }}</label>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
};
</script>

<style lang="postcss" scoped>
.card_link {
  @apply h-full flex flex-col justify-between bg-white relative rounded-3xl overflow-hidden;
  @apply shadow-cardShadow hover:shadow-cardShadowHo cursor-pointer;
}
</style>
