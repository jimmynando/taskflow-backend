import type { Request, Response } from "express";

function getTasks(_req: Request, res: Response) {}
function getTaskById(req: Request, res: Response) {}
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
