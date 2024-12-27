import { Outlet } from "react-router-dom";
import ScrollToTop from "../Pages/ScrollToTop";

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <ScrollToTop></ScrollToTop>
        </div>
    );
};

export default Main;