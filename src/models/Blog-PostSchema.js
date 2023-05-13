import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true,
        min : 10,
        max : 70
    },

    content : {
        type : String,
        required : true,
        min : 100,
        max : 500
    },

    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    
}, {timestamps : true});


const BlogPost = mongoose.model('BlogPost' ,blogPostSchema );

export default BlogPost;