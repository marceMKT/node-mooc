
function greet (greeting = "Hi", person = "my friend") {
       return `${greeting} ${person}, how are you?` ;   
};

console.log();
console.log( 'greet ("Good morning", "Peter") => '
            + greet ("Good morning", "Peter")); //   =>  "Good morning Peter, how are you?"
console.log();
console.log( 'greet ("Hello")                 => '
            + greet ("Hello"));                 //   =>  "Hi undefined, how are you?"
console.log( 'greet ()                        => '
            + greet ());                        //   =>  "undefined undefined, how are you?"