import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log("MongoDB connected successfully")
        })
        connection.on('error', (err)=>{
            console.log('MOngoDB connection error, Please make sure mongoDB'+ err);
            process.exit()
        })

    } catch (error) {
       console.log("Something goes wrong");
       console.log(error)
    }
}