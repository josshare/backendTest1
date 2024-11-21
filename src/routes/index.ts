const usersRoutes = require('./userRouter');
const trucksRoutes = require('./truckRouter');
const express = require('express');

function routeApi(app: any) {
    const router = express.Router();
    app.use('/api/v1', router);
    app.use('/users', usersRoutes);
    app.use('/trucks', trucksRoutes);
}

module.exports = routeApi;