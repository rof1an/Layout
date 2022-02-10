$(function () {
	$('.slider__inner, .news__slider-inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		Infinite: false,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		easing: 'ease',
		pauseOnHover: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		touchMove: true
	});
	$('select').styler();

	$('.header__btn-menu').on('click', function () {
		$('.menu ul').slideToggle();
	});

});

const btnClose = document.querySelector('.pop_up_close');
const btnOpen = document.querySelector('#open_pop_up');
const popUp = document.querySelector('.pop_up');
const formClose = document.querySelector('[data-modal-close]');

const openModalWindow = document.querySelectorAll('[data-open-window]');

openModalWindow.forEach(function (item) {
	item.addEventListener('click', function () {
		popUp.classList.add('active');
	})
})

// btnOpen.addEventListener('click', function (event) {
// 	event.preventDefault();
// 	popUp.classList.add('active');
// });

btnClose.addEventListener('click', function () {
	popUp.classList.remove('active');
});


// close on fade
popUp.addEventListener('click', function () {
	popUp.classList.remove('active');
});
popUp.querySelector('.pop_up_body').addEventListener('click', function (event) {
	event.stopPropagation();
});