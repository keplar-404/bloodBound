import mongoose from "mongoose";
const communityChat = new mongoose.Schema({
  message:[
    {
        time: Date,
        user: String,
        message: String,
    },
  ] 
});

export default mongoose.model("CommunityChat", communityChat);
