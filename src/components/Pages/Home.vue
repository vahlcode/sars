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
        { id: 1, name: "Emmanuel Egbo", image: "emmanuel.png" },
        { id: 2, name: "Godgift Ferguson Ekerete", image: "godgift.png" },
        { id: 3, name: "Tony Oruama", image: "tony.png" },
        { id: 4, name: "Daniel Adewuyi Tella", image: "tella.png" },
        { id: 5, name: "Modebayo Awosika", image: "modebayo.png" },
        { id: 6, name: "Chinedu Ani", image: "chinedu.png" },
        { id: 7, name: "Tina Ezekwe", image: "tina.png" },
        { id: 8, name: "Peter Ofurum", image: "peter.png" },
        { id: 9, name: "Rinji", image: "rinji.png" },
        { id: 10, name: "Johnson Kolade", image: "johnson.png" },
        { id: 12, name: "Tiamiyu Kazeem", image: "kazeem.png" },
        { id: 13, name: "Chima Ikwunado", image: "chima.png" },
        { id: 14, name: "Ifeoma Abugu", image: "ifeoma.png" },
        { id: 15, name: "Sleek", image: "sleek.png" },
        { id: 16, name: "Femi Bello", image: "femi.png" },
        { id: 17, name: "Chukwuemeka Mathew Onovo", image: "chukwuemeka.png" },
        { id: 18, name: "Chibuike Anams", image: "chibuike.png" },
        { id: 19, name: "Christian Onuigbo", image: "christian.png" },
        { id: 20, name: "Chika Ibeku", image: "chika.png" },
        { id: 21, name: "Gbariel Ejoor Owoicho", image: "gabriel.png" },
        { id: 22, name: "Precious Odua", image: "precious.png" },
        { id: 23, name: "Johnson Nnaemeka", image: "johnson.png" },
        { id: 24, name: "Stephen Agbayim", image: "steven.png" },
        { id: 25, name: "Chidi Odinauwa", image: "chidi.png" },
        { id: 27, name: "Azuamaka Victor Maduamago", image: "azuamaka.png" },
      ],
    };
  },
};
</script>