const express = require ("express");
const router = express.Router();
const Post = require("../models/Post.js");


router.post("/create", async (req, res) => {
    try {
        const postCreated = await Post.create({... req.body})
        res.status(201).json(postCreated)

    } 
    catch (error) {
        res.status(500).json({ message: 'Error al publicar post'});
    };
})

router.get("/", async (req, res) => {
    try {
        const allPosts = await Post.find()
        res.json(allPosts)
    } 
    catch (error) {
        res.status(500).json({ message: 'Error al obtener todos los post'});
    }
})

router.get("/postsWithPagination", async (req, res) => {
    try {
        const page = req.query.page
        console.log(page)
        const allPosts = await Post.find().skip(page * 10).limit(10)
        res.json(allPosts)
    } 
    catch (error) {
        res.status(500).json({ message: 'Error al obtener todos los post'});
    }
})

router.get("/id/:_id", async (req, res) => {
    try {
        const _id = req.params._id
        const postId = await Post.findById(_id)
        res.json(postId)
    } 
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el post por su id'});
    }
})


router.get("/title/title", async (req, res) => {
    try {
        const newTitle = req.params.title
        const postTitle = await Post.findOne({ title: newTitle});
        res.json(postTitle)
    } 
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el post por su title'})
    };
});


router.put("/id/:_id", async (req, res) => {
    try {
        const _id = req.params._id;
        const newBody = req.body.body
        const postUpgraded = await Post.findByIdAndUpdate(_id, {body: newBody})
        res.json(postUpgraded)
    } 
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el post por su id'});
    }
})

router.delete("/id/:_id", async (req, res) =>{
    try {
        const _id = req.params._id;
        const newDelete = await Post.findByIdAndDelete(_id);
        res.json(newDelete);
    } 
    catch (error) {
        res.status(500).json({message: 'Error al eliminar el post'})
    }
})

router.delete("/", async (req,res) => {
    try {
        const deleteAll = await Post.deleteMany()
        res.json(deleteAll)
    } catch (error) {
        res.status(500).json({message: 'Error al eliminar todos los posts'})
    }
})

module.exports = router