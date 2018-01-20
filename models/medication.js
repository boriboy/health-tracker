const mongoose = require('mongoose')
var Schema = mongoose.Schema

// ----- [intake schema] ----- //
let intakesSchema = new Schema({
    created_at: Date
})

// ----- [medications schema] ----- //
let medicationsSchema = new Schema({
    title:  String,
    frequency:  Number,
    notes: [String],
    intakes: [intakesSchema]
})


// static
medicationsSchema.statics = {
    load: function() {
        return this.find;
    }
}


var Medication = mongoose.model('Medication', medicationsSchema)
var Intake = mongoose.model('Intake', medicationsSchema)