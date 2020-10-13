<template>
  <section class="home">
    <Hero />
    <Victims :victims="victims" />
    <Support />
  </section>
</template>

<script>
import Hero from "../Hero";
import Victims from "../Cases";
import Support from "../Support";

export default {
  name: "Home",
  components: {
    Hero,
    Victims,
    Support
  },
  data: () => {
    return {
      victims: [
        { id: 1, name: "Emmanuel Egbo" },
        { id: 2, name: "Godgisft Ferguson Ekerete" },
        { id: 3, name: "Tony Oruama" },
        { id: 4, name: "Daniel Adewuyi Tella" },
        { id: 5, name: "Modebayo Awosika" },
        { id: 6, name: "Chinedu Ani" },
        { id: 7, name: "Tina Ezekwe" },
        { id: 8, name: "Peter Ofurum" },
        { id: 9, name: "Rinji" },
        { id: 10, name: "Johnson Kolade" },
        { id: 12, name: "Tiamiyu Kazeem" },
        { id: 13, name: "Chima Ikwunado" },
        { id: 14, name: "Ifeoma Abugu" },
        { id: 15, name: "Sleek" },
        { id: 16, name: "Femi Bello" },
        { id: 17, name: "Chukwuemeka Mathew Onovo" },
        { id: 18, name: "Chibuike Anams" },
        { id: 19, name: "Christian Onuigbo" },
        { id: 20, name: "Chika Ibeku" },
        { id: 21, name: "Gbariel Ejoor Owoicho" },
        { id: 22, name: "Precious Odua" },
        { id: 23, name: "Johnson Nnaemeka" },
        { id: 24, name: "Stephen Agbayim" },
        { id: 25, name: "Chidi Odinauwa" },
        { id: 27, name: "Azuamaka Victor Maduamago" },
      ],
    };
  },
};
</script>