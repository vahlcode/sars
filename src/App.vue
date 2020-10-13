<template>
  <div id="app">
    <Sidebar />
    <Main />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    Sidebar,
    Main,
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}
#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}
::placeholder {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  color: #767f8a;
  font-size: 16px;
}
img {
  max-width: 100%;
  object-fit: cover;
}
body {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  color: #222833;
  font-size: 16px;
}
h1 {
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 20px;
}
p {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #767f8a;
  line-height: 1.5em;
}
::-webkit-scrollbar {
  width: 7px;
  background: #f1f7ff;
}
::-webkit-scrollbar-thumb {
  width: 7px;
  background: #b0d2ff;
}
@media only screen and (min-width: 920px) {
  h1 {
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #767f8a;
    line-height: 1.5em;
  }
}
</style>
