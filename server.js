const express = require('express');

const app = express();
const about = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (request, response) => {
    //response.send('<h1>Hello from Express!</>');
    response.render('welcome.hbs', {
        title: "Welcome to my site!",
        text: "oioi bitches"
    });
});

app.get('/about', (request, response) =>{
    response.render('welcome.hbs', {
        title: "About",
        text: "alô o meu nome é inês e gosto de tretas no geral"
    });
    /*response.send({
        name: 'ines',
        likes: ['ler livrinhos da treta', 'dormir', "ver seriezinhas da treta"]
    });*/
});

app.get('/carochao', (request, response) => {
    var date = new Date().toString();
    //var html = `<body><h1>${date}</h1></body>`;

    //response.send(html);
    
    response.render('carochao.hbs', {
        title: "horinhas",
        text: date
    });
});

app.listen(3000);
