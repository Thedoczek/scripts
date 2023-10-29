han = ["ᆼ", "ᄀ", "ᄁ", "ᄂ", "ᄃ", "ᄄ", "ᄅ", "ᄆ", "ᄇ", "ᄈ", "ᄊ", "ᄉ", "ᄍ", "ᄌ", "ᄎ", "ᄏ", "ᄐ", "ᄑ", "ᄒ", "ᅡ", "VOWELS"];
typ = ["c", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "V", "VOWELS"]

txt = "가카다";
for (let i = 0; i < han.length; ++i) {
	txt = txt.replace(new RegExp(han[i], "g"), typ[i]);
}
    
console.log(txt);
