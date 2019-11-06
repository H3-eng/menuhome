<template>
    <div>
        <div class="header">
            <mt-header title="登录">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="loginform">
            <mt-field  placeholder="手机号" type="tel" v-model="ruleForm.phone"></mt-field>
            <mt-field  placeholder="密码" type="password" v-model="ruleForm.password"></mt-field>
            <div class="errormsg">
                <span>*账号或密码错误，请重新输入</span>
            </div>
            <div class="btngroup clearfix">
                <div class="loginbtn fl"><router-link to="/Index">立即登录</router-link></div>
                <div class="regbtn fr">快捷注册</div>
            </div>
            <div class="forget fr"><span>忘记密码？</span></div>
        </div>
        <router-link to="/Index">立即登录</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ruleForm:{
                 phone:"",
            password:""
            },
           
        }
    }
}
</script>
<style>
    .header header{
        background-color: #fff;
        color: #000;
        height: 50px;
        line-height: 50;
        border-bottom: 1px solid #ddd;
        font-size: 18px;
    }
    .header i{
        color:#26a2ff;
        font-weight: bold;
    }
    .loginform{
        width: 80%;
        margin: 0 auto;
        margin-top: 35px;
    }
    .loginform input{
        border:1px solid #ddd;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
    }
    .errormsg{
        color: #ff0000;
        font-size: 14px;
        margin-left: 10px;
    }
    .btngroup{
        margin:20px 0 10px 10px;
    }
    .btngroup div{
        width: 45%;
        height: 35px;
        line-height: 35px;
        color: #fff;
    }
    .btngroup .loginbtn{
        background-color: royalblue;
        text-align: center;
    }
     .btngroup .regbtn{
        background-color:sandybrown;
        text-align: center;
    }
</style>