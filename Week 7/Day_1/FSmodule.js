//async 
//sync 

// //asycn way
// const fs = require('fs');

// // fs.readFile('file.txt', 'utf-8', (err, data) => {
// //     if(err) {
// //         console.log(err);
// //         return;
// //     }
// //     console.log(data);
// // })


// // sync way

// const fileContent = fs.readFileSync('file.txt','utf-8');
// console.log(fileContent)

 

//writeFile is a crete a new file and write data into it, if the file already exists then it will overwrite the existing data
// const fs = require('fs');
// // fs.writeFile('text.txt', 'Hello World - Subscribe To Our Channel', (err) => {
// //     if(err) {
// //         console.log(err);
// //         return
// //     }
// //     console.log('File has been created');
// // })

// //writeFileSync is a create a new file and write data into it, if the file already exists then it will overwrite the existing data

// fs.writeFileSync('text2.txt', 'Helloooooo World - Subscribe To Our Channel', 'utf-8');
// console.log('File Written Successfully');






//FileInfomation
// const fs = require('fs');
//Async way

// fs.stat('file.txt', (err, stats) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(stats);
// });

//sync way
// const stats = fs.statSync('file.txt');
// console.log(stats);


//Directory Information
//Async way

// mkdir is used to create a new directory
const fs = require('fs');
fs.mkdir('new_Directory', (err) => {
    if(err) {
        console.log(err);
        return;
    }   
    console.log('Directory Created Successfully');
}   );


//rmdir is used to remove the directory

// fs.rmdir('new_Directory', (err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }   
//     console.log('Directory Removed');
// }   );



//unlink is used to delete the file

fs.unlink('text.txt', (err) => {
    if(err) {
        console.log(err);
        return;
    }   
    console.log('File Deleted Successfully');
});  