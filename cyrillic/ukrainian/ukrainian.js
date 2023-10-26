lat1 = ["Ju", "Ja", "Ji", "Je", "Z[Xx]", "S[Xx]", "C[Xx]", "e=", "jo", "zx", "sx", "cx", "''", "Šč", "[QWqw]"];
lat2 = ["JU", "JA", "JI", "JE", "Ž", "Š", "Č", "è", "ë", "ž", "š", "č", "\"", "ŠČ", ""];
lat = ["JU", "JA", "JI", "JE", "ju", "ja", "ji", "je", "ŠČ", "šč", "a", "b", "v", "h", "g", "d", "e", "ž", "z", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "x", "c", "č", "š", "y", "'", "A", "B", "V", "H", "G", "D", "E", "Ž", "Z", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "X", "C", "Č", "Š", "Y"]; // remember to begin with bigraphs
cyr = ["Ю", "Я", "Ї", "Є", "ю", "я", "ї", "є", "Щ", "щ", "а", "б", "в", "г", "ґ", "д", "е", "ж", "з", "і", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "и", "ь", "А", "Б", "В", "Г", "Ґ", "Д", "Е", "Ж", "З", "I", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "И"];

function latcyr() {
	let car = document.form.leftarea.value;

	// Convert special characters while keeping cursor position
	for (let i = 0; i < lat1.length; ++i) {
		car = car.replace(new RegExp(lat1[i], "g"), lat2[i]);
	}
	const cursorPos = document.form.leftarea.selectionEnd;
	const diff = document.form.leftarea.value.length - car.length;
	document.form.leftarea.value = car;
	document.form.leftarea.selectionEnd = cursorPos - diff;
	
	// Update cyrillic side side
	for (let i = 0; i < lat.length; ++i) {
		car = car.replace(new RegExp(lat[i], "g"), cyr[i]);
	}
	document.form.rightarea.value = car;

	autoResize(document.getElementById("leftarea"));
	autoResize(document.getElementById("rightarea"));
}

function cyrlat() {
	let car = document.form.rightarea.value;

	// Update latin side
	for (let i = 0; i < lat.length; ++i) {
		car = car.replace(new RegExp(cyr[i], "g"), lat[i]);
	}
	document.form.leftarea.value = car;

	autoResize(document.getElementById("leftarea"));
	autoResize(document.getElementById("rightarea"));
}

function autoResize(textarea) {
	textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight+10) + 'px';
}