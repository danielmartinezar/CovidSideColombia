import mongoose from "mongoose"
const uri = "mongodb://127.0.0.1/covidData"
const connectDB = async () => {
    mongoose.connect(uri, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("base conectada")
        }
    })
}
export default connectDB