<template>
  <div class="login">
    <div class="login-box">
      <span>Login ke akun Kamu</span>
      <input type="text" placeholder="username" v-model="username">
      <input type="text" placeholder="password" v-model="password">
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (this.username !== 'test') 'aa'
      else {
        localStorage.setItem('user', {username: this.username, password: this.password})
        this.username = '';
        this.password = '';
        this.$router.back()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #1b18185d, $alpha: 0.3);

  .login-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    width: 40vw;
    height: 20vw;
    gap: 10px;

    span {
      font-size: 2rem;
      margin-bottom: 30px;
    }

    input[type="text"] {
      width: 15vw;
      height: 2rem;
      padding: 0 1rem;
      box-sizing: border-box;
    }

    button {
      width: 15vw;
      height: 2rem;
    }
  }
}
</style>