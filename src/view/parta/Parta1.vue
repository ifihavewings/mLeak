<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Parta1",
  data() {
    return {
      msg: "Parta1"
    };
  },
  created() {
    // 模拟50102，弹窗
    // this.$post({
    //   url: "/api/testJK",
    //   data: {}
    // })
    //   .then(function(response) {
    //     console.log('===$post===')
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    // 模拟00000，不弹窗
    // this.$post({
    //   url: "/api/testJKa",
    //   data: {}
    // })
    //   .then(function(response) {
    //     console.log('===$post===')
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    // 模拟 data  为null
    // this.$post({
    //   url: "/api/testJKd",
    //   data: {}
    // })
    //   .then(function(response) {
    //     console.log('===$post===')
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    // // 模拟 data  为{}
    this.$post({
      url: "/api/testJKe",
      data: {}
    })
      .then(function(response) {
        console.log('===$post===')
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    // // 模拟 data.respDesc  为对象
    // this.$post({
    //   url: "/api/testJKc",
    //   data: {}
    // })
    //   .then(function(response) {
    //     console.log('===$post===')
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    // 模拟 data.respDesc  字符串
    // this.$post({
    //   url: "/api/testJKb",
    //   data: {}
    // })
    //   .then(function(response) {
    //     console.log('===$post===')
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });





  }
};
</script>

<style scoped>
h1,
h2 {
  color: red;
}
</style>
