<template>
    <div class="order">
        <mt-header title="订单">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <ul class="stortul">
                <li>
                    <div class="top">
                        <div class="msg fl">
                            <div class="storepic fl">
                               <img src="../../assets/images/logo.jpg" alt="">
                            </div>
                            <div class="storecon">
                                <div class="title">爱心餐厅 ></div>
                                <div class="tags">
                                    <span>接受预定</span>
                                    <span>10：30后配送</span>
                                </div>
                            </div>
                        </div>
                        <div class="statue fr">订单已完成</div>
                    </div>
                    <div class="footer">
                        <div class="menu">
                            <span>全肉大饭</span>
                            <span>等8件商品</span>
                            <span class="price fr">￥12</span>
                        </div>
                        <div class="option fr">
                            <span>再来一单</span>
                            <span class="comment" @click="getoption">评价</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="top">
                        <div class="msg fl">
                            <div class="storepic fl">
                               <img src="../../assets/images/logo.jpg" alt="">
                            </div>
                            <div class="storecon">
                                <div class="title">{{name}} ></div>
                                <div class="tags">
                                    <span>接受预定</span>
                                    <span>10：30后配送</span>
                                </div>
                            </div>
                        </div>
                        <div class="statue fr">订单已完成</div>
                    </div>
                    <div class="footer">
                        <div class="menu">
                            <span>全肉大饭</span>
                            <span>等8件商品</span>
                            <span class="price fr">￥12</span>
                        </div>
                        <div class="option fr">
                            <span>再来一单</span>
                            <span class="comment">评价</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:"爱心餐厅",
        }
    },
    methods:{
        getoption(){
            this.$router.push({
                name:'Assessoption',
                params:{id:'1',name:this.name}
            })
        }
    }
}
</script>
<style scoped>
    .order header{
        background-color: #fff;
        color:#000;
        height: 50px;
        line-height: 50px;
    }  
    .order .content{
        background-color: #ddd;
        overflow: hidden;
    }
    .content .stortul{
        margin-top: 10px;
    }
    .content .stortul li{
        height: 150px;
        background-color: #fff;
        padding:10px;
        margin-top: 10px;
    }
    .top{
        height: 60px;
    }
    .msg{
        width: 70%;
    }
    .storecon{
        margin-left: 60px;
    }
    .storecon .title{
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .storecon .tags span{
        font-size: 10px;
        padding: 4px;
        border-radius: 3px;
        color: #0080FF;
        border: 1px solid #0080FF;
    }
    .storecon .tags span:first-child{
        color: #fff;
        background: #0080FF;
        border: none;
    }
    .storepic{
        width: 50px;
        height: 50px;
        margin-top: 5px;
    }
    .storepic img{
        width: 100%;
        height: 100%;
    }
    .statue{
        font-size: 14px;
        line-height: 60px;
    }
    .footer .menu{
        padding: 5px;
    }
    .footer{
        font-size: 14px;
        color: #999;
    }
    .footer .price{
        font-weight: bold;
        color: #000;
    }
    .option span{
        color: #000;
        display: inline-block;
        width: 70px;
        height: 30px;
        border:1px solid #999;
        text-align: center;
        line-height: 30px;
    }
    .option span.comment{
        background-color: #FFCC33;
        border:none;
    }
</style>