import $ from 'jquery';
$(document).ready(function(){
    $(".break-decrement").click(function(){
        let breakVal = $(".break-length").text()
        $(".break-length").text(breakVal--)
    })

})