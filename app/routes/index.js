var quizRoutes = require('./quiz_routes.js');

module.exports = function(app, db) {
    app.use('/api', quizRoutes);
};
