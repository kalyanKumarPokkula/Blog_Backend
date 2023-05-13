import BlogPost from '../models/Blog-PostSchema.js';
import CrudRepository from './Crud_Repository.js';

class BlogRepository extends CrudRepository{
    constructor(){
        super(BlogPost);
    }
}

export default BlogRepository;