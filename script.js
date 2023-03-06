const screen = document.querySelector('.text-el');
const equals = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');

document.querySelectorAll('.btn-number, .btn-operator').forEach(button => {
	button.addEventListener('click', () => {
		if (button.classList.contains('btn-number')) {
			screen.value += button.innerText;
		}
		if (button.classList.contains('btn-operator')) {
			screen.value += ` ${button.innerText} `;
		}
	});
});

equals.addEventListener('click', () => {
	screen.value = eval(screen.value);
});

clear.addEventListener('click', () => {
	screen.value = '';
});
backspace.addEventListener('click', () => {
	screen.value =Math.floor(screen.value / 10) ;
});