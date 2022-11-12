const express = require('express')
const app = express()
const PORT = 3000
const drinks = require('./models/drinks')
// console.log(drinks)



app.listen(3000, () => {
    console.log(`The app is listening on Port ${PORT}`)
})

// First GET Route

app.get('/gitpub', (req, res) => {
    res.send(`Welcome to GitPub! <a href="gitpub/drinks">Take a look at our menu</a>`)
})


// INDEX Route

app.get('/gitpub/drinks', (req, res) => {
    res.render('drinks_index.ejs', {
        allDrinks: drinks
    })
})

// SHOW Route

app.get('/gitpub/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id],
        id: req.params.id
    })
})