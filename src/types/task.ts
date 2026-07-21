export default interface Task {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  completed: boolean;
  dueDate: string;
}
