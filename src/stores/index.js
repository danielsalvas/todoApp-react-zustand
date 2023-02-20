import { create } from "zustand";

export const useStore = create((set) => ({
  todos: [
    {
      id: 1,
      title: 'Watch the next Marvel Movie',
      completed: false,
    },
    {
      id: 2,
      title: 'Record the next Video',
     completed: false,
    },
    {
      id: 3,
      title: 'Wash the dishes',
      completed: false,
    },
    {
      id: 4,
      title: 'Study 2 hours',
      completed: false,
    }
  ],
  setTodos: (newTodo) => set({ todo: newTodo })
}));