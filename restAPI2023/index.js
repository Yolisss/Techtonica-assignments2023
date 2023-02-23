//adding libraries of express and cors
const express = require("express");
const cors = require("cors");

//creating an instance of express. This will be the main instance running my webserver
const app = express();

//telling express to use cors; app represents the instance we are running
//"hey express can you use cors"
app.use(cors());

//reusable in the future or make it easy to access or update
const PORT = 5001;

//START instance of express
//by default, ports are closed, in order to have it open, you need to have something
//listening to it
app.listen(PORT, () => console.log(`Hola! Server is running on PORT ${PORT}`));
