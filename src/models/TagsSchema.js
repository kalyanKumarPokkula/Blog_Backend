import mongoose from "mongoose";

const tagsSchema = new mongoose.Schema({
    name :{
        type : String,
        unique : true,
        required : true
    },
    BlogPost_Id : [
        {
            type  : mongoose.Schema.Types.ObjectId,
            ref : 'BlogPost'
        }

    ]
},{timestamps : true});


export default mongoose.model('Tags' , tagsSchema);
