import express from "express";

const app = express();

app.use(express.json());

//import routes
import todoRouter from "./routes/todo.routes";
app.use("/api/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("welcome to the todo app");
});

export default app;
