// require er vitore 'fs' ee likte hobe .. Onno kisu lekha zabe nah.

const riad = require("fs");
//  console.log(riad);

riad.writeFile(
  "demo.txt",
  "This is just a sample. here goes everything document we want . this is the second peramiter. the first peramiter is a file name which we wanted to create.",
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Sucessful");
    }
  }
);

//************************************************** */
//*? AppendFile
// append file taak ee sobsomoy writefile er niche lekhai valo.

riad.appendFile(
  "demo.txt",
  "I am happy now. Because i am learning Node js",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("your text is added with your demo.txt file ");
    }
  }
);

//********************************************** */
//*? readFile:
// obossoi utf-8 taah diye nite hobe nahole buffer asbe.

riad.readFile("demo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//************************************************* */
//*? rename :
// riad.rename('demo.txt' , 'myFile.txt' , (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Succesfully rename the file.");
//     };
// });

//********************************************** */
//*? writeFile:

riad.writeFile(
  "index.html",
  "<p> create a paragraph with node js</p>",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("You get it. 😎");
    }
  }
);

//*************************************** */
//*? delete

// riad.unlink('index.html', (err)=>{
//     if(err){console.log(err);}else{console.log("delete the file");}
// });
// riad.unlink('myFile.txt', (err)=>{
//     if(err){console.log(err);}else{console.log("delete the file");}
// });
