<template>
    <mt-header fixed :title="name" class="head">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
</template>
<script>
export default {
    props:['value'],
    data(){
        return{
            name:this.value
        }
    }
}
</script>
<style scoped>
    .head{
        height: 50px;
    }
</style>