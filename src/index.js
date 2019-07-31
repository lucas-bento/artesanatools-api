const express = require('express');
const bodyParser = require('body-parser'); 

const Crud = require('./crud/CrudController')
const Auth = require('./authentication/AuthenticationController')

const AuthenticationMiddleware = require('./authentication/AuthenticationMiddleware')

const Product = require('./stock/product/Product').Product
const Material = require('./stock/material/Material').Material
const SaleChannel = require('./sale/Sale').SaleChannel
const User = require('./user/User')


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', AuthenticationMiddleware)


const crudControlers  = [
    new Auth().register('/authentication', app),
    new Crud(Product).register('/api/product', app),
    new Crud(Material).register('/api/material', app),
    new Crud(SaleChannel).register('/api/sale-channel', app),
    new Crud(User).register('/api/user', app),
]

app.listen(3000);

