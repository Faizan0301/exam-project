const blogDB = require("../models/blog.Schema")

const indexPage = async (req, res) => {
    try {
        const data = await blogDB.find({})
        return res.render('blog', { data })
    } catch (err) {
        console.log(err.message);
    }
}
const addBlogPage = (req, res) => {
    return res.render('addBlog')
}
const addBlog = async (req, res) => {
    const { title, image, date, discription, id } = req.body
    if (id) {
        try {
            await blogDB.findByIdAndUpdate(id, { title, image, date, discription })
            return res.redirect('/blog')
        } catch (err) {
            console.log(err.message);
        }

    } else {
        try {
            await blogDB.create({ title, image, date, discription })
            return res.redirect('/blog')
        } catch (err) {
            console.log(err.message);
        }
    }
}
const editBlog = async (req, res) => {
    const { id } = req.params
    try {
        const data = await blogDB.findById(id)
        return res.render('editBlog', { data })
    } catch (err) {
        console.log(err.message);
    }
}
const editPage = async (req, res) => {
    try {
        const data = await blogDB.find({})
        return res.render('edit', { data })
    } catch (err) {
        console.log(err);
    }
}
const deleteBlog = async (req, res) => {
    const { id } = req.params
    try {
        await blogDB.findByIdAndDelete(id)
        return res.redirect('/editPage')
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = { indexPage, addBlogPage, addBlog, editBlog, editPage, deleteBlog }


