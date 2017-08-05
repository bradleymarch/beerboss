const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const moment = require('moment');

mongoose.Promise = global.Promise;

const userSchema = mongoose.Schema({

	username: {type: String, required: true},
	password: {type: String, required: true},
	beerlist: {type: Array, default: []},
	beerRating: {type: Array, default: []},

});

userSchema.methods.apiRepr = function() {
	return {
		username: this.username || '',
		beerlist: this.beerlist,
		beerRating: this.beerRating,
	};
}

userSchema.methods.validatePassword = function(password) {
	return bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = function(password) {
	return bcrypt.hash(password, 10);
}

const User = mongoose.model('User', userSchema);

module.exports = {User};
