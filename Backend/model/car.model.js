import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: String,
    image: String
})


const Car = mongoose.model("Car", carSchema)

export default Car;