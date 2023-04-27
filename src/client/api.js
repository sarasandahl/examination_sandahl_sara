const axios = require('axios');

const api = () => {
    return axios.create({
        baseURL: 'http://localhost:1337/api'
    })
};

const getMobiles = async () => {
    return await api().get('/mobiles')
};

const getMobile = async (id) => {
    return await api().get(`/mobiles/${id}`)
};

const postMobile = async(mobile) => {
    return await api({
        method: 'post',
        url: '/mobiles',
        data: { mobile }
    });
};

module.exports = { getMobiles, getMobile, postMobile };