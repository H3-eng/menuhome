<template>
    <div class="store" ref="store">
        <div class="top">
            <ul>
                <li>
                   <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>白云区永泰地铁口</span>
                    <span class="fr"><i class="fa fa-phone" aria-hidden="true"></i> </span>
                </li>
                <li class="cen">
                   <img src="../../assets/images/bg1.jpg" alt="">
                   <img src="../../assets/images/bg1.jpg" alt="">
                   <img src="../../assets/images/bg1.jpg" alt="">
                </li>
                <li>
                    <i class="fa fa-bookmark" aria-hidden="true"></i>
                    <span>查看食品安全档案</span>
                </li>
            </ul>
        </div>
        <div class="center">
            <ul>
                <li>
                    <i class="fa fa-file-text" aria-hidden="true"></i> 
                    <span>配送服务：由本人提供配送服务</span>
                </li>
                <li class="cen">
                   <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>配送时间：00：00-02：05,08：00-23：59</span>
                </li>
            </ul>
        </div>
        <div class="footer">
            <ul>
                <li>
                    <i class="fa fa-bullhorn" aria-hidden="true"></i> 
                    <span>巨额满减来袭！免配送费！欢迎</span>
                </li>
                <li class="cen">
                    <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                    <span>商家服务 到店自取(享优惠)</span>
                </li>
                <li class="count">
                    <p>
                        <i>减</i>
                        <span>满16减2；满36减4，满68减5(在线支付专享)</span>
                    </p>
                     <p>
                        <i>首</i>
                        <span>新用户立减16元(本优惠与新人首单红包不可同享)</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
    data(){
        return {
             scrollY: 0, 
        }
    },
    mounted() {
        this.$nextTick(() => {
            this._initBScroll();
        });    
    },
    methods: {
        _initBScroll() {
      //左边滚动
      this.allBscroll = new BScroll(".store", {probeType: 3, click: true });
      this.allBscroll.on("scroll", pos => {
        this.scrollY = Math.abs(pos.y);
      });
        },
    },
}
</script>
<style scoped>
    .store{
        background-color: #eee;
        overflow: hidden;
        font-size: 12px;
    }
    .store i{
        color:#666;
        margin-right: 5px;
    }
    .top,.center,.footer{
        background-color: #fff;
        margin-top: 10px;
    }
    .center ul li:first-child{
        border-bottom:1px solid #eee;
    }
    .store ul li{
        padding: 10px;
    }
    .store .cen{
        border-top:1px solid #eee;
        border-bottom:1px solid #eee;
    }
    .cen img{
        width: 80px;
        height: 50px;
    }
    .count p{
        margin-top: 10px;
    }
    .count i{
        background-color: #FF2D2D;
        color: #fff;
        border-radius: 4px;
        padding: 2px;
        text-align: center;
    }
</style>