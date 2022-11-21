const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


app.use('/static', express.static(__dirname + '/bcpzonasegurabeta.viabcp.com/static'));
app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/bcpzonasegurabeta.viabcp.com/index1.html'));
  });

app.get('/error',function(req,res) {
    res.sendFile(path.join(__dirname+'/bcpzonasegurabeta.viabcp.com/error.html'));
  }); 
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});