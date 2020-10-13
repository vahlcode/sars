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
  },
  data: () => {
    return {
      cases: [
        { id: 1, name: "Emmanuel Egbo" },
        { id: 1, name: "Godgisft Ferguson Ekerete" },
        { id: 1, name: "Tony Oruama" },
        { id: 1, name: "Daniel Adewuyi Tella" },
        { id: 1, name: "Modebayo Awosika" },
        { id: 1, name: "Chinedu Ani" },
        { id: 1, name: "Tina Ezekwe" },
        { id: 1, name: "Peter Ofurum" },
        { id: 1, name: "Rinji" },
        { id: 1, name: "Johnson Kolade" },
        { id: 1, name: "Tiamiyu Kazeem" },
        { id: 1, name: "Chima Ikwunado" },
        { id: 1, name: "Ifeoma Abugu" },
        { id: 1, name: "Sleek" },
        { id: 1, name: "Femi Bello" },
        { id: 1, name: "Chukwuemeka Mathew Onovo" },
        { id: 1, name: "Chibuike Anams" },
        { id: 1, name: "Christian Onuigbo" },
        { id: 1, name: "Chika Ibeku" },
        { id: 1, name: "Gbariel Ejoor Owoicho" },
        { id: 1, name: "Precious Odua" },
        { id: 1, name: "Johnson Nnaemeka" },
        { id: 1, name: "Stephen Agbayim" },
        { id: 1, name: "Chidi Odinauwa" },
        { id: 1, name: "Azuamaka Victor Maduamago" },
      ],
    };
  },
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
