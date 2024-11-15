import Car from "../model/car.model.js";

export const getCar = async (req, res)=>{
    try{
        const car = await Car.find()
        res.status(200).json(car)
    }
    catch(error){
        console.log("Error: ", error)
        res.status(500).josn(error)
    }
}


