import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Contact from "../pages/Contact";
import About from "../pages/About";
import TodoList from "../pages/dashboard/TodoList";
import ProtectedRoute from "./ProtectedRoute";
import TodoListDetail from "../pages/dashboard/TodoListDetail";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Plans from "../pages/dashboard/Plan";
``
function AppRoute() {
  return (  
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/todo-list-detail/:id" element={<TodoListDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/plans" element={<Plans />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
