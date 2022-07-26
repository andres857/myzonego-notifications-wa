const express = require('express')
const app = express()
const router = require('./routes/index')
const {server} = require('./config')

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
router(app)

app.listen(server.PORT,()=>{
    console.log(`server running on port ${server.PORT}`);
})