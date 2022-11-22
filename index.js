const express = require('express')
const app = express()
const port = 4444
const path = require('path')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/static', express.static(path.join(__dirname, 'static')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})