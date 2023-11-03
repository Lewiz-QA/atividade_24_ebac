const req = require('supertest');

let getAccessToken = (user, pass) => {
    return req('http://localhost:3000/api')
        .post('/login')
        .send({
            "username": user,
            "password": pass
        })
        .set('Accept', 'application/json')
        .then(response => {
            return response.body.accessToken
        })
}

let getAddressId = (token) => {
    return req('http://localhost:3000/api')
        .post('/addresses')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "address_1": "Logradouro Teste",
            "address_2": "Bairro Teste",
            "city": "Cidadade Teste",
            "state": "UF Teste",
            "zip": Math.floor(Math.random().toString().slice(2,10))
        })
        .set('Accept', 'application/json')
        .then(response => {
            return response.body.id
        })
}

let deleteAddress = (token, addressId) => {
    return req('http://localhost:3000/api')
        .delete(`/addresses/${addressId}`)
        .set('Authorization', `Bearer ${token}`)
        .set('Accept', 'application/json')
        .then(response => {
            expect(response.statusCode).toEqual(200)
        })
}


module.exports = { getAccessToken, getAddressId, deleteAddress }
