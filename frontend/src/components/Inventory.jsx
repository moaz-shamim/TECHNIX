import React, { useState } from "react";
import FormSection from "./FormSection";
import InventoryOperation from "./InventoryOperation";

const Inventory = () => {
  const [showFormSection, setShowFormSection] = useState(false);

  const toggleFormSection = () => {
    setShowFormSection(!showFormSection);
  };

  return (
    <>
      <div className="flex-1 flex flex-col overflow-hidden  h-screen	">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container px-6 mx-auto">
            <div className="flex justify-between mt-5">
              <h1 className="font-semibold text-2xl">Products</h1>
              <button
                type="button"
                className="inline-flex justify-center rounded-sm border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={toggleFormSection}
              >
                {showFormSection ? "Back" : "+ New Product"}
              </button>
            </div>
            {showFormSection ? (
              <FormSection
                showFormSection={showFormSection}
                setShowFormSection={setShowFormSection}
              />
            ) : (
              <InventoryOperation />
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Inventory;
