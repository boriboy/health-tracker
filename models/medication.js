const mongoose = require('mongoose')

// ----- [schema definitions] ----- //
var Schema = mongoose.Schema


// ----- [medications schema] ----- //
let medicationsSchema = new Schema({
    title:  String,
    frequency:  Number,
    notes: [String]
})

// static
medicationsSchema.statics = {
    load: function() {
        return this.find;
    }
}


// 

var Medication = mongoose.model('Medication', medicationsSchema)