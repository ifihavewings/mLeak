<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Parta3',
  data () {
    return {
      msg: 'Parta3'
    }
  },
  created () {
    console.log('Parta3');
  }
}
</script>

<style scoped>
h1, h2 {
  color: red;
}
</style>
