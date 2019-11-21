<template>
    <div class="indexform">
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../assets/images/bg1.jpg" alt="轮播图"></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/bg2.jpg" alt="轮播图"></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/bg3.jpg" alt="轮播图"></mt-swipe-item>
        </mt-swipe>
        <div class="server clearfix">
            <ul>
                <li>
                    <router-link to="/House">
                        <div>
                            <img src="../assets/images/server1.png" alt="wifi">
                        </div>
                        <p>餐馆订餐</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/Allnight">
                        <div>
                            <img src="../assets/images/server2.png" alt="餐具">
                        </div>
                        <p>外出通宵</p>
                    </router-link>
                </li>
                <li>
                    <div>
                        <img src="../assets/images/server3.png" alt="位置">
                    </div>
                    <p>朋友聚餐</p>
                </li>
                <li>
                    <div>
                        <img src="../assets/images/server4.png" alt="发票">
                    </div>
                    <p>游戏</p>
                </li>
                <li>
                    <div>
                        <img src="../assets/images/server5.png" alt="">
                    </div>
                    <p>篮球</p>
                </li>
                <li>
                    <div>
                        <img src="../assets/images/server6.png" alt="">
                    </div>
                    <p>答谢</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        this.$emit("footer", true);
        this.$emit("getdata", "a");
    },
};
</script>
<style scoped>
.indexform{
    position: absolute;
    top: 50px;
    bottom: 50px;
    width: 100%;
}
.mint-swipe{
    width: 100%;
    height: 150px;
}
.mint-swipe img{
    width: 100%;
    height: 100%;
}
.server ul li{
    width: 33.33%;
    text-align: center;
    float: left;
    margin-top: 30px;
}
.server ul li img{
    width: 50px;
    height: 50px;
}
.server ul li P{
    color: #666;
    font-size: 14px;
}
</style>