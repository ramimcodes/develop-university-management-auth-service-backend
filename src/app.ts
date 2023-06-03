import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// middlware setup
app.use(cors()); // set origin policy
app.use(express.json()); // parser
app.use(express.urlencoded({ extended: true })); // any data parser

// application middlware
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;