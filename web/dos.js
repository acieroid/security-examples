const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const start = Date.now();
    res.send(/^((ab)*)+$/.test(req.query.value))
    console.log('Checked regex in ' + (Date.now() - start) + 'ms')
})

// Run curl (python -c 'print("http://localhost:3000/?value=" + ("ab" * 25) + "a")')
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
