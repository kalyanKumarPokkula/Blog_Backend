import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import {PORT} from './config/server-config.js';
import { connect } from "./config/database-setup.js";
import route from "./routes/index.js";

const StartServer = async () => {

    const app = express();

    app.use(morgan('combined'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : false}));



    app.use('/api' , route);

    app.listen(PORT , async ()=> {
        console.log(`Server started at PORT ${PORT}`);
        connect();
    })

   
}

StartServer();




