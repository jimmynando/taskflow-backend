export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  slug: string;
  color: string;
}

export interface Task {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  completed: boolean;
  dueDate: string;
}
