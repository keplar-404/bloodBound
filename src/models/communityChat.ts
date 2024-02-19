import mongoose from "mongoose";
const communityChat = new mongoose.Schema({
  chats:[
    {
        date: Date,
        user: String,
        message: String,
    },
  ] 
});

export default mongoose.model("communityChat", communityChat);