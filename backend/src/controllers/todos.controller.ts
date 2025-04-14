import { Request, RequestHandler, Response } from "express";
import pool from "../db/connectDB";

// todo type definition:
interface Todo {
  id?: number;
  title: string;
  completed?: boolean;
  created_at?: Date;
}

// create a todo endpoint
export const createTodo = async (req: Request, res: Response) => {
  const todo: Todo = req.body;
  const query: string = "INSERT INTO todo (title) VALUES ($1)";
  try {
    await pool.query(query, [todo.title]);
    res.status(201).json({ message: "Todo created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
};

// get all todos
export const getAllTodos = async (req: Request, res: Response) => {
  const query = "SELECT * FROM todo";
  try {
    const todos = await pool.query(query);
    res.status(200).json(todos.rows);
  } catch (error) {
    res.status(500).json({ message: "error fetching todos" });
  }
};

//delete a todo
export const deleteTodo = async (req: Request, res: Response) => {
  const query = "DELETE FROM todo WHERE id=$1";
  const id = req.params.id;
  console.log(id);

  try {
    await pool.query(query, [id]);
    res.status(201).json({ message: "todo deleted" });
  } catch (error) {
    res.status(500).json({ message: "error deleting todo" });
  }
};

// mark todo as done
export const markAsDone = async (req: Request, res: Response) => {
  const query = "UPDATE todo SET completed=true WHERE id=$1";
  const id = req.params.id;
  try {
    await pool.query(query, [id]);
    res.status(200).json({ message: "marked completed" });
  } catch (error) {
    res.status(500).json({ message: "couldn't mark complete" });
  }
};

// edit a todo
