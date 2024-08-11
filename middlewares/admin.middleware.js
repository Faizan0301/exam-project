const jwt=require('jsonwebtoken');

const adminAuth = (req, res, next) => {
    const userCookie = req.cookies.token
    const token=jwt.verify(userCookie, 'privet-key');
    console.log(token);
    
    if (token.role=='admin') {
        next()
    } else {
        return res.redirect('/user')
    }
}

module.exports = adminAuth