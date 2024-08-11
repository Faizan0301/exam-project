const { Router } = require("express");
const { indexPage, addBlogPage, addBlog, editBlog, editPage, deleteBlog } = require("../controllers/blogController");

const b_router = Router()

b_router.get('/', indexPage)
b_router.get('/addBlog', addBlogPage)
b_router.post('/addBlog', addBlog)
b_router.get('/editBlog:id', editBlog)
b_router.get('/editPage', editPage)
b_router.get('/deleteBlog:id', deleteBlog)

module.exports=b_router