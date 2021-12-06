<template>
  <footer>
    <div class="w-full py-10 bg-darkGrey text-center">
      <h3>НАХРАНИ.МК</h3>
      <div
        class="my-10 flex flex-col justify-center lg:divide-x lg:divide-divider lg:flex-row"
      >
        <NuxtLink class="footer_link" :to="{ name: 'terms of use' }">
          Услови за користење</NuxtLink
        >

        <NuxtLink class="footer_link" :to="{ name: 'privacy policy' }">
          Политика на приватност</NuxtLink
        >

        <NuxtLink class="footer_link" :to="{ name: 'about' }">За Нас</NuxtLink>

        <NuxtLink class="footer_link" :to="{ name: 'contact' }"
          >Контакт</NuxtLink
        >
      </div>

      <p>{{ new Date().getFullYear() }} Нахрани.мк Сите права се задржани</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="postcss">
.footer_link {
  @apply font-light px-5 my-3 hover:underline;
}
</style>
