/** Add a new calculation line **/
function add_calc_line() {
	const nr_line = document.createElement('nr-line');
	nr_line.setAttribute('contenteditable', 'true'); 
	const nr_sum = document.createElement('nr-sum');
	const nr_sheet = document.getElementById('sheet');
	console.log(nr_sheet);
	nr_sheet.appendChild(nr_line); 
	nr_sheet.appendChild(nr_sum); 
}

class Nebenrechnung {
	total; 
	subtotal;

	constructor() {
		this.#get_sheet();
	}

	#get_sheet() {
		const sheet = document.querySelector('nr-sheet');

		Array.from(sheet.children).forEach((child, index) => {
			console.log(`Element ${index + 1}:`, child.tagName, child.textContent.trim());
			if (child.tagName == 'NR-LINE') {
				this.#read_line(child); 
			} else if (child.tagName == 'NR-SUM') {
				console.log(child);
				this.#to_sum(child, index);
			}

	    });
	}

	#read_line(tag) {
		this.subtotal = 0;
		const calc = new Array();

		const words = tag.textContent.split(' ');
		words.forEach(function(item) {
			let is_float = parseFloat(item);
			
			if (!isNaN(is_float)) {
				calc.push(is_float);
			} else if( item.length == 1 && item.match( /([-()+*/%])/ )) { 
				calc.push(item);
			} else {
				console.log(`ELSE: ${item}`);
			}
		})
		console.log(calc);
		this.subtotal = eval(calc.join(''));
		console.log(this.subtotal);
	}

	#to_sum(tag, value) {
		tag.textContent = this.subtotal; 
		console.log(`to_sum: ${value + 1}`);
	}

	#rm_text(item) {
		console.log('foo');
		// console.log(item);
	}

	foo(txt) {
		return txt;
	}

}

window.onload = function () {
	const nr = new Nebenrechnung(); 
}
