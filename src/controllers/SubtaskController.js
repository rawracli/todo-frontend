import axios from "axios";
import { create } from "zustand";

const api = import.meta.env.VITE_API_URL;

const SubtaskController = create((set) => ({
  subtasks: [],
  error: null,
  success: null,

  getSubtasks: async (taskId) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${api}/subtasks?task_id=${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set({
        subtasks: res.data,
        error: null,
      });

      return res.data; 
    } catch (err) {
      const message = err.response?.data?.message || "Gagal memuat subtask";
      set({ error: message });
      throw new Error(message);
    }
  },

  createSubtask: async (taskId, data) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(`${api}/subtasks?task_id=${taskId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set((state) => ({
        subtasks: [...state.subtasks, res.data],
        success: "Subtask berhasil ditambahkan",
        error: null,
      }));
    } catch (err) {
      const message =
        err.response?.data?.message || "Gagal menambahkan subtask";
      set({ error: message });
    }
  },

  updateSubtask: async (id, data) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(`${api}/subtasks/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set((state) => ({
        subtasks: state.subtasks.map((item) =>
          item.id === id ? res.data : item
        ),
        success: "Subtask berhasil diupdate",
        error: null,
      }));
    } catch (err) {
      const message = err.response?.data?.message || "Gagal mengupdate subtask";
      set({ error: message });
    }
  },

  deleteSubtask: async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.delete(`${api}/subtasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set((state) => ({
        subtasks: state.subtasks.filter((item) => item.id !== id),
        success: res.data.message || "Subtask berhasil dihapus",
        error: null,
      }));
    } catch (err) {
      const message = err.response?.data?.message || "Gagal menghapus subtask";
      set({ error: message });
    }
  },

  changeStatus: async (subtaskId, status) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${api}/subtasks/change-status`,
        {
          subtask_id: subtaskId,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      set((state) => ({
        subtasks: state.subtasks.map((item) =>
          item.id === subtaskId ? res.data : item
        ),
        success: "Status berhasil diperbarui",
        error: null,
      }));
    } catch (err) {
      const message = err.response?.data?.message || "Gagal memperbarui status";
      set({ error: message });
    }
  },

  clearMessage: () => set({ error: null, success: null }),
}));

export default SubtaskController;
