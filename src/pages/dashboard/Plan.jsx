// src/pages/Plans.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import PaymentController from "../../controllers/PaymentController";
import Swal from "sweetalert2";

const baseUrl = import.meta.env.VITE_API_URL;

function Plans() {
  const [plans, setPlans] = useState([]);
  const { payWithMidtrans } = PaymentController();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get(`${baseUrl}/plans`);
        setPlans(res.data);
      } catch (error) {
        console.error("Gagal mengambil data plan:", error);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-white mb-6">
        Pilih Paket Premium
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-gray-900 text-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-gray-300 mb-4">{plan.description}</p>
            <p className="text-yellow-400 text-lg font-bold mb-4">
              Rp {plan.price.toLocaleString()}
            </p>
            <button
              onClick={() => payWithMidtrans(plan.id)}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Pilih Plan Ini
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
