<template>
  <div>
    <SearchByState :states="states" />
  </div>
</template>

<script>
import SearchByState from '/components/SearchByState';

export default {
  name: 'IndexPage',
  components: { SearchByState },
  data(){
    return{
      states: [],
    }
  },
  mounted(){
    this.fetchStates();
  },
  methods: {
    async fetchStates() {
      try {
        return await fetch("http://localhost:9000/info/states-list")
          .then(res => res.json())
          .then(data => {
            this.states = data;
          });
      } catch (e) {
        console.error("SOMETHING WENT WRONG :" + e);
      }
    },
  }
}
</script>
