import mongoose from "mongoose";
const communityChat = new mongoose.Schema({ 
    time: {
        type: String,
        require: true,
      },
      user: {
        type: String,
        require: true,
      },
      date: {
        type: Date,
        require: true,
      }
  
});


export default mongoose.model("communityChat", communityChat);