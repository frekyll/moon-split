/* eslint-env browser */

const block = document.querySelector('.block:last-child');
const modalSubheading = document.querySelectorAll('.modal .subheading');
const modalTrigger = document.querySelectorAll('[data-toggle=modal]');

document.addEventListener('mouseover', event => {
	if (event.target.matches('.link')) {
		block.classList.add('is-active');
	} else {
		block.classList.remove('is-active');
	}

	if (event.target.matches('.modal-icon')) {
		[...modalSubheading].forEach(subheading => {
			subheading.classList.add('is-active');
		});
	} else {
		[...modalSubheading].forEach(subheading => {
			subheading.classList.remove('is-active');
		});
	}
});

[...modalTrigger].forEach(trigger => {
	trigger.addEventListener('click', () => {
		const modalName = trigger.dataset.target;
		const modal = document.querySelector(modalName);
		modal.classList.toggle('is-visible');

		document.addEventListener('keydown', event => {
			if (event.keyCode === 27) {
				modal.classList.remove('is-visible');
			}
		});
	});
});
