const express = require('express');
const  app = express();
const morgan = require('morgan');
const bodyParser =require('body-parser');



app.use(morgan('dev'));
app.use(bodyParser.json());


//routes
require('./routes/userRoutes')(app);


app.listen(3000 , () => {
    console.log('server on port 3000')
});

