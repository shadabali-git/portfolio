import {Outlet} from 'react-router'
import Navbar from "../components/Navbar.tsx";

const HomeLayout = () => {
    return (
        <div className="overflow-x-hidden w-full min-h-screen flex flex-col bg-black"
        >
            <Navbar />

            <Outlet/>

        </div>
    );
};
export default HomeLayout;