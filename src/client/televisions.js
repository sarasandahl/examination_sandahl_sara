const axioslib = require('axios');

const axios = () => {
    return axioslib.create({
        baseURL: 'http://localhost:1337/api'
    })
};

//hämtar alla enheter
const getTelevisions = async () => {
    return await axios().get('/televisions')
};

//hämtar en enhet genom id 
const getTelevision = async (id) => {
    return await axios().get(`/televisions/${id}`)
};

//skapa ny
const postTelevision = async(television) => {
    return await axios().post('/televisions', {
        "data": {
            "manufacturer": television.manufacturer,
            "screen_size": television.screen_size,
            "name": television.name,
            "description": television.description,
            "price": television.price,
        }
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
      });
};

//ändra tv
const putTelevision = async(id, television ) => {
    return await axios().put(`/televisions/${id}`, {
        "data": {
            "manufacturer": television.manufacturer,
            "screen_size": television.screen_size,
            "name": television.name,
            "description": television.description,
            "price": television.price,
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
const deleteTelevision = async (id) => {
    return await axios().delete(`/televisions/${id}`)
};

module.exports = { getTelevisions, getTelevision, postTelevision, putTelevision, deleteTelevision };