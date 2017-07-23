var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator')

// email requires additional NPM package mongoose unique validator
var schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }] //ref tells mongoose that theres a connection to another model
});

schema.plugin(mongooseUniqueValidator);

// automatically creates the collection in mongoDB
module.exports = mongoose.model('User', schema);
