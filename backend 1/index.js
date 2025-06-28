const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('fahad kalala')
})

app.get('/login',(req,res)=>{
  res.send('<h1> MY NAME IS FAHAD  <h1>')
})

app.get('/logout',(req,res)=>{
  res.send('<h2> you are logging out  <h2>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// my name is muhammad fhaad dali khan shahab gg bro 
