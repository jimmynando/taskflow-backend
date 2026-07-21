import type Task from "../types/task.js";
import { redis } from "./redis.js";

async function getTasks(): Promise<Task[]> {
  const keys = await redis.keys("task:*");

  const values = await Promise.all(keys.map((key) => redis.get(key)));

  return values.filter(Boolean).map((value) => JSON.parse(value!) as Task);
}

async function getTaskById(id: string): Promise<Task> {
  const value = await redis.get(`task:${id}`);

  return JSON.parse(value!) as Task;
}

export default {
  getTasks,
  getTaskById,
};
