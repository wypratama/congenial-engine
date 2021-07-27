<template>
  <div class="uni-block" @click="showDetail(uni)">
    <h4> {{uni.name}} </h4>
    <span id="name"> {{uni.domains[0]}} </span>
    <span> {{uni['state-province'] || 'tidak diketahui'}}, {{uni.country}} </span>
  </div>
</template>

<script>
export default {
  name: 'UniBlock',
  props: [
    'uni',
    'showDetail'
  ]
}
</script>

<style lang="scss" scoped>
.uni-block {
  display: flex;
  flex-direction: column;
  gap: .2rem;
  cursor: pointer;
  
  h4 {
    font-size: 1.2rem;
  }

  &:hover {
    h4 {
      text-decoration: underline;
    }
  }
}
</style>