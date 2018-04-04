const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.set("view options", {layout: false})
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
  res.status(200)
     .render('/views/index.html')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})