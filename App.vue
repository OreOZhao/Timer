<template>
  <div id="app">
    <header>
        <input-time theme-type="hour" v-model="hour" v-show="states==0" time='0' @keyup.enter.native="show($event)"></input-time>
        <input-time theme-type="minute" v-model="minute" v-show="states==0" time='0' @keyup.enter.native="show($event)"></input-time>
        <input-time theme-type="second" v-model="second" v-show="states==0" time='0' @keyup.enter.native="show($event)"></input-time>
        <div id="hint" v-show="states!=0" @keyup.space.native="show($event)">
            <label id="hintlabel">{{ hintmsg }}</label>
        </div>
        <div id="startup" class="start-div" v-show="states==0">
            <timer-button btn-class="ibtn" btn-id="countup" v-show="states==0" @hi="countUp()">开始正计时</timer-button>
        </div>
        <div id="startdown" class="start-div" v-show="states==0">
            <timer-button btn-class="ibtn" btn-id="countdown" @hi="countDown()">开始倒计时</timer-button>
        </div>
        <div class="pause-div" v-show="states==1 || states==-1">
            <timer-button btn-class="ibtn" btn-id="pause" @hi="pause()">暂停计时器</timer-button>
        </div>
        <div class="pause-div" v-show="states==2 || states==-2">
            <timer-button btn-class="ibtn" btn-id="pause" @hi="resume()">恢复计时器</timer-button>
        </div>
        <div class="restart-div" v-show="states!=0">
            <timer-button btn-class="restart-btn" btn-id="restart" @hi="restart()">重新再计时</timer-button>
        </div>
        <div class="clear-div" v-show="states>0">
            <timer-button btn-class="clear-btn" btn-id="clear" @hi="clear()">清空正计时</timer-button>
        </div>
        <div class="clear-div" v-show="states<0">
            <timer-button btn-class="clear-btn" btn-id="clear" @hi="clear()">清空倒计时</timer-button>
        </div>
    </header>
    <div class="timer" id="time">
      <label>{{ timer }}</label>
    </div>
  </div>
</template>


<script>
import InputTime from './components/InputTime'
import TimerButton from './components/TimerButton'
import { setInterval, clearInterval } from 'timers'
import { parse } from 'url';

export default {
  name: 'App',
  data: function() {
    return {
      hour: '0',
      minute: '0',
      second: 0,
      states: 0,  // 0 start 1 countUp 2 countUpPause 3 over -1 -2
      time: '',
      initialTime: "00:00:00",
      timer: "00:00:00",
      hintmsg: "00:00:00",
      isPaused: false,
      interval: setInterval(() => {}, 1000)
    };
  },
  created() {
    var _this = this;
    document.onkeydown = function(e) {
      let key = window.event.keyCode;
      if(key == 13) {
        if(this.states == 0) {
          this.countUp();
        }
      }
      if(key == 32) {
        if(Math.abs(this.states) == 1) {
          this.pause();
        }
        if(Math.abs(this.states) == 2) {
          this.resume();
        }
      }
    }
  },
  methods: {
    countUp() {
      if(isNaN(this.hour) || this.hour == '') {
			  this.hour = 0;
      }
      if(this.hour > 99) {
        this.hour = 99;
      }
      if(isNaN(this.minute) || this.minute == '') {
        this.minute = 0;
      }
      if(this.minute >= 60) {
        this.minute = 59;
      }
      if(isNaN(this.second) || this.second == '') {
        this.second = 0;
      }
      if(this.second >= 60) {
        this.second = 59;
      }
      if(this.hour >= 0 && this.hour < 10){
        this.hour = "0" + parseInt(this.hour);
      }
      if(this.minute >= 0 && this.minute < 10){
        this.minute = "0" + parseInt(this.minute);
      }
      if(this.second >= 0 && this.second < 10){
        this.second = "0" + parseInt(this.second);
      }
      this.states = 1;
      this.initialTime = this.hour + ":" + this.minute + ":" + this.second;
      this.timer = this.initialTime;
      this.hintmsg = "正在正计时 " + this.initialTime;
      let h=parseInt(this.timer.slice(0,2));
      let m=parseInt(this.timer.slice(3,5));
      let s=parseInt(this.timer.slice(6,8));
      this.isPaused = false;
      this.interval = setInterval(()=> {
        if(!this.isPaused) {
          s++;
          if(s == 60) {
            m++;
            if(m == 60) {
              h++;
              if(h > 99){
                this.hintmsg = "正计时 " + this.initialTime + " 已结束";
                this.isPaused = true;
                this.states = 3;
              }
              m = 0;
            }
            s = 0;
          }
          if(parseInt(h) >= 0 && h < 10){
            h = "0" + parseInt(h);
          }
          if(parseInt(m) >= 0 && m < 10){
            m = "0" + parseInt(m);
          }
          if(parseInt(s) >= 0 && s < 10){
            s = "0" + parseInt(s);
          }
          this.timer = h + ":" + m + ":" + s;
        }
      }, 1000)
    },
    countDown() {
      if(isNaN(this.hour) || this.hour == '') {
			  this.hour = 0;
      }
      if(this.hour > 99) {
        this.hour = 99;
      }
      if(isNaN(this.minute) || this.minute == '') {
        this.minute = 0;
      }
      if(this.minute >= 60) {
        this.minute = 59;
      }
      if(isNaN(this.second) || this.second == '') {
        this.second = 0;
      }
      if(this.second >= 60) {
        this.second = 59;
      }
      if(this.hour >= 0 && this.hour < 10){
        this.hour = "0" + parseInt(this.hour);
      }
      if(this.minute >= 0 && this.minute < 10){
        this.minute = "0" + parseInt(this.minute);
      }
      if(this.second >= 0 && this.second < 10){
        this.second = "0" + parseInt(this.second);
      }
      this.states=-1;
      this.initialTime = this.hour + ":" + this.minute + ":" + this.second;
      this.timer=this.initialTime;
      this.hintmsg = "正在倒计时 " + this.initialTime;
      let h=parseInt(this.timer.slice(0,2));
      let m=parseInt(this.timer.slice(3,5));
      let s=parseInt(this.timer.slice(6,8));
      this.isPaused = false;
      this.interval = setInterval(()=> {
        if(!this.isPaused) {
          if(s == 0) {
            if(m == 0) {
              if(h == 0) {
                this.hintmsg = "倒计时 " + this.initialTime + " 已结束";
                this.states = -3;
              }
              else {
                h--;
                m = 59;
              }
            }
            else {
              m--;
              s = 59;
            }
          }
          else {
            s--;
          }
          if(parseInt(h) >= 0 && parseInt(h) < 10) {
            h = "0" + parseInt(h);
          }
          if(parseInt(m) >= 0 && parseInt(m) < 10) {
            m = "0" + parseInt(m);
          }
          if(parseInt(s) >= 0 && parseInt(s) < 10) {
            s = "0" + parseInt(s);
          }
          this.timer = h + ":" + m + ":" + s;
        }
      }, 1000)
    },
    pause() {
      if(this.states == 1) {
        this.states = 2;
      }
      if(this.states == -1) {
        this.states = -2;
      }
      this.isPaused = true;
    },
    resume() {
      if(this.states == 2) {
        this.states = 1;
      }
      if(this.states == -2) {
        this.states = -1;
      }
      this.isPaused = false;
    },
    clear() {
      this.states = 0;
      this.timer = "00:00:00";
      this.initialTime = "00:00:00"
      this.hour = '';
      this.minute = '';
      this.second = '';
      this.time = '';
      this.isPaused = false;
      clearInterval(this.interval);
      this.interval = setInterval(() => {},1000);
      document.getElementById('hour').value = "";
      document.getElementById('minute').value = "";
      document.getElementById('second').value = "";
    },
    restart() {
      clearInterval(this.interval);
      this.timer = this.initialTime;
      if(this.states > 0) {
        this.states = 1;
        this.countUp();
      } else {
        this.states = -1;
        this.countDown();
      }
    },
    show(ev) {
      if(ev.keyCode == 13) {
        if(this.states == 0) {
          this.countUp();
        }
      }
      if(ev.keyCode == 32) {
        if(Math.abs(this.states) == 1) {
          this.pause();
        }
        if(Math.abs(this.states) == 2) {
          this.resume();
        }
      }
    }
  },
  watch: {
    hour: function() {
      if(this.hour > 99) {
        this.hour = 99;
      }
    },
    minute: function() {
      if(this.minute > 59) {
        this.minute = 59;
      }
    },
    second: function() {
      if(this.second > 59) {
        this.second = 59;
      }
    }

  },
  components: {
    InputTime,
    TimerButton
  },


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    background: #F2F4F7;
  }
  div {
    float: left;
  }
  .hide {
    display: none;
  }
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
    .timer {
        padding-top: 127px;
        width: 100%;
        margin: 0;
        font-family: PTMono-Bold;
        color: #333333;
        font-size: 200px;
        text-align: center;
    }
    header {
        width: 100%;
        height: 70px;
        background: #97A5BC;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
    }
    .start-div {
        margin: 15px 10px;
        float: left;
        background: #97A5BC;
        border-radius: 5px;
        font-family: PingFangSC-Regular;
        color: #FFFFFF;
        font-size: 16px;
    }
    .pause-div {
        margin: 15px 10px;
        float: left;
        background: #97A5BC;
        border-radius: 5px;
        font-family: PingFangSC-Regular;
        color: #FFFFFF;
        font-size: 16px;
    }
    .clear-div {
        margin: 15px 10px;
        float: right;
        background-color: #97A5BC;
        border-radius: 5px;
        font-family: PingFangSC-Regular;
        color: #FFFFFF;
        font-size: 16px;
    }
    .restart-div {
        margin: 15px 40px 15px 10px;
        float: right;
        background-color: #97A5BC;
        border-radius: 5px;
        font-family: PingFangSC-Regular;
        color: #FFFFFF;
        font-size: 16px;
    }
    #hint {
        margin: 24px 10px 24px 40px;
        height: 22px;
        font-family: PingFangSC-Regular;
        color: #FFFFFF;
        font-size: 16px;
    }
    #hintlabel {
        font-family: PingFangSC-Regular;
        color: #FFFFFF;
        font-size: 16px;
    }    
</style>
