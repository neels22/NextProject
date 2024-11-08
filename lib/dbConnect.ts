
import mongoose from "mongoose";


// inject typescript also here 

type ConnectionObject = {
    isConnected? : number
}

const connection:ConnectionObject = {}

async function dbConnect():Promise<void> {
    
    if (connection.isConnected) {
        
        console.log("already connected to db")
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "",{})


        connection.isConnected = db.connections[0].readyState

        console.log(db.connections[0])
        console.log("db connected successfully");
    } catch (error) {

        console.log("Database connection failed", error)

        process.exit(1)
        
    }

}


export default dbConnect;