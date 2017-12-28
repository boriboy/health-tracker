// success json response
let success = function (data) {
    return {code:200, data:data}
}

// fail json response
let fail = function (error) {
    return {code:500, message:error.message}
}

module.exports = (res, data, err) => {
    err ? res.status(500).json(fail(err)) : res.status(200).json(success(data))
}