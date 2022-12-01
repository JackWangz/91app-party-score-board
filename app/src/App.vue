<template>
  <div id="main">
    <router-view />
  </div>
</template>

<style>

html, body {
  margin: 0;
}

@font-face {
    font-family: '8bit';
    font-display: auto;
    unicode-range: U+000-5FF;
    src: local('8bit'), 
        url("/fonts/8-bit-operator/8bitOperatorPlusSC-Bold.ttf") format("truetype");
}

#main {
  background-image: url("../public/img/yu_gi_oh.jpeg");
  background-color: #cccccc;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#app {
  font-family: '8bit', Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
