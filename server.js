const express = require("express")
const app = express()
const PORT = 8000

app.get('/api', (req, res) => {
    res.json({message: "Hello World"})
})

app.listen( PORT, () => console.log(`Port: ${PORT} is up and running`))