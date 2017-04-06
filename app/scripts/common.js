'use strict';

$(document).ready(function () {	
	$('ul.headernavbar > li > a').click(function(){
		var alert;
		console.log($(this));
		alert($(this));
		var a = $('.headernavbar > li > a').attr('ng-href');
		var b = window.location.hash;
		if (a === b) {
			$('.headernavbar > li > a').parent().addClass('active');
		} else {
			$('.headernavbar > li > a').parent().removeClass('active');			
		}
	});
});