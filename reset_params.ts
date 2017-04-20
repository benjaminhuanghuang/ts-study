function addWithRest(num1: number, num2: number, ...numbers: number[]) {
    var result = num1 + num2;
    for (var i in numbers) {
        result += numbers[i];
    }
    return result
}

let ans = addWithRest(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(ans);
