const express = require('express');
const  app = express();
const morgan = require('morgan');
const bodyParser =require('body-parser');
const cors = require('cors')
// config =
//     {
//         secret: "ilovescotchyscotch"
//     };


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
//routes
require('./routes/userRoutes')(app);
require('./routes/taskRoutes')(app);


app.listen(3000 , () => {
    console.log('server on port 3000')
});

