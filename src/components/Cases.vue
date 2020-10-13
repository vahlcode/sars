<template>
  <section class="cases" id="cases">
    <h1>Popular Cases</h1>
    <p>
      Below are the pictures of some of the victims of Police brutality by the SARS, they all lost their lives. In the list contains a girl of 16 years old.
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