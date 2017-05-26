/*global $, alert, console*/
$(function(){
    'use strict'
    
    // triger the nice scroll
    $('html').niceScroll({
        cursorcolor:'#F7600E',
        cursorwidth:10,
        cursorborder:'1px solid #F7600E'
    });
    
    //change header height
    $('.header').height($(window).height());
    
    //scroll to features
    $('.header .arrow i').click(function(){
       $('html, body').animate({
           scrollTop:$('.features').offset().top
       },1000); 
    });
    
    //scroll to our-team
    $('.header .hire').click(function(){
       $('html, body').animate({
           scrollTop:$('.our-team').offset().top
       },2000); 
    });
    //scroll to our-work
    $('.header .work').click(function(){
       $('html, body').animate({
           scrollTop:$('.our-work').offset().top
       },2000); 
    });
    //show hidden items 
    $('.show-more').click(function(){
        $('.our-work .hidden').fadeIn(1000);
    });
    
    // check testimonials
    var rightArrow = $('.testim .fa-chevron-right'),
        leftArrow = $('.testim .fa-chevron-left');
    function checkClients(){
    $('.client:first').hasClass('active')? leftArrow.fadeOut(): leftArrow.fadeIn();
    $('.client:last').hasClass('active')? rightArrow.fadeOut(): rightArrow.fadeIn();    
    }
    checkClients();
    $('.testim i').click(function (){
        if($(this).hasClass('fa-chevron-right')){
            $('.testim .active').fadeOut(1000,function(){
                $(this).removeClass('active').next().addClass('active').fadeIn();
                checkClients();
            });
        }else{
            $('.testim .active').fadeOut(1000,function(){
                $(this).removeClass('active').prev().addClass('active').fadeIn();
                checkClients();
            });
        }
    });
});