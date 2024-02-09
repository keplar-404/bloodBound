// socket/socket.ts
import { Server, Socket } from 'socket.io';
import Message from '../models/MessageModel';

export default function setupSocket(io: Server) {
    io.on('connection', (socket: Socket) => {
        console.log('User connected');

        socket.on('get chat history', async () => {
            try {
                const chatHistory = await Message.find().sort({ timestamp: -1 }).limit(10);
                socket.emit('chat history', chatHistory.reverse());
            } catch (error) {
                console.error('Error fetching chat history:', error);
            }
        });

        socket.on('chat message', async (msg) => {
            const newMessage = new Message({ text: msg });
            await newMessage.save();

            io.emit('chat message', { _id: newMessage._id, text: newMessage.text, timestamp: newMessage.timestamp });
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
}
