const userDB = require("../models/user.schema");
const jwt=require('jsonwebtoken');

const indexPage = async (req, res) => {
    try {
        const user = await userDB.find({})
        return res.render('userBlog', { user })
    } catch (err) {
        console.log(err.message);
    }
}
const addUserBlogPage = async(req, res) => {
    const token=jwt.verify(req.cookies.token, 'privet-key');
    try {  
        return res.render('addUserBlog',{id:token.id})
    } catch (error) {
        return console.log(error.message);
        
    }
}
const addUserBlog=async(req,res)=>{
    const { title, image, date, discription, id } = req.body;
    try {
        await blogDB.create({ title, image, date, discription });
        let user=await userDB.findById(id);
        let extCat=await extCatModel.findOne({name:name});
    subCat.extCatId.push(extCat._id);
    await subCat.save();
        return res.redirect('/blog')
    } catch (err) {
        console.log(err.message);
    }
}

module.exports={indexPage,addUserBlogPage}