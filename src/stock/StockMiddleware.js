const mongoose = require("../database")
const ObjectId = mongoose.Types.ObjectId;

module.exports = (req, res, next) => {

    const mockUser = new ObjectId("5d279ff3eaf3013feaf93761")
    if( req.document ) {
        req.document.user = mockUser
    }

    if( req.query ) {
        req.query.user = mockUser
    }

    next()
}