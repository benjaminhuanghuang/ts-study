interface Phone{
    model: string;
    version: number;
    ring(): string;
}

class TraditionalPhone implements Phone{
    constructor(
        public model: string,
        public version: number
    ) { }
    ring() { return "ring ring";}
}

class ModernPhone implements Phone{
    constructor(
        public model: string,
        public version: number
    ) { }
    ring() { return "ring tone";}
}

let bellPhone = new TraditionalPhone("Bell", 12.4);
let iPhone = new ModernPhone("iPhone 7+", 1.0);

var phones: Phone[] = [];
phones.push(bellPhone);
phones.push(iPhone);

for (var index of phones) {
    console.log(index.ring()); 
}
