import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
const app: Application = express();

// Parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/v1", router);

export default app;
