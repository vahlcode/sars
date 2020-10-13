<template>
  <div class="senator">
    <h3>{{ senator.name }}</h3>
    <h5>{{ senator.state }}</h5>
    <div class="buttons">
      <a
        v-if="senator.email"
        :href="'mailto:' + senator.email + '?subject=#EndSARS - End SARS!&amp;body=Dear%20sir/ma,%20I%20am%20%20a%20concerned%20citizen%20of%20your%20constituent,%20and%20I%20will%20like%20to%20express%20my%20displeasure%20about%20SARS.%20The%20members%20of%20this%20squad%20who%20are%20supposed%20to%20protect%20us%20against%20armed%20robbery%20are%20killing,%20extorting%20and%20harassing%20us%20everyday.%20We%20are%20scared%20to%20move%20freely%20and%20we%20need%20your%20help.%20I%20urge%20you,%20distinguished,%20to%20use%20your%20office%20to%20protect%20the%20lives%20of%20Nigerian%20youths%20as%20we%20are%20the%20future%20of%20the%20Nation.%20We%20are%20counting%20on%20you%20to%20do%20the%20right%20thing.%20We%20are%20counting%20on%20you%20to%20help%20us%20#ENDSARS.%20Thanks!'"
        target="_blank"
        rel="noopener noreferrer"
        class="email"
      >
        <Message /> Message
      </a>
      <a
        v-if="senator.phoneNo"
        :href="'tel:+' + senator.phoneNo "
        target="_blank"
        rel="noopener noreferrer"
        class="phone"
      >
        <Phone /> Call
      </a>
    </div>
  </div>
</template>

<script>
import Phone from "./Icons/Phone";
import Message from "./Icons/Message";

export default {
  name: "Senator",
  components: {
    Phone,
    Message,
  },
  props: {
    senator: Object,
  },
};
</script>

<style scoped>
.senator {
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 0 40px #f1f7ff;
}
.senator > h5 {
  font-size: 14px;
  font-weight: 300;
  color: #a3a6aa;
  margin-bottom: 10px;
}
.senator > .buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.senator > .buttons > a {
  display: flex;
  align-items: center;
  width: 47%;
  text-decoration: none;
  border-radius: 30px;
}
.senator > .buttons > a.email {
  background: #ffcdd6;
  padding: 7px 15px;
  font-size: 14px;
}
.senator > .buttons > a.email > svg {
  margin-right: 10px;
  width: 24px;
}
.senator > .buttons > a.phone {
  background: #f1f7ff;
  padding: 7px 15px;
  font-size: 14px;
}
.senator > .buttons > a.phone > svg {
  margin-right: 10px;
}
</style>