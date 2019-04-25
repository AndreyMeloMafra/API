const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Ubeer', { useNewUrlParser: true, autoIndex: false });

mongoose.Promise = global.Promise;

module.exports = mongoose;