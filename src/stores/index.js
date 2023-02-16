import { create } from "zustand";

export const useStore = create((set) => ({
  todo: "Some title",
  setTodo: (newTodo) => set({ todo: newTodo })
}));