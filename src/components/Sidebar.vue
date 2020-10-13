<template>
  <aside class="sidebar">
    <div class="inner">
      <div class="menus">
        <ul>
          <router-link to="/" tag="li" exact>
            <a>
              <HomeIcon />
              <span>Home</span>
            </a>
          </router-link>
          <router-link to="/senators" tag="li">
            <a>
              <ContactsIcon />
              <span>Senators</span>
            </a>
          </router-link>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
import HomeIcon from "./Icons/Home";
import ContactsIcon from "./Icons/ContactsIcon";

export default {
  name: "Sidebar",
  components: {
    HomeIcon,
    ContactsIcon,
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .sidebar {
    background: #ffffff;
    padding: 16px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99;
  }
}
.sidebar > .inner {
  background: #f1f7ff;
  padding: 20px;
  border-radius: 20px;
  height: 100%;
}
.sidebar > .inner > .logo {
  text-align: center;
  margin-bottom: 50px;
}
.sidebar > .inner > .menus > ul {
  display: flex;
}
.sidebar > .inner > .menus > ul > li {
  list-style: none;
}
.sidebar > .inner > .menus > ul > li > a {
  color: #d3d3d3;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 15px 30px;
  position: relative;
  overflow: hidden;
  transition: 0.5s;
}
.sidebar > .inner > .menus > ul > li.router-link-active > a:after {
  background: #ffffff;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(0);
}
.sidebar > .inner > .menus > ul > li > a::after {
  background: #ffffff;
  border-radius: 30px;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  transition: 0.5s;
  z-index: 0;
}
.sidebar > .inner > .menus > ul > li > a:hover:after {
  background: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(0);
}
.sidebar > .inner > .menus > ul > li > a > svg {
  margin-right: 10px;
  z-index: 1;
}
.sidebar > .inner > .menus > ul > li > a > span {
  color: #222833;
  text-decoration: none;
  display: inline-block;
  z-index: 1;
}
@media only screen and (min-width: 920px) {
  .sidebar {
    background: #ffffff;
    padding: 50px 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
  }
  .sidebar > .inner {
    background: #f1f7ff;
    padding: 20px;
    border-radius: 20px;
    height: 100%;
  }
  .sidebar > .inner > .logo {
    text-align: center;
    margin-bottom: 50px;
  }
  .sidebar > .inner > .menus > ul {
    display: block;
  }
  .sidebar > .inner > .menus > ul > li {
    list-style: none;
  }
  .sidebar > .inner > .menus > ul > li > a {
    color: #d3d3d3;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 15px 30px;
    position: relative;
    overflow: hidden;
    transition: 0.5s;
  }
  .sidebar > .inner > .menus > ul > li.router-link-active > a:after {
    background: #ffffff;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(0);
  }
  .sidebar > .inner > .menus > ul > li > a::after {
    background: #ffffff;
    border-radius: 30px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    transition: 0.5s;
    z-index: 0;
  }
  .sidebar > .inner > .menus > ul > li > a:hover:after {
    background: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(0);
  }
  .sidebar > .inner > .menus > ul > li > a > svg {
    margin-right: 10px;
    z-index: 1;
  }
  .sidebar > .inner > .menus > ul > li > a > span {
    color: #222833;
    text-decoration: none;
    display: inline-block;
    z-index: 1;
  }
}
</style>