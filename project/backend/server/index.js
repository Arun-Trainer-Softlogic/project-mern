// express app entry //
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import Nechie from "./models/Nechie"

const app = express();

// middleWare
app.use(cors()); //allows request from frontend 
app.use(express.json()); //parse JSON body 

// mondoDB connection 
mongoose
.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDb connected"))
    .catch((err) => console.error("MongoDb connect is a error :" , err))

    // Routes 
  
app.post("/api/nechie", async (req, res) => {
  try {
    const newNechie = new Nechie(req.body);
    await newNechie.save();
    res.status(201).json({ message: "Nechie data saved!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// start server 
const PORT = 5000;
app.listen(PORT , ()=> console.log(`Server is Running on http://localhost:${PORT}`));
