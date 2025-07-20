import { useEffect, useState } from "react";
import TaskController from "../../controllers/TaskController";
import { Link } from "react-router-dom";

function Dashboard() {
  const { task, getTask } = TaskController();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        await getTask();
      } catch (err) {
        console.error("Gagal ambil data task", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [getTask, setLoading]);

  return (
    <>
      <div className="bg-gray-900 mb-6 py-5 px-5 rounded-md">
        <h1 className="font-bold text-2xl text-white">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Link
          to="/todo-list"
          className="bg-gray-900 p-6 rounded-md hover:shadow-md transition"
          data-aos="fade-up"
        >
          <h2 className="text-white text-lg mb-2">Total Todos</h2>
          {loading ? (
            <p className="text-3xl font-bold text-yellow-400">
              <span className="loading loading-spinner text-yellow-400 text-3xl"></span>{" "}
              <i className="fa-regular fa-notebook"></i>
            </p>
          ) : (
            <p className="text-3xl font-bold text-yellow-400">
              {task.length} <i className="fa-regular fa-notebook"></i>
            </p>
          )}
        </Link>
      </div>
    </>
  );
}

export default Dashboard;
