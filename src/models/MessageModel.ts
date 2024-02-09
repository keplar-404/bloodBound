// models/messageModel.ts
import { Document, Schema, model } from 'mongoose';

interface IMessage extends Document {
    text: string;
    timestamp?: Date;
}

const Message = model<IMessage>('Message', new Schema({
    text: String,
    timestamp: { type: Date, default: Date.now },
}));

export default Message;
