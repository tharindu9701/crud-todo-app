const express = require("express");

const app = express();

app.use(express.json());

const routes = require("./routes");
app.use("/api", routes);



const connectDB = require("./connectDb");


const port = 5000;


const startServer = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server is listening http://localhost:${port}`);
    });


};

startServer();
