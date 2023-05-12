import express from "express";

import {PORT} from './congfig/server-config.js';

const StartServer = async () => {

    const app = express();

    app.listen(PORT , async ()=> {
        console.log(`Server started at PORT ${PORT}`);
    })
}

StartServer();




