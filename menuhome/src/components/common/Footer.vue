<template>
    <mt-tabbar fixed v-model="selected" class="footer">
      <mt-tab-item id="tab1">
        <router-link to="/">
          <p>
            <i class="fa fa-home" aria-hidden="true"></i>
          </p>
          <p>首页</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <router-link to="/Menu">
          <p>
            <i class="fa fa-file-text" aria-hidden="true"></i>
          </p>
          <p>菜单</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <router-link to="/Order">
          <p>
            <i class="fa fa-outdent" aria-hidden="true"></i>
          </p>
          <p>订单</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <router-link to="/Home">
          <p>
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          </p>
          <p>我的</p>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
</template>
<script>
export default {
    data(){
        return {
            selected:"tab1"
        }
    }
}
</script>
<style scoped>
  .footer a{
    color: #888888;
    height: 50px;
  }
  .footer .fa{
    font-size: 18px;
    color: #888888;
    margin-bottom: 5px;
  }
  .mint-tabbar > .mint-tab-item.is-selected{
    background-color:transparent;
    color: transparent;
  }
  .mint-tabbar .mint-tab-item.is-selected .fa{
    color: #FFCC00;
  }
</style>