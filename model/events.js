'use strict';
//import dependency
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
const EventSchema = new Schema({
    name: String,
    date: Date
});
//export our module to use in server.js
module.exports = mongoose.model('Event', EventSchema);
