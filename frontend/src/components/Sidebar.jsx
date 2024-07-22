import classNames from "classnames";
import SidebarNav from "./SidebarNav";

const Sidebar = ({ setSidebarOpen, sidebarOpen }) => {
  
  return (
    <>
      <div
        className={classNames(
          "fixed inset-0 z-10 transition-opacity bg-black opacity-50 lg:hidden ",
          { block: sidebarOpen, hidden: !sidebarOpen }
        )}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <div
        className={classNames(
          "fixed inset-y-0 left-0 z-10 mt-[56px] lg:mt-0 w-64 overflow-y-auto transition duration-300 transform bg-gray-50 lg:translate-x-0 lg:static lg:inset-0  px-1",
          {
            "translate-x-0 ease-out": sidebarOpen,
            "-translate-x-full ease-in": !sidebarOpen,
          }
        )}
      >
      <SidebarNav/>
      </div>
    </>
  );
};

export default Sidebar;
