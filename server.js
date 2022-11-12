const express = require('express')
const app = express()
const PORT = 3000



app.listen(3000, () => {
    console.log(`The app is listening on Port ${PORT}`)
})

// First GET Route

app.get('/', (req, res) => {
    res.send('Welcome To The Gitpub App!')
})