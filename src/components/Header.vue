<template>
    <div id="navbar" :style="{'fontSize': isScrolled ? '0px' : '55px',  'box-shadow': isScrolled ?  '0 8px 6px -6px black' : '' , 'background-color': 'white'}">

        <div id="navtext">
            <a to="/" id="logo" :style="{'fontSize': isScrolled ? '20px' : '25px' }">360 Dashboard</a>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About us</router-link>
            <router-link to="/about">About us</router-link>
            <router-link to="/about">About us</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    props: {
    },
    data() {
        return {
            isScrolled: false,
        }
    },
    created() {
        document.addEventListener('scroll', this.changeIsScrolled)
    },
    beforeDestroy() {
        document.removeEventListener('scroll', this.changeIsScrolled)
    },
    methods: {
        changeIsScrolled() {
            this.isScrolled = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
        },
    },

})
export default class Header extends Vue {

}

</script>

<style>
* {
  box-sizing: border-box;
}

#navbar {
  top:0;
  z-index: 99;
  position: sticky;
  width: 100%;
  background-color: transparent;
  transition: 0.4s;
  box-shadow: none;
}

#navbar a {
  /* float: left; */

  color: #673AB7;
  font-family: inherit;
  padding: 15px;
  text-decoration: none;
  font-size: 18px;
  /* line-height: 25px; */
  border-radius: 4px;
}

#navtext {
    display: flex;
    justify-content: center;
    font-weight: bold;
}

#navbar #logo {
  font-size: 35px;
  font-weight: bold;
  transition: 0.1s;
  float: left;
  position: absolute;
  left: 0;
  cursor: pointer;
}

#navbar a:hover {
  background-color: #673AB7;
  color: white;
  transition: 0.6s;
  border-radius: 10px;
  transition: 0.6s;
}

#navbar a.active {
  background-color: dodgerblue;
  color: rgb(255, 255, 255);
}

#navbar-link {
  display: flex;
  justify-content: center;
}
/* #responsiveNav {
  display: none;
} */
/* @media screen and (max-width: 640px) {
  #navbar {
    display: none;
  }
  #responsiveNav {
    display: block;
    height: 10%;
  }
} */
</style>
