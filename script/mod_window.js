// Модальное окно

// открыть
$(document).ready(function(){


$(".image").click(function(){
	var img= $(this);
	var src= img.attr('src');
	$("body").append('<div class="overlay js-overlay"><div class="popup"><div class="close-popup js-close"></div><img src="'+src+'" alt=""></div></div>');
	$('.js-overlay').fadeIn(800);
})

})
// закрыть на крестик
$('.js-close').click(function() { 
	$('.js-overlay').fadeOut(800);
	setTimeout(function(){
	$('.js-overlay').remove();
	}, 800);
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay').fadeOut();
		
	}
});


