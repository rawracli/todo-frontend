import axios from "axios";
import { create } from "zustand";

const baseUrl = import.meta.env.VITE_API_URL;
const savedToken = localStorage.getItem("token");
const savedUserRaw = localStorage.getItem("user");
const savedUser =
  savedUserRaw && savedUserRaw !== "undefined"
    ? JSON.parse(savedUserRaw)
    : null;

const AuthController = create((set) => ({
  user: savedUser,
  token: savedToken || null,
  error: null,

  setUser: (user) => set(() => ({ user })),

  refreshUserStatus: async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${baseUrl}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = res.data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("user_status", user.status);
      set({ user });
    } catch (err) {
      console.error("Gagal memperbarui status user", err);
    }
  },

  login: async (email, password, navigate) => {
    try {
      const res = await axios.post(`${baseUrl}/auth/login`, {
        email,
        password,
      });
      const { token, user } = res.data;
      set({ token, user, error: null });
      localStorage.setItem("user_status", user.status);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/dashboard");
    } catch (err) {
      set({ error: err.response?.data?.message || "Terjadi kesalahan" });
      throw err;
    }
  },

  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem("token");
  },

  register: async (data, navigate) => {
    try {
      const res = await axios.post(`${baseUrl}/auth/register`, data);

      const user = res.data.user;
      set({ user, error: null });
      navigate("/login");
    } catch (err) {
      const errorMsg =
        err.response?.data?.errors?.email?.[0] ||
        err.response?.data?.errors?.password?.[0] ||
        err.response?.data?.message ||
        "Terjadi kesalahan saat register";

      set({ error: errorMsg });
    }
  },
}));

export default AuthController;
