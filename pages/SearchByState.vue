<template>
  <div>
    <p>abortion status - data provided by <a target="_blank" href="http://www.abortionpolicyapi.com">Abortion Policy API</a></p>
    <label id="select-state">search by state</label>
    <select v-model="selected" name="states" id="select-state">
      <option disabled value="">select your state</option>
      <option v-for="state in states" :value="state" v-bind:key="state.abbr">{{ state.name }}</option>
    </select>
    <button @click="submitBtn">submit</button>
    <p>banned after weeks since last menstrual period: {{ this.banned_after_weeks_since_LMP }}</p>
    <p>abortion is not banned if necessary to save the pregnant person's life: {{ this.exception_life }}</p>
    <p>if non-null, abortion is not banned if necessary to preserve the pregnant person's health: {{ this.exception_health }}</p>
    <p>in some states, exceptions may be granted based on the health or status of the fetus: {{ this.exception_fetal }}</p>
    <p>if true, exceptions may be granted in cases of rape or incest: {{ this.exception_rape_or_incest }}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SearchByState',
  props: ['states'],
  data(){
    return{
      selected: '',
      info: [],
      banned_after_weeks_since_LMP: '',
      exception_life: '',
      exception_health: '',
      exception_fetal: '',
      exception_rape_or_incest: '',
    }
  },
  methods: {
    submitBtn() {
      console.log("hello", this.selected);
      this.getInfo();
    },
    async getInfo() {
      await fetch(`api/info/gestational_limits/${this.selected.abbr}/`)
      .then((res) => {
        console.log('res', res);
        let response = res.data[0][this.selected.name];            
        this.banned_after_weeks_since_LMP = response.banned_after_weeks_since_LMP;
        this.exception_life = response.exception_life;
        this.exception_health = response.exception_health;
        this.exception_fetal = response.exception_fetal;
        this.exception_rape_or_incest = response.exception_rape_or_incest;
      }).catch((err) => {
        console.log("there was an error getting info: ", err);
      })
    }
  }
}
</script>
