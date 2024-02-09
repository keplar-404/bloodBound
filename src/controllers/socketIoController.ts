// controllers/chatController.ts
import { Request, Response } from 'express';
import Message from '../models/MessageModel';

const getChatHistory = async (req: Request, res: Response) => {
    try {
        const chatHistory = await Message.find().sort({ timestamp: -1 }).limit(10);
        res.json(chatHistory.reverse());
    } catch (error) {
        console.error('Error fetching chat history:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const postChatMessage = async (req: Request, res: Response) => {
    const { text } = req.body;

    try {
        const newMessage = new Message({ text });
        await newMessage.save();

        res.json({ _id: newMessage._id, text: newMessage.text, timestamp: newMessage.timestamp });
    } catch (error) {
        console.error('Error saving chat message:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export { getChatHistory, postChatMessage };
