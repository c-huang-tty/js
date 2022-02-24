// Modules
// const names = require('./modules1');
// const sayHi = require('./modules2');
// const person = require('./alternative');

// require('./alternative')

// sayHi(names.john);
// console.log(person);

// os module
const os = require('os');
// info about current user
const user = os.userInfo();
console.log(user);
// system uptime in secons
// const uptime = os.uptime();
console.log(`The system uptime is ${os.uptime()}`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);