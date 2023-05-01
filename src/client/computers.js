const axioslib = require('axios');

const axios = () => {
    return axioslib.create({
        baseURL: 'http://localhost:1337/api'
    })
};

//hämtar alla enheter från api:et
const getComputers= async () => {
    return await axios().get('/computers')
};

//hämtar en enhet genom id från api:et
const getComputer = async (id) => {
    return await axios().get(`/computers/${id}`)
};

//skapa ny
const postComputer = async(computer) => {
    return await axios().post('/computers', {
        "data": {
            "manufacturer": computer.manufacturer,
            "processor": computer.processor,
            "name": computer.name,
            "description": computer.description,
            "price": computer.price,
        }
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
      });
};

//ändra mobil
const putComputer = async(id, computer) => {
    return await axios().put(`/computers/${id}`, {
        "data": {
            "manufacturer": computer.manufacturer,
            "processor": computer.processor,
            "name": computer.name,
            "description": computer.description,
            "price": computer.price,
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
const deleteComputer = async (id) => {
    return await axios().delete(`/computers/${id}`)
};

module.exports = { getComputers, getComputer, postComputer, putComputer, deleteComputer };