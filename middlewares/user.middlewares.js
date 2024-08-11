const userAuth = (req, res, next) => {
    const userCookie = req.cookies.token
    if (userCookie) {
        next()
    } else {
        return res.redirect('/login')
    }
}

module.exports = userAuth