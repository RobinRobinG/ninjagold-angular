const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dashboard',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;


var NinjaSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'name is required!']},
  gold: {type: Number}
}, {timestamps: true});

module.exports = mongoose.model('Ninja', NinjaSchema);
