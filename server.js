const express = require('express');
const cors = require('cors'); 
const app = express();
require('./server/config/mongoose.config'); //this is new
app.use(cors());
app.use(express.json()); //this is also new
app.use(express.urlencoded({ extended: true })); //this is also new what does this do??
require('./server/routes/product.routes')(app); // be aware new shit

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});