let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('The account is locked!')
} else  if (userRole === 'admin') {
    console.log('Welcome admin')
} else {
    console.log('Welcome')
}

//once we find the first passing condition, the code short circuits and stops
// else, else if are optional=
