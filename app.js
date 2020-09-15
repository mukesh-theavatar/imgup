const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
res.render('index');
})

var server = app.listen(3000, () => console.log('Local Server started at port 3000'));
server.close();
