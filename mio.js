$(document).ready(function() { // when document has loaded

	var i = $('input').size() + 1; // check how many input exists on the document and add 1 for the add command to work

	$('a#add').click(function() { // when you click the add link
		$('<div class="' + i + '" ><input type="text" class="' + i + '" /><a href="#" id="remove">Remove</a></div>').appendTo('.formulario'); // append (add) a new input to the document.
		// if you have the input inside a form, change body to form in the appendTo
		i++; //after the click i will be i = 3 if you click again i will be i = 4
	});

	$('a#remove').click(function() { // similar to the previous, when you click remove link
		if(i > 1) { // if you have at least 1 input on the form
			
			this.parentNode.remove(); 
		}
	});

	$('a.reset').click(function() {
		while(i > 2) { // while you have more than 1 input on the page
			$('input:last').remove(); // remove inputs
			i--;
		}
	});

});
