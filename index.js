const express = require('express')
const User = require('./db/Users')
const cors = require('cors')
require('./db/config')

const app = express()
app.use(express.json())
app.use(cors())


app.post('/register',async (req,resp)=>{
    let user = User(req.body);
    let result = await user.save();

    resp.send(result)
})

app.listen(9000)