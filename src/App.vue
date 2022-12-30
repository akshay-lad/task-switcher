<template>
  <div id="app">
    <i class="fa fa-th" aria-hidden="true"></i>&nbsp;&nbsp;<i class="fa fa-th-list" aria-hidden="true"></i>
    &nbsp;&nbsp;&nbsp;<button class="custom-btn">Add deals</button>
    <input type="text" name="search" placeholder="Search Deals">
    <hr/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.custom-btn{
  padding: 8px 10px;
  border-radius: 15px;
  border: 1px solid rgb(0, 255, 115);
  background-color: rgb(0, 255, 115);
  color: white;
}
input[type=text] {
    width: 250px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    border-radius: 15px;
    padding: 8px 10px;
  border-radius: 15px;
  border:1px solid #ddd;
}
input[type=text]:focus,.custom-btn:focus {
    outline: none;
}
/* When the input field gets focus, change its width to 100% */

</style>
