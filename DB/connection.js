import mongoose from 'mongoose'

const connectDB  = async ()=>{
    console.log(process.env.DB_CLOUD);
    return await mongoose.connect(process.env.DB_LOCAL)
    .then(res=>console.log(process.env.DB_CLOUD))
    .catch(err=>console.log(` Fail to connect  DB.........${err} `))
}   


export default connectDB;