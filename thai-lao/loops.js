function toggleLoops() {
	const thaiElement = document.getElementById('thai');
	const thaiFont = window.getComputedStyle(thaiElement).fontFamily;
	const laoElement = document.getElementById('lao');
	const laoFont = window.getComputedStyle(laoElement).fontFamily;
  
	if (thaiFont.includes('Noto Sans Thai Looped')) {
		thaiElement.style.fontFamily = '"Noto Sans, Noto Sans Thai Normal"';
	}
	if (thaiFont.includes('Noto Sans Thai Normal')) {
		thaiElement.style.fontFamily = '"Noto Sans, Noto Sans Thai Looped"';
	}

	if (laoFont.includes('Noto Sans Lao Looped')) {
		laoElement.style.fontFamily = '"Noto Sans, Noto Sans Lao Normal"';
	} 
	if (laoFont.includes('Noto Sans Lao Normal')) {
		laoElement.style.fontFamily = '"Noto Sans, Noto Sans Lao Looped"';
	}
}