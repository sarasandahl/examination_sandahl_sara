const express = require('express');
const apiMobiles = require('../client/mobiles');
const apiComputers = require('../client/computers');
const apiAudio = require('../client/audioDevices');
const apiTelevisions = require('../client/televisions');

//sätt upp express
const app = express();

app.use(express.json());

////////
//Mot audio-devices
///////

//hämta ljudenhet
app.get('/audio-devices', async (req, res) => {
    const response = await apiAudio.getAudios()
    const audioDevices = response.data    
    res.send(audioDevices)
})

//hämta en ljudenhet på id
app.get('/audio-devices/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    // get audio from api
    const response = await apiAudio.getAudio(id)
    const audioDevice = response.data
    res.send(audioDevice)
})

//skapa ljudenhet
app.post('/audio-devices', async (req, res) => {
    const newAudioDevice = {
        manufacturer: req.body.manufacturer,
        efficiency: req.body.efficiency,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }
    const response = await apiAudio.postAudio(newAudioDevice)
    res.sendStatus(201)
})

//ändra ljudenhet
app.put('/audio-devices/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const newAudioDevice = {
        manufacturer: req.body.manufacturer,
        efficiency: req.body.efficiency,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }
    const response = await apiAudio.putAudio(id, newAudioDevice)
    res.sendStatus(201)
})

//ta bort ljudenhet
app.delete('/audio-devices/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    const response = await apiAudio.deleteAudio(id)
    res.sendStatus(200)
})

////////
//Mot computers
///////

//hämta alla datorer
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

////////
//Mot Televisions
///////

//hämta alla tv
app.get('/televisions', async (req, res) => {
    const response = await apiTelevisions.getTelevisions()
    const televisions = response.data    
    res.send(televisions)
})

//hämta en tv på id
app.get('/televisions/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    // get tv from api
    const response = await apiTelevisions.getTelevision(id)
    const televisions = response.data
    res.send(televisions)
})

//skapa tv
app.post('/televisions', async (req, res) => {
    const newTelevision = {
        manufacturer: req.body.manufacturer,
        screen_size: req.body.screen_size,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }
    const response = await apiTelevisions.postTelevision(newTelevision)
    res.sendStatus(201)
})

//ändra tv
app.put('/televisions/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const newTelevision = {
        manufacturer: req.body.manufacturer,
        screen_size: req.body.screen_size,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }
    const response = await apiTelevisions.putTelevision(id, newTelevision)
    res.sendStatus(201)
})

//ta bort tv
app.delete('/televisions/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    const response = await apiTelevisions.deleteTelevision(id)
    res.sendStatus(200)
})


//kör port
app.listen(8008, () => {
    console.log("http://localhost:8008/");
})


