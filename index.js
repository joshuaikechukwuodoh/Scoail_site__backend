const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();


const app = express();




const port = 3000;


// Middleware
app.use(express.json());

app.use(helmet());
app.use(morgan("common"));

async function connectDB() {
    try {
      await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
      });
      console.log("Connected to MongoDB successfully!");
    } catch (error) {
      console.error(" MongoDB Connection Error:", error);
    }
  }
  


connectDB();

app.use("/api/users", userRoute);

app.use("/api/auth", authRoute);

app.use("/api/posts", postRoute);

app.listen(port, () => {
    console.log(`Successfully started server on port localhost:${port}.`);
  });
  
