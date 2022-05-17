import serverlessExpress from "@vendia/serverless-express";
import express, { Request, Response } from "express";
const PORT = process.env.PORT ?? 8081;

export const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Thanks Matt");
});
// app.listen(PORT, () => console.log("Listening on 8081"));

export const handler = serverlessExpress({ app });
