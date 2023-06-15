const arrOfCodes = [114, 101, 100, 117, 99, 101];

const codesToLetters = arrOfCodes.reduce((acc, curr) => {
    console.log((acc), (String.fromCharCode(curr)));
    return (acc) + String.fromCharCode(curr);
}, "");

console.log(codesToLetters);