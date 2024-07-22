import { useState } from "react";

const Header = ({ onClick }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-100   h-14">
      <div className="flex items-center">
        <h1 className="font-bold  text-xl	italic text-blue-600  mr-3">
          BusinessBook Plus
        </h1>
        <button
          onClick={onClick}
          className="text-gray-500 focus:outline-none lg:hidden"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
