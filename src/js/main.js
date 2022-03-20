import * as flsFunctions from "./modules/functions.js";
import "./slick.min.js";

flsFunctions.isWebp();

$(function() {
	//* --- Slider --- *//
	$('.programs__slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		centerMode: true,
  		centerPadding: '175px',
		variableWidth: true,
  		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				centerMode: true,
				centerPadding: '85px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				centerMode: true,
				centerPadding: '30px',
				variableWidth: true,
				slidesToShow: 1
			  }
			}
		]
	})

	$('.community__slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
  		slidesToShow: 2,
		slidesToScroll: 1,
		appendArrows: $('.community__wrap'),
		variableWidth: true,
		waitForAnimate: false,
		
		// centerMode: true,
		// centerPadding: '45px',
	})

	//* --- FAQ Accordion --- *//
	const faqs = document.querySelectorAll('.question__item');
	faqs.forEach((faq) => {
		faq.addEventListener('click', () => {
			faq.classList.toggle('active');
		})
	})
	
	//* --- Burger --- *//
	const burgerBtn = document.querySelector('.header__burger');
	const burgerLog = document.querySelector('.register');
	const burgerMenu = document.querySelector('.nav');
	const burgerList = [burgerBtn, burgerMenu, burgerLog];
	burgerBtn.addEventListener('click', () => {
		burgerList.forEach((e) => {
			e.classList.toggle('active');
		})
		
		// Anchor crossing
		for (let i = 0; i < burgerList.length; i++) {
			if (burgerList[i].classList.contains('active')) {
				document.body.style.overflow = 'hidden';
				document.documentElement.style.scrollBehavior = 'auto';
			} else {
				document.body.style.overflow = 'auto';	
				document.documentElement.style.scrollBehavior = 'smooth';
			}
		}
	})

	// Anchor crossing
	const navLinks = document.querySelectorAll('.nav__link');
	const destruction = () => {
		burgerList.forEach((e) => {
			e.classList.remove('active');
		})
	}
	navLinks.forEach((navLink) => {
		navLink.addEventListener('click', (e) => {
			destruction();
			document.body.style.overflow = 'auto';	
			setTimeout(() => {
				document.documentElement.style.scrollBehavior = 'smooth';	
			}, 1000);
		});
	});
	
});