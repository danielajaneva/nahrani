<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
*,
*::after,
*::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

body {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #292929;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow: overlay;
}

/* SCROLLBAR DESIGN */
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 6px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #656d4a94;
}
</style>
