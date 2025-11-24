import app from "./src/app";
import {config} from "./src/config/config"
import dbConnection from "./src/database/db"

const startServer= async ()=>{
    //calling database connection function
   await dbConnection();

    const port=config.port || 3000;

    app.listen(port,()=>{

    console.log(`Server is starting at port ${port}`);
})
}


startServer();