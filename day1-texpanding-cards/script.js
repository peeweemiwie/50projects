const panels = document.querySelectorAll('.panel');
const removeActiveClass = className => {
	panels.forEach(panel => panel.classList.remove(className));
};

const activatePanel = e => {
	if (e.target.closest('.panel')) {
		removeActiveClass('active');
		e.target.closest('.panel').classList.add('active');
	} else {
		return;
	}
};

document.body.addEventListener('click', activatePanel);
