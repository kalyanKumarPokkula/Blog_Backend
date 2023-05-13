import {BlogRepository} from "../repository/index.js";

export default class BlogService{
    constructor(){
        this.blogRepository = new BlogRepository();
    }

    async create(data){
        try {
            let blog = await this.blogRepository.create(data);
            return blog;
        } catch (error) {
            console.log("Something went wrong in the Blog servicelayer");
            throw error;
        }
    }

    async destroy(id){
        try {
            let blog = await this.blogRepository.delete(id);
            return blog;
        } catch (error) {
            console.log("Something went wrong in the Blog servicelayer");
            throw error;
        }
    }

    async update(id,data){
        try {
            let blog = await this.blogRepository.update(id,data);
            return blog;
        } catch (error) {
            console.log("Something went wrong in the Blog servicelayer");
            throw error;
        }
    }

    async getById(id){
        try {
            let blog = await this.blogRepository.getById(id);
            return blog;
        } catch (error) {
            console.log("Something went wrong in the Blog servicelayer");
            throw error;
        }
    }
}
