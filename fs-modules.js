
const { error } = require('console');
const fs = require('fs');

//Reading from the file
/*fs.readFile('sample.txt', 'Utf8',(err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data);
});*/

//Writing content to the file
const content = 'Hello , Start your day with inner freshness !';
fs.writeFile('output.txt', content, 'utf8', (err) => {
    if (err) {
        console.error(err);
        
    } else {
        console.log('File written successfully!');
        console.log(content);
        console.log(" ");
    }
});

//stat() : Retrieve information about file or directory
const filePath = 'output.txt';
fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    //Access the properties of the stat object
    console.log('File size:', stats.size + 'bytes');
    console.log('Is a File:', stats.isFile());
    console.log('Is a Directory:', stats.isDirectory());
    console.log('Is a Birthtime (creation time):', stats.birthtime);
    console.log('File modification time:', stats.mtime);
});


//appendFile() : Used to asynchronously append data to a file
const filePathAppend = "output.txt";
const dataToAppend = '\n This data will be appended to the file.';
fs.appendFile(filePathAppend, dataToAppend, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data has been appended to the file.');
    
});

//unlike(): Method to remove or delete a file asynchronously
/*const filePathUnlike = "sample.txt"; 
fs.unlink(filePathUnlike,(err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('This file has been deleted.');
});*/

//fs.mkdir():  provides a method to create a directory asynchronously
const directoryPath = 'new_directory';
fs.mkdir(directoryPath, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Directory created successfully.');
});
