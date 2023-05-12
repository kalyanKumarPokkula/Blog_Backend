import express from "express";

import {PORT} from './config/server-config.js';
import { connect } from "./config/database-setup.js";
import UserRepository from "./repository/User-Repository.js";

const StartServer = async () => {

    const app = express();

    app.listen(PORT , async ()=> {
        console.log(`Server started at PORT ${PORT}`);
        connect();
        const user = new UserRepository();
        const response = await user.create({
            email : "akhil@adc.in",
            password : "12345",
            name : "akhil"
        });

        console.log(response);

    })
}

StartServer();




