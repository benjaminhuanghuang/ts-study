// Init
let map = new Map([
  [ "A", 1 ],
  [ "B", 2 ],
  [ "C", 3 ]
]);

// Using Object.entries
const expectedCounts = new Map(Object.entries({ car: 1, ':': 2, carpet: 1, as: 1, java: 1, 'javascript!!&@$%^&': 1 }))
   

let nameAgeMapping = new Map();
 
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);
 
//Get entries
nameAgeMapping.get("John");     //40
 
//Check entry is present or not
nameAgeMapping.has("Lokesh");       //true
nameAgeMapping.has("Brian");        //false
 
//Size of Map with
nameAgeMapping.size;                //3
 
//Delete an entry
nameAgeMapping.delete("Lokesh");    // true
 
//Clear whole Map
nameAgeMapping.clear();             //Clear all entries

//Iterate over map keys
for (let key of nameAgeMapping.keys()) {
    console.log(key);                   //Lokesh Raj John
}
 
//Iterate over map values
for (let value of nameAgeMapping.values()) {
    console.log(value);                 //37 35 40
}
 
//Iterate over map entries
for (let entry of nameAgeMapping.entries()) {
    console.log(entry[0], entry[1]);    //"Lokesh" 37 "Raj" 35 "John" 40
}
 
//Using object destructuring
for (let [key, value] of nameAgeMapping) {
    console.log(key, value);            //"Lokesh" 37 "Raj" 35 "John" 40
}