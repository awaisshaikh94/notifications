$(document).ready(function () {

	// bottom-left 
	$(".notify-btn.bl").click(function(){
		$(".notification.bottom-left").addClass('show');
		setTimeout(function(){
		   $(".notification.bottom-left").removeClass('show');
		}, 2000);
	});	

	// bottom-right
	$(".notify-btn.br").click(function(){
		$(".notification.bottom-right").addClass('show');
		setTimeout(function(){
		   $(".notification.bottom-right").removeClass('show');
		}, 2000);
	});

	// top-right
	$(".notify-btn.tr").click(function(){
		$(".notification.top-right").addClass('show');
		setTimeout(function(){
		   $(".notification.top-right").removeClass('show');
		}, 2000);
	});

	// top-left
	$(".notify-btn.tl").click(function(){
		$(".notification.top-left").addClass('show');
		setTimeout(function(){
		   $(".notification.top-left").removeClass('show');
		}, 2000);
	});

});