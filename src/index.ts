import app from "./app";
import { config, ConfigType } from "./config/index";
import mongoose from "mongoose";

const { port, db_local } = config as ConfigType;

mongoose
  .connect(db_local)
  .then(() => {
    app.listen(port, () => console.log(`Express server is running on ${port} & connected to MongoDB using Mongoose`));
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err.message));
