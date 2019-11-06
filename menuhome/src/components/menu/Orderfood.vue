<template>
  <div>
    <div class="container">
        <div id="left" class="left fl">
            <ul>
                <li
                ref="menuList"
                v-for="(item,index) in foodlist"
                :class="{current:index === currentIndex}"
                :key="index"
                @click="clickList(index)"
                >{{item.name}}</li>
            </ul>
        </div>
        <div id="right" class="right fr">
            <ul ref="itemList">
                <li class="one-li" v-for="(order,key) in foodlist" :key="key">
                    <div class="class-title">{{order.name}}</div>
                    <div v-for="(item,key) in menulist" :key="key">
                        <div v-if="item.sortid==order.id">
                        <div class="item">
                            <div class="item-left">
                            <div class="item-img"></div>
                            </div>
                            <div class="item-right">
                            <div class="title">{{item.name}}</div>
                            <div class="subtitle">月售：{{item.salenum}}</div>
                            <div class="price">
                                <span>￥{{item.price}}</span>
                                <div class="price-icon fr" @click="addpay(item.price)">
                                  <i class="fa fa-plus-circle"  ></i> 
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </li>
            </ul>
      </div>
    </div>
    <mt-tabbar fixed v-model="selected">
        <div class="accountlist">
            <div class="anode"><i class="fa fa-cart-plus" aria-hidden="true"></i></div>
            <span>￥{{totalprice}}</span>
        </div>
        <div class="account">去结算</div>
    </mt-tabbar>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import axios from "axios";
export default {
  created() {
    this.getdata();
    this.getmenu();
  },
  data() {
    return {
      selected: "1",
      foodlist: [],
      menulist: [],
      scrollY: 0, //右侧列表滑动的y轴坐标
      rightLiTops: [],//所有分类头部位置,
      totalprice:0
    };
  },
  computed: {
    //动态绑定class类名
    currentIndex(index) {
      const { scrollY, rightLiTops } = this;
      return rightLiTops.findIndex((tops, index) => {
        this._initLeftScroll(index); //调用左右联调滚动效果
        return scrollY >= tops && scrollY < rightLiTops[index + 1];
      });
    }
  },
  watch: {
    foodlist() {
      //监听数据
      this.$nextTick(() => {
        //左右两边滚动
        this._initBScroll(); //右边列表高度
        this._initRightHeight();
      });
    }
  },
  methods: {
    _initBScroll() {
      //左边滚动
      this.leftBscroll = new BScroll(".left", { click: true });
      //右边滚动
      this.rightBscroll = new BScroll(".right", {
        click: true ,
        probeType: 3 /*在滚动中触发scroll 事件*/
      });
      this.rightBscroll.on("scroll", pos => {
        this.scrollY = Math.abs(pos.y);
      });
    },
    //左右联调
    _initLeftScroll(index) {
      let menu = this.$refs.menuList;
      let el = menu[index];
      this.leftBscroll.scrollToElement(el, 300, 0, -300);
    },
    _initRightHeight() {
      let itemArray = []; //定义一个伪数组
      let top = 0;
      itemArray.push(top);
      //获取右边所有li的位置
      let allList = this.$refs.itemList.getElementsByClassName("one-li");
      //allList伪数组转化成真数组
      Array.prototype.slice.call(allList).forEach(li => {
        top += li.clientHeight; //获取所有li的每一个高度
        itemArray.push(top);
      });
      this.rightLiTops = itemArray;
    },
    //点击左边实现滚动
    clickList(index) {
      this.scrollY = this.rightLiTops[index];
      this.rightBscroll.scrollTo(0, -this.scrollY, 200, -200);
    },
    getdata() {
      axios({
        method: "get",
        url:
          "http://localhost/tourproject/public/index.php/admin/Menuform/mselect",
        responseType: "json"
      }).then(res => {
        let { data } = res.data;
        this.foodlist = data;
      });
    },
    getmenu() {
      axios({
        method: "get",
        url:
          "http://localhost/tourproject/public/index.php/admin/Menuform/menulist",
        responseType: "json"
      }).then(res => {
        let { data } = res.data;
        this.menulist = data;
      });
    },
    addpay(price){
      this.totalprice+=price;
      console.log(price);
    },
  }
};
</script>
<style>
.mint-tab-container {
  color: #909090;
  font-size: 14px;
}
.current {
  background: #ffffff;
  color: #000;
}
.current::before {
  content: "";
  background-color: #ffcc33;
  width: 4px;
  height: 30px;
  position: absolute;
  left: 0;
}
.left {
  float: left;
  width: 25%;
  background: #eee;
  overflow: hidden;
  height: 400px;
}
.left ul {
  list-style: none;
}
.left ul li {
  padding: 15px 5px;
  text-align: center;
  cursor: pointer;
}
.left li.active {
  background: #fff;
  border-left: 2px solid #3190e8;
}
.right {
  float: left;
  width: 75%;
  height: 100%;
  height: 400px;
  overflow: hidden;
}
.right ul {
  list-style: none;
}
.class-title {
  padding: 7px 10px;
  background: #eee;
}
.item {
  overflow: hidden;
  width: 100%;
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.item-left {
  float: left;
}
.item-right {
  float: left;
  padding: 0 10px;
}
.item-img {
  width: 100px;
  height: 100px;
  background: #eee;
}
.title {
  width: 100px;
  height: 20px;
  margin-top: 10px;
  color: #000;
  font-size: 16px;
}
.subtitle {
  width: 70px;
  height: 20px;
  margin-top: 10px;
  font-size: 14px;
}
.price {
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
  color: #c00000;
  font-size: 18px;
  font-weight: bold
}
.price i{
  color: #ffcc33;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
}
.item-footer {
  height: 60px;
  position: absolute;
  bottom: 0;
  background-color: #282828;
  z-index: 1000;
}
.mint-tabbar {
  height: 50px;
}
.accountlist{
    width: 70%;
    background-color: #282828;
    position: relative;
}
.accountlist span{
    font-size: 26px;
    color: #fff;
    line-height: 50px;
    margin-left: 20px;
}
.anode{
    display: inline-block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #ffcc33;
    position: absolute;
    left:20px;
    bottom: 5px;
    font-size: 40px;
    color: #000;
    line-height: 70px;
}
.account{
    width: 30%;
    background-color: #ffcc33;
    line-height: 50px;
    color: #fff;
    font-size: 18px;
}
</style>