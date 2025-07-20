import axios from "axios";
import { create } from "zustand";

const api = import.meta.env.VITE_API_URL;

const TaskController = create((set) => ({
  task: [],
  error: null,
  success: null,

  getTask: async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${api}/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set({ task: res.data, error: null });
    } catch (err) {
      const message = err.response?.data?.message || "Gagal mengambil data todo";
      set({ error: message, task: [] });
    }
  },

  storeTask: async (formData, navigate, id = null) => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        id ? `${api}/tasks/${id}` : `${api}/tasks`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      set({
        success: "Task berhasil disimpan",
        error: null,
      });

      navigate && navigate("/todo-list");
    } catch (err) {
      const message = err.response?.data?.message || "Gagal menyimpan task. Silakan coba lagi.";
      set({ error: message, success: null });
    }
  },

  deleteTask: async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.delete(`${api}/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set((state) => ({
        task: state.task.filter((task) => task.id !== id),
        success: res.data.message,
        error: null,
      }));
    } catch (err) {
      const message = err.response?.data?.message || "Gagal menghapus task";
      set({ error: message });
    }
  },

  clearMessage: () => set({ error: null, success: null }),
}));

export default TaskController;
