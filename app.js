const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.get('/',(req,res)=>{
    res.json('holas')
})

app.post('/meta_wa_callbackurl', async (req, res) => {
    try {
        console.log('POST: Someone is pinging me!');
        return res.sendStatus(200);
    } catch (error) {
                console.error({error})
        return res.sendStatus(500);
    }
});

app.listen(3000,()=>{
    console.log('servidor activo');
})