const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const messages = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    messagesHTML = messages.join('<br/>')
    formHTML = `<form method="post" action="/login">
  <input type="text" name="username" /><br />
  <input type="password" name="password" /><br />
  <input type="submit" value="Login"/>
</form>`
    res.send(messagesHTML + formHTML)
})

app.post('/login', (req, res) => {
    console.log(req.body.message);
    res.send('Logged in!')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

