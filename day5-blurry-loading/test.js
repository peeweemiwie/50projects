// const stripe1 = 'blue';
// const stripe2 = 'navy';
// const stripe3 = 'black';
const colorArray = ['blue', 'navy', 'black'];
const stripeIteration = 5;
const stripeArray = [];
let stripe = [...Array(stripeIteration)].map((_, i) => {
	[...Array(colorArray.length)].map((_, index) => {
		const color = colorArray[index];
		const percent = i * 10;
		stripeArray.push(`${color} ${percent}%`);
	});
});
console.log(stripeArray);

// stripe = stripe.join('');
// stripe = stripe.slice(0, -1);
// console.log(stripe);
