//Lexical Scope (Static Scope)
//Global Scope - Defined outside of all code blocks
//Local Scope - Defined inside a code block

//In a scope, you can access variables in said scope, or in any parent/ancestor scope

//Global scope (varOne)
    //Local scope (varTwo)
        //local scope (varFour)
    //Local scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)  

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)  