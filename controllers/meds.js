const responseHandler = require('../handlers/response')
const mongoose = require('mongoose')
const Medication = mongoose.model('Medication')

var exports = {}

exports.create = (req, res, next) => {
    // todo add validation
    let medObj = {title:req.query.title, frequency: req.query.freq, notes: req.query.notes}

    Medication.create(medObj, (err, med) => {
        if(err) return next(err)

        exports.get(req, res, next)
    })
}

exports.get = (req, res, next) => {
    // todo add validation
    Medication.find({}, (err, meds) => {
        if(err) return next(err)

        responseHandler(res, meds)
    })
}

exports.update = (req, res) => {
    // todo add validation
}

exports.delete = (req, res) => {
    // todo add validation
}

module.exports = exports