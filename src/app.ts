import express, { json } from "express";
import home from "./routes";
import cors from "cors";
import database from "./db";
import http from 'http';
import socketIO from 'socket.io';
import router from './routes/index'
import { config, ConfigType } from "./config/index";
const { port, db_local } = config as ConfigType;

import errorHandler from "./middleware/errorHandler";


const app = express();
app.use(json());
app.use(cors());
database();




import setupSocket from './socket/socket';


const server = http.createServer(app);
const io = new socketIO.Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true,
    },
});




app.use('/api/chat', router);

setupSocket(io);





// mongoose.connect(db_local)
// interface IMessage extends Document {
//   text: string;
//   timestamp?: Date;
// }
// const Message = mongoose.model<IMessage>('Message', new Schema({
//   text: String,
//   timestamp: { type: Date, default: Date.now },
// }));


// const httpServer = createServer(app);
// const io = new Server(httpServer, { cors :{
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST"],
//     credentials: true
// } });

// io.on('connection', (socket) => {
//   console.log('User connected');

//   socket.on('get chat history', async () => {
//     try {
//       const chatHistory = await Message.find().sort({ timestamp: -1 }).limit(10);
//       socket.emit('chat history', chatHistory.reverse());
//     } catch (error) {
//       console.error('Error fetching chat history:', error);
//     }
//   });

//   socket.on('chat message', async (msg) => {
//     const newMessage = new Message({ text: msg });
//     await newMessage.save();

//     io.emit('chat message', { _id: newMessage._id, text: newMessage.text, timestamp: newMessage.timestamp });
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });
// httpServer.listen(port, () =>
//         console.log(
//           `Express server is running on ${port} & connected to MongoDB using Mongoose`
//         )
//       );
server.listen(port, () =>
        console.log(
          `Express server is running on ${port} & connected to MongoDB using Mongoose`
        )
      )
app.use("/", home);

// shammo codes here

// shehub codes here

// error handler
app.use(errorHandler);

export default app;
