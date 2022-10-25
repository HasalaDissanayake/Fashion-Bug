const express = require('express');
const mongoose = require('mongoose');
//to convert the request to JS to understand by server 
const bodyParser = require('body-parser');
//because when two ports have frondend and backend browers block it
const cors = require('cors');

const app = express();

//import routes
const babiesPostRoutes = require('./routes/babiesRoutes');
const menPostRoutes = require('./routes/menRoutes');
const womenPostRoutes = require('./routes/womenRoutes');
const kidsPostRoutes = require('./routes/kidsRoutes');
const accessoriesPostRoutes = require('./routes/accessoriesRoutes');
const userRoutes = require('./routes/userRoutes');


//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(babiesPostRoutes);
app.use(menPostRoutes);
app.use(womenPostRoutes);
app.use(kidsPostRoutes);
app.use(accessoriesPostRoutes);
app.use(userRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://hasala:hasala@cluster0.uohjojl.mongodb.net/RAD_DB?retryWrites=true&w=majority';


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
