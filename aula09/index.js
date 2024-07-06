//               01234567
let umaString = "um texto";

console.log(umaString.indexOf("o", 3));
console.log(umaString.lastIndexOf("m", 3));
console.log(umaString.match(/[a-z]/g));//expreções regulares
console.log(umaString.search(/x/));
console.log(umaString.replace("o", "y"));
console.log(umaString.length);//tamanho da string
console.log(umaString.slice(2, 7));
console.log(umaString.slice(-5, umaString.length - 7));
console.log(umaString.toUpperCase(umaString));
console.log(umaString.toLowerCase(umaString));