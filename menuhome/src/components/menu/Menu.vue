<template>
    <div class="menu">
        <mt-header fixed title="爱心餐厅">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="described">
            <div class="d-top">
                <div class="logo fl">
                    <img src="../../assets/images/logo.jpg" alt="">
                </div>
                <div class="d-text">
                    <p>起送 ￥10 | 配送 ￥0 | 50分钟</p>
                    <p>短号66215</p>
                </div>
            </div>
            <div class="d-footer">
                <span>满40减5;满60减10</span>
                <span class="fr">2个活动></span>
            </div>
        </div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1"> <router-link to="/Menu">点菜</router-link></mt-tab-item>
            <mt-tab-item id="2"><router-link to="/Menu">评价</router-link></mt-tab-item>
            <mt-tab-item id="3">商家</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected" class="clearfix">
            <mt-tab-container-item id="1" class="clearfix">
                <router-view></router-view>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">   
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected:'1',
        }
    },
}
</script>
<style scoped>
    .mint-header{
        background-color: #282828;
        font-size: 18px;
    }
    .described{
        margin-top: 40px;
        padding: 10px;
        color: #fff;
        background-color:#282828;
        font-size: 14px;
    }
    .described .d-top{  
        height: 70px;
        padding: 10px;
        border-bottom: 1px solid #fff;
        overflow: hidden;
    }
    .described .d-text{
        margin: 5px 0 0 60px;
    }
    .logo{
        width: 50px;
        height: 50px;
    }
    .logo img{
        width: 100%;
        height: 100%;
    }
    .described .d-footer{
        padding: 5px;
        font-size: 12px;
    }
    .mint-navbar{
        background: none;
        margin-bottom: 20px;
    }
    .mint-navbar .mint-tab-item-label{
        font-size: 15px!important;
    }
    .mint-navbar .mint-tab-item.is-selected{
        border-color:#FFCC33;
        color: #000;
    }
    .mint-navbar a{
        color: #000;
    }
</style>