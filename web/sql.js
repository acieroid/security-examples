const express = require('express')
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

db.serialize(() => {
    db.run('create table if not exists users (name varchar(30) not null, password varchar(30))')
    db.run('insert into users values ("foo", "foo")');
});

app.get('/', (req, res) => {
    formHTML = `<form method="post" action="/login">
  <input type="text" name="username" /><br />
  <input type="password" name="password" /><br />
  <input type="submit" value="Login"/>
</form><br/><br/>
<form method="post" action="/change-password">
  <input type="text" name="username" /><br />
  <input type="password" name="password" /><br />
  <input type="password" name="newpassword" /><br />
  <input type="submit" value="Change password"/>
</form><br/><br/>`
    res.send(formHTML)
})

app.post('/login', (req, res) => {
    let query = 'select * from users where name = "' + req.body.username + '" and password = "' + req.body.password + '"';
    db.all(query, (err, rows) => {
        if (rows.length === 0) {
            res.send('Login failed');
        } else {
            res.send('Login success');
        }
    });
})

app.post('/change-password', (req, res) => {
    let query = 'update users set password = "' + req.body.newpassword + '" where name = "' + req.body.username + '" and password = "' + req.body.password + '"';
    db.run(query);
    res.send('Changed password only if it matches')
});

app.post('/login-protected', (req, res) => {
    let statement = db.prepare('select * from users where name = ? and password = ?');
    statement.all(req.body.username, req.body.password, (err, rows) => {

        if (rows.length === 0) {
            res.send('Login failed');
        } else {
            res.send('Login success');
        }
    });

});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

