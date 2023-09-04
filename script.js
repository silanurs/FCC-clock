
$(document).ready(function(){
    $(".break-decrement").click(function(){
        let breakVal = Number($(".break-length").text())
        let newBreak 
        if(breakVal===1){
            newBreak=1
        }else {
            newBreak=breakVal - 1;
        }
        $(".break-length").text(`${newBreak}`)
        $(".time-left-second").text("00")
    })
    $(".break-increment").click(function(){
        let breakVal = Number($(".break-length").text());
        let newBreak
        if(breakVal===60){
            newBreak=60;
        }else{
            newBreak= breakVal+1;

        }
        $(".break-length").text(`${newBreak}`)
        $(".time-left-second").text("00")
    })
    $(".session-decrement").click(function(){
        let sessionVal = Number($(".session-length").text())
        let newSession
        if(sessionVal===1){
            newSession=1;
        }else{
            newSession= sessionVal-1;
        }
        $(".session-length").text(`${newSession}`)
        if (newSession <10){
            newSession = "0" + newSession;
        }
        $(".time-left-second").text("00")
        $(".time-left-minute").text(`${newSession}`)
    })
    $(".session-increment").click(function(){
        let sessionVal = Number($(".session-length").text())
        let newSession
        if(sessionVal===60){
            newSession=60;
        }else{
            newSession= sessionVal+1;
        }
        $(".session-length").text(`${newSession}`)
        if (newSession <10){
            newSession = "0" + newSession;
        }
        $(".time-left-minute").text(`${newSession}`)
        $(".time-left-second").text("00")
    })
    $("#reset").click(function(){
        $(".session-length").text('25');
        $(".break-length").text("5");
        $(".time-left-minute").text("25");
        $(".time-left-second").text("00")
    })
    let sec="00"
    let newSec
    function setSecond(){
        
        if(sec=="00"|| $(".time-left-second").text()==0){
            newSec=59;
            sec=newSec
        }else {
           newSec--;
           sec=newSec;
           if(newSec<10){
            newSec="0" + sec
           }
        }
        $(".time-left-second").text(`${newSec}`)
        
        }
 $("#start").click(function(){
    let minute = $(".time-left-minute").text();
    let newMin
   
    let audio = new Audio("alarmclock.mp3")
    function setMinute(){
        if($(".time-left-second").text()=="00"){
            newMin=minute-1;
            $(".time-left-minute").text(`${newMin}`)
            if(newMin<10){
                $(".time-left-minute").text("0"+newMin)
            }
        }
        if($(".session").text()=="Session" && $(".time-left-minute").text()=="00" && $(".time-left-second").text()=="00"){
            $(".session").text("Break");
            let breakMin= "0" + $(".break-length").text()
            $(".time-left-minute").text(breakMin);
            $(".time-left-second").text("00")
            audio.play()
            
        }
        if($(".session").text()=="Break" && $(".time-left-minute").text()=="00" && $(".time-left-second").text()=="00"){
            $(".session").text("Session");
            let sessionMin= $(".session-length").text()
            $(".time-left-minute").text(sessionMin);
            $(".time-left-second").text("00")
            audio.play()
            
        }
       

    }
        $("button").attr("disabled", true)
       
        
        let secondInterval = setInterval(setSecond, 1000)
        let minuteInterval=setInterval(setMinute, 1000)
        
            secondInterval
            minuteInterval
        $("#stop").click(function(){
            clearInterval(secondInterval)
            $("button").removeAttr("disabled")
        })
   
  
    })

})