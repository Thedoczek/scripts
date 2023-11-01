lat = ["ng", "g", "kk", "n", "d", "tt", "l", "m", "b", "pp", "ss", "s", "jj", "j", "ch", "k", "t", "p", "h", "yae", "yeo", "wae", "ae", "ya", "eo", "ye", "wa", "oe", "yo", "wo", "we", "wi", "yu", "eu", "ui", "yi", "a", "e", "o", "u", "i"];
han = ["ᆼ", "ᄀ", "ᄁ", "ᄂ", "ᄃ", "ᄄ", "ᄅ", "ᄆ", "ᄇ", "ᄈ", "ᄊ", "ᄉ", "ᄍ", "ᄌ", "ᄎ", "ᄏ", "ᄐ", "ᄑ", "ᄒ", "ᅤ", "ᅧ", "ᅫ", "ᅢ", "ᅣ", "ᅥ", "ᅨ", "ᅪ", "ᅬ", "ᅭ", "ᅯ", "ᅰ", "ᅱ", "ᅲ", "ᅳ", "ᅴ", "ᅴ", "ᅡ", "ᅦ", "ᅩ", "ᅮ", "ᅵ", "-"];
typ = ["c", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", " "];
hanf = ["ᆼ", "ᆨ", "ᆩ", "ᆫ", "ᆮ", "ᄄ", "ᆯ", "ᆷ", "ᆸ", "ᄈ", "ᆻ", "ᆺ", "ᄍ", "ᆽ", "ᆾ", "ᆿ", "ᇀ", "ᇁ", "ᇂ"];
han1 = ["ᆨᆺ", "ᆫᆽ", "ᆫᇂ", "ᆯᆨ", "ᆯᆷ", "ᆯᆸ", "ᆯᆺ", "ᆯᇀ", "ᆯᇁ", "ᆯᇂ", "ᆸᆺ"];
han2 = ["ᆪ", "ᆬ", "ᆭ", "ᆰ", "ᆱ", "ᆲ", "ᆳ", "ᆴ", "ᆵ", "ᆶ", "ᆹ"];

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
		} else if (car[i] == "w" && !['a', 'e', 'o', 'i'].includes(car[i+1])) {
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
		if (car[i] == "ᆼ" && ccv[i+1] == "V") {
			car[i] = "ᆫᄀ";
			ccv[i] = "cC";
		} else if (ccv[i+1] != "V" && ccv[i] == "C") {
			if (hanf[han.indexOf(car[i])] != car[i]) {
				ccv[i] = "c";
			}
			car[i] = hanf[han.indexOf(car[i])];
		} else if (ccv[i+1] == "V" && !['C', 'c'].includes(ccv[i])) {
			car[i] = car[i] + "ᄋ";
		}
	}
	car = car.join("");
	ccv = ccv.join("");

	// combine consonant clusters
	for (let i = 0; i < han1.length; ++i) {
		car = car.replace(new RegExp(han1[i], "g"), han2[i]);
	}

	// run transcribe()
	transcribe(car);

	// Remove hyphens
	car = car.replace(new RegExp("-", "g"), "");

	document.form.rightarea.value = car;

	autoResize(document.getElementById("leftarea"));
	autoResize(document.getElementById("rightarea"));

	return car;
}

initial = ['ᄀ', 'ᄁ', 'ᄂ', 'ᄃ', 'ᄄ', 'ᄅ', 'ᄆ', 'ᄇ', 'ᄈ', 'ᄉ', 'ᄊ', 'ᄋ', 'ᄌ', 'ᄍ', 'ᄎ', 'ᄏ', 'ᄐ', 'ᄑ', 'ᄒ'];
medial = ['ᅡ', 'ᅢ', 'ᅣ', 'ᅤ', 'ᅥ', 'ᅦ', 'ᅧ', 'ᅨ', 'ᅩ', 'ᅪ', 'ᅫ', 'ᅬ', 'ᅭ', 'ᅮ', 'ᅯ', 'ᅰ', 'ᅱ', 'ᅲ', 'ᅳ', 'ᅴ', 'ᅵ'];
final = ['', 'ᆨ', 'ᆩ', 'ᆪ', 'ᆫ', 'ᆬ', 'ᆭ', 'ᆮ', 'ᆯ', 'ᆰ', 'ᆱ', 'ᆲ', 'ᆳ', 'ᆴ', 'ᆵ', 'ᆶ', 'ᆷ', 'ᆸ', 'ᆹ', 'ᆺ', 'ᆻ', 'ᆼ', 'ᆽ', 'ᆾ', 'ᆿ', 'ᇀ', 'ᇁ', 'ᇂ'];

function hanlat() {
	// detect and decompose syllables into jamo
	let car = document.form.rightarea.value.split('');
	let ccv = document.form.rightarea.value.split('');
	for (let i = 0; i < car.length; ++i) {
		if (car[i].charCodeAt(0) >= 44032 && car[i].charCodeAt(0) <= 55203) {
			console.log(car[i]);
			// c = 
			let c = car[i].charCodeAt(0) - 44032; console.log(c, c%28);
			let f = final[c % 28];
			c = (c-c%28)/28; console.log(c, c%21);
			let m = medial[c % 21];
			c = (c-c%21)/21; console.log(c, c%19);
			let j = initial[c % 19];
			car[i] = j+m+f;
			if (f == "") {
				if (j == 'ᄋ') ccv[i] = "vV";
				else ccv[i] = "CV";
			} else {
				if (j == 'ᄋ') ccv[i] = "vVc";
				else ccv[i] = "CVc";
			}
		} else {
			if (car[i] == 'ᄋ') ccv[i] = "v";
			else if (initial.includes(car[i])) ccv[i] = "C";
			else if (medial.includes(car[i])) ccv[i] = "V";
			else if (final.includes(car[i])) ccv[i] = "c";
			else ccv[i] = " ";
		}
	}
	car = car.join('').split('');
	ccv = ccv.join('').split('');
	for (let i = 0; i < car.length; ++i) {
		if (ccv[i] == "c" && ccv[i+1] == "v") car[i] = car[i] + "-";
	}
	car = car.join('');
	// Some vowel clusters are still indistinguishable (e-oe vs eo-e etc.)

	// run transcribe()
	transcribe(car);

	// transliterate
	for (let i = 0; i < han2.length; ++i) {
		car = car.replace(new RegExp(han2[i], "g"), han1[i]);
	}
	for (let i = 0; i < hanf.length; ++i) {
		car = car.replace(new RegExp(hanf[i], "g"), han[i]);
	}
	for (let i = 0; i < lat.length; ++i) {
		car = car.replace(new RegExp(han[i], "g"), lat[i]);
	}
	car = car.replace(new RegExp("ᄋ", "g"), "");

	document.form.leftarea.value = car;

	autoResize(document.getElementById("leftarea"));
	autoResize(document.getElementById("rightarea"));
}

pron = [['g', 'kk', 'kg', 'k', 'ng', 'ng', 'nk', 'tg', 'lg', 'lg', 'mg', 'lg', 'lg', 'lg', 'pg', 'lk', 'mg', 'bg', 'pg', 'tg', 'tg', 'ngg', 'tg', 'tg', 'kg', 'tg', 'pg', 'hk'],
['kk', 'kkk', 'kkk', 'kk', 'nkk', 'nkk', 'nkk', 'tkk', 'lkk', 'lkk', 'mkk', 'lkk', 'lkk', 'lkk', 'pkk', 'lkk', 'mkk', 'bkk', 'pkk', 'tkk', 'tkk', 'ngkk', 'tkk', 'tkk', 'kkk', 'tkk', 'ptt', 'hkk'],
['n', 'ngn', 'kn', 'kn', 'nn', 'nn', 'nn', 'tn', 'ln', 'kn', 'mn', 'ln', 'ln', 'ln', 'pn', 'ln', 'mn', 'mn', 'pn', 'tn', 'nt', 'ngn', 'tn', 'tn', 'kn', 'tn', 'pn', 'hn'],
['d', 'kd', 'kd', 'kd', 'nd', 'nd', 'nt', 'tt', 'ld', 'kd', 'md', 'pd', 'ld', 'ld', 'pd', 'lt', 'md', 'pd', 'pd', 'tt', 'tt', 'ngd', 'tt', 'tt', 'kd', 'tt', 'pd', 'ht'],
['tt', 'ktt', 'ktt', 'ktt', 'ntt', 'ntt', 'ntt', 'ttt', 'ltt', 'ktt', 'mtt', 'ptt', 'ltt', 'ltt', 'ptt', 'ltt', 'mtt', 'ptt', 'ptt', 'ttt', 'ttt', 'ngtt', 'ttt', 'ttt', 'ktt', 'ttt', 'ptt', 'htt'],
['r', 'gn', 'kr', 'kr', 'nn', 'nn', 'nr', 'tr', 'll', 'kr', 'mn', 'ln', 'lr', 'lr', 'pr', 'lr', 'mn', 'mn', 'pr', 'tr', 'tr', 'ngn', 'tr', 'tr', 'kr', 'tr', 'pr', 'r'],
['m', 'gm', 'km', 'km', 'nm', 'nm', 'nm', 'tm', 'lm', 'km', 'mm', 'lm', 'lm', 'lm', 'pm', 'lm', 'mm', 'mm', 'pm', 'tm', 'tm', 'ngm', 'tm', 'tm', 'kd', 'tm', 'pm', 'hm'],
['b', 'gb', 'kb', 'kb', 'nb', 'nb', 'np', 'tb', 'lb', 'kb', 'mb', 'lb', 'lb', 'lb', 'pb', 'lp', 'mb', 'pp', 'pb', 'tb', 'tb', 'ngb', 'tb', 'tb', 'kb', 'tb', 'pb', 'hb'],
['pp', 'gpp', 'kpp', 'kpp', 'npp', 'npp', 'npp', 'tpp', 'lpp', 'kpp', 'mpp', 'lpp', 'lpp', 'lpp', 'ppp', 'lpp', 'mpp', 'ppp', 'ppp', 'tpp', 'tpp', 'ngpp', 'tpp', 'tpp', 'kpp', 'tpp', 'ppp', 'hpp'],
['s', 'ks', 'ks', 'ks', 'ns', 'ns', 'ns', 'ts', 'ls', 'ks', 'ms', 'ls', 'ls', 'ls', 'ps', 'ls', 'ms', 'ps', 'ps', 'ts', 'sss', 'ngs', 'ts', 'ts', 'ks', 'ts', 'ps', 'hs'],
['ss', 'kss', 'kss', 'kss', 'nss', 'nss', 'nss', 'tss', 'lss', 'kss', 'mss', 'lss', 'lss', 'lss', 'pss', 'lss', 'mss', 'pss', 'pss', 'tss', 'ssss', 'ngss', 'tss', 'tss', 'kss', 'tss', 'pss', 'hss'],
['', 'g', 'kkh', 'ks', 'n', 'nj', 'nh', 't', 'r', 'lg', 'lm', 'lb', 'ls', 'lt', 'lp', 'lh', 'm', 'p', 'ps', 's', 'ss', 'ngh', 't', 't', 'kh', 'tch', 'ph', 'h'],
['j', 'kj', 'kj', 'kj', 'nj', 'nj', 'nch', 'tj', 'lj', 'kj', 'mj', 'pj', 'lj', 'lj', 'pj', 'lch', 'mj', 'pj', 'pj', 'tj', 'tch', 'ngj', 'tj', 'tj', 'kj', 'tj', 'pj', 'hj'],
['jj', 'kjj', 'kjj', 'kjj', 'njj', 'njj', 'njj', 'tjj', 'ljj', 'kjj', 'mjj', 'pjj', 'ljj', 'ljj', 'pjj', 'ljj', 'mjj', 'pjj', 'pjj', 'tjj', 'tjj', 'ngjj', 'tjj', 'tjj', 'kjj', 'tjj', 'pjj', 'hjj'],
['ch', 'kch', 'kch', 'kch', 'nch', 'nch', 'nch', 'tch', 'lch', 'kch', 'mch', 'pch', 'lch', 'lch', 'pch', 'lch', 'mch', 'pch', 'pch', 'tch', 'tch', 'ngch', 'tch', 'tch', 'kch', 'tch', 'pch', 'hch'],
['k', 'kk', 'kk', 'k', 'nk', 'nk', 'nk', 'tk', 'lk', 'lk', 'mk', 'lk', 'lk', 'lk', 'pk', 'lk', 'mk', 'bk', 'pk', 'tk', 'tk', 'ngk', 'tk', 'tk', 'kk', 'tk', 'pk', 'hk'],
['t', 'kt', 'kt', 'kt', 'nt', 'nt', 'nt', 'tt', 'lt', 'kt', 'mt', 'pt', 'lt', 'lt', 'pt', 'lt', 'mt', 'pt', 'pt', 'tt', 'tt', 'ngt', 'tt', 'tt', 'kt', 'tt', 'pt', 'ht'],
['p', 'gp', 'kp', 'kp', 'np', 'np', 'np', 'tp', 'lp', 'kp', 'mp', 'lp', 'lp', 'lp', 'pp', 'lp', 'mp', 'pp', 'pp', 'tp', 'tp', 'ngp', 'tp', 'tp', 'kp', 'tp', 'pp', 'hg'],
['h', 'k', 'kkh', 'ks', 'nh', 'nch', 'nh', 't', 'lh', 'lk', 'mh', 'lp', 'lh', 'lh', 'ph', 'lh', 'mh', 'p', 'ph', 't', 't', 'ngh', 'tch', 'tch', 'k', 't', 'p', 'h'],
['', 'k', 'k', 'k', 'n', 'n', 'n', 't', 'l', 'k', 'm', 'l', 'l', 'l', 'p', 'l', 'm', 'p', 'p', 't', 't', 'ng', 't', 't', 'k', 't', 'p', 't']];

function transcribe(car) {
	let ccv = car;
	car = car.split('');
	ccv = ccv.split('');
	for (let i = 0; i < car.length; ++i) {
		if (initial.includes(car[i])) ccv[i] = "C";
		else if (medial.includes(car[i])) ccv[i] = "V";
		else if (final.includes(car[i])) ccv[i] = "c";
		else ccv[i] = " ";
	}
	for (let i = 0; i < car.length; ++i) {
		if (ccv[i] == "V") {
			car[i] = lat[han.indexOf(car[i])];	
		} else if (ccv[i] == "C") {
			if (ccv[i-1] != "c") {
				car[i] = pron[initial.indexOf(car[i])][0];
			} else {
				car[i] = pron[initial.indexOf(car[i])][final.indexOf(car[i-1])];
				car[i-1] = "";
			}
		} else if (ccv[i] == "c" && ccv[i+1] != "C") {
			car[i] = pron[pron.length-1][final.indexOf(car[i])];
		}
	}
	car = car.join('');
	// Enters do not work - issue made on SOverflow
	
	if (car != "") {
		document.getElementById("transcript").innerHTML = car;
	} else {
		document.getElementById("transcript").innerHTML = "<span style=\"color: #e0f2ff80\">Latin transcription</span>";
	}
}

function autoResize(textarea) {
	textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight+10) + "px";
}