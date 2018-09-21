<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Page 1 </router-link> |
      <router-link to="page2">Page 2 </router-link>|
      <router-link to="page3">Page 3 </router-link>|
      <router-link to="exo1">Exo1</router-link>|
      <router-link to="exo2">Exo2</router-link>|
      <router-link to="exo3">Exo3</router-link>|
      <router-link to="exo4">Exo4</router-link>|
      <router-link to="exo5">Exo5</router-link>|
      <router-link to="exo6">Exo6</router-link>|
      <router-link to="exo7">Exo7</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
