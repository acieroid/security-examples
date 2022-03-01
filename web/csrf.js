const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/transfer', (req, res) => {
    if (!isAuthenticated()) { return res.sendStatus(401); }
    transfer(req.query.destination, req.query.amount);
    res.send('Success');
})

app.get('/csrf-attack-get1', (req, res) => {
    // In practice, the attack is obviously hosted on a different server
    res.send('Hey! <a href="/transfer?to=attacker&amount=10000">Check my website</a>')
})

app.get('/csrf-attack-get2', (req, res) => {
    res.send('<img src="/transfer?to=attacker&amount=10000" width="0" height="0" border="0"/>')
})

app.post('/transfer', (req, res) => {
    if (!isAuthenticated()) { return res.sendStatus(401); }
    transfer(req.body.destination, req.body.amount);
    res.send('Success');
})

app.get('/do-transfer', (req, res) => {
    res.send(`<form method="post" action="/transfer">
<input type="text" name="destination" /><br/>
<input type="text" name="amount" /><br/>
<input type="submit" value="Transfer"/>
</form>`)
})

app.get('/csrf-attack-post', (req, res) => {
    res.send(`<form method="post" action="/transfer">
<input type="hidden" name="destination" value="attacker" /><br/>
<input type="hidden" name="amount" value="10000"/><br/>
<input type="text" name="message" value="Enter your message here" /><br/>
<input type="submit" value="Send message"/>
</form>`)

})

const currentUser = 'foo'; // This would come from the session in practice

function transfer(to, amount) {
    console.log(`Transfering $${amount} from ${currentUser} to ${to}`)
}

function isAuthenticated() {
    return true; // Dummy implementation
}

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
