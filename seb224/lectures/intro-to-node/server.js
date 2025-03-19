const fs = require("fs")
const { getActiveResourcesInfo } = require("process")
// console.log(fs)
// fs = file system, built in node.js package/module

// fs.writeFile("hello-world.txt", "hey there", (err)=>{
//     if (err) console.log(err)
// console.log("successful")
// })





// use fs to read file//

fs.readFile("./hello-world.txt", "utf-8", (err, data) => {
    if (err) console.log(err)

console.log(data)
})

// Understanding writeFile()
// One of the methods, writeFile(), is used for creating files. It requires three parameters:

// file: A string specifying the file’s name.
// data: The content to be written to the file.
// callback: A function that executes after the file is created.
// Additionally, there’s an options parameter, which is optional. 
// This is communicated in the documentation by being enclosed in square brackets as shown here: fs.writeFile(file, data[, options], callback). 
// Using square brackets to indicate optional parameters is a common pattern in JavaScript documentation.