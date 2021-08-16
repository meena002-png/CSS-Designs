const express = require('express');
const path = require('path');

const app = express();
const public = path.join(__dirname, '../public');

app.use(express.static(public));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(200);