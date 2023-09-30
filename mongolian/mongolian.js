lat1 = ["o=", "u=", "q", "sh", "ch", "j"];
lat2 = ["ö", "ü", "k", "š", "č", "ǰ"];
lat = ["a", "e", "i", "o", "u", "ö", "ü", "ng", "n", "b", "p", "k", "g", "m", "l", "s", "š", "t", "d", "č", "ǰ", "y", "r"];
mon = ["ᠠ", "ᠡ", "ᠢ", "ᠣ", "ᠤ", "ᠥ", "ᠦ", "ᠩ", "ᠨ", "ᠪ", "ᠫ", "ᠬ", "ᠭ", "ᠮ", "ᠯ", "ᠰ", "ᠱ", "ᠲ", "ᠳ", "ᠴ", "ᠵ", "ᠶ", "ᠷ"];

function latmon() {
	let car = document.form.leftarea.value;

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
	document.form.leftarea.value = car;

	autoResize(document.getElementById("leftarea"));
	autoResize(document.getElementById("rightarea"));
}

function autoResize(textarea) {
	textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight+10) + 'px';
}