<template>
  <div class="case">
    <div class="image">
      <img :src="'./assets/'+ victim.image" :alt="victim.name + '\'s Picture'" :title="victim.name" />
    </div>
    <div class="details">
      <span class="counter">
        {{ victim.id }}
      </span>
      <h3>{{ victim.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Case",
  props: {
    victim: Object,
  },
};
</script>

<style scoped>
.case > .image {
  width: 100%;
  background: #f1f7ff;
  border-radius: 5px;
  padding: 10px;
}
.case > .image > img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-top: -40px;
  padding-bottom: -40px;
  position: relative;
}
.case > .details {
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px 0 40px 0;
}
.case > .details > .counter {
  background-image: linear-gradient(
    to right,
    #f78ca0 0%,
    #f9748f 19%,
    #fd868c 60%,
    #fe9a8b 100%
  );
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 10px;
  font-size: 14px;
}
.case > .details > h3 {
  font-size: 14px;
}
</style>