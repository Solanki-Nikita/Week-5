 const path = require('path');
 const pathProps = path.parse('/foo/bar/baz/asdf/quux.html');
// //console.log(__filename); //__filename is a global variable in Node.js that contains the absolute path of the currently executing file. It provides the full path to the file, including the file name and extension.
// //console.log(path.dirname(__filename)); //returns the directory name of the current module file
// //console.log(path.basename(__filename)); //returns the last portion of a path, which is the file name in this case. It extracts the file name from the full path provided by __filename.
// //console.log(path.extname(__filename)); //returns the extension of the file name in the provided path.
// //console.log(path.join('hello', 'world', 'index.js')); //joins the given path segments into a single path string, using the appropriate separator for the operating system. In this case, it will create a path like '/hello/world/index.js' on Unix-based systems or '\hello\world\index.js' on Windows.

// console.log(path.resolve('/hello', '/world', '/index.js')); //resolves a sequence of paths or path segments into an absolute path. It processes the given path segments and returns the absolute path to the file. The resulting path will be based on the current working directory of the Node.js process.
// console.log(path.resolve('hello', 'world', 'index.js')); 
// console.log(path.resolve('hello', '//world', 'index.js')); 
// console.log(path.resolve('hello', '//world', '///index.js')); 
// console.log(path.resolve('hello', 'world/', '/index.js')); 
// console.log(path.resolve('hello', 'world', '/index.js')); 
 
console.log(pathProps);