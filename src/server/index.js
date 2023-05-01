const express = require('express');
const apiMobiles = require('../client/mobiles');
const apiComputers = require('../client/computers');

const app = express();

app.use(express.json());

// rest api elektonik

////////
//Mot computers
///////

//hämta dator
app.get('/computers', async (req, res) => {
    const response = await apiComputers.getComputers()
    const computer = response.data    
    res.send(computer)
})

//hämta en dator på id
app.get('/computers/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    // get computer from api
    const response = await apiComputers.getComputer(id)
    const computer = response.data
    res.send(computer)
})

//skapa ny dator
app.post('/computers', async (req, res) => {
    const newComputer = {
        manufacturer: req.body.manufacturer,
        processor: req.body.processor,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }
    const response = await apiComputers.postComputer(newComputer)
    res.sendStatus(201)
})

//ändra dator
app.put('/computers/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const newComputer= {
        manufacturer: req.body.manufacturer,
        processor: req.body.processor,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }
    const response = await apiComputers.putComputer(id, newComputer)
    res.sendStatus(201)
})

//ta bort en dator
app.delete('/computers/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    const response = await apiComputers.deleteComputer(id)
    res.sendStatus(200)
})

////////
//Mot mobiles
///////

//hämta mobiler
app.get('/mobiles', async (req, res) => {
    const response = await apiMobiles.getMobiles()
    const mobiles = response.data    
    res.send(mobiles)
})

//hämta en mobil på id
app.get('/mobiles/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    // get mobile from api
    const response = await apiMobiles.getMobile(id)
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
    const response = await apiMobiles.postMobile(newMobile)
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
    const response = await apiMobiles.putMobile(id, newMobile)
    res.sendStatus(201)
})

//ta bort en mobil
app.delete('/mobiles/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    const response = await apiMobiles.deleteMobile(id)
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


