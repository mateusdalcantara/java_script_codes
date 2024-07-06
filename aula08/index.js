let varA = "A"; //B     
let varB = "B"; //C
let varC = "C"; //A
let varV = "null";

/* uma maneira
varV = varA;
varA = varB;
varB = varC;
varC = varV;
*/

[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC);
