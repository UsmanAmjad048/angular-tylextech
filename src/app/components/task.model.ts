// task.model.ts

export interface Task {
    id: number;
    title: string;
    description: string;
    created_date: Date;
    due_date: Date;
    status: string;
    image: string;
    user: string;
  }
  