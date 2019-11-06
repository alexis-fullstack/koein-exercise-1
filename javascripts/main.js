$(function(){
  InitHtmlInclude();

	var mainObj = $("main");
	if(mainObj.hasClass('home')){
		InitHomeSwiper();
		InitHomeProductLayout();
		InitHomeDorpsowns();
		InitGlobalFunction();
	}
	else if(mainObj.hasClass('category')){
		InitCategorySwiper();
		InitCategoryProductLoading();
		InitDatepickers();
		InitGlobalFunction();
	}
});

//Global functions
function InitGlobalFunction(){
	$('header select.headerOptions').click(function(){
		//code goes here
	});

	$('select.category').click(function(){
		//code goes here
	});
}

function InitHtmlInclude() {
  w3.includeHTML();
}
//End Global functions

//Home functions
function InitHomeSwiper(){
	var swiper1 = new Swiper('.swiper-first', {
		speed: 400,
		slidesPerView: 4,
		uniqueNavElements: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		}
	});

	var swiper2 = new Swiper('.swiper-second', {
		speed: 400,
		slidesPerView: 4,
		spaceBetween: 10,
		navigation: {
			prevEl: '.slide-prev',
			nextEl: '.slide-next'
		}
	});

}
function InitHomeProductLayout(){
	//code goes here
}
function InitHomeDorpsowns(){
	//code goes here
}
//End Home functions

//Category functions
function InitCategorySwiper(){
	//code goes here
}
function InitCategoryProductLoading(){
	//code goes here
}
function InitDatepickers(){
	//code goes here
}
//End Category functions
