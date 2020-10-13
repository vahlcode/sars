<template>
  <section class="support">
    <h1>How to support</h1>
    <div class="support-cards">
      <div class="support-card">
        <Flag />
        <h4>Join The Protest</h4>
        <p>
          Massive protests are going in the country and outside Nigeria, you can
          find the nearest location in the link below.
        </p>
        <a
          href="https://www.notion.so/b5632859ff7e4fe09d8cd73880f8aca7?v=6456a7172b9542a0b1487924766eaf7d"
        >
          <span>View</span>
        </a>
      </div>
      <div class="support-card">
        <Money />
        <h4>Donate</h4>
        <p>
          Donations are used to support protesters, help bail arrested ones and
          for other expenses.
        </p>
        <a
          href="https://flutterwave.com/pay/5eaptc7mnx2i"
          ><span>Donate</span></a
        >
      </div>
      <div class="support-card">
        <Twitter />
        <h4>Tweet</h4>
        <p>You can join the movement by making tweets about it on Twitter.</p>
        <a
          href="http://twitter.com/intent/tweet?text=&hashtags=EndSARSNow,EndSARS,EndSARSProtests"
          ><span>Tweet #EndSARS</span></a
        >
      </div>
      <div class="support-card">
        <Message />
        <h4>Contact Senators</h4>
        <p>
          Use our lists of Nigerian serving senators to find the one serving you
          and send them messages, call them concerning this.
        </p>
        <a
          href="/senators"
        >
          <span> View </span></a
        >
      </div>
      <div class="support-card">
        <Trend />
        <h4>Broadcast</h4>
        <p>
          Since the begining of this protest, our local medias have shown less
          interest in covering and broadcasting it, you can help do their work
          by broadcasting to your WhatsApp contacts.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone&text=%0A*ATTENTION*%20%E2%80%BC%EF%B8%8F%E2%80%BC%EF%B8%8F%0A%0A*THIS%20IS%20VERY%20IMPORTANT%20ESPECIALLY%20IF%20YOU%20ARE%20A%20PARENT%20WITH%20YOUTHS*%0AA%20group%20of%20law%20enforcement%20officers%20called%20SARS%20have%20been%20terrorizing%20our%20young%20people.%20%0AIf%20you%20are%20young,%20have%20a%20gadget,%20an%20interesting%20hairstyle%20(sometimes%20you%20don%E2%80%99t%20even%20need%20to%20have%20an%20interesting%20hairstyle)%20or%20a%20laptop%20bag,%20you%E2%80%99re%20automatically%20under%20attack.%20%0A%0AYoung%20people%20(our%20brothers,%20sisters,%20friends%20and%20your%20children)%20have%20been%20extorted,%20beaten%20and%20even%20in%20some%20cases%20detained%20just%20for%20being%20successful.%20That%20is%20their%20only%20crime.%20In%20recent%20times,%20this%20has%20been%20on%20the%20increase%20and%20a%20number%20of%20deaths%20have%20been%20recorded,%20with%20no%20action%20from%20our%20leaders.%20%0A%0ASo%20they%20have%20decided%20enough%20is%20enough.%20Joined%20by%20celebrities%20such%20as%20Folarin%20%E2%80%9CFalz%E2%80%9D%20Falana%20and%20Runtown,%20protests%20have%20been%20holding%20nationwide%20since%20Thursday%20the%208th%20of%20October,%20still%20we%20have%20no%20word%20from%20the%20presidency%20and%20no%20coverage%20from%20the%20major%20media%20houses.%20%0A%0AWe%20are%20calling%20on%20you%20our%20parents%20because%20we%20know%20the%20amount%20of%20influence%20you%20wield%20to%20join%20forces%20with%20us%20to%20EndSARS!.%20End%20SARS%20not%20reform%20it.%20We%E2%80%99re%20tired%20of%20being%20extorted%20because%20we%20are%20trying%20to%20make%20a%20living,%20having%20our%20laptops%20taken%20from%20us,%20our%20phones%20searched%20and%20our%20accounts%20being%20emptied.%20%0A%0AYou%20can%20read%20more%20about%20how%20the%20protests%20are%20going%20here%20https://www.zikoko.com/life/citizen/the-police-are-harassing-endsars-protesters-1/%0A%0AYou%20can%20also%20call%20and%20email%20our%20reps%20to%20make%20them%20as%20uncomfortable%20as%20possible,%20you%20can%20find%20their%20contact%20details%20here%20https://endsars.vercel.app/%0A%0AWhatever%20you%20do,%20please%20don%E2%80%99t%20be%20silent.%20%0AJoin%20us%20to%20Endsars!.%20%0A%0AWe%20are%20tired%20of%20burying%20our%20friends,%20YOU%20deserve%20to%20reap%20the%20fruit%20of%20your%20labour%20over%20us%20but%20that%20won%E2%80%99t%20happen%20if%20we%E2%80%99re%20dead.%20%0A%0AHelp%20us%20by%20forwarding%20to%20all%20your%20contacts%20and%20taking%20action%20%0A*Help%20us%20ENDSARS!*%0A%0AYours%20sincerely%20%0AA%20frustrated%20but%20hardworking%20Nigerian%20youth%0A%0A"
        >
          <span> Broadcast </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Flag from "./Icons/Flag";
import Message from "./Icons/Message";
import Trend from "./Icons/Trend";
import Twitter from "./Icons/Twitter";
import Money from "./Icons/Money";

export default {
  name: "Support",
  components: {
    Flag,
    Message,
    Trend,
    Twitter,
    Money,
  },
};
</script>

<style scoped>
.support {
  padding: 70px 0;
}
.support-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}
.support-cards > h1 {
  margin-bottom: 30px;
}
.support-cards > .support-card > h4 {
  font-size: 20px;
  margin: 10px 0;
}
.support-cards > .support-card > p {
  font-size: 14px;
}
.support-cards > .support-card > a {
  font-size: 14px;
  padding: 10px 30px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: 0.5s;
  color: #222833;
}
.support-cards > .support-card > a > span {
  display: block;
  z-index: 10;
}
.support-cards > .support-card > a::after {
  background: #f1f7ff;
  border-radius: 30px;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(0);
  transition: 0.5s;
  z-index: 0;
}
.support-cards > .support-card > a:hover:after {
  background: #f1f7ff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-70%);
}

@media only screen and (min-width: 920px) {
  .support {
    padding: 50px 0;
  }
  .support-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
  }
  .support-cards > h1 {
    margin-bottom: 30px;
  }
  .support-cards > .support-card > h4 {
    font-size: 20px;
    margin: 10px 0;
  }
  .support-cards > .support-card > p {
    font-size: 14px;
  }
  .support-cards > .support-card > a {
    font-size: 14px;
    padding: 10px 30px;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: #222833;
    position: relative;
    border-radius: 30px;
    overflow: hidden;
  }
  .support-cards > .support-card > a > span {
    display: block;
    z-index: 10;
  }
  .support-cards > .support-card > a::after {
    background: #f1f7ff;
    border-radius: 30px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(0);
    transition: 0.5s;
    z-index: 0;
  }
  .support-cards > .support-card > a:hover:after {
    background: #f1f7ff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-70%);
  }
}
</style>