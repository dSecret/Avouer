<template>
<div class="container">
        <md-toolbar class="md-medium" >
          <div class="md-toolbar-container">
            <h2 class="md-display-1" style="color:white;flex: 1;">Avouer</h2>
          </div>
        </md-toolbar>
        <div class="cont-wrap">
            <router-view></router-view>
        </div>
</div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'home'
}
</script>

<style lang="css" scoped>
.container{
  margin:0 !important;
  padding:0 0 40px 0!important;
  width:100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.cont-wrap{
  width:50%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin:0 auto;
  margin-top:20px;
}
@media only screen and (max-width:5.5in){
  .cont-wrap{
    width:98%;

  }
}
</style>
