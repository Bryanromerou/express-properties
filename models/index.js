const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/Properties";
const Property = require("./Property");

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

mongoose.connection.on("connected",()=>{
    console.log("Succesfully connected to mongodb...");
});

mongoose.connection.on("error",(err)=>{
    console.log(`Mongodb connection error: ${err}`);
});

module.exports = {
    Property: Property,
};// the reason why this it an object is becuase we might want to send out multiple modules