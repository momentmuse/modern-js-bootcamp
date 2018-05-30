// Global (name)
    // Local (name)
        // Local
    // Local

let name = 'Amy'

if (true) {
    let name = 'Gatsby'

    if (true) {
        name = 'Banana'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}

// Variable shadowing: when a variable in a local scope uses its value instead of a value in a parent scope

// Leaked value: assign a value to a variable, but that variable was never explicitly defined