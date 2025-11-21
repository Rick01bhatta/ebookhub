import app from "./src/app";

const port=3000;
const startServer=()=>{app.listen(port,()=>{
    console.log("Server is starting...");
})
}
startServer();