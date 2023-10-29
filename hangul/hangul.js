lat = ["ng", "g", "kk", "n", "d", "tt", "l", "m", "b", "pp", "ss", "s", "jj", "j", "ch", "k", "t", "p", "h", "yae", "yeo", "wae", "ae", "ya", "eo", "ye", "wa", "oe", "yo", "wo", "we", "wi", "yu", "eu", "ui", "a", "e", "o", "u", "i"];
han = ["ᆼ", "ᄀ", "ᄁ", "ᄂ", "ᄃ", "ᄄ", "ᄅ", "ᄆ", "ᄇ", "ᄈ", "ᄊ", "ᄉ", "ᄍ", "ᄌ", "ᄎ", "ᄏ", "ᄐ", "ᄑ", "ᄒ", "ᅤ", "ᅧ", "ᅫ", "ᅢ", "ᅣ", "ᅥ", "ᅨ", "ᅪ", "ᅬ", "ᅭ", "ᅯ", "ᅰ", "ᅱ", "ᅲ", "ᅳ", "ᅴ", "ᅡ", "ᅦ", "ᅩ", "ᅮ", "ᅵ", "-"];
typ = ["c", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", " "];
hanf = ["ᆼ", "ᆨ", "ᆩ", "ᆫ", "ᆮ", "", "ᆯ", "ᆷ", "ᆸ", "", "", "ᆺ", "", "ᆽ", "ᆾ", "ᆿ", "ᇀ", "ᇁ", "ᇂ"];
han1 = ["ᆨᆺ", "ᆫᆽ", "ᆫᇂ", "ᆯᆨ", "ᆯᆷ", "ᆯᆸ", "ᆯᆺ", "ᆯᇀ", "ᆯᇁ", "ᆯᇂ", "ᆸᆺ", "-"];
han2 = ["ᆪ", "ᆬ", "ᆭ", "ᆰ", "ᆱ", "ᆲ", "ᆳ", "ᆴ", "ᆵ", "ᆶ", "ᆹ", ""];

function lathan() {
	// Convert letters to lowercase
	let car = document.form.leftarea.value.toLowerCase();

	car = car.replace(new RegExp("r", "g"), "l")
	car = car.replace(new RegExp("[qfzxv]*(c[^h])*", "g"), "")
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
	
	for (let i = 0; i < car.length; ++i) {
		if (ccv[i+1] != "V" && ccv[i] == "C") {
			if (hanf[han.indexOf(car[i])] != "") {
				ccv[i] = "c";
			} else {
				ccv[i] = "";
			}
			car[i] = hanf[han.indexOf(car[i])];
		}
		if (ccv[i+1] == "V" && (ccv[i] == " " || ccv[i] == "V")) {
			console.log(hanf[han.indexOf(car[i])], hanf[han.indexOf(car[i])] != "");
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