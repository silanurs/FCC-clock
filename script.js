
$(document).ready(function(){
    $(".break-decrement").click(function(){
        let breakVal = Number($(".break-length").text())
        let newBreak 
        if(breakVal===0){
            newBreak=0
        }else {
            newBreak=breakVal - 1;
        }
        $(".break-length").text(`${newBreak}`)
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
    })
    $(".session-decrement").click(function(){
        let sessionVal = Number($(".session-length").text())
        let newSession
        if(sessionVal===0){
            newSession=0;
        }else{
            newSession= sessionVal-1;
        }
        $(".session-length").text(`${newSession}`)
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
        $(".time-left-minute").text(`${newSession}`)
    })
    

})