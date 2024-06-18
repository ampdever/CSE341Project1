const express = require('express');
const app = express(); //create instance of express

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.listen(port, () => (console.log(`Running on port ${port}`)));