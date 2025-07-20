import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthController from "../../controllers/AuthController";
import Swal from "sweetalert2";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const register = AuthController((state) => state.register);
  const error = AuthController((state) => state.error);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegiter = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Register...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await register(form, navigate);
      Swal.fire({
        icon: "success",
        title: "Berhasil Register",
        text: "Pendaftaran berhasil silahkan login"
      }); 
    } catch (err) {
      Swal.fire({
          icon: "error",
          title: "Gagal Register",
          text: err.response?.data?.message || "Pendaftaran gagal, silahkan coba lagi nanti",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-gray-900 shadow-lg w-5xl grid md:grid-cols-2 grid-cols-1 md:rounded-3xl rounded-xl">
        <div className="bg-gray-800 rounded-l-3xl hidden md:flex justify-center items-center">
          <Link to="/" className="text-6xl text-white font-bold">
            Todobee
          </Link>
        </div>
        <div className="py-15 px-10">
          <h2 className="font-bold text-white text-center text-4xl">Daftar</h2>
          <form className="mt-5" onSubmit={handleRegiter}>
            <div>
              <label className="text-gray-300">Nama</label>
              <label className="input validator w-full mt-1">
                <input
                  type="text"
                  placeholder="nama lengkap"
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mt-3">
              <label className="text-gray-300">Email</label>
              <label className="input validator w-full mt-1">
                <input
                  type="email"
                  placeholder="mail@site.com"
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mt-3">
              <label className="text-gray-300">Password</label>
              <label className="input validator w-full mt-1">
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  minLength={6}
                  type="password"
                  placeholder="Password"
                  required
                />
              </label>
            </div>
            {error && (
              <div className="mt-4">
                <p className="text-red-600">{error}</p>
              </div>
            )}
            <div className="mt-4">
              <button
                type="submit"
                className="text-white btn hover:bg-yellow-500 bg-yellow-400 w-full"
              >
                Daftar
              </button>
            </div>
            <div className="mt-2">
              <small className="text-gray-300">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-yellow-400 hover:text-yellow-500">
                  Login sekarang
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
