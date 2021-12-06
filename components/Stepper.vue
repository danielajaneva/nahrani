<template>
  <div>
    <ol class="stepper my-14">
      <li class="stepper__item">
        <button
          id="stepper"
          :class="['content', { cActive: name === 'Донатори' }]"
          @mouseover="switchComponent('Донатори')"
        >
          1
        </button>
        <label
          @mouseover="switchComponent('Донатори')"
          :class="['stepper__title', { lActive: name === 'Донатори' }]"
          >ДОНАТОРИ</label
        >
      </li>
      <li class="stepper__item">
        <button
          id="stepper"
          :class="['content', { cActive: name === 'Волонтери' }]"
          @mouseover="switchComponent('Волонтери')"
        >
          2
        </button>
        <label
          @mouseover="switchComponent('Волонтери')"
          :class="['stepper__title', { lActive: name === 'Волонтери' }]"
          >ВОЛОНТЕРИ</label
        >
      </li>
      <li class="stepper__item">
        <button
          id="stepper"
          :class="['content', { cActive: name === 'Згрижувачи' }]"
          @mouseover="switchComponent('Згрижувачи')"
        >
          3
        </button>
        <label
          @mouseover="switchComponent('Згрижувачи')"
          :class="['stepper__title', { lActive: name === 'Згрижувачи' }]"
          >ЗГРИЖУВАЧИ</label
        >
      </li>
      <li class="stepper__item">
        <button
          id="stepper"
          :class="['content', { cActive: name === 'Среќни животни' }]"
          @mouseover="switchComponent('Среќни животни')"
        >
          <img class="inline w-1/3" src="../assets/img/heart.png" alt="heart" />
        </button>
        <label
          @mouseover="switchComponent('Среќни животни')"
          :class="['stepper__title', { lActive: name === 'Среќни животни' }]"
          >СРЕЌНИ ЖИВОТНИ</label
        >
      </li>
    </ol>
    <!-- {{-- DYNAMIC COMPONENT --}} -->
    <div class="lg:w-1/2 lg:mx-auto">
      <transition name="fade" mode="out-in">
        <div :key="name">
          <h5 class="mb-5">
            {{ name }}
          </h5>
          <p class="font-light">
            {{ description }}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  methods: {
    switchComponent(comp) {
      const findPost = this.posts.find((post) => post.name === comp);
      this.name = findPost.name;
      this.description = findPost.description;
      // console.log(findPost);
    },
    isTouchDevice() {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    },
  },
  data() {
    return {
      name: "Донатори",
      description:
        "Отпадот од храна се јавува низ целиот систем на храна, почнувајќи од фармата, бербата, преработката, транспортот, до големопродажбата, малопродажбата и потрошувачите. Зголеменото внимание на медиумите во последните години, за еколошките и економските трошоци, гладот и зачувувањето на ресурсите поврзани со отпадот од храна ја зголемија јавната свест за загубата на храна.",
      posts: [
        {
          name: "Донатори",
          description:
            " Отпадот од храна се јавува низ целиот систем на храна, почнувајќи од фармата, бербата, преработката, транспортот, до големопродажбата, малопродажбата и потрошувачите. Зголеменото внимание на медиумите во последните години, за еколошките и економските трошоци, гладот и зачувувањето на ресурсите поврзани со отпадот од храна ја зголемија јавната свест за загубата на храна.",
        },
        {
          name: "Волонтери",
          description:
            "Работата на волонтерите има различни должности, како што се обезбедување на корпи за селектирање на вишокот храна, советување на донаторот на принципите и насоките околу донирањето на средствата, подигнување на храната и останатите средства од местото на донаторот, носењето на истите до згрижувачот и по желба на волонтерот, хранење на животните и помош во рехабилитацијата на трауматизираните животни",
        },
        {
          name: "Згрижувачи",
          description:
            "Згрижувачите се здруженија или физички лица кои ги примаат донираните средства и се грижат истите  да им  бидат дадени на животните. Тие се залагаат за секое животно да добие третман и квалитетна исхрана соодветна на нивните потреби. Се залагаат и за поттикнување на граѓаните да помагаат и да згрижуваат животни се со цел да се зголемат алките на синџирот за решавање на проблемот со бездомни животни",
        },
        {
          name: "Среќни животни",
          description:
            "Инвестирањето во едукацијата и развивањето на хуман однос кон животните се едни од нашите приоритети. Граѓаните треба да се умешни во одговорното сопствеништво и да ја развиваат културата за помагање и згрижување на бездомните животни. Движејќи се по правилните хуманитарни чекори, воедно и со зголемување на бројот на помагачи можеме само да постигнеме само една цел: - Среќни животни",
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.stepper {
  --circle-size: clamp(30px, 5vw, 60px);
  --spacing: clamp(5px, 2vw, 10px);
  display: flex;
}
.stepper__item {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  position: relative;
}

.stepper__item::before {
  content: "";
  display: block;
  width: var(--circle-size);
  height: var(--circle-size);
  border-radius: 50%;
  border: 1px solid #bfbfbf;
  margin: 0 auto 10px;
}

.stepper__item:not(:last-child)::after {
  content: "";
  position: relative;
  top: calc(var(--circle-size) / 2);
  width: calc(100% - var(--circle-size) - calc(var(--spacing) * 2));
  left: calc(50% + calc(var(--circle-size) / 2 + var(--spacing)));
  height: 2px;
  background-color: #bfbfbf;
  order: -1;
  z-index: -10;
}

.stepper__title {
  font-weight: 300;
  font-size: 18px;
  margin-top: 30px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

@media only screen and (max-width: 1150px) {
  .stepper__title {
    font-weight: 300;
    font-size: 15px;
    margin-top: 13px;
  }
}
@media only screen and (max-width: 640px) {
  .stepper__title {
    font-weight: 300;
    font-size: 10px;
    margin-top: 13px;
  }
}

#stepper {
  /* for animation */
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}
.content {
  height: 130px;
  width: 130px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -25%;
  font-size: 24px;
  font-weight: 700;

  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  -webkit-tap-highlight-color: transparent;
}
@media only screen and (max-width: 1150px) {
  .content {
    top: -15%;
    height: 90px;
    width: 90px;
    font-size: 18px;
  }
}
@media only screen and (max-width: 1024px) {
  .content {
    top: -15%;
    height: 80px;
    width: 80px;
    font-size: 16px;
  }
}
@media only screen and (max-width: 900px) {
  .content {
    top: -15%;
    height: 70px;
    width: 70px;
    font-size: 14px;
  }
}
@media only screen and (max-width: 640px) {
  .content {
    top: -15%;
    height: 58px;
    width: 58px;
    font-size: 13px;
  }
}
.content:focus,
.content:visited,
.content:active {
  outline: none;
}

.cActive {
  background-color: #c2c5aa;
}
.lActive {
  font-weight: 400;
}
/* animate stepper content */
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter {
  transform: translateY(-100px);
  opacity: 0;
}
.fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
