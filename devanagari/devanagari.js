lat1 = ["A", "I", "U", "r=", "R=", "l=", "L=", "E", "e=", "O", "o=", "M", "H", "T", "D", "N", "ñ=", "n=", "S", "ṣ="];
lat2 = ["ā", "ī", "ū", "ṛ", "ṝ", "ḷ", "ḹ", "ē", "ê", "ō", "ô", "ṁ", "ḥ", "ṭ", "ḍ", "ñ", "ṅ", "ṇ", "ṣ", "ś"];

latc = ["kh", "gh", "ch", "jh", "ṭh", "ḍh", "th", "dh", "ph", "bh", "k", "g", "ṅ", "c", "j", "ñ", "ṭ", "ḍ", "ṇ", "t", "d", "n", "p", "b", "m", "y", "r", "l", "v", "ś", "ṣ", "s", "h", "'"];
devc = ["ख", "घ", "छ", "झ", "ठ", "ढ", "थ", "ध", "फ", "भ", "क", "ग", "ङ", "च", "ज", "ञ", "ट", "ड", "ण", "त", "द", "न", "प", "ब", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "ऽ"];

latv = ["a", "ai", "au", "ā", "i", "ī", "u", "ū", "ṛ", "ṝ", "ḷ", "ḹ", "e", "ē", "ê", "o", "ō", "ô", "ṁ", "ḥ"];
devv = ["्", "ै", "ौ", "ा", "ि", "ी", "ु", "ू", "ृ", "ॄ", "ॢ", "ॣ", "ॆ", "े", "ॅ", "ॊ", "ो", "ॉ", "ं", "ः"];
devvbig = ["अ", "ऐ", "औ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ॠ", "ऌ", "ॡ", "ऎ", "ए", "ऍ", "ऒ", "ओ", "ऑ", "ं", "ः"];

function latdev() {
	let car = document.form.leftarea.value;
	
	// Convert special characters while keeping cursor position
	for (let i = 0; i < lat1.length; ++i) {
		car = car.replace(new RegExp(lat1[i], "g"), lat2[i]);
	}
	const cursorPos = document.form.leftarea.selectionEnd;
	const diff = document.form.leftarea.value.length - car.length;
	document.form.leftarea.value = car;
	document.form.leftarea.selectionEnd = cursorPos - diff;
	
	let vowcons = car;
	// Update devanagari side
	// consonants
	for (let i = 0; i < latc.length; ++i) {
		car = car.replace(new RegExp(latc[i], "g"), devc[i]);
		vowcons = car.replace(new RegExp(latc[i], "g"), "c");
	}
	// vowels without a
	for (let i = 1; i < latv.length; ++i) {
		car = car.replace(new RegExp(latv[i], "g"), devv[i]);
		vowcons = car.replace(new RegExp(latv[i], "g"), "v");
	}
	console.log(car);
	console.log(vowcons);

	// Check for uppecase U
	for (let i = 2; i < car.length; ++i) {
		if (car[i].charCodeAt(0) >= 1329 && car[i].charCodeAt(0) <= 1366 && car[i-1] == "ւ" && car[i-2] == "Ո") {
			console.log(car[i-1]);
			car = car.substring(0, i-1) + "Ւ" + car.substring(i);
			console.log(car[i-1]);
		}
	}
	document.form.rightarea.value = car;

	autoResize(document.getElementById("leftarea"));
	autoResize(document.getElementById("rightarea"));
}

function devlat() {
	let car = document.form.rightarea.value;
	
	// Update latin side
	for (let i = 0; i < lat.length; ++i) {
		car = car.replace(new RegExp(arm[i], "g"), lat[i]);
	}
	for (let i = 0; i < lat1.length; ++i) {
		car = car.replace(new RegExp(lat1[i], "g"), lat2[i]);
	}
	console.log(car);
	car = car.replace(/\\\./g, ".");
	car = car.replace(/\\\?/g, "?");
	console.log(car);
	document.form.leftarea.value = car;

	autoResize(document.getElementById("leftarea"));
	autoResize(document.getElementById("rightarea"));
}

function autoResize(textarea) {
	textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight+10) + 'px';
}