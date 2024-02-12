import mongoose from "mongoose";
const communityChat = new mongoose.Schema({
  chats:[
    {
        time: Date,
        user: String,
        message: String,
    },
  ] 
});

export default mongoose.model("CommunityChat", communityChat);
