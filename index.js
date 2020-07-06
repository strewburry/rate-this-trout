document.addEventListener("DOMContentLoaded", function() { 

	let $input = $('#rate-input');
	let $value = $('#trout-container .rating');
	let valueTimeout;

	function updateValue () {
		// restart existing timer
		clearTimeout(valueTimeout);
		// stop existing fadeout, reset the opacity, update & show the text again
		$value
			.stop()
			.css({'opacity':0.8})
			.show()
			.text($input.val());
		// start a half-second timer to fade out text
		valueTimeout = setTimeout(() => $value.fadeOut(), 500);
	}

	$input.on('input', updateValue)
});