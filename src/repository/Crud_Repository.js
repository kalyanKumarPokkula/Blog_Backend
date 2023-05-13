

export default class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            let user = await this.model.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the crudRepo");
            throw error;
        }
    }

    async delete(id){
        try {
            let user = await this.model.findByIdAndDelete(id);
            return user;
        } catch (error) {
            console.log("Something went wrong in the crudRepo");
            throw error;
        }
    }

    async update(id , update_data){
        try {
            let user = await this.model.findByIdAndUpdate(id , update_data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the crudRepo");
            throw error;
        }
    }

    async getById(id){
        try {
            let user = await this.model.findById(id);
            return user;
        } catch (error) {
            console.log("Something went wrong in the crudRepo");
            throw error;
        }
    }
}