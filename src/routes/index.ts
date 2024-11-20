const usersRoutes = require('./userRouter');
const trucksRoutes = require('./truckRouter');

function routeApi(app: any) {
    app.use('/users', usersRoutes);
    app.use('/trucks', trucksRoutes);
}

module.exports = routeApi;