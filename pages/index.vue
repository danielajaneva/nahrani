<template>
  <div class="overflow-hidden">
    <header class="container">
      <div class="my-10 grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none">
        <div class="self-center lg:pr-20">
          <h2 class="mb-5">
            НАПРАВИ ДОБРО ДЕЛО И ОСВЕТЛИ НЕЧИЈ ЖИВОТ
          </h2>
          <p>
            Дистрибуцијата на храна за хуманитарни цели.
          </p>
        </div>
        <div class="justify-self-end relative ">
          <img
            class="hidden lg:inline-block"
            src="../assets/img/Illustration homepage.png"
            alt="homepage img"
          />
          <img
            class="inline-block lg:hidden"
            src="../assets/img/illustration.png"
            alt="homepage img"
          />
          <!-- <div
            class="hidden absolute bottom-10 -right-20 -z-10 w-full lg:block"
          >
            <img src="../assets/img/Vector 27.png" alt="pattern" />
          </div>
          <div class="absolute -bottom-70 -right-30 -z-10 w-full lg:hidden">
            <img src="../assets/img/Vector 26.png" alt="pattern" />
          </div> -->
        </div>
      </div>
    </header>

    <section class="container my-32 lg:text-center">
      <h4>
        КАКО ФУНКЦИОНИРА
      </h4>
      <p class="mt-10">
        Отпадот од храна се јавува низ целиот систем на храна, почнувајќи од
        фармата, бербата, преработката, транспортот, до големопродажбата,
        малопродажбата и потрошувачите. Зголеменото внимание на медиумите во
        последните години, за еколошките и економските трошоци, гладот и
        зачувувањето на ресурсите поврзани со отпадот од храна ја зголемија
        јавната свест за загубата на храна.
      </p>
      <Stepper />
    </section>

    <section class="container my-32 ">
      <div class="lg:text-center">
        <h4 class="hidden sm:block mb-10">
          ЗАПОЗНАЈ ГИ НАШИТЕ ЗГРИЖУВАЧИ
        </h4>
        <h4 class="sm:hidden mb-10">
          ЗГРИЖУВАЧИ
        </h4>
        <p>
          Ако откриете дека имате вишок храна што сѐ уште може да се конзумира,
          размислете да ја прераспределите на животните на кои им е потребна
          помош. Ако вашата организација работи со маргинални групи кои немаат
          сигурен пристап до храна, тогаш пријавете се за собирање на храна.
        </p>
        <!-- swiper cards -->
        <Cardswiper v-bind:items="careGivers" />
      </div>
      <NuxtLink class="main_btn ml-5" :to="{ name: 'caregivers' }"
        >Види ги сите</NuxtLink
      >
      <!-- <div
          class="absolute -z-20 hidden sm:inline-block"
        >
          <img src="../assets/img/Vector 28.png" alt="pattern" />
        </div>
        <div class="absolute -left-20 bottom-40 -z-20 sm:hidden">
          <img src="../assets/img/Vector 25.png" alt="pattern" />
        </div> -->
    </section>

    <section>
      <div class="primary_wrap">
        <div class="relative">
          <img
            class="hidden absolute lg:block lg:-bottom-18 2xl:-bottom-28 2xl:w-10/12"
            src="../assets/img/listening-you-french-bulldog-young-dog-is-posing-cute-concept-motion-action-movement 1.png"
            alt="dog"
          />
          <!-- {{-- mobile --}} -->
          <img
            class="lg:hidden -mb-12"
            src="../assets/img/Dog m.png"
            alt="dog"
          />
        </div>

        <div class="secondary_wrap">
          <!-- {{-- desktop --}} -->
          <img
            class="absolute -bottom-10 hidden lg:inline-block"
            src="../assets/img/bone.png"
            alt="bone"
          />
          <img
            class="absolute -top-10 -left-52 hidden lg:inline-block"
            src="../assets/img/bone-1.png"
            alt="bone"
          />
          <img
            class="absolute -top-20 right-10 hidden lg:inline-block"
            src="../assets/img/bone-2.png"
            alt="bone"
          />
          <!-- {{-- mobile --}} -->
          <img
            class="absolute -top-16 right-20 lg:hidden"
            src="../assets/img/bone m.png"
            alt="bone"
          />

          <div class="text-center lg:text-left">
            <h2 class="font-bold">
              20
            </h2>
            <h5 class="uppercase">
              Активни волонтери
            </h5>
          </div>
          <div class="text-center lg:text-left">
            <h2 class="font-bold">
              35
            </h2>
            <h5 class="uppercase">
              Активни донатори
            </h5>
          </div>
          <div class="text-center lg:text-left">
            <h2 class="font-bold">
              12
            </h2>
            <h5 class="uppercase">
              Соработка со здруженија
            </h5>
          </div>
          <div class="text-center lg:text-left ">
            <h2 class="font-bold">
              73
            </h2>
            <h5 class="uppercase">
              Згрижени животни
            </h5>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container my-32">
        <div class="lg:text-center">
          <h4>
            НАШИТЕ ПОСЛЕДНИ ДОНАТОРИ
          </h4>
          <p class="my-10">
            Aliquam porta nisl dolor, molestie pellentesque elit molestie in.
            Morbi metus neque, elementum ullamcorper
          </p>
          <p>
            Отпадот од храна се јавува низ целиот систем на храна, почнувајќи од
            фармата, бербата, преработката, транспортот, до големопродажбата,
            малопродажбата и потрошувачите. Зголеменото внимание на медиумите во
            последните години, за еколошките и економските трошоци, гладот и
            зачувувањето на ресурсите поврзани со отпадот од храна ја зголемија
            јавната свест за загубата на храна.
          </p>
          <!-- swiper cards -->
          <Cardswiper v-bind:items="donators" />
        </div>
        <NuxtLink class="main_btn ml-5" :to="{ name: 'donators' }"
          >Дознај повеќе</NuxtLink
        >
      </div>
    </section>
  </div>
</template>

<script>
// import Card from "../components/Card.vue";
import Cardswiper from "../components/Cardswiper.vue";
import Stepper from "../components/Stepper.vue";

export default {
  components: { Stepper, Cardswiper },
  name: "Homepage",
  mounted() {
    window.scrollTo(0, 0);
  },

  data() {
    return {
      careGivers: [
        {
          name: "Живот",
          logo: "../assets/img/Ellipse 12-2.png",
          image: "../assets/img/Rectangle 69.png",
          description:
            "Непрофитабилна организација основана од љубители на животни која се грижи за згрижување и хранење на уличните животни",
          city: "Штип",
        },
        {
          name: "Анима Мунди",
          logo: "../assets/img/Ellipse 12-1.png",
          image: "../assets/img/Rectangle 69-1.png",
          description:
            "Непрофитабилна организација основана од љубители на животни која се грижи за згрижување и хранење на уличните животни",
          city: "Скопје",
        },
        {
          name: "Мали Херои",
          logo: "../assets/img/Ellipse 12.png",
          image: "../assets/img/Rectangle 69-7.png",
          description:
            "Непрофитабилна организација основана од љубители на животни која се грижи за згрижување и хранење на уличните животни",
          city: "Битола",
        },
        {
          name: "Анимал Лаверс",
          logo: "../assets/img/Ellipse 13.png",
          image: "../assets/img/Rectangle 69-8.png",
          description:
            "Непрофитабилна организација основана од љубители на животни која се грижи за згрижување и хранење на уличните животни",
          city: "Струмица",
        },
      ],
      donators: [
        {
          name: "Петар Петков",
          logo: "",
          image: "../assets/img/Rectangle 122.png",
          description:
            "Непрофитабилна организација основана од љубители на животни која се грижи за згрижување и хранење на уличните животни",
          city: "Скопје",
        },
        {
          name: "Veneto Italian Restaurant",
          logo: "../assets/img/Ellipse 25.png",
          image: "../assets/img/Rectangle 126.png",
          description:
            "Непрофитабилна организација основана од љубители на животни која се грижи за згрижување и хранење на уличните животни",
          city: "Скопје",
        },
        {
          name: "Вино Бар Буре",
          logo: "../assets/img/Ellipse 20.png",
          image: "../assets/img/Rectangle 128.png",
          description:
            "Непрофитабилна организација основана од љубители на животни која се грижи за згрижување и хранење на уличните животни",
          city: "Битола",
        },
        {
          name: "Forza Wine Bar & Restaurant",
          logo: "../assets/img/Ellipse 24.png",
          image: "../assets/img/Rectangle 130.png",
          description:
            "Непрофитабилна организација основана од љубители на животни која се грижи за згрижување и хранење на уличните животни",
          city: "Скопје",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.primary_wrap {
  @apply w-full bg-gradient-to-r from-lightPink to-darkPink text-mainColor;
  @apply flex flex-col-reverse lg:grid lg:grid-cols-2;
}
.secondary_wrap {
  @apply py-20 flex-shrink-0 relative 2xl:w-full;
  @apply grid justify-items-center gap-y-28 md:grid-cols-2 lg:justify-items-start;
}
</style>
