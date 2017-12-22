// success json response
let success = function (data) {
    return {code:200, data:data}
}

// fail json response
let fail = function (error) {
    return {code:500, message:error.message}
}

module.exports = (res, data) => {
    res.locals.error ? res.json(fail(res.locals.error)) : res.json(success(data))
}