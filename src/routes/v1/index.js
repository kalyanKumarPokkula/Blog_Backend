import  express  from "express"

import {create , destory, update,getById}  from "../../controllers/Blog-Post-Controller.js";

const router = express.Router();

router.post('/create' , create);
router.delete('/destory' , destory);
router.patch('/update'  , update);
router.get('/get' , getById);


export default router;