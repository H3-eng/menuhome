<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selected:"1",
    }
  }
}
</script>

<style>
  .mint-tabbar .mint-tab-item p:nth-child(2){
       margin-top: 5px;
    }
    .mint-tabbar .mint-tab-item.is-selected {
        background-color: #eaeaea;
    }
    .mint-tabbar .mint-tab-item span {
      font-size:24px;
    }
    .mint-tabbar .mint-tab-item.is-selected a{
      color: #26a2ff;
    }
</style>
