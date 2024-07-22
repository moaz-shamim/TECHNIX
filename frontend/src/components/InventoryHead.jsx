const InventoryHead = () => {
  return (
    <>
      <div className="flex justify-between border-b-2 border-gray-200 bg-gray-50">
        <div className=" px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b  border-gray-200 bg-gray-50 flex ">
          <button className="mx-2 hover:bg-gray-400 hover:bg-opacity-25 px-2 rounded-md">
            ALL
          </button>
          <button className="mx-2 hover:bg-gray-400 hover:bg-opacity-25 px-2 rounded-md">
            Active
          </button>
        </div>

        <div className=" px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50 ">
          <div className="relative mx-4 lg:mx-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
              <svg
                className="w-5 h-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <input
              className="w-32 pl-10 pr-4 p-[6px] rounded- form-input sm:w-64 focus:border-indigo-600 border border-gray-700"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className=" px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50 flex">
          <button
            className="flex items-center p-4 py-1 mt-2   hover:bg-gray-400 hover:bg-opacity-25  rounded-lg"
            onClick={""}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 256 256"
              enable-background="new 0 0 256 256"
              xml:space="preserve"
              className="w-4 h-4"
            >
              <metadata>
                {" "}
                Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
              </metadata>
              <g>
                <g>
                  <g>
                    <path
                      fill="#000000"
                      d="M15.5,50.2c-1.1,0.6-2.8,2-3.7,3.1c-2.4,3.1-2.3,8.3,0,11.3c3.4,4.6-6.6,4.2,116.2,4.2c122.8,0,112.8,0.4,116.2-4.2c1.4-1.8,1.7-2.8,1.7-5.7s-0.3-3.9-1.7-5.7c-3.4-4.6,6.6-4.2-116.4-4.2C27,49.2,17.4,49.3,15.5,50.2z"
                    />
                    <path
                      fill="#000000"
                      d="M15.5,119.2c-1.1,0.6-2.8,2-3.7,3.1c-2.4,3.1-2.3,8.3,0,11.3c3.4,4.6-6.6,4.2,116.2,4.2c122.8,0,112.8,0.4,116.2-4.2c1.4-1.8,1.7-2.8,1.7-5.7s-0.3-3.9-1.7-5.7c-3.4-4.6,6.6-4.2-116.4-4.2C27,118.1,17.4,118.3,15.5,119.2z"
                    />
                    <path
                      fill="#000000"
                      d="M15.7,188c-5.7,2.5-7.5,9.9-3.7,14.8c3.3,4.3-6.3,4,116.1,4c122.8,0,112.8,0.4,116.2-4.2c1.4-1.8,1.7-2.8,1.7-5.7s-0.3-3.9-1.7-5.7c-3.4-4.6,6.6-4.2-116.4-4.2C37.6,187.2,17.2,187.3,15.7,188z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
          <button
            className="flex items-center p-4 py-1 mt-2   hover:bg-gray-400 hover:bg-opacity-25  rounded-lg"
            onClick={""}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 256 256"
              enable-background="new 0 0 256 256"
              xml:space="preserve"
              className="w-4 h4"
            >
              <metadata>
                {" "}
                Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
              </metadata>
              <g>
                <g>
                  <g>
                    <path
                      fill="#000000"
                      d="M12.1,11.8L10,13.9v50.9v50.8l1.9,1.9c1,1.1,2.9,2.1,4.2,2.3c1.2,0.2,24.1,0.4,50.8,0.2l48.6-0.2l2.1-2.4l2.1-2.3V64.5V14.1l-1.7-2l-1.7-2l-51-0.2l-51-0.1L12.1,11.8z M105.3,64.5V105H64.9H24.4V64.5V24.1h40.4h40.4V64.5z"
                    />
                    <path
                      fill="#000000"
                      d="M138.4,11.8l-2.1,2.1v50.9v50.8l1.9,1.9c1,1.1,2.9,2.1,4.2,2.3c1.2,0.2,24.1,0.4,50.8,0.2l48.6-0.2l2.1-2.4l2.1-2.3V64.5V14.1l-1.7-2l-1.7-2l-51-0.2l-51-0.1L138.4,11.8z M231.4,64.7l0.1,40.3h-40.4h-40.4V64.5V24.1l40.3,0.1l40.2,0.2L231.4,64.7z"
                    />
                    <path
                      fill="#000000"
                      d="M12.1,138.1l-2.1,2.1V191v50.8l2.2,2.2l2.2,2.1h50.5h50.6l2.1-2.4l2.1-2.3v-50.6v-50.6l-2.1-2.1l-2.1-2.1H64.9H14.2L12.1,138.1z M105.3,190.8v40.4H64.9H24.4v-40.4v-40.4h40.4h40.4V190.8z"
                    />
                    <path
                      fill="#000000"
                      d="M138.4,138.1l-2.1,2.1V191v50.8l1.9,1.9c1.2,1.2,3,2,4.8,2.3c1.7,0.2,24.5,0.4,50.9,0.2l47.9-0.2l2.1-2.4l2.1-2.3v-50.6v-50.6l-2.1-2.1l-2.1-2.1h-50.7h-50.7L138.4,138.1z M231.6,190.8v40.4h-40.4h-40.4v-40.4v-40.4h40.4h40.4V190.8z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default InventoryHead;
