<template>
    <div>
        <div class="header">
            <mt-header title="我的收入">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="content">
            <div class="revence">
                <div class="r-head">
                    <div class="head-left">预计收入(未提现)</div>
                    <div class="head-right"></div>
                </div>
                <div class="r-con">7564.23</div>
                <div class="r-foot">退货订单不计入</div>
            </div>
            <div class="getmoney clearfix">
                <div class="get-left fl"><p>260.00</p><p>上次提现</p></div>
                 <div class="get-right fr"><p>12000.00</p><p>累计提现</p></div>
            </div>
        </div>
    </div>
</template>
<style>
    .header header{
        background-color: #fff;
        color: #000;
        height: 50px;
        line-height: 50;
        font-size: 18px;
    }
    .header i{
        color:#fb6c0d;
        font-weight: bold;
    }
    .revence{
        height: 210px;
        color: #fff;
        background-color: #f6952a;
        padding: 18px 25px 0;
    }
    .r-con{
        margin-top: 20px;
        font-size: 56px;
    }
    .r-foot{
        margin-top: 50px;
        color: #ffd8ad;
    }
    .getmoney{
        background-color: #f8891c;
        padding: 14px 0;
    }
</style>