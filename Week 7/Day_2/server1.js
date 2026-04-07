// Streams process data chunk-by-chunk instead of loading everything into memory.
// types => Readable, Writable, Duplex, Transform



// const fs = require('fs');   //file read krna
// const http = require('http');

// //server create krna
// const server = http.createServer((req,res) => {
//     if(req.url !== "/"){
//         return res.end();
//     }

//     const readableStream = fs.createReadStream('file.txt','utf-8') ;

//     readableStream.on('data',(chuck) => {
//         res.write(chuck)
//     });
//     readableStream.on('end', () => {
//         res.end();
//     })
    
//     readableStream.on('error', (err) => {
//         console.log(err);
//         res.statusCode = 500; // statuscode =500 ,means Internal server error
//         res.end('Internal Server Error');
//     })

//     // const file = fs.readFileSync('file.txt', 'utf-8');
//     // return  res.end(file);
//     // // console.log("Created")
// })

// server.listen(3000, () => {
//     console.log("Listening....")
// })




//short way to write this code using pipe() => simple chaning one-line solution
   const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    if (req.url === "/") {
        fs.createReadStream('file.txt').pipe(res);
    } else {
        res.end("Invalid route");
    }
}).listen(3000);