const getTime = (req, res, next) => {
    const now = new Date()
    const hour = now.getHours()
    res.locals.hour = hour
    next()
}


const validateTime = (req, res, next) => {
    if (res.locals.hour > 12 && res.locals.hour < 24){
        next()
    }
    else{
        res.json({message: "Is not the hour to publicate a post"})
    }
}

module.exports = {
    getTime,
    validateTime
}