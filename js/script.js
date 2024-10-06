document.addEventListener('DOMContentLoaded', () => {
	
	const burger = document.querySelector('.burger');

	burger.addEventListener('click', () => {
		burger.classList.toggle('open');
		document.querySelector('.burger__menu').classList.toggle('active');
		document.body.classList.toggle('locked');
	});
})