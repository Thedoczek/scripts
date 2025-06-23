lat1 = ['u', '`A', '`a', '`E', '`e', '`I', '`i', 'ÍI', 'Íi', 'íi', '`O', '`o', 'ÓO', 'Óo', 'óo', '`Y', '`y', 'II', 'Ii', 'ii', 'OO', 'Oo', 'oo', 'ay', 'ey', 'iy', 'oy', '`Ī', '`ī', '`Ō', '`ō'];
lat2 = ['y', 'Á', 'á', 'É', 'é', 'Í', 'í', 'Ī́', 'Ī́', 'ī́', 'Ó', 'ó', 'Ṓ', 'Ṓ', 'ṓ', 'Ý', 'ý', 'Ī', 'Ī', 'ī', 'Ō', 'Ō', 'ō', 'au', 'eu', 'iu', 'ou', 'Ī́', 'ī́', 'Ṓ', 'ṓ'];

lat = ['th', 'Th', 'TH', 'ch', 'Ch', 'CH', 'ps', 'Ps', 'PS', 'ī́', 'Ī́', 'a', 'A', 'á', 'Á', 'v', 'V', 'g', 'G', 'd', 'D', 'e', 'E', 'é', 'É', 'z', 'Z', 'ī', 'Ī', 'í', 'Í', 'i', 'I', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'x', 'X', 'o', 'O', 'ó', 'Ó', 'p', 'P', 'r', 'R', 's', 'S', 't', 'T', 'y', 'Y', 'u', 'U', 'ý', 'Ý', 'f', 'F', 'ō', 'Ō', 'ṓ', 'Ṓ'];
grk1 = ['θ', 'Θ', 'Θ', 'χ', 'Χ', 'Χ', 'ψ', 'Ψ', 'Ψ', 'ή', 'Ή', 'α', 'Α', 'ά', 'Ά', 'β', 'Β', 'γ', 'Γ', 'δ', 'Δ', 'ε', 'Ε', 'έ', 'Έ', 'ζ', 'Ζ', 'η', 'Η', 'ί', 'Ί', 'ι', 'Ι', 'κ', 'Κ', 'λ', 'Λ', 'μ', 'Μ', 'ν', 'Ν', 'ξ', 'Ξ', 'ο', 'Ο', 'ό', 'Ό', 'π', 'Π', 'ρ', 'Ρ', 'σ', 'Σ', 'τ', 'Τ', 'υ', 'Υ', 'υ', 'Υ', 'ύ', 'Ύ', 'φ', 'Φ', 'ω', 'Ω', 'ώ', 'Ώ'];
type = ['c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'V', 'V', 'v', 'v', 'v', 'v', 'C', 'C', 'C', 'C', 'C', 'C', 'V', 'V', 'V', 'V', 'C', 'C', 'C', 'C', 'V', 'V', 'V', 'V', 'c', 'c', 'C', 'C', 'C', 'C', 'C', 'C', 'c', 'c', 'v', 'v', 'v', 'v', 'c', 'c', 'C', 'C', 'c', 'c', 'c', 'c', 'V', 'V', 'V', 'V', 'V', 'V', 'c', 'c', 'v', 'v', 'v', 'v'];

grk2 = ['α', 'Α', 'ά', 'Ά', 'β', 'Β', 'γ', 'Γ', 'δ', 'Δ', 'ε', 'Ε', 'έ', 'Έ', 'ζ', 'Ζ', 'η', 'Η', 'ή', 'Ή', 'θ', 'Θ', 'ι', 'Ι', 'ί', 'Ί', 'κ', 'Κ', 'λ', 'Λ', 'μ', 'Μ', 'ν', 'Ν', 'ξ', 'Ξ', 'ο', 'Ο', 'ό', 'Ό', 'π', 'Π', 'ρ', 'Ρ', 'σ', 'ς', 'Σ', 'Σ', 'τ', 'Τ', 'υ', 'Υ', 'ύ', 'Ύ', 'φ', 'Φ', 'χ', 'Χ', 'ψ', 'Ψ', 'ω', 'Ω', 'ώ', 'Ώ', 'αι', 'ΑΙ', 'Αι', 'άι', 'ΆΙ', 'Άι', 'αυ', 'ΑΥ', 'Αυ', 'άυ', 'ΆΥ', 'Άυ', 'γγ', 'ΓΓ', 'Γγ', 'γκ', 'ΓΚ', 'Γκ', 'γξ', 'ΓΞ', 'Γξ', 'γχ', 'ΓΧ', 'Γχ', 'ει', 'ΕΙ', 'Ει', 'έι', 'ΈΙ', 'Έι', 'ευ', 'ΕΥ', 'Ευ', 'έυ', 'ΈΥ', 'Έυ', 'ηυ', 'ΗΥ', 'Ηυ', 'ήυ', 'ΉΥ', 'Ήυ', 'μπ', 'ΜΠ', 'Μπ', 'ντ', 'ΝΤ', 'Ντ', 'οι', 'ΟΙ', 'Οι', 'όι', 'ΌΙ', 'Όι', 'ου', 'ΟΥ', 'Ου', 'όυ', 'ΌΥ', 'Όυ', 'υι', 'ΥΙ', 'Υι', 'ύι', 'ΎΙ', 'Ύι', 'ωυ', 'ΩΥ', 'Ωυ', 'ώυ', 'ΏΥ', 'Ώυ'];
ipa = ['a', 'a', 'a', 'a', 'v', 'v', 'ɣ', 'ɣ', 'ð', 'ð', 'e', 'e', 'e', 'e', 'z', 'z', 'i', 'i', 'i', 'i', 'θ', 'θ', 'i', 'i', 'i', 'i', 'k', 'k', 'l', 'l', 'm', 'm', 'n', 'n', 'ks', 'ks', 'o', 'o', 'o', 'o', 'p', 'p', 'r', 'r', 's', 's', 's', 's', 't', 't', 'i', 'i', 'i', 'i', 'f', 'f', 'x', 'x', 'ps', 'ps', 'o', 'o', 'o', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'af', 'af', 'af', 'af', 'af', 'af', 'ŋɡ', 'ŋɡ', 'ŋɡ', 'ng', 'ng', 'ng', 'ŋks', 'ŋks', 'ŋks', 'ŋx', 'ŋx', 'ŋx', 'i', 'i', 'i', 'i', 'i', 'i', 'ef', 'ef', 'ef', 'ef', 'ef', 'ef', 'if', 'if', 'if', 'if', 'if', 'if', 'mb', 'mb', 'mb', 'nd', 'nd', 'nd', 'i', 'i', 'i', 'i', 'i', 'i', 'u', 'u', 'u', 'u', 'u', 'u', 'i', 'i', 'i', 'i', 'i', 'i', 'oi', 'oi', 'oi', 'oi', 'oi', 'oi'];
ipa_wi = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'g', 'g', 'g', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'b', 'b', 'b', 'd', 'd', 'd', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
ipa_bv = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'av', 'av', 'av', 'av', 'av', 'av', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'ev', 'ev', 'ev', 'ev', 'ev', 'ev', 'iv', 'iv', 'iv', 'iv', 'iv', 'iv', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
ipa_bf = ['', '', '', '', '', '', 'ʝ', 'ʝ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
trans = ['a', 'A', 'á', 'Á', 'v', 'V', 'g', 'G', 'd', 'D', 'e', 'E', 'é', 'É', 'z', 'Z', 'i', 'I', 'í', 'Í', 'th', 'Th', 'i', 'I', 'í', 'Í', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'x', 'X', 'o', 'O', 'ó', 'Ó', 'p', 'P', 'r', 'R', 's', 's', 'S', 'S', 't', 'T', 'i', 'I', 'í', 'Í', 'f', 'F', 'ch', 'Ch', 'ps', 'Ps', 'o', 'O', 'ó', 'Ó', 'e', 'E', 'E', 'é', 'É', 'É', 'af', 'AF', 'Af', 'af', 'AF', 'Af', 'ng', 'NG', 'Ng', 'ng', 'NG', 'Ng', 'nx', 'NX', 'Nx', 'nch', 'NCH', 'Nch', 'i', 'I', 'I', 'í', 'Í', 'Í', 'ef', 	'EF', 'Ef', 'ef', 'EF', 'Ef', 'if', 'IF', 'If', 'if', 'IF', 'If', 'mb', 'MB', 'Mb', 'nḏ', 'NḎ', 'Nḏ', 'i', 'I', 'I', 'í', 'Í', 'Í', 'u', 'U', 'U', 'ú', 'Ú', 'Ú', 'i', 'I', 'I', 'í', 'Í', 'Í', 'oy', 'OY', 'Oy', 'óy', 'ÓY', 'Óy'];
trans_wi = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'g', 'G', 'G', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'b', 'B', 'B', 'ḏ', 'Ḏ', 'Ḏ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
trans_bv = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'av', 'AV', 'Av', 'av', 'AV', 'Av', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'ev', 'EV', 'Ev', 'ev', 'EV', 'Ev', 'iv', 'IV', 'Iv', 'iv', 'IV', 'Iv', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
trans_bf = ['', '', '', '', '', '', 'y', 'Y', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

function isALetter(char) {
	if (char === undefined) {return false}
	else {return /\p{L}/u.test(char)};
}

function isUppercase(char) {
	if (char === undefined) {return false}
	else {return /\p{Lu}/u.test(char)};
}

function latgrk() {
	let car = document.form.latinInput.value;

	// Convert special characters while keeping cursor position
	for (let i = 0; i < lat1.length; ++i) {
		car = car.split(lat1[i]).join(lat2[i]);
	}
	const cursorPos = document.form.latinInput.selectionEnd;
	const diff = document.form.latinInput.value.length - car.length;
	document.form.latinInput.value = car;
	document.form.latinInput.selectionEnd = cursorPos - diff;
	
	// Update greek side
	let aux = car
	for (let i = 0; i < lat.length; ++i) {
		car = car.split(lat[i]).join(grk1[i]);
	}
	// final sigma
	car = car.split('');
	for (let i = 0; i < car.length-1; ++i) {
		if (car[i] === 'σ' && !isALetter(car[i+1])) {car[i] = 'ς';}
	}
	if (car[car.length-1] === 'σ') {car[car.length-1] = 'ς';}
	car = car.join('');
	document.form.greekInput.value = car;

	grkisotrans();

	autoResize(document.getElementById('latinInput'));
	autoResize(document.getElementById('greekInput'));
}

function grklat() {
	let car = document.form.greekInput.value;

	// Update latin side
	for (let i = 0; i < lat.length; ++i) {
		car = car.split(grk1[i]).join(lat[i]);
	}
	// Final s
	car = car.split('ς').join('s');
	
	// Guessing uppercase/titlecase for digraphs
	car = car.split('');
	for (let i = 1; i < car.length; ++i) {
		if ((['T', 'C'].includes(car[i-1]) && car[i] === 'h') || (car[i-1] === 'P' && car[i] === 's')) {
			if (isUppercase(car[i+1])) {car[i] = car[i].toUpperCase();}
		}
	}
	car = car.join('');
	// fixing y/u
	for (let i = lat1.length-4; i < lat1.length; ++i) {
		car = car.split(lat1[i]).join(lat2[i]);
	}

	document.form.latinInput.value = car;
	
	grkisotrans();

	autoResize(document.getElementById('latinInput'));
	autoResize(document.getElementById('greekInput'));
}

function grkisotrans() {
	let car = document.form.greekInput.value;
	let ipacar = car;
	let transcar = car;
	let aux = car;

	// Update auxiliary string
	for (let i = 0; i < grk1.length; ++i) {
		aux = aux.split(grk1[i]).join(type[i]);
	}

	// Update IPA and transcription
	ipacar = ipacar.split('');
	transcar = transcar.split('');
	for (let i = 0; i < grk2.length; ++i) { // Loop on letters
		for (let j = 0; j < car.length-grk2[i].length+1; ++j) { // Loop on string
			if (car[j] === grk2[i][0] && (grk2[i].length === 1 || car[j+1] === grk2[i][1])) { // Check letter match
				if (ipa_wi[i] !== '' && !isALetter(car[j-1])) { // Word initial
					ipacar[j] = ipa_wi[i];
					transcar[j] = trans_wi[i];
				} else if (ipa_bv[i] !== '' && ['C', 'V', 'v'].includes(aux[j+grk2[i].length])) { // Before vowel or voiced consonant
					ipacar[j] = ipa_bv[i];
					transcar[j] = trans_bv[i];
				} else if (ipa_bf[i] !== '' && aux[j+grk2[i].length] === 'V') { // Before front vowel
					ipacar[j] = ipa_bf[i];
					transcar[j] = trans_bf[i];
				} else { // Other
					ipacar[j] = ipa[i];
					transcar[j] = trans[i];
				}
				if (grk2[i].length === 2) { // Clear the second char in digraphs
					ipacar[j+1] = '';
					transcar[j+1] = '';
				}
			}
		}
	}
	ipacar = '/'+ipacar.join('').split('\n').join('/<br/>/')+'/';
	transcar = transcar.join('').split('\n').join('<br/>')

	
	if (car != '') {
		document.getElementById('transcription').innerHTML = transcar;
		document.getElementById('ipa').innerHTML = ipacar;
	} else {
		document.getElementById('transcription').innerHTML = '<span style="color: #e0f2ff80">Latin transcription (ELOT2/BGN hybrid)</span>';
		document.getElementById('ipa').innerHTML = '<span style="color: #e0f2ff80">IPA approxmation</span>';
	}
}

function autoResize(textarea) {
	textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight+10) + 'px';
}