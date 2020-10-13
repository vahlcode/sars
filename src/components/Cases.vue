<template>
  <section class="cases" id="cases">
    <h1>Popular Cases</h1>
    <p>
      For years, innocent Nigerians has been facing so many harrassments,
      extortions, unlawful prosecutions, rape, kidnappings and extrajudicail
      killings in the hands of those charged with the responsibility of
      potecting them against these acts, below are few of the innocent
      Nigerians whose lives has been taken by the SPECAIL ANTI-ROBBERY SQUAD
      (SARS), in the list contains a girl of 16 years.
    </p>
    <div class="case-cards">
      <Victim v-for="victim in victims" :victim="victim" :key="victim.id" />
    </div>
  </section>
</template>

<script>
import Victim from "./Case";

export default {
  name: "Victims",
  components: {
    Victim,
  },
  props: {
    victims: Array,
  },
};
</script>

<style scoped>
.cases {
  padding: 70px 0px;
}
.cases > .case-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
.cases > h1,
.cases > p {
  max-width: 100%;
}
.cases > p {
  margin-bottom: 70px;
}

@media only screen and (min-width: 920px) {
  .cases {
    padding: 100px 0px;
  }
  .cases > .case-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
  .cases > h1 {
    max-width: 60%;
  }
  .cases > p {
    margin-bottom: 70px;
    max-width: 80%;
  }
}
</style>