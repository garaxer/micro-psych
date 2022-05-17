import serverlessExpress from "@vendia/serverless-express";
import express from "express";
const PORT = process.env.PORT ?? 8081;

export const app = express();

app.get("/", (req, res) => {
  res.send("Thanks Matt!~");
});

console.log("I am alive");
// app.listen(PORT, () => console.log("Listening on 8081"));

export const handler = serverlessExpress({ app });
