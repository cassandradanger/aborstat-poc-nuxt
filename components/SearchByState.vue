<template>
  <div>
    hi
    <button @click="submitBtn">submit</button>
    {{ states }}
    <select v-model="selected" name="states" id="states">
      <option v-for="state in states" :value="state.abbr" v-bind:key="state.abbr">{{ state.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SearchByState',
  props: ['states'],
  data(){
    return{
      data: {
        selected: '',
      },
    }
  },
  methods: {
    submitBtn() {
      console.log("hello", this.selected);
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
