<template>
  <div>
    <p>abortion status</p>
    <button @click="clickBtn">click me</button>
    <p>{{ data }}</p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      data: {},
    }
  },
  methods: {
    clickBtn() {
      console.log("hello");
      this.asyncData();
    },
    async asyncData() {
      try {
        return await fetch("http://localhost:9000/info")
          .then(res => res.json())
          .then(data => {
            console.log('data', data);
            this.data = data;
          });
      } catch (e) {
        console.error("SOMETHING WENT WRONG :" + e);
      }
    },
  }
}
</script>
