const fetch = require('node-fetch');

const data = {
    username: "Vegeta da Silva",
    email: "vegeta@gmail.com",
    cpf: "74700447010",
    password: "kakaroto",
    mothers_name: "Bulma",
    primary_phone: "88981112222"
};

const options = {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
};

const API_URL = 'http://54.152.89.215:8000/patients/signup/'

fetch(API_URL, options)
    .then(res => res.json())
    .then(json => console.log(json))