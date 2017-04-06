'use strict';
$(document).ready(function(){
    $('.headernavbar a').click(function(){
        var a = window.location.hash;
        var b = $(this).attr('ng-href');
        var c = $(this).attr('href');
        console.log(c);
        if (a !== b){
            $(this).parent('li').addClass('active');
            $(this).parent('li').siblings().removeClass('active');
        } else if ( a === c ){
            $(this).parent('div').siblings().find('li').removeClass('active');
        } else {
            $(this).parent('li').removeClass('active');
        }
    });
});