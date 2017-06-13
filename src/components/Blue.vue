<template>
  <div class="blue">
    <h1>This is a {{ msg }} page</h1>

  </div>
</template>

<script>
export default {
  name: 'blue',
  data () {
    return {
      msg: 'blue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    color: blue;
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>