/* latin
latin input
devanagari
gurmukhi
gujarati
bengali
odia
tamil
malayalam
kannada
telugu
sinhala */

let signtype = [["l̥̄", "r̥̄", "ai", "au", "l̥", "r̥", "a", "ā", "æ", "ǣ", "e", "ê", "ē", "i", "ī", "o", "ô", "ō", "u", "ū", "k͟h", "m̆b", "n̆d", "n̆ḍ", "n̆g", "n̆j", "bh", "ch", "dh", "ḍh", "gh", "jh", "kh", "m̐", "n̆", "ph", "ṛh", "th", "ṭh", "'", "b", "c", "d", "ḍ", "f", "g", "ġ", "h", "ḥ", "ḫ", "ẖ", "j", "k", "l", "ḷ", "ḻ", "m", "ṁ", "n", "ñ", "ṅ", "ṇ", "ṉ", "p", "q", "r", "ṛ", "ṟ", "s", "ṣ", "ś", "t", "ṭ", "v", "w", "y", "ẏ", "z", "ž"],
["V", "V", "V", "V", "V", "V", "V", "V", "v", "v", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "C.", "c,c", "c,c", "c,c", "c,c", "c,c", "C", "C", "C", "C", "C", "C", "C", "D", "d", "C", "C.", "C", "C", "D", "C", "C", "C", "C", "C.", "C", "C.", "C", "D", "D", "D", "C", "C", "C", "C", "C", "C", "D", "C", "C", "C", "C", "C", "C", "C.", "C", "C.", "C", "C", "C", "C", "C", "C", "C", "C.", "C", "C.", "C.", "C."],
["c", "c", "V", "V", "c", "c", "V", "V", "v", "v", "v", "v", "V", "V", "V", "v", "v", "V", "V", "V", "C.", "c,c", "c,c", "c,c", "c,c", "c,c", "C", "C", "C", "C", "C", "C", "C", "D", "d", "C", "c", "C", "C", "", "C", "C", "C", "C", "C.", "C", "C.", "C", "D", "d", "d", "C", "C", "C", "C.", "c.", "C", "D", "C", "C", "C", "C", "c", "C", "C.", "C", "C", "c", "C", "c", "C.", "C", "C", "C", "c", "C", "c", "C.", "c"],
["V", "V", "V", "V", "V", "V", "V", "V", "v", "v", "v", "V", "V", "V", "V", "v", "V", "V", "V", "V", "C.", "c,c", "c,c", "c,c", "c,c", "c,c", "C", "C", "C", "C", "C", "C", "C", "D", "d", "C", "c", "C", "C", "", "C", "C", "C", "C", "C.", "C", "C.", "C", "D", "d", "d", "C", "C", "C", "C", "c", "C", "D", "C", "C", "C", "C", "c", "C", "C.", "C", "c", "c", "C", "C", "C", "C", "C", "C", "c", "C", "c", "C.", "c"],
["V", "V", "V", "V", "V", "V", "V", "V", "v", "v", "v", "V,CV", "V", "V", "V", "v", "v", "V", "V", "V", "C.", "c,c", "c,c", "c,c", "c,c", "c,c", "C", "C", "C", "C", "C", "C", "C", "D", "d", "C", "C.", "C", "C", "D", "C", "C", "C", "C", "C.", "C", "C.", "C", "D", "d", "d", "C", "C", "C", "c", "c", "C", "D", "C", "C", "C", "C", "C.", "C", "C.", "C", "C.", "C.", "C", "C", "C", "C", "C", "C", "C.", "C", "C.", "C.", "C."],
["V", "V", "V", "V", "V", "V", "V", "V", "v", "v", "v", "v", "V", "V", "V", "v", "v", "V", "V", "V", "c", "c,c", "c,c", "c,c", "c,c", "c,c", "C", "C", "C", "C", "C", "C", "C", "D", "d", "C", "C.", "C", "C", "D", "C", "C", "C", "C", "c", "C", "c", "C", "D", "d", "d", "C", "C", "C", "C", "c", "C", "D", "C", "C", "C", "C", "c", "C", "c", "C", "C.", "c", "C", "C", "C", "C", "C", "C", "C", "C", "C", "c", "c"],
["c", "c", "V", "V", "c", "c", "V", "V", "v", "v", "V", "v", "V", "V", "V", "V", "v", "V", "V", "V", ".C,C", "c,c", "c,c", "c,c", "c,c", "c,c", "c", "c", "c", "c", "c", "c", "c", "d", "d", "c", "c", "c", "c", "D", "c", "C", "c", "c", ".C", "c", "c", "C", "c", "c", "c", "C", "C", "C", "C", "C", "C", "D", "c", "C", "C", "C", "C", "C", ".C", "C", "c", "C", "C", "C", "C", "C", "C", "C", ".C", "C", "c", ".C", ".C"],
["V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "V", "v", "V", "V", "V", "V", "v", "V", "V", "V", "c", "c,c", "c,c", "c,c", "c,c", "c,c", "C", "C", "C", "C", "C", "C", "C", "d", "d", "C", "c", "C", "C", "D", "C", "C", "C", "C", "c", "C", "c", "C", "D", "d", "d", "C", "C", "C", "C", "C", "C", "D", "C", "C", "C", "C", "C", "C", "c", "C", "c", "C", "C", "C", "C", "C", "C", "C", "c", "C", "c", "c", "c"],
["V", "V", "V", "V", "V", "V", "V", "V", "v", "v", "V", "v", "V", "V", "V", "V", "v", "V", "V", "V", "c", "c,c", "c,c", "c,c", "c,c", "c,c", "C", "C", "C", "C", "C", "C", "C", "d", "d", "C", "c", "C", "C", "D", "C", "C", "C", "C", "C.", "C", "c", "C", "D", "D", "D", "C", "C", "C", "C", "C", "C", "D", "C", "C", "C", "C", "c", "C", "c", "C", "c", "C", "C", "C", "C", "C", "C", "C", "c", "C", "c", "C.", "c"],
["V", "V", "V", "V", "V", "V", "V", "V", "v", "v", "V", "v", "V", "V", "V", "V", "v", "V", "V", "V", "c", "c,c", "c,c", "c,c", "c,c", "c,c", "C", "C", "C", "C", "C", "C", "C", "D", "D", "C", "c", "C", "C", "D", "C", "C", "C", "C", "c", "C", "c", "C", "D", "d", "d", "C", "C", "C", "C", "C", "C", "D", "C", "C", "C", "C", "c", "C", "c", "C", "c", "C", "C", "C", "C", "C", "C", "C", "c", "C", "c", "C", "c"],
["V", "V", "V", "V", "C", "V", "V", "V", "V", "V", "V", "v", "V", "V", "V", "V", "v", "V", "V", "V", "c", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "d", "d", "C", "c", "C", "C", "", "C", "C", "C", "C", "C", "C", "c", "C", "D", "d", "d", "C", "C", "C", "C", "c", "C", "D", "C", "C", "C", "C", "c", "C", "c", "C", "c", "c", "C", "C", "C", "C", "C", "V", "c", "C", "c", "c", "c"]];
// V - vowel
// C - consonant
// . - nuqta
// , - virama
// uppercase - exists in the language, lowercase - replace character

let letters=[["l̥̄","r̥̄","ai","au","l̥","r̥","a","ā","æ","ǣ","e","ê","ē","i","ī","o","ô","ō","u","ū","k͟h","m̆b","n̆d","n̆ḍ","n̆g","n̆j","bh","ch","dh","ḍh","gh","jh","kh","m̐","n̆","ph","ṛh","th","ṭh","'","b","c","d","ḍ","f","g","ġ","h","ḥ","ḫ","ẖ","j","k","l","ḷ","ḻ","m","ṁ","n","ñ","ṅ","ṇ","ṉ","p","q","r","ṛ","ṟ","s","ṣ","ś","t","ṭ","v","w","y","ẏ","z","ž"],
["ॡ","ॠ","ऐ","औ","ऌ","ऋ","अ","आ","अ","आ","ऎ","ऍ","ए","इ","ई","ऒ","ऑ","ओ","उ","ऊ","ख़","म्ब","न्द","ण्ड","ङ्ग","ञ्ज","भ","छ","ध","ढ","घ","झ","ख","ँ","ं","फ","ढ़","थ","ठ","ऽ","ब","च","द","ड","फ़","ग","ग़","ह","ः","ᳶ","ᳵ","ज","क","ल","ळ","ऴ","म","ं","न","ञ","ङ","ण","ऩ","प","क़","र","ड़","ऱ","स","ष","श","त","ट","व","व़","य","य़","ज़","झ़"],
["ਲ","ਰ","ਐ","ਔ","ਲ","ਰ","ਅ","ਆ","ਅ","ਆ","ਏ","ਏ","ਏ","ਇ","ਈ","ਓ","ਓ","ਓ","ਉ","ਊ","ਖ਼","ਮ੍ਬ","ਨ੍ਦ","ਣ੍ਡ","ਙ੍ਗ","ਞ੍ਜ","ਭ","ਛ","ਧ","ਢ","ਘ","ਝ","ਖ","ਁ","ਂ","ਫ","ਰ","ਥ","ਠ","","ਬ","ਚ","ਦ","ਡ","ਫ਼","ਗ","ਗ਼","ਹ","ਃ","ਃ","ਃ","ਜ","ਕ","ਲ","ਲ਼","ਲ਼","ਮ","ੰ","ਨ","ਞ","ਙ","ਣ","ਨ","ਪ","ਕ਼","ਰ","ੜ","ਰ","ਸ","ਸ","ਸ਼","ਤ","ਟ","ਵ","ਵ","ਯ","ਯ","ਜ਼","ਝ"],
["ૡ","ૠ","ઐ","ઔ","ઌ","ઋ","અ","આ","અ","આ","એ","ઍ","એ","ઇ","ઈ","ઓ","ઑ","ઓ","ઉ","ઊ","ખ઼","મ્બ","ન્દ","ણ્ડ","ઙ્ગ","ઞ્જ","ભ","છ","ધ","ઢ","ઘ","ઝ","ખ","ઁ","ં","ફ","ર","થ","ઠ","","બ","ચ","દ","ડ","ફ઼","ગ","ગ઼","હ","ઃ","ઃ","ઃ","જ","ક","લ","ળ","ળ","મ","ં","ન","ઞ","ઙ","ણ","ન","પ","ક઼","ર","ર","ર","સ","ષ","શ","ત","ટ","વ","વ","ય","ય","જ઼","ઝ"],
["ৡ","ৠ","ঐ","ঔ","ঌ","ঋ","অ","আ","অ","আ","এ","অ্যা","এ","ই","ঈ","ও","অ","ও","উ","ঊ","খ়","ম্ব","ন্দ","ণ্ড","ঙ্গ","ঞ্জ","ভ","ছ","ধ","ঢ","ঘ","ঝ","খ","ঁ","ং","ফ","ঢ়","থ","ঠ","ঽ","ব","চ","দ","ড","ফ়","গ","গ়","হ","ঃ","ঃ","ঃ","জ","ক","ল","ল","ল","ম","ং","ন","ঞ","ঙ","ণ","ন়","প","ক়","র","ড়","র়","স","ষ","শ","ত","ট","ৱ","ব়","য","য়","জ়","ঝ়"],
["ୡ","ୠ","ଐ","ଔ","ଌ","ଋ","ଅ","ଆ","ଅ","ଆ","ଏ","ଏ","ଏ","ଇ","ଈ","ଓ","ଓ","ଓ","ଉ","ଊ","ଖ","ମ୍ବ","ନ୍ଦ","ଣ୍ଡ","ଙ୍ଗ","ଞ୍ଜ","ଭ","ଛ","ଧ","ଢ","ଘ","ଝ","ଖ","ଁ","ଂ","ଫ","ଢ଼","ଥ","ଠ","ઽ","ବ","ଚ","ଦ","ଡ","ଫ","ଗ","ଗ","ହ","ଃ","ଃ","ଃ","ଜ","କ","ଲ","ଳ","ଳ","ମ","ଂ","ନ","ଞ","ଙ","ଣ","ନ","ପ","କ","ର","ଡ଼","ର","ସ","ଷ","ଶ","ତ","ଟ","ଵ","ୱ","ଯ","ୟ","ଜ","ଝ"],
["ல","ர","ஐ","ஔ","ல","ர","அ","ஆ","அ","ஆ","எ","எ","ஏ","இ","ஈ","ஒ","ஒ","ஓ","உ","ஊ","ஃக்ஹ","ம்ப","ந்த","ண்ட","ங்க","ஞ்ஜ","ப","ச","த","ட","க","ஜ","க","ஂ","ஂ","ப","ர","த","ட","ଽ","ப","ச","த","ட","ஃப","க","க","ஹ","ஹ","ஹ","ஹ","ஜ","க","ல","ள","ழ","ம","ஂ","ந","ஞ","ங","ண","ன","ப","ஃக","ர","ர","ற","ஸ","ஷ","ஶ","த","ட","வ","ஃவ","ய","ய","ஃஜ","ஃஷ"],
["ൡ","ൠ","ഐ","ഔ","ഌ","ഋ","അ","ആ","അ","ആ","എ","എ","ഏ","ഇ","ഈ","ഒ","ഒ","ഓ","ഉ","ഊ","ഖ","മ്ബ","ന്ദ","ണ്ഡ","ങ്ഗ","ഞ്ജ","ഭ","ഛ","ധ","ഢ","ഘ","ഝ","ഖ","ം","ം","ഫ","ര","ഥ","ഠ","ഽ","ബ","ച","ദ","ഡ","ഫ","ഗ","ഗ","ഹ","ഃ","ഃ","ഃ","ജ","ക","ല","ള","ഴ","മ","ം","ന","ഞ","ങ","ണ","ഩ","പ","ക","ര","ര","റ","സ","ഷ","ശ","ത","ട","വ","വ","യ","യ","ജ","ഝ"],
["ೡ","ೠ","ಐ","ಔ","ಌ","ಋ","ಅ","ಆ","ಅ","ಆ","ಎ","ಎ","ಏ","ಇ","ಈ","ಒ","ಒ","ಓ","ಉ","ಊ","ಖ","ಮ್ಬ","ನ್ದ","ಣ್ಡ","ಙ್ಗ","ಞ್ಜ","ಭ","ಛ","ಧ","ಢ","ಘ","ಝ","ಖ","ಂ","ಂ","ಫ","ರ","ಥ","ಠ","ಽ","ಬ","ಚ","ದ","ಡ","ಫ಼","ಗ","ಗ","ಹ","ಃ","ೲ","ೱ","ಜ","ಕ","ಲ","ಳ","ೞ","ಮ","ಂ","ನ","ಞ","ಙ","ಣ","ನ","ಪ","ಕ","ರ","ರ","ಱ","ಸ","ಷ","ಶ","ತ","ಟ","ವ","ವ","ಯ","ಯ","ಜ಼","ಝ"],
["ౡ","ౠ","ఐ","ఔ","ఌ","ఋ","అ","ఆ","అ","ఆ","ఎ","ఎ","ఏ","ఇ","ఈ","ఒ","ఒ","ఓ","ఉ","ఊ","ఖ","మ్బ","న్ద","ణ్డ","ఙ్గ","ఞ్జ","భ","ఛ","ధ","ఢ","ఘ","ఝ","ఖ","ఀ","ఁ","ఫ","ర","థ","ఠ","ఽ","బ","చ","ద","డ","ఫ","గ","గ","హ","ః","ః","ః","జ","క","ల","ళ","ఴ","మ","ం","న","ఞ","ఙ","ణ","న","ప","క","ర","ర","ఱ","స","ష","శ","త","ట","వ","వ","య","య","ౙ","ఝ"],
["ඐ","ඎ","ඓ","ඖ","ඏ","ඍ","අ","ආ","ඇ","ඈ","එ","එ","ඒ","ඉ","ඊ","ඔ","ඔ","ඕ","උ","ඌ","ඛ","ඹ","ඳ","ඬ","ඟ","ඦ","භ","ඡ","ධ","ඪ","ඝ","ඣ","ඛ","ං","ං","ඵ","ර","ථ","ඨ","","බ","ච","ද","ඩ","ෆ","ග","ග","හ","ඃ","ඃ","ඃ","ජ","ක","ල","ළ","ළ","ම","ං","න","ඤ","ඞ","ණ","න","ප","ක","ර","ර","ර","ස","ෂ","ශ","ත","ට","ව","ව","ය","ය","ජ","ඣ"]];

let vowels=[["l̥̄","r̥̄","ai","au","l̥","r̥","a","ā","æ","ǣ","e","ê","ē","i","ī","o","ô","ō","u","ū"],
["ॣ","ॄ","ै","ौ","ॢ","ृ","","ा","","ा","ॆ","ॅ","े","ि","ी","ॊ","ॉ","ो","ु","ू"],
["","","ੈ","ੌ","","","","ਾ","","ਾ","ੇ","ੇ","ੇ","ਿ","ੀ","ੋ","ੋ","ੋ","ੁ","ੂ"],
["ૣ","ૄ","ૈ","ૌ","ૢ","ૃ","","ા","","ા","ે","ૅ","ે","િ","ી","ો","ૉ","ો","ુ","ૂ"],
["ৣ","ৄ","ৈ","ৌ","ৢ","ৃ","","া","","া","ে","্যা","ে","ি","ী","ো","","ো","ু","ূ"],
["ୣ","ୄ","ୈ","ୌ","ୢ","ୃ","","ା","","ା","େ","େ","େ","ି","ୀ","ୋ","ୋ","ୋ","ୁ","ୂ"],
["","","ை","ௌ","","","","ா","","ா","ெ","ெ","ே","ி","ீ","ொ","ொ","ோ","ு","ூ"],
["ൣ","ൄ","ൈ","ൌ","ൢ","ൃ","","ാ","","ാ","െ","െ","േ","ി","ീ","ൊ","ൊ","ോ","ു","ൂ"],
["ೣ","ೄ","ೈ","ೌ","ೢ","ೃ","","ಾ","","ಾ","ೆ","ೆ","ೇ","ಿ","ೀ","ೊ","ೊ","ೋ","ು","ೂ"],
["ౣ","ౄ","ై","ౌ","ౢ","ృ","","ా","","ా","ె","ె","ే","ి","ీ","ొ","ొ","ో","ు","ూ"],
["ෳ","ෲ","ෛ","ෞ","ෞ","ෘ","","ා","ැ","ෑ","ෙ","ෙ","ේ","ි","ී","ො","ො","ෝ","ු","ූ"]];

let latin=[["aa","ae","æe",".d","^e","ee",".g",".h","^h","_h","ii",".l",",l","_l",";m","~m","^n","~n",";n",".n","_n","^o","oo",".r",",r","_r",".s",";s",".t","uu",";y","^z","_kh","l̥l","^mb","r̥r"],
["ā","æ","ǣ","ḍ","ê","ē","ġ","ḥ","ḫ","ẖ","ī","ḷ","l̥","ḻ","ṁ","m̐","n̆","ñ","ṅ","ṇ","ṉ","ô","ō","ṛ","r̥","ṟ","ṣ","ś","ṭ","ū","ẏ","ž","k͟h","l̥̄","m̆b","r̥̄"]];

let viramas=[",","्","੍","્","্","୍","்","്","್","్","්"]

function latind() {
	let textfield = [1,1,1,1,1,1,1,1,1,1,1];
	let car = document.form.latinput.value;
	
	// Convert special characters while keeping cursor position
	car = car.toLowerCase();
	for (let i = 0; i < latin[0].length; ++i) {
		car = car.split(latin[0][i]).join(latin[1][i]);
	}
	const cursorPos = document.form.latinput.selectionEnd;
	const diff = document.form.latinput.value.length - car.length;
	document.form.latinput.value = car;
	document.form.latinput.selectionEnd = cursorPos - diff;
	
	let output = ["",car,car,car,car,car,car,car,car,car,car];
	
	// Update indian
	// everything
	for (let i = 0; i < letters[0].length; ++i) {
		for (let j = 1; j <= 10; ++j) {
			if (["C", "c", "."].includes(signtype[j][i][signtype[j][i].length-1])) {
				output[j] = output[j].split(letters[0][i]).join(letters[j][i]+viramas[j]);
			} else {
				output[j] = output[j].split(letters[0][i]).join(letters[j][i]);
			}
			if (["c", "v"].includes(signtype[j][i][0]) || ["c", "v"].includes(signtype[j][i][signtype[j][i].length-1])) {

			}
		}
	}
	// correct vowels
	for (let i = 0; i < vowels[0].length; ++i) {
		for (let j = 1; j <= 10; ++j) {
			if (["V", "v"].includes(signtype[j][i][0])) {
				output[j] = output[j].split(viramas[j]+letters[j][i]).join(vowels[j][i]);
			}
		}
	}

	// correct gurmukhi nasalization
	let gurlong = ["ੈ","ੌ","ਾ","ੇ","ੀ","ੋ","ਆ","ਈ","ਏ","ਐ","ਓ","ਔ"];
	for (let i = 0; i < 12; ++i) {
		output[2] = output[2].split(gurlong[i]+"ੰ").join(gurlong[i]+"ਂ");
	}
	for (let i = 0; i < letters[2].length; ++i) {
		if (["C", "c", "."].includes(signtype[2][i][signtype[2][i].length-1])) {
			output[2] = output[2].split(letters[2][i]+viramas[2]+letters[2][i]).join("ੱ"+letters[2][i]);
		}
	}

	document.form.devinput.value = output[1];
	document.form.gurinput.value = output[2];
	document.form.gujinput.value = output[3];
	document.form.beninput.value = output[4];
	document.form.odiinput.value = output[5];
	document.form.taminput.value = output[6];
	document.form.malinput.value = output[7];
	document.form.kaninput.value = output[8];
	document.form.telinput.value = output[9];
	document.form.sininput.value = output[10];

	autoResize(document.getElementById("latinput"));
	autoResize(document.getElementById("devinput"));
	autoResize(document.getElementById("gurinput"));
	autoResize(document.getElementById("gujinput"));
	autoResize(document.getElementById("beninput"));
	autoResize(document.getElementById("odiinput"));
	autoResize(document.getElementById("taminput"));
	autoResize(document.getElementById("malinput"));
	autoResize(document.getElementById("kaninput"));
	autoResize(document.getElementById("telinput"));
	autoResize(document.getElementById("sininput"));
}

function indlat(scr) {
	let data = {
		lat: document.form.latinput.value,
		dev: document.form.devinput.value,
		gur: document.form.gurinput.value,
		guj: document.form.gujinput.value,
		ben: document.form.beninput.value,
		odi: document.form.odiinput.value,
		tam: document.form.taminput.value,
		mal: document.form.malinput.value,
		kan: document.form.kaninput.value,
		tel: document.form.telinput.value,
		sin: document.form.sininput.value
	};
	let names = ["lat", "dev", "gur", "guj", "ben", "odi", "tam", "mal", "kan", "tel", "sin"];

	// Unpack double consonants in Gurmukhi
	if (scr = "gur") {
		data["gur"] = data["gur"].split("ਂ").join(letters[2][i]+viramas[2]+letters[2][i]);
		for (let i = 0; i < letters[2].length; ++i) {
			if (["C", "c", "."].includes(signtype[2][i][signtype[2][i].length-1])) {
				console.log(letters[2][i]+viramas[2]+letters[2][i]);
				data["gur"] = data["gur"].split("ੱ").join("ੰ");
			}
		}
	}

	

	autoResize(document.getElementById("latinput"));
	autoResize(document.getElementById("devinput"));
	autoResize(document.getElementById("gurinput"));
	autoResize(document.getElementById("gujinput"));
	autoResize(document.getElementById("beninput"));
	autoResize(document.getElementById("odiinput"));
	autoResize(document.getElementById("taminput"));
	autoResize(document.getElementById("malinput"));
	autoResize(document.getElementById("kaninput"));
	autoResize(document.getElementById("telinput"));
	autoResize(document.getElementById("sininput"));
}

function autoResize(textarea) {
	textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight+10) + 'px';
}