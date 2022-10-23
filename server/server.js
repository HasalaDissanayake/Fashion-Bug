const express = require('express');
const mongoose = require('mongoose');
//to convert the request to JS to understand by server 
const bodyParser = require('body-parser');
//because when two ports have frondend and backend browers block it
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/babiesRoutes');
const userRoutes = require('./routes/userRoutes');


//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);
app.use(userRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://Hasala:8Q8YbJlS6rzXSxN5@mernapp.jqtisuz.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})//promise
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => {
        console.log('DB connection error', err)
    });


app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})




// as there were no frond end at this stage use postman to check