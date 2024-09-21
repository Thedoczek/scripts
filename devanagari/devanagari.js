lat1 = ["A", "I", "U", "r=", "R", "l=", "L", "E", "e=", "O", "o=", "M", "H", "T", "D", "N", "ñ=", "n=", "S", "ṣ="];
lat2 = ["ā", "ī", "ū", "r̥", "r̥̄", "l̥", "l̥̄", "ē", "ê", "ō", "ô", "ṁ", "ḥ", "ṭ", "ḍ", "ñ", "ṅ", "ṇ", "ṣ", "ś"];

latc = ["kh", "gh", "ch", "jh", "ṭh", "ḍh", "th", "dh", "ph", "bh", "k", "g", "ṅ", "c", "j", "ñ", "ṭ", "ḍ", "ṇ", "t", "d", "n", "p", "b", "m", "y", "r", "l", "v", "ś", "ṣ", "s", "h", "'"];
devc = ["ख", "घ", "छ", "झ", "ठ", "ढ", "थ", "ध", "फ", "भ", "क", "ग", "ङ", "च", "ज", "ञ", "ट", "ड", "ण", "त", "द", "न", "प", "ब", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "ऽ"];

latv = ["a", "ai", "au", "ā", "i", "ī", "u", "ū", "r", "R", "l", "L", "e", "ē", "ê", "o", "ō", "ô", "ṁ", "ḥ"];
devv = ["्", "ै", "ौ", "ा", "ि", "ी", "ु", "ू", "ृ", "ॄ", "ॢ", "ॣ", "ॆ", "े", "ॅ", "ॊ", "ो", "ॉ", "ं", "ः"];
devvbig = ["अ", "ऐ", "औ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ॠ", "ऌ", "ॡ", "ऎ", "ए", "ऍ", "ऒ", "ओ", "ऑ", "ं", "ः"];

function latdev() {
	console.clear();
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
	car = car.replace(new RegExp("\\.", "g"), "।");

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
			if (car[i+2] == "̄") {
				car[i] = car[i].toUpperCase();
				car[i+2] = "";
			}
			car[i+1] = "";
		}
	}
	car = car.join("");
	vowcons = vowcons.join("");
	/* vowels without a
	for (let i = 1; i < latv.length; ++i) {
		car = car.replace(new RegExp(latv[i], "g"), devv[i]);
		vowcons = vowcons.replace(new RegExp(latv[i], "g"), "v");
	}*/

	// vowels, unnecesarry "," removal
	console.log(car);
	console.log(vowcons);
	car = car.split("");
	vowcons = vowcons.split("");
	for (let i = 0; i < car.length; ++i) {
		if (latv.includes(car[i])) {
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
	console.log(car);

	// right now rightarea is a div
	// document.form.rightarea.value = car;

	car = car.replace(/\n/g, "<br>");
	
	if (car != "") {
		document.getElementById("rightarea").innerHTML = car;
	} else {
		document.getElementById("rightarea").innerHTML = "<span style=\"color: #e0f2ff80\">Devanagari text<br>Backwards transliteration coming soon</span>";
	}

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