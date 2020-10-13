<template>
  <section class="hero">
    <div class="write-up">
      <h1>#EndSARS<br />#Stop The Killings</h1>
      <p>
        Lend A Voice in Stopping the Extrajudicial Killings of Young Nigerians
        by The SARS!
      </p>
      <a href="" @click="scroll">Read More</a>
    </div>
    <div class="image">
      <img src="../assets/hero.jpg" alt="#EndSARS Protest" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  methods: {
    scroll: function(e) {
      e.preventDefault()
      let CASES = document.querySelector(".cases")
      CASES.scrollIntoView()
    }
  }
};
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  position: relative;
}
.hero > .image {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  width: 100%;
}
.hero > .image > img {
  position: relative;
  width: 100%;
  height: 50vh;
  border-radius: 15px;
  margin-bottom: 20px;
}
.hero > .write-up {
  width: 100%;
  padding-right: 50px;
}
.hero > .write-up > h1 {
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 20px;
}
.hero > .write-up > p {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
}
.hero > .write-up > a {
  background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
  border: transparent;
  cursor: pointer;
  display: inline-block;
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 30px;
}
@media only screen and (min-width: 920px) {
  .hero {
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
}
.hero > .image {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  width: 50%;
}
.hero > .image > img {
  position: relative;
  width: 100%;
  height: 70vh;
  border-radius: 15px;
  margin-bottom: 0;
}
.hero > .write-up {
  width: 50%;
  padding-right: 50px;
}
.hero > .write-up > h1 {
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 20px;
}
.hero > .write-up > p {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
}
.hero > .write-up > a {
  background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
  border: transparent;
  cursor: pointer;
  display: inline-block;
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 30px;
}
}
</style>