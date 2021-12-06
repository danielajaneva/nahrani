<template>
  <div>
    <nav class="nav_container">
      <div class="flex justify-between my-5 lg:my-10 lg:block">
        <NuxtLink :to="{ name: 'homepage' }">
          <h1 class="text-center cursor-pointer">НАХРАНИ</h1>
        </NuxtLink>
        <div @click="openNav" class="cursor-pointer self-center lg:hidden">
          <MenuIcon />
        </div>
      </div>

      <div
        class="w-full hidden lg:flex lg:justify-around lg:border-t-2 lg:border-lightGrey-90 2xl:border-t-4"
      >
        <NuxtLink class="nav_item" :to="{ name: 'homepage' }">Почетна</NuxtLink>
        <NuxtLink class="nav_item" :to="{ name: 'functionality' }"
          >Како функционира</NuxtLink
        >
        <NuxtLink class="nav_item" :to="{ name: 'donators' }"
          >Донатори</NuxtLink
        >
        <NuxtLink class="nav_item" :to="{ name: 'caregivers' }"
          >Згрижувачи</NuxtLink
        >
        <NuxtLink class="nav_item" :to="{ name: 'contact' }">Контакт</NuxtLink>
      </div>
    </nav>

    <transition name="slide">
      <div
        :key="isOpen"
        :class="[
          'w-full',
          'font-semibold',
          'fixed',
          'top-0',
          'h-screen',
          'bg-transparent',
          'z-50',
          { hidden: isOpen === false },
        ]"
      >
        <div @click="closeNav" class="blured-bg"></div>

        <nav
          class="relative w-max h-screen bg-white flex flex-col shadow-navShadow"
        >
          <div class="flex justify-between m-5">
            <NuxtLink
              :to="{ name: 'homepage' }"
              class="text-center font-light cursor-pointer"
            >
              НАХРАНИ
            </NuxtLink>
            <div @click="closeNav" class="cursor-pointer self-center">
              <ExitIcon />
            </div>
          </div>
          <div
            class="overflow-y-auto flex flex-col h-full divide-y divide-dividerNav"
          >
            <NuxtLink
              @click.native="closeNav"
              class="nav_item-sm"
              :to="{ name: 'homepage' }"
              >Почетна</NuxtLink
            >
            <NuxtLink
              @click.native="closeNav"
              class="nav_item-sm"
              :to="{ name: 'functionality' }"
              >Како функционира</NuxtLink
            >
            <NuxtLink
              @click.native="closeNav"
              class="nav_item-sm"
              :to="{ name: 'donators' }"
              >Донатори</NuxtLink
            >
            <NuxtLink
              @click.native="closeNav"
              class="nav_item-sm"
              :to="{ name: 'caregivers' }"
              >Згрижувачи</NuxtLink
            >
            <NuxtLink
              @click.native="closeNav"
              class="nav_item-sm"
              :to="{ name: 'contact' }"
              >Контакт</NuxtLink
            >
          </div>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
import ExitIcon from "./ExitIcon.vue";
import MenuIcon from "./MenuIcon.vue";
export default {
  name: "Header",
  components: { MenuIcon, ExitIcon },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openNav() {
      this.isOpen = true;
    },
    closeNav() {
      this.isOpen = false;
    },
  },
  watch: {
    $route() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="postcss">
.nav_item {
  position: relative;
  padding: 20px 0;
  font-weight: 600;
}
.nav_item::before {
  content: "";
  position: absolute;
  top: -4px;
  height: 4px;
  width: 100%;
  background: transparent;
  transition: all 0.5s;
}
@media only screen and (max-width: 1500px) {
  .nav_item::before {
    content: "";
    top: -2px;
    height: 2px;
  }
}

.nav_item:hover::before,
.nav_item:focus::before {
  content: "";
  background: #656d4a;
}
.nav_item-sm {
  padding: 30px 40px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
}
.blured-bg {
  @apply absolute top-0 h-screen w-full;
  background: rgba(50, 50, 50, 0.1);
  backdrop-filter: blur(1px);
}
/* animation */
.slide-enter-active {
  transition: all 0.5s ease;
}
.slide-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter {
  transform: translateX(-50rem);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-50rem);
  opacity: 0;
}
</style>
