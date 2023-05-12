import mongoose from "mongoose";

export const connect = async () => {
    mongoose.connect('mongodb://localhost:27017/Blog_project_dev');
}