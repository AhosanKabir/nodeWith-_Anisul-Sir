//*? os , path .........................

//*! OS................

const riad = require("os");
console.log(riad.userInfo());
console.log(riad.homedir());
console.log(riad.hostname());
console.log(riad.totalmem());
console.log(riad.freemem());

//*! PATH.............................
//* directory root path ...
console.log(__dirname);

const ahosan = require("path");
// console.log(ahosan);

const joinName = ahosan.join(__dirname + "/views");
console.log(joinName);