const router = require("express").Router();


const Posts = require("../models/Posts");



//create a posts
router.post("/", async (req, res) => {
    const posts = new Posts(req.body);
    
    try{
        const savedPosts = await posts.save();
        res.status(200).json(savedPosts);

    }catch(e){
        res.status(400).json({error: e.message});
    }


});
//update a post
//delete a post
//like a post
//get a post
//get timeline posts



module.exports = router;