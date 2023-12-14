lat1 = ["E'", "e'", "Y'", "y'", "T'", "t'", "Z[Hh]", "zh", "G[Hh]", "gh", "T[Ww]", "tw", "S[Hh]", "sh", "C[Hh]", "ch", "J[Jj]", "jj", "R[Rr]", "rr", "C'", "c'", "P'", "p'", "K'", "Q", "k'", "q", "O'", "o'", "O[Ww]", "ow"];
lat2 = ["Ê", "ê", "Ə", "ə", "Ṫ", "ṫ", "Ž", "ž", "Ł", "ł", "Č", "č", "Š", "š", "Č̇", "č̇", "J̌", "ǰ", "R̄", "r̄", "Ċ", "ċ", "Ṗ", "ṗ", "K̇", "K̇", "k̇", "k̇", "Ô", "ô", "U", "u"];
lat = ["U", "U", "u", "A", "B", "G", "D", "E", "Z", "Ê", "Ə", "Ṫ", "Ž", "I", "L", "X", "C", "H", "J", "Ł", "Č̇", "M", "Y", "N", "Š", "O", "Č", "P", "J̌", "R̄", "S", "V", "T", "R", "Ċ", "W", "Ṗ", "K̇", "K", "Ô", "F", "a", "b", "g", "d", "e", "z", "ê", "ə", "ṫ", "ž", "i", "l", "x", "c", "h", "j", "ł", "č̇", "m", "y", "n", "š", "o", "č", "p", "ǰ", "r̄", "s", "v", "t", "r", "ċ", "w", "ṗ", "k̇", "k", "ô", "f", "&", "\"\"", "\"", ",", ";", ":", "\\.", "!", "\\?", "-"];
arm = ["Ու", "ՈՒ", "ու", "Ա", "Բ", "Գ", "Դ", "Ե", "Զ", "Է", "Ը", "Թ", "Ժ", "Ի", "Լ", "Խ", "Ծ", "Հ", "Ձ", "Ղ", "Չ", "Մ", "Յ", "Ն", "Շ", "Ո", "Ճ", "Պ", "Ջ", "Ռ", "Ս", "Վ", "Տ", "Ր", "Ց", "Ւ", "Փ", "Ք", "Կ", "Օ", "Ֆ", "ա", "բ", "գ", "դ", "ե", "զ", "է", "ը", "թ", "ժ", "ի", "լ", "խ", "ծ", "հ", "շ", "ղ", "չ", "մ", "յ", "ն", "ձ", "ո", "ճ", "պ", "ջ", "ռ", "ս", "վ", "տ", "ր", "ց", "ւ", "փ", "ք", "կ", "օ", "ֆ", "և", "»", "«", ",", "՝", "․", "։", "՜", "՞", "֊"];

function latarm() {
	let car = document.form.leftarea.value;
	
	// Convert special characters while keeping cursor position
	for (let i = 0; i < lat1.length; ++i) {
		car = car.replace(new RegExp(lat1[i], "g"), lat2[i]);
	}
	const cursorPos = document.form.leftarea.selectionEnd;
	const diff = document.form.leftarea.value.length - car.length;
	document.form.leftarea.value = car;
	document.form.leftarea.selectionEnd = cursorPos - diff;
	
	// Update armenian side
	for (let i = 0; i < lat.length; ++i) {
		car = car.replace(new RegExp(lat[i], "g"), arm[i]);
	}

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

function armlat() {
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