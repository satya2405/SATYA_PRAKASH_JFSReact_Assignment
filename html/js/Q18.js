function isVowel(c) {
  return (
    c == "A" ||
    c == "E" ||
    c == "I" ||
    c == "O" ||
    c == "U" ||
    c == "a" ||
    c == "e" ||
    c == "i" ||
    c == "o" ||
    c == "u"
  );
}

function pigLatin(s) {
  // index of the first vowel is stored.
  let len = s.length;
  let index = -1;
  for (let i = 0; i < len; i++) {
    if (isVowel(s[i])) {
      index = i;
      break;
    }
  }
  // checking vowels is present
  if (index == -1) {
    return "-1";
  }
  return s.substring(index) + s.substring(0, index) + "ay";
}

// Driver code

str = pigLatin("Hello Sweets");

if (str == "-1") {
  alert("No vowels" + "found. Pig Latin" + " not possible");
} else {
  alert(str);
}
