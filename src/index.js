const express = require("express");
const connectDatabase = require("./db/conn")
const router = require("./routers/menRouter")

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();

app.use(express.json());
app.use(router)

app.listen(port, ()=>{
    console.log(`connection is live!...running on port no... ${port}`);
})

