import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AuthController from "../../controllers/AuthController";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: null,
  });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
        if (res.data.avatar) {
          setAvatarPreview(
            `${import.meta.env.VITE_API_URL_IMAGE}/storage/${res.data.avatar}`
          );
        }
      } catch (err) {
        console.error("Gagal memuat profil", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Menyimpan...",
      text: "Mohon tunggu sebentar",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("email", user.email);
      if (avatarFile) {
        formData.append("avatar", avatarFile);
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedUser = response.data.user;

      localStorage.setItem("user", JSON.stringify(updatedUser));
      const updateUser = AuthController.getState().setUser;
      updateUser(updatedUser);

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Profile berhasil di perbarui",
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan, coba lagi nanti",
      });
    }
  };

  const handleDeleteAvatar = async () => {
    Swal.fire({
      title: "Menghapus...",
      text: "Mohon tunggu sebentar",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${import.meta.env.VITE_API_URL}/user/delete-avatar`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const currentUser = AuthController.getState().user;
      const updatedUser = { ...currentUser, avatar: null };

      localStorage.setItem("user", JSON.stringify(updatedUser));
      const updateUser = AuthController.getState().setUser;
      updateUser(updatedUser);

      setAvatarPreview(null);
      setAvatarFile(null);

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Avatar berhasil dihapus",
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan, coba lagi nanti",
      });
    }
  };

  return (
    <>
      <div className="bg-gray-900 mb-6 py-5 px-5 rounded-md">
        <h1 className="font-bold text-2xl text-white">My Profile</h1>
      </div>

      <div className="grid xl:grid-cols-3 grid-cols-1">
        <div
          className="bg-gray-900 mb-6 py-5 px-5 rounded-md min-h-[300px] flex items-center justify-center"
          data-aos="fade-up"
        >
          {loading ? (
            <span className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></span>
          ) : (
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-3">
                <img
                  src={avatarPreview || "/src/assets/profile-default.png"}
                  alt="avatar"
                  className="object-cover rounded h-56 w-full shadow"
                />
              </div>

              <div className="mb-3">
                <label className="block text-white mb-1">Name</label>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="w-full border border-white text-white px-3 py-1 rounded"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block text-white mb-1">Email</label>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="w-full border border-white text-white px-3 py-1 rounded"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block text-white mb-1">Avatar</label>
                <input
                  type="file"
                  onChange={handleAvatarChange}
                  accept="image/*"
                  className="w-full border border-white text-white px-3 py-1 rounded"
                />
              </div>

              <div className="mb-3 flex space-x-3">
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium transition-colors px-3 py-1 rounded-sm"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleDeleteAvatar}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-medium transition-colors px-3 py-1 rounded-sm"
                >
                  Delete Avatar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
