const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const messages = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    messagesHTML = messages.join('<br/>')
    formHTML = `<form method="post" action="/sendmessage">
  <input type="text" name="message" /><br />
  <input type="submit" value="Send message"/>
</form>`
    res.send(messagesHTML + formHTML)
})

app.post('/sendmessage', (req, res) => {
    storeMessage(req.body.message);
    res.send('Message sent!')
})


app.get('/search', (req, res) => {
    res.send(`Results for ${req.query['q']}: ...`)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})


function storeMessage(message) {
    messages.push(message)
}
