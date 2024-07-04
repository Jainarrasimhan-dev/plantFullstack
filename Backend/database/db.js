import mongoose from "mongoose";

const Connection = async()=>{
    const URL = 'mongodb://127.0.0.1:27017/plantAppClone'
    
    try {
        await mongoose.connect(URL)
        console.log('Mongodb plant app  connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }

}


export default Connection