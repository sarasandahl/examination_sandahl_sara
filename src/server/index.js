const express = require('express');
const api = require('../client/strapi');
const app = express();

app.use(express.json());

// rest api
//hämta mobiler
app.get('/mobiles', async (req, res) => {
    const response = await api.getMobiles()
    const mobiles = response.data    
    res.send(mobiles)
})

//hämta en mobil på id
app.get('/mobiles/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    // get mobile from api
    const response = await api.getMobile(id)
    const mobile = response.data
    res.send(mobile)
})

//skapa mobil
app.post('/mobiles', async (req, res) => {
    const newMobile = {
        manufacturer: req.body.manufacturer,
        screen_type: req.body.screen_type,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }
    const response = await api.postMobile(newMobile)
    res.sendStatus(201)
})

//ändra mobil
app.put('/mobiles/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const newMobile = {
        manufacturer: req.body.manufacturer,
        screen_type: req.body.screen_type,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }
    const response = await api.putMobile(id, newMobile)
    res.sendStatus(201)
})

//delete
app.delete('/mobiles/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    const response = await api.deleteMobile(id)
    res.sendStatus(200)
})

//kör port
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


