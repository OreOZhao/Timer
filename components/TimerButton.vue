<template>
	<button :class="btnClass" :id="btnId" :btnContent="btnId" @click='$emit(`hi`)'><slot></slot></button>
</template>

<style>
    .ibtn {
        border-style: none;
        width: 98px;
        height: 40px;
        font-family: PingFangSC-Regular;
        color: #FFFFFF;
        font-size: 16px;
        background-color: #2188E9;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
        border-radius: 5px;
        float: left;
    }
    .clear-btn {
        border-style: none;
        width: 98px;
        height: 40px;
        font-family: PingFangSC-Regular;
        color: #FFFFFF;
        font-size: 16px;
        background-color: #DD2E1D;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
        border-radius: 5px;
        float: left;
    }
    .restart-btn {
        border-style: none;
        width: 98px;
        height: 40px;
        font-family: PingFangSC-Regular;
        color: #FFFFFF;
        font-size: 16px;
        background-color: #FFB020;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
        border-radius: 5px;
        float: left;
    }
    
</style>

<script>
export default {
    name: "Timer",
    data: {
        btnContent: ''
    },
    props: {
        divClass: {
            default: 'start-div',
            type: String
        },
        divId: {
            default: '',
            type: String
        },
        btnClass: {
            type: String
        },
        btnId: {
            type: String
        }
    },
    
}
</script>
