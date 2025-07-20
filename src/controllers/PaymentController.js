import axios from "axios";
import Swal from "sweetalert2";
import AuthController from "./AuthController";

const baseUrl = import.meta.env.VITE_API_URL;

const PaymentController = () => {
  const createOrder = async (planId = 1) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${baseUrl}/orders`,
        { plan_id: planId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Order response:", res.data);

      if (!res.data.order?.id) {
        throw new Error(res.data.message || "Order tidak valid.");
      }

      return res.data.order;
    } catch (error) {
      console.error("Gagal membuat order:", error);
      throw error;
    }
  };

  const createPayment = async (orderId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${baseUrl}/payments`,
        { order_id: orderId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data.payment.snap_token;
    } catch (err) {
      console.error("Gagal membuat payment:", err.response?.data || err);
      throw err;
    }
  };

  const payWithMidtrans = async (planId) => {
    try {
      const order = await createOrder(planId);
      const snapToken = await createPayment(order.id);

      if (window.snap) {
        window.snap.pay(snapToken, {
          onSuccess: (result) => {
            console.log("Pembayaran sukses", result);

            Swal.fire({
              icon: "success",
              title: "Berhasil",
              text: "Pembayaran berhasil. Invoice akan segera didownload!",
            }).then(() => {
              const orderId = result.order_id.split("-")[0];
              window.open(`${baseUrl}/invoice/download/${orderId}`, "_blank");

              const { logout } = AuthController.getState();
              logout();
              window.location.href = "/login";
            });
          },
          onPending: (result) => {
            console.log("Menunggu pembayaran", result);
          },
          onError: (error) => {
            console.error("Pembayaran gagal", error);
            Swal.fire({
              icon: "error",
              title: "Gagal",
              text: "Terjadi kesalahan saat pembayaran.",
            });
          },
          onClose: () => {
            console.log("Popup ditutup oleh user");
          },
        });
      } else {
        alert("Midtrans Snap belum diload.");
      }
    } catch (err) {
      console.error("DETAIL ERROR:", err?.response?.data || err);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: err?.response?.data?.message || "Gagal memproses pembayaran.",
      });
    }
  };

  return {
    payWithMidtrans,
  };
};

export default PaymentController;
