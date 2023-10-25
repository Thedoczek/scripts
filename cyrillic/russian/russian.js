lat1 = ["Ju", "Ja", "E=", "J[Oo]", "Z[Hh]", "S[Hh]", "C[Hh]", "H", "e=", "jo", "zh", "sh", "ch", "h", "''", "Šč", "[QWqw]"];
lat2 = ["JU", "JA", "È", "Ë", "Ž", "Š", "Č", "X", "è", "ë", "ž", "š", "č", "x", "\"", "ŠČ", ""];
lat = ["JU", "JA", "ju", "ja", "ŠČ", "šč", "a", "b", "v", "g", "d", "e", "ë", "ž", "z", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "x", "c", "č", "š", "\"", "y", "'", "è", "A", "B", "V", "G", "D", "E", "Ë", "Ž", "Z", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "X", "C", "Č", "Š", "Y", "È"]; // remember to begin with bigraphs
cyr = ["Ю", "Я", "ю", "я", "Щ", "щ", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "ъ", "ы", "ь", "э", "А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Ы", "Э"];

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