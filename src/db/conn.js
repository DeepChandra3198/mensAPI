const mongoose = require("mongoose");

const connectDatabase= ()=>{
    
    mongoose.connect("mongodb://127.0.0.1/Olympic", {
//   useCreateIndex: true,  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(() => {
    console.log("Connection successful");
    }).catch((error) => {
    console.error("Connection failed:",error);
    });
    
}
module.exports = connectDatabase;

