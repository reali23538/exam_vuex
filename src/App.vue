<template>
  <div id="app">
    <div>
      <label>{{ storeGetMsg }}</label>
      <input type="number" v-model.number="num"/>
      <button @click="onChangedMsg">PLUS</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      num: 1
    }
  },
  computed: {
    storeGetMsg () {
      return this.$store.getters.getMsg
    }
  },
  methods: {
    onChangedMsg () {
      this.$store.dispatch('callMutation', { num: this.num })
    }
  }
}
</script>
