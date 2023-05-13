import User from "../models/UserSchema.js";
import CrudRepository from "./Crud_Repository.js";

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

}

export default UserRepository;