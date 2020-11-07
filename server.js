const path = require('path');
const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {
  res.status(404);
  res.send('404: File Does Not Exist');
});

// Make sure port is set to 8080
const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});