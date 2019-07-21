const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // console.log("request", req);
    // console.log("response", res);
    
    //?name=flavio&age=35
    res.cookie('username', 'Flavio', { domain: '.flaviocopes.com', path: '/administrator', secure: true })
    res.set('hiddenkey', '1234567')
    res.send('Hello World!')
})

app.listen(3000, () => console.log('Server ready')) 