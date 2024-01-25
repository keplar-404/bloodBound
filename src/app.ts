import express, { json } from "express";
import { home } from "./routes";
import cors from "cors";
import database from "./db";

const app = express();
app.use(json());
app.use(cors());
database();

app.use("/", home);

// shammo codes here

// shehub codes here

export default app;
