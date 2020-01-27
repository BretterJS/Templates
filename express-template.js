// Basic Express Server Template
'use strict';

const log = console.log;
const express = require('express');
const app = express();
const http = require('http');

// Log Available Methods and Status Codes
log(http.METHODS);
log(http.STATUS_CODES);

app.listen(3000, err => {
  if (err) {
    log('Error', err);
    return;
  }
  log('Server Is Running on Port 3000');
});
