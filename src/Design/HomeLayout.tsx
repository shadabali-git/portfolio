import {Outlet} from 'react-router'
import Navbar from "../components/Navbar.tsx";

const HomeLayout = () => {
    return (
        <div className="overflow-x-hidden w-full min-h-screen flex flex-col"
        >
            <Navbar />
            <div className="flex-1 bg-black">
            <Outlet/>
            </div>
        </div>
    );
};
export default HomeLayout;