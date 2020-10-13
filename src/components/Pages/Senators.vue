<template>
  <section class="home">
    <div class="search-form">
      <form action="">
        <Search />
        <input
          type="text"
          placeholder="Search your senator by name or by your state..."
          @input="search"
          @blur="blur"
        />
      </form>
    </div>
    <div class="senators" v-if="senators">
      <Senator
        v-for="senator in senators"
        :key="senator.id"
        :senator="senator"
      />
    </div>
    <div class="pre-loader" v-if="senators <= 0">
      <div class="loader"></div>
      <h5>🤞🏽 Wait... Let's get your senators....</h5>
    </div>
  </section>
</template>

<script>
import Search from "../Icons/Search";
import Senator from "../Senator";

export default {
  name: "Senators",
  components: {
    Search,
    Senator,
  },
  data: () => {
    return {
      senators: null,
    };
  },
  created() {
    this.setSenators();
  },
  methods: {
    setSenators: function () {
      fetch("./Senators.json")
        .then((res) => res.json())
        .then((data) => {
          this.senators = data;
        })
        .catch((err) => console.log(err));
    },
    search: function (e) {
      const value = e.target.value;
      if (value == "") {
        this.senators = null;
        this.setSenators();
      } else {
        this.senators = null;
        fetch("./Senators.json")
          .then((res) => res.json())
          .then((data) => {
            this.senators = data.filter(
              (val) =>
                val.name.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
                val.state.toLowerCase().indexOf(value.toLowerCase()) > -1
            );
          })
          .catch((err) => console.log(err));
      }
    },
    blur: function (e) {
      const value = e.target.value;
      if (value != "") {
        return false;
      } else {
        this.senators = null;
        this.setSenators();
      }
    },
  },
};

</script>

<style scoped>
.search-form > form {
  display: flex;
  align-items: center;
  padding: 15px 30px;
  border: 2px solid #f1f7ff;
  border-radius: 30px;
}
.search-form > form > input {
  border: none;
  flex: 1;
}
.search-form > form > svg {
  margin-right: 20px;
}
.senators {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 50px 0;
}
.pre-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 250px 0;
}
.loader {
  height: 20px;
  width: 20px;
  border-top: 5px solid #b0d2ff;
  border-right: 5px solid #b0d2ff;
  border-bottom: 5px solid #b0d2ff;
  border-left: 5px solid #f1f7ff;
  animation: rotate 0.5s infinite;
  border-radius: 50%;
  margin-bottom: 10px;
}
@media only screen and (min-width: 920px) {
  .search-form > form {
    display: flex;
    align-items: center;
    padding: 15px 30px;
    border: 2px solid #f1f7ff;
    border-radius: 30px;
  }
  .search-form > form > input {
    border: none;
    flex: 1;
  }
  .search-form > form > svg {
    margin-right: 20px;
  }
  .senators {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 50px 0;
  }
  .pre-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 250px 0;
  }
  .loader {
    height: 20px;
    width: 20px;
    border-top: 5px solid #b0d2ff;
    border-right: 5px solid #b0d2ff;
    border-bottom: 5px solid #b0d2ff;
    border-left: 5px solid #f1f7ff;
    animation: rotate 0.5s infinite;
    border-radius: 50%;
    margin-bottom: 10px;
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>