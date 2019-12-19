<template>
    <label :class="themeType">
		<input type="text" placeholder="0" :name="themeType" :id="themeType" :value="time" @input="$emit('input',$event.target.value)">
	</label>
</template>
<style>
    input {
        font-size: 16px;
        width: 30px;
        height: 22px;
        border-style: none;
        padding: 0;
        margin: 9px 9px;
        vertical-align: middle;
        float: left;
    }
    ::placeholder {
        font-size: 16px;
        font-family: PingFangSC-Regular;
        color: #AFAFAF;
        vertical-align: middle;
    }
    .hour {
        margin: 15px 10px 15px 40px;
        padding: 0;
        float: left;
        vertical-align: middle;
        width: 70px;
        height: 40px;
        border-radius: 5px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
        font-family: PingFangSC-Regular;
        font-size: 16px;
        background: #FFFFFF;
        position: relative;
    }
    .hour::after {
        content: '时';
        top: 9px;
        right: 9px;
        width: 32px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        color: #222222;
        text-align: right;
        position: absolute;
    }
    .minute {
        margin: 15px 10px;
        padding: 0;
        float: left;
        vertical-align: middle;
        width: 70px;
        height: 40px;
        border-radius: 5px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
        font-family: PingFangSC-Regular;
        font-size: 16px;
        background: #FFFFFF;
        position: relative;
    }
    .minute::after {
        content: '分';
        top: 9px;
        right: 9px;
        width: 32px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        color: #222222;
        text-align: right;
        position: absolute;
    }
    .second {
        margin: 15px 10px;
        padding: 0;
        float: left;
        vertical-align: middle;
        width: 70px;
        height: 40px;
        border-radius: 5px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
        font-family: PingFangSC-Regular;
        font-size: 16px;
        background: #FFFFFF;
        position: relative;
    }
    .second::after {
        content: '秒';
        top: 9px;
        right: 9px;
        width: 32px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        color: #222222;
        text-align: right;
        position: absolute;
    }
    .input-hour {
        margin: 15px 10px 15px 40px;
        padding: 0;
        float: left;
        vertical-align: middle;
        width: 70px;
        height: 40px;
        border-radius: 5px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
        font-family: PingFangSC-Regular;
        font-size: 16px;
        background: #FFFFFF;
        position: relative;
    }
    .input-hour::after {
        content: '时';
        top: 9px;
        right: 9px;
        width: 32px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        color: #222222;
        text-align: right;
        position: absolute;
    }
    .input-minute {
        margin: 15px 10px;
        padding: 0;
        float: left;
        vertical-align: middle;
        width: 70px;
        height: 40px;
        border-radius: 5px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
        font-family: PingFangSC-Regular;
        font-size: 16px;
        background: #FFFFFF;
        position: relative;
    }
    .input-minute::after {
        content: '分';
        top: 9px;
        right: 9px;
        width: 32px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        color: #222222;
        text-align: right;
        position: absolute;
    }
    .input-second {
        margin: 15px 10px;
        padding: 0;
        float: left;
        vertical-align: middle;
        width: 70px;
        height: 40px;
        border-radius: 5px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
        font-family: PingFangSC-Regular;
        font-size: 16px;
        background: #FFFFFF;
        position: relative;
    }
    .input-second::after {
        content: '秒';
        top: 9px;
        right: 9px;
        width: 32px;
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        color: #222222;
        text-align: right;
        position: absolute;
    }
</style>
<script>
export default {
    name: "InputTime",
    props: {
        themeType: {
            default: '',
            type: String
        },
        time: {
            default: '',
            type: String
        }
    },
    data: function () {
        return { }
    },
    methods: {

    },
    components: {

    },
}
</script>

