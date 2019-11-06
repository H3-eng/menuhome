
import $ from "jquery";
function repalce(){
    console.log(111)
    console.log($("#left li"))
    $('.left ul li').click(function(){ 
        var i = $(this).index();
        console.log(i);
        // $('body, html').animate({scrollTop:$('.right ul li').eq(i).offset().top-40},500); 
    }); 
}
export{
    repalce
}
