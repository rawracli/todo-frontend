import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import SubtaskController from "../../controllers/SubtaskController";

function TodoListDetail() {
  const { id: taskId } = useParams();
  const {
    getSubtasks,
    createSubtask,
    updateSubtask,
    deleteSubtask,
    changeStatus,
  } = SubtaskController();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSubtask, setCurrentSubtask] = useState(null);
  const [form, setForm] = useState({ title: "" });

  const [tasks, setTasks] = useState({
    pending: [],
    in_progress: [],
    completed: [],
  });

  const columns = [
    { key: "pending", title: "Pending" },
    { key: "in_progress", title: "In Progress" },
    { key: "completed", title: "Done" },
  ];

  const fetchSubtasks = async () => {
    Swal.fire({
      title: "Memuat subtasks...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const data = await getSubtasks(taskId); 
      const grouped = { pending: [], in_progress: [], completed: [] };
      data.forEach((item) => {
        if (grouped[item.status]) {
          grouped[item.status].push({ id: String(item.id), text: item.title });
        }
      });
      setTasks(grouped);
    } catch {
      Swal.fire({
        icon: "error",
        title: "Gagal memuat data",
        text: "Terjadi kesalahan saat mengambil subtasks.",
      });
    } finally {
      Swal.close();
    }
  };

  useEffect(() => {
    fetchSubtasks();
  }, [taskId]);

  const openAddModal = () => {
    setIsEditing(false);
    setForm({ title: "" });
    setIsModalOpen(true);
  };

  const openEditModal = (subtask) => {
    setIsEditing(true);
    setCurrentSubtask(subtask);
    setForm({ title: subtask.text });
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    Swal.fire({
      title: "Menyimpan...",
      text: "Mohon tunggu sebentar",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      if (isEditing) {
        await updateSubtask(currentSubtask.id, form);
      } else {
        await createSubtask(taskId, form);
      }

      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: isEditing
          ? "Subtask berhasil diupdate."
          : "Subtask berhasil ditambahkan.",
        timer: 2000,
        showConfirmButton: false,
      });

      setIsModalOpen(false);
      await fetchSubtasks();
    } catch {
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Terjadi kesalahan saat menyimpan subtask.",
      });
    }
  };

  const handleDeleteSubtask = async (id) => {
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

    if (!result.isConfirmed) return;

    Swal.fire({
      title: "Menghapus...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      await deleteSubtask(id);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Subtask berhasil dihapus.",
      });
      await fetchSubtasks();
    } catch {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan saat menghapus.",
      });
    }
  };

  const handleDragEnd = async (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = [...tasks[source.droppableId]];
    const destColumn =
      source.droppableId === destination.droppableId
        ? sourceColumn
        : [...tasks[destination.droppableId]];

    const [movedItem] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, movedItem);

    setTasks((prev) => ({
      ...prev,
      [source.droppableId]:
        source.droppableId === destination.droppableId
          ? destColumn
          : sourceColumn,
      ...(source.droppableId !== destination.droppableId && {
        [destination.droppableId]: destColumn,
      }),
    }));

    if (source.droppableId !== destination.droppableId) {
      await changeStatus(movedItem.id, destination.droppableId);
    }
  };

  return (
    <>
      <div className="bg-gray-900 mb-6 py-5 px-5 rounded-md">
        <h1 className="font-bold text-2xl text-white">Todo List Detail</h1>
      </div>

      <button
        onClick={openAddModal}
        className="font-medium bg-yellow-400 hover:bg-yellow-500 text-white text-lg px-4 py-2 rounded-md mb-6"
      >
        Tambah Subtask
      </button>

      {isModalOpen && (
        <div className="fixed px-6 inset-0 bg-black/40 flex backdrop-blur items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-md shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-white">
              {isEditing ? "Edit Subtask" : "Tambah Subtask"}
            </h2>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ title: e.target.value })}
              className="w-full border border-gray-300 p-2 rounded mb-4 text-white"
              placeholder="Judul subtask"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col) => (
            <div
              key={col.key}
              className="bg-gray-900 rounded-md p-5 min-h-[200px] flex flex-col"
            >
              <h2 className="font-semibold text-center text-xl text-white mb-3">
                {col.title}
              </h2>
              <hr className="text-gray-300 mb-4" />
              <Droppable droppableId={col.key}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`flex-1 space-y-3 transition-all ${
                      snapshot.isDraggingOver ? "bg-yellow-200 rounded-md" : ""
                    }`}
                    style={{ minHeight: "50px" }}
                  >
                    {tasks[col.key].map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-gray-950 px-4 py-2 flex justify-between items-center rounded-md shadow-sm"
                          >
                            <p className="text-white">{item.text}</p>
                            <div className="flex space-x-2">
                              <button
                                className="text-blue-600 text-xl"
                                onClick={() => openEditModal(item)}
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </button>
                              <button
                                className="text-red-600 text-xl"
                                onClick={() => handleDeleteSubtask(item.id)}
                              >
                                <i className="fa-regular fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </>
  );
}

export default TodoListDetail;
