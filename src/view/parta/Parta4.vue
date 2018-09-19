<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Parta4',
  data () {
    return {
      msg: 'Parta4'
    }
  },
  created () {
    console.log('Parta4');
  }
}
</script>

<style scoped>
h1, h2 {
  color: red;
}
</style>
