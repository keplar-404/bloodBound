import app from "./app";
import { config, ConfigType } from "./config/index";
import mongoose from "mongoose";

const { port, db_local } = config as ConfigType;

export default function database () {
  mongoose
    .connect(db_local)
    .then(() => {
      app.listen(port, () =>
        console.log(
          `Express server is running on ${port} & connected to MongoDB using Mongoose`
        )
      )
    })
    .catch((err: Error) =>
      console.error("Error connecting to MongoDB:", err.message)
    );
}
