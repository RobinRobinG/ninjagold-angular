const controller = require('./controllers')
module.exports = function(app){
	//GET: homepage
    app.get('/ninja', controller.home);
    app.post('/ninja', controller.add);
    app.delete('/ninja/:id', controller.delete);
    app.post('/ninja/:id', controller.update);
}