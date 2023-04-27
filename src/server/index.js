const express = require('express');
const api = require('../client/api');
const app = express();

app.use(express.json());

// rest api

app.get('/mobiles', (req, res) => {
    const response = api.getMobiles()
    const mobiles = response.data
    console.log(mobiles)
    res.send(mobiles)
})

// vi kan gå igenom detta senare, men ett exempel på hur vi kan skicka in en ny mobil och posta den med axios genom postman
app.post('/mobiles', (req, res) => {
    console.log(req.body)

    const newMobile = {
        manufacturer: req.body.manufacturer,
        screen_type: req.body.screen_type,
        name: req.body.name,
        description: req.body.description,
        price: parseInt(req.body.price),
    }

    console.log(newMobile)

    // const post = await api.postMobile(newMobile)
    // console.log(post.data)
})

app.listen(8008, () => {
    console.log("http://localhost:8008/");
})

// async function main() {
//     const mobiles = await api.getMobiles()
//     const mobile = await api.getMobile(2)
//     console.log(mobiles.data)
//     console.log('------------------------------------------------')
//     console.log('------------------------------------------------')
//     console.log(mobile.data)
// };

// main()


