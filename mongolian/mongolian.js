lat1 = ["o=", "u=", "k", "qe", "qi", "qö", "qü", "g", "ɣe", "ɣi", "ɣö", "ɣü", "sh", "ch", "zh", "j", "v", "nɣ", "\\\\."];
lat2 = ["ö", "ü", "q", "ke", "ki", "kö", "kü", "ɣ", "ge", "gi", "gö", "gü", "š", "č", "ž", "ǰ", "w", "ng", "."];
lat = ["lh", "a", "e", "i", "o", "u", "ö", "ü", "ng", "n", "b", "p", "k", "q", "g", "ɣ", "m", "l", "s", "š", "t", "d", "č", "ǰ", "y", "r", "w", "f", "c", "z", "h", "ž", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "\\.\\.\\.", ",", "\\.", ":"];
mon = ["ᡀ", "ᠠ", "ᠡ", "ᠢ", "ᠣ", "ᠤ", "ᠥ", "ᠦ", "ᠩ", "ᠨ", "ᠪ", "ᠫ", "ᠬ", "ᠬ", "ᠭ", "ᠭ", "ᠮ", "ᠯ", "ᠰ", "ᠱ", "ᠲ", "ᠳ", "ᠴ", "ᠵ", "ᠶ", "ᠷ", "ᠸ", "ᠹ", "ᠼ", "ᠽ", "ᠾ", "ᠿ", "᠎", "᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙", "᠁", "᠂", "᠃", "᠄"];

function latmon() {
	let car = document.form.leftarea.value.toLowerCase();

	// Convert special characters while keeping cursor position
	for (let i = 0; i < lat1.length; ++i) {
		car = car.replace(new RegExp(lat1[i], "g"), lat2[i]);
	}
	const cursorPos = document.form.leftarea.selectionEnd
	const diff = document.form.leftarea.value.length - car.length;
	document.form.leftarea.value = car;
	document.form.leftarea.selectionEnd = cursorPos + diff;

	// Update mongolian side
	for (let i = 0; i < lat.length; i++) {
		car = car.replace(new RegExp(lat[i], "g"), mon[i]);
	}
	document.form.rightarea.value = car;
	document.getElementById("vertical").innerHTML = car;

	autoResize(document.getElementById("leftarea"));
	autoResize(document.getElementById("rightarea"));
}

function monlat() {
	let car = document.form.rightarea.value;
	
	// Update vertical mongolian
	document.getElementById("vertical").innerHTML = car;

	// Update latin side
	for (let i = 0; i < lat.length; i++) {
		car = car.replace(new RegExp(mon[i], "g"), lat[i]);
	}
	for (let i = 0; i < lat1.length; ++i) {
		car = car.replace(new RegExp(lat1[i], "g"), lat2[i]);
	}
	document.form.leftarea.value = car;

	autoResize(document.getElementById("leftarea"));
	autoResize(document.getElementById("rightarea"));
}

function autoResize(textarea) {
	textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight+10) + 'px';
}