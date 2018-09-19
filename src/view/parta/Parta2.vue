<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Parta2',
  data () {
    return {
      msg: 'Parta2'
    }
  },
  created () {
    console.log('Parta2');
  }
}
</script>

<style scoped>
h1, h2 {
  color: red;
}
</style>
