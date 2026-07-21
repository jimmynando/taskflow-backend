import { redis } from "../services/redis.js";
import { categoriesList } from "./categories.js";
import { tasksList } from "./tasks.js";

export async function seed() {
  for (const category of categoriesList) {
    await redis.set(`category:${category.id}`, JSON.stringify(category));
  }

  for (const task of tasksList) {
    await redis.set(`task:${task.id}`, JSON.stringify(task));
  }

  console.log("Redis seeded");
}
