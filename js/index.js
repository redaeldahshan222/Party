/// <reference types="../@types/jquery" />

// ******************** //
$(function() {
    $( ".first .p" ).slideDown(1);
});
$('.open').on('click',function(){
    $('.menu').animate({'width':"toggle"},1000);
});
$('.close').on('click',function(){
    $('.menu').animate({'width':"toggle"},1000);
});
$('.header').on('click',function(){
    $(this).next().slideToggle(500);
    $('.p').not($(this).next()).slideUp(500);
});
// ******************** //
let sectionOffset = $("#duration").offset().top;
let openOffset = $(".open").offset().top;
$(window).on('scroll',function(){
    console.log(sectionOffset);
    let windowScroll= $(window).scrollTop();
    if(windowScroll > (sectionOffset - openOffset )  ) {
        $('.open').fadeOut(100);
    }
    else{
        $('.open').fadeIn(100);
    }
})
// ******************** //
$(function() {
    countDown(`1 february 2024 24:00:00`);
    $( `.first .p` ).slideDown(1);
});
// ******************** //
function countDown(countNum) {
    let latestTime = new Date(countNum);
    latestTime = (latestTime.getTime()/1000);
    let now = new Date();
    now = (now.getTime()/1000);
    timeDifference = (latestTime- now);
    let days = Math.floor( timeDifference / (24*60*60));
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
    $(`.day`).html(`${days} D`);
    $(`.hour`).html(`${hours} H`);
    $(`.minute`).html(`${ mins } M`);
    $(`.second`).html(`${ secs} S`);
    setInterval(function() {  
        countDown(countNum); 
    }, 1000);
}
// ******************** //
let totalLength = 100;
$('textarea').keyup(function() {
    let currentLength = $('textarea').val().length;
    let lengthLeft = totalLength-currentLength;
    if(lengthLeft<=0){
        $(".charLeft").text("your available character finished");
        $('.form p').fadeOut(1);
    }else{
        $(".charLeft").text(lengthLeft);
        $('.form p').fadeIn(1);
        }
});
// ******************** //