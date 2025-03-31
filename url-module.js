const { log } = require('console')
const url = require('url');
console.log(" ");

/*const urlString = "https://us02web.zoom.us/j/8748449745?pwd=IQelRYADLrADpEUMwoI4JdwalXEyID.1&omn=82184057048";

const urlObject = url.parse(urlString, true);
console.table(urlObject);
console.log(" ");

console.log(`Protocol: ${urlObject.protocol}`);
console.log("==============================================================");

console.log(`Host name: ${urlObject.hostname}`);
console.log("==============================================================");

console.log(`Path name: ${urlObject.path}`);
console.log("==============================================================");

console.log(`Path parameter: ${urlObject.pathname}`);
console.log("==============================================================");

console.log(`Query parameter: ${urlObject.search}`);
console.log("==============================================================");

console.log("Query Parameter in Object form :");
const queryParam = urlObject.query;
console.log(queryParam);
console.log("------------------------------------------------");

console.log(`queryParam key pwd : ${queryParam.pwd}`);
console.log("-------------------------------------------------");

console.log(`queryParam key omn : ${queryParam.omn}`);
console.log("==============================================================");*/






//format(urlObject): Takes an object with URL components and returns a formatted URL string

const formattedUrl = url.format({
    protocol: "https:",
    hostname: "www.example.com",
    pathname: "/path",
    query: {
        queryKey1: "value1",
        queryKey2: "value2"
    },
});
console.log("**** 1. url.format() method ****");
console.log(" ");
console.log(`URL using object : `);
console.log(formattedUrl);










console.log(" ");
console.log("==============================================================");








