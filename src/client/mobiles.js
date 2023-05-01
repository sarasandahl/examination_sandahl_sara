const axioslib = require('axios');

const axios = () => {
    return axioslib.create({
        baseURL: 'http://localhost:1337/api'
    })
};

//hämtar alla enheter från api:et
const getMobiles = async () => {
    return await axios().get('/mobiles')
};

//hämtar en enhet genom id från api:et
const getMobile = async (id) => {
    return await axios().get(`/mobiles/${id}`)
};

//skapa ny
const postMobile = async(mobile) => {
    return await axios().post('/mobiles', {
        "data": {
            "manufacturer": mobile.manufacturer,
            "screen_type": mobile.screen_type,
            "name": mobile.name,
            "description": mobile.description,
            "price": mobile.price,
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
const putMobile = async(id, mobile) => {
    return await axios().put(`/mobiles/${id}`, {
        "data": {
            "manufacturer": mobile.manufacturer,
            "screen_type": mobile.screen_type,
            "name": mobile.name,
            "description": mobile.description,
            "price": mobile.price,
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
const deleteMobile = async (id) => {
    return await axios().delete(`/mobiles/${id}`)
};

module.exports = { getMobiles, getMobile, postMobile, putMobile, deleteMobile };