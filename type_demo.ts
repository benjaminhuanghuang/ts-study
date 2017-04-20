var age = 10;
console.log(`You are ${age} years old`);

var a = 10; 
console.log("a == '10' is ${a == \"10\"}");
console.log(`a == '10' is ${a == "10"}`);


enum temperature {
    cold,
    hot
};

let temp = temperature.cold;
switch (temp) {
    case temperature.cold:
        {
            console.log("Brrr...");
            break;
        }
    case temperature.hot:
        {
            console.log("yikes!");
            break;
        }
}