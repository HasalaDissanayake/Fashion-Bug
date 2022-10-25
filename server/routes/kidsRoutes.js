const express = require('express')
//import user model
const Posts = require('../models/kidsCollection')

const router = express.Router();

//save posts

router.post('/kids/post/save', (req, res) => {
    
    let newPost = new Posts(req.body);

    newPost.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Posts Saved successfully"
        });
    });
});


//get posts

router.get('/kids/posts', (req, res) => {
    //mongoose find method
    Posts.find().exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: posts
        });
    });
});

//get a specific post

router.get("/kids/post/:id", (req, res) => {
    
    let postId = req.params.id;
    Posts.findById(postId, (err, post) => {
        if (err) {
            return res.status(400).json({
                success: false, err
            });
        }
        return res.status(200).json({
            success: true,
            post
        });
    });
});


//update post

router.put('/kids/post/update/:id', (req, res) => {
    //mongoose findbyidandupdate method
    Posts.findByIdAndUpdate(
        //to update the whole request body
        req.params.id, {
        $set: req.body
    },
        (err, post) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                success: "Updated Successfully"
            });
        }
    );
});


//delete post

//need id a specific post
router.delete('/kids/post/delete/:id', (req, res) => {
    //find by id and remove method
    Posts.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
        if (err) {
            return res.status(400).json({
                message: "Delete unsuccessfull", err
            });
        }
        return res.status(200).json({
            messsage: "Delete Successfull", deletedPost
        });
    });
});
    

module.exports = router;