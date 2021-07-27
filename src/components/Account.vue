<template>
  <div class="account" @click="seeCollection">
    <span id="saved">{{saved.length}}</span>
    <span>Universitasku</span>
  </div>
</template>

<script>
export default {
  name: 'Account',
  props: [
    'saved'
  ],
  methods: {
    seeCollection() {
      this.$router.push('/universitasku')
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>