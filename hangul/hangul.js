lat = ["ng", "g", "kk", "n", "d", "tt", "l", "m", "b", "pp", "ss", "s", "jj", "j", "ch", "k", "t", "p", "h", "yae", "yeo", "wae", "ae", "ya", "eo", "ye", "wa", "oe", "yo", "wo", "we", "wi", "yu", "eu", "ui", "yi", "a", "e", "o", "u", "i"];
han = ["ᆼ", "ᄀ", "ᄁ", "ᄂ", "ᄃ", "ᄄ", "ᄅ", "ᄆ", "ᄇ", "ᄈ", "ᄊ", "ᄉ", "ᄍ", "ᄌ", "ᄎ", "ᄏ", "ᄐ", "ᄑ", "ᄒ", "ᅤ", "ᅧ", "ᅫ", "ᅢ", "ᅣ", "ᅥ", "ᅨ", "ᅪ", "ᅬ", "ᅭ", "ᅯ", "ᅰ", "ᅱ", "ᅲ", "ᅳ", "ᅴ", "ᅴ", "ᅡ", "ᅦ", "ᅩ", "ᅮ", "ᅵ", "-"];
typ = ["c", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", " "];
hanf = ["ᆼ", "ᆨ", "ᆩ", "ᆫ", "ᆮ", "ᄄ", "ᆯ", "ᆷ", "ᆸ", "ᄈ", "ᆻ", "ᆺ", "ᄍ", "ᆽ", "ᆾ", "ᆿ", "ᇀ", "ᇁ", "ᇂ"];
han1 = ["ᆨᆺ", "ᆫᆽ", "ᆫᇂ", "ᆯᆨ", "ᆯᆷ", "ᆯᆸ", "ᆯᆺ", "ᆯᇀ", "ᆯᇁ", "ᆯᇂ", "ᆸᆸ", "-"];
han2 = ["ᆪ", "ᆬ", "ᆭ", "ᆰ", "ᆱ", "ᆲ", "ᆳ", "ᆴ", "ᆵ", "ᆶ", "ᆹ", ""];

function lathan() {
	// Convert letters to lowercase
	let car = document.form.leftarea.value.toLowerCase();

	car = car.replace(new RegExp("r", "g"), "l")
	car = car.replace(new RegExp("[qfzxv]", "g"), "")
	car = car.split("");
	for (let i = 0; i < car.length-1; ++i) {
		if (car[i] == "c" && car[i+1] != "h") {
			car[i] = "";
			document.form.leftarea.selectionEnd = document.form.leftarea.selectionEnd - 1;
		} else if (car[i] == "y" && !['a', 'e', 'o', 'u', 'i'].includes(car[i+1])) {
			car[i] = "";
			document.form.leftarea.selectionEnd = document.form.leftarea.selectionEnd - 1;
		} else if (car[i] == "w" && !['a', 'e,', 'o', 'i'].includes(car[i+1])) {
			car[i] = "";
			document.form.leftarea.selectionEnd = document.form.leftarea.selectionEnd - 1;
		}
	}
	car = car.join("");
	document.form.leftarea.value = car;
	

	// Convert to initials and vowels
	for (let i = 0; i < lat.length; ++i) {
		car = car.replace(new RegExp(lat[i], "g"), han[i]);
	}
	
	// Write data about jamo positioning
	let ccv = car;
	for (let i = 0; i < han.length; ++i) {
		ccv = ccv.replace(new RegExp(han[i], "g"), typ[i]);
	}

	// Convert initial clusters to final+initial
	car = car.split("");
	ccv = ccv.split("");
	
	if (ccv[0] == "V") {car[0] = "ᄋ" + car[0]}
	for (let i = 0; i < car.length; ++i) {
		if (ccv[i+1] != "V" && ccv[i] == "C") {
			if (hanf[han.indexOf(car[i])] != car[i]) {
				ccv[i] = "c";
			}
			car[i] = hanf[han.indexOf(car[i])];
		}
		if (ccv[i+1] == "V" && !['C', 'c'].includes(ccv[i])) {
			car[i] = car[i] + "ᄋ";
		}
	}
	car = car.join("");
	ccv = ccv.join("");

	//	 Remove hyphens and combine consonant clusters
	for (let i = 0; i < han1.length; ++i) {
		car = car.replace(new RegExp(han1[i], "g"), han2[i]);
	}

	// run transcribe()
	console.log(ccv);

	document.form.rightarea.value = car;

	autoResize(document.getElementById("leftarea"));
	autoResize(document.getElementById("rightarea"));
}

function hanlat() {
	// detect and decompose syllables into jamo
	// run transcribe()
	// transliterate
}

function transcribe() {
	// iterate through korean text and find initials
	// do table
	// yay
}

function autoResize(textarea) {
	textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight+10) + "px";
}