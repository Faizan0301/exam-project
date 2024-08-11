const userDB = require("../models/user.schema");
const jwt=require('jsonwebtoken');

const creatPage = (req, res) => {
    return res.render('creat')
}
const creat = async (req, res) => {
    
    try {
        await userDB.create(req.body)
        return res.redirect('/login')
    } catch (err) {
        console.log(err);
    }

};
const loginPage = (req, res) => {
    return res.render('login')
}
const login = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await userDB.findOne({ username: username });
        console.log(user.id);
        if (!user) {
            console.log("User not found...");
            return res.redirect('/login')
        }
        if (user.password != password) {
            console.log("Password wrong....");
            return res.redirect('/login')
        }
        let paylode={
            id:user.id,
            username:user.username,
            email:user.email,
            phone:user.phone,
            role:user.role
        }
        const token=jwt.sign(paylode,'privet-key')
        if(user.role=='user'){
            return res.cookie('token', token).redirect('/user')
        }else{
            return res.cookie('token', token).redirect('/blog')
        }
    } catch (err) {
        console.log(err.message);
    }
}
const logout = async (req, res) => {
    res.clearCookie('user')
    return res.redirect('/login')
}

module.exports = {login,loginPage,creat,creatPage,logout};