const { Router } = require("express");
const { indexPage, addUserBlogPage, addUserBlog } = require("../controllers/userBlog.controller");

const user_router=Router();

user_router.get('/', indexPage)
user_router.get('/addBlog', addUserBlogPage)
user_router.post('/addBlog', addUserBlog)
// user_router.get('/editBlog:id', editBlog)
// user_router.get('/editPage', editPage)
// user_router.get('/deleteBlog:id', deleteBlog)

module.exports=user_router