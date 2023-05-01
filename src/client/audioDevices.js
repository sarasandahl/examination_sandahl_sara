const axioslib = require('axios');

const axios = () => {
    return axioslib.create({
        baseURL: 'http://localhost:1337/api'
    })
};

//hämtar alla enheter 
const getAudios = async () => {
    return await axios().get('/audio-devices')
};

//hämtar en enhet 
const getAudio = async (id) => {
    return await axios().get(`/audio-devices/${id}`)
};

//skapa ny
const postAudio = async(audio) => {
    return await axios().post('/audio-devices', {
        "data": {
            "manufacturer": audio.manufacturer,
            "efficiency": audio.efficiency,
            "name": audio.name,
            "description": audio.description,
            "price": audio.price,
        }
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
      });
};

//ändra 
const putAudio = async(id, audio) => {
    return await axios().put(`/audio-devices/${id}`, {
        "data": {
            "manufacturer": audio.manufacturer,
            "efficiency": audio.efficiency,
            "name": audio.name,
            "description": audio.description,
            "price": audio.price,
        }
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
      });
};

// ta bort på id
const deleteAudio = async (id) => {
    return await axios().delete(`/audio-devices/${id}`)
};

module.exports = { getAudios, getAudio, postAudio, putAudio, deleteAudio };