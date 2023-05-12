import User from "../models/UserSchema.js";

class UserRepository{
    constructor(){

    }

    async create(data){
        try {
            let user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the userRepo");
            throw error;
        }
    }

    async delete(id){
        try {
            let user = await User.findByIdAndDelete(id);
            return user;
        } catch (error) {
            console.log("Something went wrong in the userRepo");
            throw error;
        }
    }


}

export default UserRepository;