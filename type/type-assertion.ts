let message;
message = "abc";
let endsWithC = (<string>message).endsWith('c');
let alternativeWithC = (message as string).endsWith('c');
