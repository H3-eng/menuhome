<template>
    <div class="houseform">
        <div class="content">
            <div class="msg">
                <div class="title" id="inputmsg">外出通宵：</div>
                <mt-field label="地点" placeholder="请输入地点" v-model="nightsite"></mt-field>
                <mt-field label="人物" placeholder="请输入人物" v-model="nightname"></mt-field>
                <mt-field label="内容" placeholder="请输入内容" v-model="nightcon"></mt-field>
                <mt-field label="截止时间" placeholder="请输入时间" v-model="nighttime"></mt-field>
                <div class="send" @click="send">确定</div>
            </div>
           
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Toast } from 'mint-ui';
export default {
    created() {
        this.$emit('getdata','餐馆预订')
    },
    data(){
        return{
            nightsite:'',
            nightname:'',
            nighttime:'',
            nightcon:''
        }
    },
    methods: {
        send(){
            let url="http://localhost/tourproject/public/index.php/admin/Serveform/nightadd";
            axios({
                method:'get',
                url:url,
                params:{
                    nightsite:this.nightsite,
                    nightname:this.nightname,
                    nighttime:this.nighttime,
                    nightcon:this.nightcon
                },
                responseType:'json'
            }).then((res)=>{
                let {data,msg}=res.data;
               if(res.status==200){
                   if(data){
                       this.toastInstanse = Toast({
                        message: "申请成功", //弹窗内容
                        position: "middle", //弹窗位置
                        duration: 3000, //弹窗时间毫秒,如果值为-1，则不会消失
                        iconClass: "fa fa-check", //设置 图标类
                        className: "mytoast" //自定义Toast 样式，需要自己提供一个类名
                    });
                    }
               }
            }).catch((err)=>{
                console.log(err)
            })
        }    
    },
}
</script>
<style scoped>
    .houseform{
        height: 100%;
    }
    .content{
        width: 100%;
        background: url('../../../assets/images/bg7.jpg') no-repeat center;
        background-size: 100% 100%;
        padding: 20px;
        height:calc(100% - 0px); 
        overflow: hidden;
    }
    .msg{
        margin-top: 30%;
    }
    .title{
        padding: 10px;
        font-size: 18px;
    }
    .mint-cell{
        background-color:transparent;
        color: #999;
    }
    .mint-cell-value{
        font-size: 14px; 
        border: 1px solid #000 !important;
    }
    .mint-cell .mint-field-core{
        font-size: 14px !important;
        background-color: #eee;
       
    }
    .msg >>>input {
        background-color:transparent;
        height: 30px;
        border-bottom: 1px solid #FFCC33;
    }
    .send{
        margin-top: 20px;
        float: right;
        width: 100px;
        padding: 10px;
        background-color: #FFCC33;
        text-align: center;
        color: #fff;
    }
</style>