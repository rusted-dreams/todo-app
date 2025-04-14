import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  markAsDone,
} from "../controllers/todos.controller";

const todoRouter = Router();

todoRouter.route("/create-todo").post(createTodo);
todoRouter.route("/get-all-todos").get(getAllTodos);
todoRouter.route("/delete").delete(deleteTodo);
todoRouter.route("/markdone").patch(markAsDone);

export default todoRouter;
