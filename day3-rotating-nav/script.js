const btnOpen = document.querySelector('#btn-open');
const btnClose = document.querySelector('#btn-close');

btnOpen.addEventListener('click', () => {
	document.querySelector('#container').setAttribute('data-show-nav', true);
});

btnClose.addEventListener('click', () => {
	document.querySelector('#container').setAttribute('data-show-nav', false);
});
