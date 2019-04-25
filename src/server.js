const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./Controller/authController')(app);
require('./Controller/projectController')(app);

app.listen(8080, () => {
    console.log("Start server");
})