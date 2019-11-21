<template>
    <div class="sendorder">
        <mt-header fixed title="提交订单" class="clearfix">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <div class="ownmsg">
                <div class="address">
                    <i class="fa fa-plus-circle"></i> 
                    <span>新增收货地址</span>
                </div>
                <div class="sentime">
                    <i class="fa fa-clock-o"></i>
                    <span>立刻送出</span>
                    <span class="fr">大约16.02送达</span>
                </div>
            </div>
            <div class="menulist">
                <div class="listheader">
                    <span class="store">爱心餐厅</span>
                    <span class="fr">商家自配</span>
                </div>
                <div class="item">
                    <ul>
                        <li class="clearfix" v-for="(item,index) in this.$route.query.totaldata" :key="index">
                            <div class="left fl clearfix">
                                <div class="pic fl">
                                    <img src="../../assets/images/bg1.jpg" alt="">
                                </div>
                                <div class="name">
                                    <p>{{item.name}}</p>
                                    <p>x1</p>
                                </div>
                            </div>
                            <div class="right fr">
                                <span>￥{{item.price}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="sendprice">
                    <p>
                        <span>包装费</span>
                        <span class="fr">￥0</span>
                    </p>
                    <p>
                        <span>配送费</span>
                        <span class="fr">￥0</span>
                    </p>
                </div>
                <div class="totalprice">
                    <span>优惠规则</span>
                    <div class="fr">
                        <span>已优惠￥16</span>
                        <span>小计￥41</span>
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
        <mt-tabbar fixed>
            <div class="computed">
                <span>已优惠￥16</span>
                <span class="fr">合计￥41</span>
            </div>
            <div class="option">
                <router-link to="/Sendorder">提交订单</router-link>
            </div> 
        </mt-tabbar>
    </div>
    
</template>
<script>
export default {
    created() {
        this.$emit("footer", false);
    },
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
    .sendorder .mint-header{
        background: #282828;
        font-size: 16px;
        height: 40px;
    }
    .content{
        margin-top: 40px;
        background-color: #eee;
    }
    .ownmsg{
        background-color: #fff;
    }
    .address{
        padding: 15px;
        color: #ffcc33;
        border-bottom: 1px solid #eee;
    }
    .sentime{
        padding: 15px;    
    }
    .menulist{
        padding: 15px;
        background-color: #fff;
        margin-top: 10px;
        font-size: 12px;
    }
    .item{
        padding: 15px 0;
        border-bottom: 1px solid #eee;
    }
    .item ul li{
        margin-top: 10px;
    }
    .item .pic img{
        width: 40px;
        height: 40px;
    }
    .name{
        margin-left: 50px;
    }
    .right{
        font-size: 14px;
        font-weight: bold;
    }
    .sendprice{
        padding: 10px 0;
        border-bottom: 1px solid #eee;
    }
    .sendprice p{
        padding: 5px 0;
    }
    .totalprice{
        padding: 10px 0;
    }
    .mint-tabbar{
        height: 50px;
        line-height: 50px;
        text-align: left;
         border-top: 1px solid #eee;
    }
    .computed{
        padding: 0 10px;
        width: 70%;
    }
     .option{
        width: 30%;
        text-align: center;
        background-color: #ffcc33;
    }
</style>