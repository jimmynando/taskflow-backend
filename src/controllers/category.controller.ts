import type { Request, Response } from "express";
import categoryService from "../services/category.service.js";
import type Category from "../types/category.js";

type Params = {
  id: string;
};

async function getCategories(_req: Request, res: Response): Promise<void> {
  const values: Category[] = await categoryService.getCategories();

  res.json(values);
}

async function getCategoryById(req: Request<Params>, res: Response) {
  const { id } = req.params;

  const value: Category = await categoryService.getCategoryById(id);

  res.json(value);
}

function createCategory(req: Request, res: Response) {}
function updateCategory(req: Request, res: Response) {}
function deleteCategory(req: Request, res: Response) {}

export default {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
