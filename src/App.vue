<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view :saved="saved" @addCol="addCol" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      saved: [],
      account: {
        username: 'test',
        password: 'test'
      },
      logged: null
    }
  },
  methods: {
    addCol(data) {
      this.saved = [
        ...this.saved,
        data
      ]
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  margin: 0;
  padding: 0  ;
}

#app {
  font-family: 'Poppins', sans-serif;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  // background: #EDEDED;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
