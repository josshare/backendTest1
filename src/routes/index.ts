const usersRoutes = require('./usersRouter');

function routeApi(app) {
    app.use('/users', usersRoutes);
}

module.exports = routeApi;