<template>
    <div class="homeform">
        <mt-header fixed title="我的" class="clearfix">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <div class="pic">
                <img src="../../assets/images/logo.jpg" alt="头像">
                <span>郑先生</span>
            </div>
            <div class="item clearfix">
                <ul>
                    <li>
                        <div>
                            <img src="../../assets/images/icon2.png" alt="">
                        </div>
                        <p>我的收藏</p>
                    </li>
                     <li>
                        <div>
                            <img src="../../assets/images/icon3.png" alt="">
                        </div>
                        <p>我的足迹</p>
                    </li>
                    <li>
                        <div>
                            <img src="../../assets/images/icon4.png" alt="">
                        </div>
                        <p>我的好友</p>
                    </li>
                    <li>
                        <div>
                            <img src="../../assets/images/icon5.png" alt="">
                        </div>
                        <p>我的评价</p>
                    </li>
                    <li>
                        <div>
                            <img src="../../assets/images/icon7.png" alt="">
                        </div>
                        <p>答谢记录</p>
                    </li>
                    <li>
                        <div>
                            <img src="../../assets/images/icon6.png" alt="">
                        </div>
                        <p>我的地址</p>
                    </li>
                </ul>
            </div>
            <div class="means clearfix">
                <div class="head">我的资产</div>
                <div>
                    <ul>
                        <li>
                            <div>
                                <img src="../../assets/images/icon8.png" alt="">
                            </div>
                            <p>我的钱包</p>
                        </li>
                        <li>
                            <div>
                                <img src="../../assets/images/icon9.png" alt="">
                            </div>
                            <p>我的卡券</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="more clearfix">
                <div class="head">更多推荐</div>
                <div>
                    <ul>
                        <li>
                            <div>
                                <img src="../../assets/images/icon10.png" alt="">
                            </div>
                            <p>推荐有奖</p>
                        </li>
                        <li>
                            <div>
                                <img src="../../assets/images/icon11.png" alt="">
                            </div>
                            <p>商家入驻</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .homeform .mint-header{
        background: #282828;
        font-size: 16px;
        height: 40px;
    }
    .content{
        background-color: #eee;
        margin-top: 40px;
    }
    .pic{
        padding: 20px;
        background-color: #fff;
    }
    .pic img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
    }
    .item,.means,.more{
        margin-top: 20px;
        padding: 10px 0;
        background-color: #fff;
    }
    .homeform ul li{
        padding: 10px 0;
        width: 25%;
        text-align: center;
        font-size: 14px;
        float: left;
    }
    .homeform ul li img{
        width: 40px;
        height: 40px;
    }
    .head{
        font-size: 16px;
        padding: 10px;
        border-bottom: 1px solid #eee;
    }
</style>