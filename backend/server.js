const express = requrie('express')
const cors = require('cors')
const mongoose = reqire('mongoose')

require('dotenv').config();

const app = express();
const port = 2000

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});
const connection = mongoose.connection
connection.once('open',() =>{          
    console.log("MongoDB dabtabase connection established successfully")
})

app.listen(port,() => {
    console.log(`server is running on port: ${port}`);
});
