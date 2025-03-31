
const http = require('http');
const httpServer = http.createServer( (request, response)=>{
    const url = request.url;
    switch (url) {
        case "/":
            response.end('Welcome on our page.. Wait until we are redirecting you to your destiny... ');
        break;
    
        case "/home":
            response.end('Welcome to Home Page!!!');
        break;
    
        case "/about":
            response.end('This is about page..');
        break;
    
        case "/contact":
            response.end('Contact us at : Remo_smith352@yahoo.com (876 876 3546)');
            
        break;
    
        case "/project":
            response.end('An unlimited source to knowledge..Try our in-hand practice projects');
        break;
    
        default :
            response.end("Sorry....page not found");
        break;
    }
} );

httpServer.listen(8081, ()=>{
    console.log(`Hey Buddy Server started.....`); 
});




