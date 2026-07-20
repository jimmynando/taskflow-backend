import type { Request, Response } from "express";

function getCategories(_req: Request, res: Response) {}
function getCategoryById(req: Request, res: Response) {}
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
