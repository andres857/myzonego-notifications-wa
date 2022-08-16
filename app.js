const express = require('express')
var cors = require('cors');
const app = express()
const router = require('./routes/index')
const {server} = require('./config')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
router(app)

app.listen(server.PORT,()=>{
    console.log(`server running on port ${server.PORT}`);
})