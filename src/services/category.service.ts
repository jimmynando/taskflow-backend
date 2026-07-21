import type Category from "../types/category.js";
import { redis } from "./redis.js";

async function getCategories(): Promise<Category[]> {
  const keys = await redis.keys("category:*");

  const values = await Promise.all(keys.map((key) => redis.get(key)));

  return values.filter(Boolean).map((value) => JSON.parse(value!) as Category);
}

async function getCategoryById(id: string): Promise<Category> {
  const value = await redis.get(`category:${id}`);

  console.log(value);

  return JSON.parse(value!) as Category;
}

export default {
  getCategories,
  getCategoryById,
};
