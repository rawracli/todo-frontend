import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitle() {
    const location = useLocation();

    useEffect(() => {
        const titles = {
            "/": "Home | TodoBee",
            "/about": "About | TodoBee",
            "/contact": "Contact | TodoBee",
            "/login": "Login | TodoBee",
            "/register": "Register | TodoBee",
            "/dashboard": "Dashboard | TodoBee",
            "/todo-list": "Todo List | TodoBee",
            "/todo-list-detail": "Todo List Detail | TodoBee",
            "/setting": "Setting | TodoBee",
            "/plans": "Plans | TodoBee",
        };

        document.title = titles[location.pathname] || "TodoBee";
    }, [location]);

    return null;
};

export default PageTitle;