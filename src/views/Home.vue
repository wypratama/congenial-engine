<template>
  <div class="home">
    <Account :saved="saved"/>
    <div class="home-content">
      <div class="logo">
        <span id="logo-front">Cari</span> 
        <span id="logo-back">Uni</span>
      </div>
      <input type="text" 
              id="search-input" 
              v-model="textInput"
              @keyup.enter="searchUni"
      >
    </div>
    <router-view />
  </div>
</template>

<script>
import Account from '../components/Account.vue'

export default {
  name: 'Home',
  components: {
    Account
  },
  props: [
    'saved'
  ],
  data() {
    return {
      textInput: ''
    }
  },
  methods: {
    async searchUni() {
      this.$router.push({
        path: '/search',
        query: {
          keyword: this.textInput
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.account {
  display: flex;
  height: 70px;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding: 0 50px;
  font-weight: 400;
  gap: .3rem;
  cursor: pointer;
  user-select: none;

  span {
    &:hover {
      color: #171717;
      font-weight: 700;
    }
  }

  #saved {
    background: #444444;
    color: white;
    padding: 0 .3rem;
    border-radius: 5px;
  }

}

.home-content {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  flex-grow: 1;
}

.logo {
  font-size: 6rem;
  font-weight: 800;
  display: flex;
  flex-direction: row;
  gap: .5rem;
  cursor: pointer;
  user-select: none;

  #logo-front {
    color: #DA0037;
  }

  #logo-back {
    color: white;
    background: #DA0037;
    padding: 0 1.2rem;
    border-radius: 10px;
  }
}

#search-input {
  // color: black;
  width: 50vw;
  height: 3rem;
  border: 2px solid #E4DFDF;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 0 2rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    background: #EDEDED;
  }
}
</style>
