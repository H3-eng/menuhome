<template>
    <div>
        <mt-header title="评价">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <div class="delivery">
                <div class="title">您对配送满意吗？</div>
                <div class="msg clearfix">
                    <div class="pic fl">
                        <img src="../../assets/images/logo.jpg" alt="">
                    </div>
                    <div class="d-msg">
                        <p><span>本人亲送</span><span class="fr">匿名评价</span></p>
                        <p>11月6日18:00 左右送达</p>
                    </div>
                </div>
                <div class="cli clearfix">
                    <div class="fl" @click="unsat">
                        <img src="../../assets/images/assess1.png" alt="">
                        <span>不满意</span>
                    </div>
                    <div class="fr" @click="sat">
                        <img src="../../assets/images/assess2.png" alt="">
                        <span>满意</span>
                    </div>
                </div>
                <div class="detail" v-if="detail_show">
                    <div class="reason">请选择原因，我们会对骑手进行管束</div>
                    <div class="reasonlist">
                        <ul>
                            <li :class="{'changecolor':item.show===true}" v-for="(item,index) in data" :key="index" @click="changespan(item)">{{item.name}}</li>
                        </ul> 
                    </div>
                    <mt-field placeholder="您的反馈会督促我们做的更好" type="textarea" rows="4" class="introduction"></mt-field>
                </div>
            </div>
            <div class="store">
                <div class="title">您对商家/菜品满意吗？</div>
                <div class="store-msg clearfix">
                    <div class="store-pic fl">
                        <img src="../../assets/images/logo.jpg" alt="">
                    </div>
                    <div class="s-msg">
                        <p><span>{{this.$route.params.name}}</span><span class="fr">匿名评价</span></p>
                    </div>
                </div>
                <div class="star">
                    <div class="starlist clearfix">
                        <ul>
                            <li v-for="(item,index) in star" :key="index" @click="changei(index,item);showdetail()" :class="{'changecolor':item.show===true}"><i class="fa fa-star"></i></li>
                        </ul>
                    </div>
                    <div class="detail" v-if="detail_ishow">
                         <mt-field placeholder="口味如何，对包装服务等满意吗？" type="textarea" rows="4" class="introduction"></mt-field>
                        <div class="reasonlist">
                            <div>上传图片</div>
                        </div>
                    </div>
                </div> 
            </div>
            <mt-tabbar fixed>
                <div class="send" @click="showtoast">提交评价</div>
            </mt-tabbar>
        </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
    created() {
        this.$emit("footer", false);
    },
    data(){
        return {
            detail_show:false,
            detail_ishow:false,
            data:[
                {name:'仪表不整',show:false},
                {name:'送错餐品',show:false},
                {name:'少餐/洒餐',show:false},
                {name:'送餐超时',show:false},
                {name:'态度不好',show:false},
                {name:'送达不通知',show:false},
                {name:'骚扰威胁',show:false},
                {name:'其他',show:false}
            ],
            star:[
                {show:false},
                {show:false},
                {show:false},
                {show:false},
                {show:false},
            ]
        }
    },
    methods: {
        unsat(){
            console.log(111)
            this.detail_show=true;
        },
        sat(){
            console.log(111)
        },
        changespan(item){
            item.show=!item.show;
        },
        changei(index,item){
            let star=this.star;
            star.forEach((order,i) => {
                if(i<=index){
                    star[i].show=true
                }else{
                    star[i].show=false
                }
            });
        },
        showdetail(){
            this.detail_ishow=true;
        },
        showtoast() {
            // 每当调用的时候，Toast 有一个返回值，这个返回值 重新赋值给 toastInstanse ,以至于后边手动关闭Toast
            this.toastInstanse = Toast({
                message: "评价成功", //弹窗内容
                position: "middle", //弹窗位置
                duration: 3000, //弹窗时间毫秒,如果值为-1，则不会消失
                iconClass: "fa fa-check", //设置 图标类
                className: "mytoast" //自定义Toast 样式，需要自己提供一个类名
            });
        }
    },
}
</script>
<style scoped>
    .content{
        background-color: #eee;
        overflow: hidden;
    }
    .delivery,.store{
        margin-top: 10px;
        padding: 20px;
        background-color: #fff;
    }
    .title{
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
    }  
    .pic img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .d-msg{
        font-size: 12px;
        margin-left: 70px;
        padding: 8px 0;
    }
    .cli {
        font-size: 14px;
        margin-top: 10px;
        padding: 20px 60px;
    }
    .cli img{
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-right: 10px;
    }
    .send{
        width: 80%;
        margin:0 auto;
        background-color: #999;
        border-radius: 20px;
        text-align: center;
        padding: 5px;
    }
    .mint-tabbar{
        padding: 10px 0;
    }
    .detail{
        padding: 20px 0;
        font-size: 12px;
    }
    .reason{
        color: #ff0000;
        text-align: center;
    }
    .reasonlist{
        padding: 10px;
    }
    .reasonlist li{
        display: inline-block;
        width: 31%;
        margin-top: 10px;
        padding: 2px 0;
        background-color: #999;
        margin-right: 5px;
        cursor:pointer;
        text-align: center;
        border-radius: 6px;
    }
    .reasonlist .changecolor{
        background-color: #ffff22;
        color: #999;
    }
    .introduction{
        margin-top: 10px;
        border:1px solid #999;
        font-size: 12px;
    }
     .store-msg{
        height: 50px;
        line-height: 50px;
        font-size: 14px;
    }
    .store-pic img{
        width: 50px;
        height: 50px;
    }
    .s-msg{
        margin-left: 70px;
    }
     .star{
        margin-top: 10px;
        font-size: 24px;
        color: #ccc;
    }
    .star li{
        float: left;
    }
    .starlist{
        width: 140px;
        margin:0 auto;
    }
    .star .changecolor{
        color: #ffff22;
    }
</style>