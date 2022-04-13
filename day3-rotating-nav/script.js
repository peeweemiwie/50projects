const btnOpen = document.querySelector('#btn-open');
const btnClose = document.querySelector('#btn-close');

btnOpen.addEventListener('click', () => {
	document.querySelector('#container').setAttribute('data-show-nav', true);
});

btnClose.addEventListener('click', () => {
	document.querySelector('#container').setAttribute('data-show-nav', false);
});

// search input
const searchBtn = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');
const searchCloseBtn = document.querySelector('.btn-search-close');
const wrapperResults = document.querySelector('#wrapper__results');
const container = document.querySelector('#container__search-result');

const renderMessage = (type, msg) => {
	console.log(type, msg);
	searchForm.classList.add('error');
	searchForm.querySelector('#message').textContent = msg;
	// onfocus - remove error class
};

const createResults = value => {
	const template = document.querySelector('#template').content;
	const clonedHTML = document.importNode(template, true);
	Array.from([1, 2, 3]).forEach(i => {
		const clonedHTML = document.importNode(template, true);
		clonedHTML.querySelector('.searched-text').innerText = value;
		container.append(clonedHTML);
	});
	wrapperResults.setAttribute('data-injected', true);
};

const renderSearchResults = value => {
	container.innerHTML = '';
	console.log(value);
	createResults(value);
};

const validateValue = value => {
	if (!value) {
		renderMessage('error', 'Please enter a word you are searching for.');
	} else {
		renderSearchResults(value);
	}
};

searchBtn.addEventListener('click', e => {
	e.preventDefault();
	const isOpen = searchForm.getAttribute('data-open');
	if (isOpen === 'false') {
		console.log('false');
		searchForm.setAttribute('data-open', true);
	} else if (isOpen === 'true') {
		console.log('true');
		validateValue(searchInput.value);
	}
});

searchCloseBtn.addEventListener('click', () => {
	searchInput.value = '';
	searchForm.setAttribute('data-open', false);
	wrapperResults.setAttribute('data-injected', false);
	container.innerHTML = '';
});
