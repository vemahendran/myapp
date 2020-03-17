const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello Siddhart!'))

app.get('/hello', function (req, res) {
    res.send('Hello worldl')
})



app.get('/contact', function (req, res) {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`<html>
        <body>
            <h1> Hello World </h1>
            <form action="/contact" method="post">
                Name: <input type="text" name="name"/>
                Age: <input type="text" name="age"/>
                <input type="submit" value="Submit"/>
            </form>
        </body>
    </html>`)
})

app.post('/contact', function (req, res) {
    console.log(req);

    res.send('Submitted your data!!!')
    
    // res.redirect('/contact');
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
