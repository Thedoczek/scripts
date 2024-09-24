lat1 = ["A", "I", "U", "r=", "R", "l=", "L", "E", "e=", "O", "o=", "M", "H", "T", "D", "N", "ñ=", "n=", "S", "ṣ="];
lat2 = ["ā", "ī", "ū", "r̥", "r̥̄", "l̥", "l̥̄", "ē", "ê", "ō", "ô", "ṁ", "ḥ", "ṭ", "ḍ", "ñ", "ṅ", "ṇ", "ṣ", "ś"];

latc = ["kh", "gh", "ch", "jh", "ṭh", "ḍh", "th", "dh", "ph", "bh", "k", "g", "ṅ", "c", "j", "ñ", "ṭ", "ḍ", "ṇ", "t", "d", "n", "p", "b", "m", "y", "r", "l", "v", "ś", "ṣ", "s", "h", "'"];
devc = ["ख", "घ", "छ", "झ", "ठ", "ढ", "थ", "ध", "फ", "भ", "क", "ग", "ङ", "च", "ज", "ञ", "ट", "ड", "ण", "त", "द", "न", "प", "ब", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "ऽ"];

latv = ["a", "ai", "au", "ā", "i", "ī", "u", "ū", "q", "Q", "x", "X", "e", "ē", "ê", "o", "ō", "ô", "ṁ", "ḥ"];
devv = ["्", "ै", "ौ", "ा", "ि", "ी", "ु", "ू", "ृ", "ॄ", "ॢ", "ॣ", "ॆ", "े", "ॅ", "ॊ", "ो", "ॉ", "ं", "ः"];
devvbig = ["अ", "ऐ", "औ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ॠ", "ऌ", "ॡ", "ऎ", "ए", "ऍ", "ऒ", "ओ", "ऑ", "ं", "ः"];

latn = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
devn = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

function latdev() {
	let car = document.form.leftarea.value;
	
	// Convert special characters while keeping cursor position
	for (let i = 0; i < lat1.length; ++i) {
		car = car.replace(new RegExp(lat1[i], "g"), lat2[i]);
	}
	car = car.replace(new RegExp("[BCfFGJKPqQVwWxXYzZ]", "g"), "")
	const cursorPos = document.form.leftarea.selectionEnd;
	const diff = document.form.leftarea.value.length - car.length;
	document.form.leftarea.value = car;
	document.form.leftarea.selectionEnd = cursorPos - diff;
	
	let vowcons = car;
	// Update devanagari side
	// numbers and punctuation
	car = car.replace(new RegExp("\\.", "g"), "।");
	for (let i = 0; i < latn.length; ++i) {
		car = car.replace(new RegExp(latn[i], "g"), devn[i]);
	}

	// consonants
	car = car.split("");
	vowcons = vowcons.split("");
	for (let i = 0; i < car.length; ++i) {
		if (["kh", "gh", "ch", "jh", "ṭh", "ḍh", "th", "dh", "ph", "bh"].includes(car[i]+car[i+1])) {
			car[i] = car[i]+car[i+1];
			car[i+1] = "";
			vowcons[i+1] = "";
		}
		if (latc.includes(car[i]) && car[i+1] != "̥") {
			car[i] = devc[latc.indexOf(car[i])]+"्";
			vowcons[i] = "c,";
		}
		if (car[i+1] == "̥") {
			if (car[i] == "l") {car[i] = "x";}
			else if (car[i] == "r") {car[i] = "q";}
			if (car[i+2] == "̄") {
				car[i] = car[i].toUpperCase();
				car[i+2] = "";
			}
			car[i+1] = "";
		}
	}
	car = car.join("");
	vowcons = vowcons.join("");

	// vowels, unnecesarry "," removal
	car = car.split("");
	vowcons = vowcons.split("");
	for (let i = 0; i < car.length; ++i) {
		if (latv.includes(car[i])) {
			if (latv.includes(car[i] + car[i+1])) {
				car[i] = car[i] + car[i+1];
				car[i+1] = "";
			}
			if (i == 0) {
				car[i] = devvbig[latv.indexOf(car[i])];
				vowcons[i] = "V";
			} else if (vowcons[i-1] == ",") {
				if (car[i] == "a") {
					car[i-1] = "";
					car[i] = "";
					vowcons[i-1] = "";
					vowcons[i] = "";
				} else {
					car[i-1] = "";
					car[i] = devv[latv.indexOf(car[i])];
					vowcons[i-1] = "";
					vowcons[i] = "v";
				}
			} else {
				car[i] = devvbig[latv.indexOf(car[i])];
				vowcons[i] = "V";
			}
		}
	}
	car = car.join("");
	vowcons = vowcons.join("");

	document.form.rightarea.value = car;

	autoResize(document.getElementById("leftarea"));
	autoResize(document.getElementById("rightarea"));
}

function devlat() {
	let car = document.form.rightarea.value;

	// fix inconsistencies
	car = car.replace(/ँ/g, "ं");
	car = car.replace(new RegExp("\\.", "g"), "।");
	for (let i = 0; i < latn.length; ++i) {
		car = car.replace(new RegExp(latn[i], "g"), devn[i]);
	}
	document.form.rightarea.value = car;


	// Update latin side
	// consonants
	for (let i = 0; i < latc.length; ++i) {
		car = car.replace(new RegExp(devc[i], "g"), latc[i]+"a");
	}
	// vowels
	for (let i = 0; i < latv.length; ++i) {
		if (i < latv.length-2) {
			if (i > 0) {car = car.replace(new RegExp("a"+devv[i], "g"), latv[i]);}
			car = car.replace(new RegExp(devvbig[i], "g"), latv[i]);
		} else {
			car = car.replace(new RegExp(devv[i], "g"), latv[i]);
		}
	}

	// numbers and punctuation
	car = car.replace(/।/g, ".");
	for (let i = 0; i < latn.length; ++i) {
		car = car.replace(new RegExp(devn[i], "g"), latn[i]);
	}

	console.log(car);
	car = car.replace(/a्/g, "");
	car = car.replace(/q/g, "r̥");
	car = car.replace(/Q/g, "r̥̄");
	car = car.replace(/x/g, "l̥");
	car = car.replace(/X/g, "l̥̄");
	car = car.replace(/।/g, ".");
	console.log(car);

	document.form.leftarea.value = car;

	autoResize(document.getElementById("leftarea"));
	autoResize(document.getElementById("rightarea"));
}

function autoResize(textarea) {
	textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight+10) + 'px';
}