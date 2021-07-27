<template>
  <div class="search">
    <div class="search-header">
      <div class="search-header-left">
        <div class="logo">
        <router-link to="/">
          <span id="logo-front">Cari</span> 
          <span id="logo-back">Uni</span>
          </router-link>
      </div>
        <input type="text" id="search-input" v-model="keyword">
      </div>
      <Account :saved="saved"/>
    </div>
    <div class="search-content">
      <span>Koleksi kamu</span>
      <div class="content-left">
        <uni-block v-for="(uni, i) in saved" :key="i" :uni="uni" :showDetail="showDetail" />
      </div>
      <div class="content-right">
        <div v-if="selected">
          <img :src="selectedImage" id="logo">
          <span id="name">{{selected.name}}</span>
          <span id="web">{{selected.domains[0]}}</span>
          <span id="address"> {{selected['state-province'] || 'tidak diketahui'}}, {{selected.country}} </span>
          <span id="add-button" @click="addCollection">Tambah ke koleksi</span>
        </div>
      </div>
    </div>
    <!-- {{JSON.stringify(result)}} -->
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
import UniBlock from '../components/UniBlock.vue'
import Account from '../components/Account.vue'

export default {
  name: 'Collection',
  components: {
    UniBlock,
    Account
  },
  props: [
    'saved'
  ],
  data() {
    return {
      result: [],
      selected: null,
      keyword: ''
    }
  },
  async created() {
    const baseUrl = 'http://universities.hipolabs.com/search?'
    const {keyword} = this.$route.query
    this.keyword = keyword
    const {data} = await axios.get(`${baseUrl}name=${keyword}&country=indonesia`)
    this.result = data
  },
  methods: {
    async showDetail(uni) {
      this.selected = uni
    },
    addCollection() {
      const isAuthenticated = localStorage.getItem('user')
      if (!isAuthenticated) this.$router.push('/login')
      this.$emit('addCol', this.selected)
    }
  },
  computed: {
    selectedImage() {
      return 'https://logo.clearbit.com/' + this.selected.domains[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  overflow-x: hidden;
}

.search-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: 100%;
  padding: 0 30px;
  border-bottom: 1px solid #E4DFDF;
  box-sizing: border-box;

  .search-header-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;

    #search-input {
      width: 30vw;
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
  }
}

.search-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px;
  padding-top: 20px;

  span {
    display: flex;
    font-size: 2rem;
  }
}

.content-left {
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  align-self: flex-start;
}

.content-right {
  justify-content: center;
  box-sizing: border-box;
  flex-grow: 1;
  flex-basis: 0;

  div {
    display: grid;
    grid-template-columns: 150px auto;
    padding: 20px;
    border: 1px solid #E4DFDF;
    grid-template-areas: 
    "logo name"
    "logo web"
    "logo address"
    "add add"
    ;
  }

  span {
    display: flex;
    align-items: center;
  }

  #logo {
    grid-area: logo;
    align-self: center;
  }

  #name {
    grid-area: name;
    font-size: 1.5rem;
    font-weight: 800;
  }

  #web {
    grid-area: web;
  }

  #address {
    grid-area: address;
  }
  
  #add-button {
    grid-area: add;
    display: flex;
    padding: 5px;
    margin-top: 13px;
    justify-content: center;
    border: 1px solid #E4DFDF;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: #444444;
      color: white;
    }
  }
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  display: flex;
  flex-direction: row;
  gap: .2rem;
  cursor: pointer;
  user-select: none;

    a {
    text-decoration: none;
  }

  #logo-front {
    color: #DA0037;
  }

  #logo-back {
    color: white;
    background: #DA0037;
    padding: 0 .5rem;
    border-radius: 10px;
  }
}
</style>