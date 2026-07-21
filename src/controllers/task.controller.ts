import type { Request, Response } from "express";
import taskService from "../services/task.service.js";
import type Task from "../types/task.js";

type Params = {
  id: string;
};

async function getTasks(_req: Request, res: Response) {
  const values: Task[] = await taskService.getTasks();

  res.json(values);
}

async function getTaskById(req: Request<Params>, res: Response) {
  const id = req.params.id;

  const value = await taskService.getTaskById(id);

  res.json(value);
}

function createTask(req: Request, res: Response) {}

function updateTask(req: Request, res: Response) {}

function deleteTask(req: Request, res: Response) {}

export default {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
