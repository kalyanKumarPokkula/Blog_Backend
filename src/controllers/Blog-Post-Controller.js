import BlogService from "../services/Blog-Post-Service.js";

const blogService = new BlogService();

const create = async (req ,res) => {
    try {
        let blog = await blogService.create(req.body);
        return res.status(201).json({
            data : blog,
            message : "Successfully created a blog",
            success : true,
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            message : "Something went wrong",
            success : false,
            err : error
        })
    }
}

const destory = async (req ,res) => {
    try {
        let blog = await blogService.destroy(req.query.id);
        return res.status(201).json({
            data : blog,
            message : "Successfully destoryed a blog",
            success : true,
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            message : "Something went wrong",
            success : false,
            err : error
        })
    }
}

const update = async (req ,res) => {
    try {
        let blog = await blogService.update(req.query.id, req.body);
        return res.status(201).json({
            data : blog,
            message : "Successfully updated a blog",
            success : true,
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            message : "Something went wrong",
            success : false,
            err : error
        })
    }
}

const getById = async (req ,res) => {
    try {
        let blog = await blogService.getById(req.query.id);
        return res.status(201).json({
            data : blog,
            message : "Successfully fetched a blog",
            success : true,
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            message : "Something went wrong",
            success : false,
            err : error
        })
    }
}

export {
    create,
    destory,
    update,
    getById
}