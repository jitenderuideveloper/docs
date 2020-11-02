const mongoose = require('mongoose');

const userSchema = require('../schemas/user.schema');


mongoose.model('User', userSchema);