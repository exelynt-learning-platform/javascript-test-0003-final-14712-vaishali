 function printPattern(rows) {
   for (let i = 1; i <= rows; i++) { let num = i % 2;
let result = "";

    for (let j = 1; j <= i; j++) {
        result += num;
        num = num === 1 ? 0 : 1; 
    }

    console.log(result);
}
}

printPattern(6);
