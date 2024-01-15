let minute = 0; 
let second = 0;
let msec=0;
let running=false;
let timer;
function start1(){
        running=true;
        msec++;
        if(msec>100){
            msec=0;
            second++;
        }
        if(second>60){
            second=0;
            minute++;
        }    
        document.getElementById('second').innerHTML=zero(msec)
        document.getElementById('minute').innerHTML=zero(second)
        document.getElementById('hour').innerHTML=zero(minute)
}
function stop() {
    running = false;
    clearInterval(timer);
}
function zero(num){
    return num<10?"0"+num:num
}
function start(buttonid){
    let str = buttonid;
    
    if(str=='btn1'){
        if(running!=true){
            timer=  setInterval(start1,10)
        }
    }else if(str=='btn3'){
        
            running=false;
            stop();
    }else if(str=='btn2'){
        stop();
        hour=0;
        minute=0;
        second=0;
        timer=  setInterval(start1,10)
    }


}
