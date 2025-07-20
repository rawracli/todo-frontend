import { useEffect, useState } from "react";
import TaskController from "../../controllers/TaskController";
import PaymentController from "../../controllers/PaymentController";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function TodoList() {
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    deadline: "",
    video: "",
    image: null,
  });

  const { task, getTask, storeTask, clearMessage, deleteTask } =
    TaskController();

  const handleStoreTask = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: editId ? "Menyimpan perubahan..." : "Menyimpan...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      await storeTask(formData, null, editId);
      await getTask();
      setForm({
        title: "",
        description: "",
        deadline: "",
        video: "",
        image: null,
      });
      setEditId(null);
      setModal(false);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: editId
          ? "Perubahan berhasil disimpan"
          : "Todo berhasil ditambahkan",
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan saat menyimpan task.",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        await getTask();
      } catch (error) {
        console.error("Gagal mengambil task:", error);
      }

      setLoading(false);
    };

    fetchData();
  }, [getTask]);

  const extractYouTubeId = (url) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/
    );
    return match ? match[1] : null;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    clearMessage();
  };

  const openAddModal = () => {
    const isPremium = localStorage.getItem("user_status") === "premium";
    if (!isPremium && task.length >= 1) {
      Swal.fire({
        title: "Upgrade ke Premium",
        text: "Akun gratis hanya bisa menambahkan 1 todo. Upgrade ke premium sekarang?",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Lihat Plan",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/plans";
        }
      });

      return;
    }

    setForm({
      title: "",
      description: "",
      deadline: "",
      video: "",
      image: null,
    });
    setEditId(null);
    setModal(true);
  };

  const openEditModal = async (task) => {
    setEditId(true);
    setEditId(task.id);
    setForm({
      title: task.title,
      description: task.description,
      deadline: task.deadline,
      video: task.video || "",
      image: null,
    });
    setModal(true);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Yakin ingin menghapus?",
      text: "Data tidak bisa dikembalikan setelah dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: "Menghapus...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        await deleteTask(id);
        await getTask();
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Todo berhasil dihapus.",
        });
      } catch {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Terjadi kesalahan saat menghapus.",
        });
      }
    }
  };

  return (
    <>
      <div className="bg-gray-900 mb-6 py-5 px-5 rounded-md">
        <h1 className="font-bold text-2xl text-white">Todo List</h1>
      </div>

      <button
        className="font-medium bg-yellow-400 hover:bg-yellow-500 text-white text-lg px-4 py-2 rounded-md"
        onClick={() => openAddModal()}
      >
        Tambah Todo
      </button>
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-6 backdrop-blur">
          <div
            className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h2 className="text-xl text-white font-bold mb-4">
              {editId ? "Edit Todo" : "Tambah Todo"}
            </h2>
            <form onSubmit={handleStoreTask}>
              <div className="mb-3">
                <label className="block text-white mb-1">Judul</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full border border-white text-white px-3 py-2 rounded"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-white mb-1">Deskripsi</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full border border-white text-white px-3 py-2 rounded"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="block text-white mb-1">
                  Gambar (opsional)
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  accept="image/*"
                  className="w-full border border-white text-white px-3 py-2 rounded"
                />
              </div>
              <div className="mb-3">
                <label className="block text-white mb-1">
                  Link Video YouTube (opsional)
                </label>
                <input
                  type="url"
                  name="video"
                  value={form.video}
                  onChange={handleChange}
                  className="w-full border border-white text-white px-3 py-2 rounded"
                />
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setModal(false)}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-yellow-400 text-white hover:bg-yellow-500"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loading ? (
        <div className="bg-gray-900 py-8 px-6 rounded-md text-center mt-6">
          <span className="loading loading-spinner text-primary text-3xl"></span>
          <p className="text-gray-500 mt-4 text-sm">Sedang memuat data...</p>
        </div>
      ) : task.length === 0 ? (
        <div className="bg-gray-900 py-8 px-6 rounded-md text-center mt-6">
          <p className="text-white text-sm">Belum ada todo.</p>
        </div>
      ) : (
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {task.map((task) => (
            <div
              key={task.id}
              className="bg-gray-900 rounded-lg p-4 hover:shadow-md cursor-pointer"
              data-aos="fade-up"
            >
              <div className="flex justify-between">
                <Link
                  to={`/todo-list-detail/${task.id}`}
                  className="text-xl font-semibold mb-1 text-white hover:underline w-full"
                >
                  {task.title}
                </Link>

                <div className="flex space-x-3">
                  <button
                    className="text-lg font-medium text-primary hover:underline hover:cursor-pointer"
                    onClick={() => openEditModal(task)}
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button
                    className="text-lg font-medium text-red-600 hover:underline hover:cursor-pointer"
                    onClick={() => handleDelete(task.id)}
                  >
                    <i className="fa-regular fa-trash"></i>
                  </button>
                </div>
              </div>
              <Link to={`/todo-list-detail/${task.id}`}>
                <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                  {task.description}
                </p>
                {task.video && extractYouTubeId(task.video) ? (
                  <div className="mt-3">
                    <iframe
                      src={`https://www.youtube.com/embed/${extractYouTubeId(
                        task.video
                      )}`}
                      className="w-full h-48 rounded"
                      frameBorder="0"
                      allowFullScreen
                      title="Video Preview"
                    ></iframe>
                  </div>
                ) : task.image ? (
                  <img
                    src={task.image}
                    alt="Preview"
                    className="mt-3 w-full h-48 object-cover rounded"
                  />
                ) : (
                  <img
                    src="/public/default-featured-image.png.jpg"
                    alt="Preview"
                    className="mt-3 w-full h-48 object-cover rounded"
                  />
                )}
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default TodoList;
