let steps = null;
const stepNum = document.querySelector('#step-num');
const progressSteps = document.querySelector('#progress-bar');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');
const btnRestart = document.querySelector('#btn-restart');
const stepNumbers = document.querySelectorAll('.steps');
const wrapperBtns = document.querySelector('#wrapper__buttons');
const wrapperMessage = document.querySelector('#wrapper__message-completed');
const maxSteps = stepNumbers.length;
const minSteps = 1;

const updateStepNum = num => {
	stepNum.textContent = num;
};

const progressBarWidth = num => {
	return Math.round((100 / (maxSteps - 1)) * num) + '%';
};

const init = num => {
	wrapperBtns.style.display = 'flex';
	wrapperMessage.style.display = 'none';
	steps = num;
	updateStepNum(num);
	progressSteps.setAttribute('data-steps', num);
	progressSteps.style.width = '0%';
	btnPrev.disabled = true;
	btnNext.disabled = false;
	stepNumbers.forEach(el => el.classList.remove('active'));
	stepNumbers[0].classList.add('active');
	progressSteps;
};
init(1);

btnNext.addEventListener('click', e => {
	if (steps < maxSteps) {
		stepNumbers[steps].classList.add('active');
		steps++;
		progressSteps.setAttribute('data-steps', steps);
		progressSteps.style.width = progressBarWidth(steps - 1);
		updateStepNum(steps);
		if (steps === maxSteps) {
			e.target.disabled = true;
			btnPrev.disabled = true;
			setTimeout(() => {
				wrapperBtns.style.display = 'none';
				wrapperMessage.style.display = 'flex';
			}, 1500);
		} else if (steps === minSteps + 1) {
			btnPrev.disabled = false;
		}
	}
});

btnPrev.addEventListener('click', e => {
	if (steps > 1) {
		stepNumbers[steps - 1].classList.remove('active');
		steps--;
		progressSteps.setAttribute('data-steps', steps);
		progressSteps.style.width = progressBarWidth(steps - 1);
		updateStepNum(steps);
		if (steps === minSteps) {
			e.target.disabled = true;
		} else if (steps === maxSteps - 1) {
			btnNext.disabled = false;
		}
	}
});

btnRestart.addEventListener('click', () => {
	init(1);
});
