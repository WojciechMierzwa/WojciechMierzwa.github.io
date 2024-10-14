import stringWidth from 'string-width';

// Mierzenie szerokości prostego ciągu znaków
const name = 'Wojciech Mierzwa';
console.log(`Długość mojego imienia "${name}" ma: ${stringWidth(name)} bajtów.`);  

// Mierzenie szerokości znaku wielobajtowego
const multiByteChar = '😃';
console.log(`Emoji "${multiByteChar}" ma: ${stringWidth(multiByteChar)} bajty.`);  

// Mierzenie szerokości znaku z kodami ucieczki ANSI
const formattedChar = '\u001B[1m✂️ \u001B[22m';
console.log(` "${formattedChar}" ma: ${stringWidth(formattedChar)} bajty (liczone są tylko widoczne znaki).`);  
