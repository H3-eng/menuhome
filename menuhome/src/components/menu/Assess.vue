<template>
    <div class="assess">
        <div class="a-content">
            <div class="top">
                <ul class="clearfix">
                    <li class="left">
                        <p class="big">5</p>
                        <p>商家评分</p>
                    </li>
                    <li class="center">
                        <p>口味<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></p>
                        <p>包装<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></p>
                    </li>
                    <li class="right">
                        <p class="big">5</p>
                        <p>配送评分</p>
                    </li>
                </ul>
            </div>
            <div class="cen">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1"><div class="btn">全部</div></mt-tab-item>
                    <mt-tab-item id="2"><div class="btn">有图</div></mt-tab-item>
                    <mt-tab-item id="3"><div class="btn">优质点评</div></mt-tab-item>
                </mt-navbar>
                <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                       <div class="item-all clearfix">
                            <ul>
                                <li>
                                    <div class="fl clearfix">
                                        <div class="pic fl"><i class="fa fa-user-circle-o"></i></div>
                                        <div class="con fl">
                                            <p class="user">匿名用户</p>
                                            <p class="mark">评分 </p>
                                            <div class="comment">不错，很好吃</div>
                                        </div>
                                    </div>
                                    <div class="timedata fr">2018-04-05</div>
                                </li>
                            </ul>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        <div class="item-all clearfix">
                            <ul>
                                <li>
                                    <div class="fl clearfix">
                                        <div class="pic fl"><i class="fa fa-user-circle-o"></i></div>
                                        <div class="con fl">
                                            <p class="user">匿名用户</p>
                                            <p class="mark">评分 </p>
                                            <div class="comment">不错，很好吃</div>
                                        </div>
                                    </div>
                                    <div class="timedata fr">2018-04-05</div>
                                </li>
                            </ul>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="3">
                        <div class="item-all clearfix">
                            <ul>
                                <li>
                                    <div class="fl clearfix">
                                        <div class="pic fl"><i class="fa fa-user-circle-o"></i></div>
                                        <div class="con fl">
                                            <p class="user">匿名用户</p>
                                            <p class="mark">评分 </p>
                                            <div class="comment">不错，很好吃</div>
                                        </div>
                                    </div>
                                    <div class="timedata fr">2018-04-05</div>
                                </li>
                            </ul>
                        </div>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            selected:'1',
        }
    }
}
</script>
<style scoped>
    .assess{
        color: #000;
    }
    .top{
        padding: 10px 0;
        border-top:1px solid #666;
    }
    .top ul {
        width: 100%;
    }
    .top ul li{
        float: left;
        text-align: center;
        font-size: 14px;
    }
    .top .left,.right{
        width: 30%;
    }
    .top .big{
        font-size: 32px;
    }
    .top .left p:nth-child(1){
        color: #ffcc33;
    }
    .top .right p:nth-child(1){
        color: #666;
    }
    .top .center{
        width: 40%;
    }
    .top .center i{
        margin-left: 5px;
    }
    .top .center p:nth-child(2){
        margin-top:20px
    }
    .cen{
        padding: 0 20px;
    }
    .cen .btn{
        font-size: 14px;
        background-color: #fff;
        color: #ffcc33;
        border: 1px solid #ffcc33;
        width: 100%;
        height: 35px;
        line-height: 35px;
    }
    .mint-navbar .mint-tab-item.is-selected{
        border: none;
    }
    .cen .is-selected .btn{
        background-color: #ffcc33;
        color: #000;
    }
    .item-all .pic{
        font-size: 30px;
        color: #ffcc33;
    }
    .item-all .con{
        margin-left: 10px;
        font-size: 14px;
    }
    .item-all .con .user{
        font-weight: bold;
    }
    .item-all .con .mark{
        font-size: 12px;
    }
     .item-all .con .comment{
         margin-top: 10px;
     }
    .item-all .timedata{
         font-size: 12px;
     }
</style>