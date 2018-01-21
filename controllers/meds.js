const responseHandler = require('../handlers/response')
const mongoose = require('mongoose')
const Medication = mongoose.model('Medication')
const Intake = mongoose.model('Intake')

var exports = {}

exports.medication = {
    create : (req, res, next) => {
        // todo add validation
        let medObj = {title:req.body.title, frequency: req.body.freq, notes: req.body.notes}
    
        Medication.create(medObj, (err, med) => {
            if(err) return next(err)
    
            exports.medication.get(req, res, next)
        })
    },

    get : (req, res, next) => {
        // todo add validation
        Medication.find({}, (err, meds) => {
            if(err) return next(err)
    
            responseHandler(res, meds)
        })
    },

    update : (req, res) => {
        // todo add validation
    },

    delete : (req, res, next) => {
        // todo add validation
        Medication.remove({ _id: req.params.id }, err => {
            if(err)
                return next(err)
    
            // success removal, return all current meds
            exports.medication.get(req, res, next)
        })
    }
}

exports.intake = {
    take : (req, res, next) => {
        Medication.findOne({ _id: req.params.id }, (err, med) => {
            // handle error
            if (err) return next(err)

            // assemble intake time
            let date = req.params.date ? req.params.date : new Date()

            // create intake
            med.intakes.addToSet({created_at: date})
            med.save((err, med) => {
                // exit if error
                if (err) return next(err)

                // send back current medication instance
                responseHandler(res, med)
            })
        })
    },
}


module.exports = exports