<template>
    <div>
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="tab1">
                <router-link to="/">
                <p><i class="fa fa-home" aria-hidden="true"></i></p>
                <p>首页</p>
                </router-link>              
            </mt-tab-item>
                <mt-tab-item id="tab2">
                <router-link to="/Menu">
                    <p><i class="fa fa-file-text" aria-hidden="true"></i></p>
                    <p>菜单</p>
                </router-link>  
                </mt-tab-item>
                <mt-tab-item id="tab3">
                <router-link to="/Order">
                    <p><i class="fa fa-outdent" aria-hidden="true"></i></p>
                    <p>订单</p>
                </router-link>
                </mt-tab-item>
                <mt-tab-item id="tab4">
                <p><i class="fa fa-user-circle-o" aria-hidden="true"></i></p>
                <p>我的</p>        
            </mt-tab-item>
        </mt-tabbar>      
    </div>
</template>
<script>
export default {
     data(){
        return {
        selected:"1",
        }
    }
}
</script>
<style scoped>
   
</style>