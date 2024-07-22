import { useState } from "react";
import InventoryHead from "./InventoryHead";
import InventoryTable from "./InventoryTable";
import EditFormSection from "./EditFormSection";

const InventoryOperation = () => {
  const [editProductId, setEditProductId] = useState(null);



  const handleEdit = (productId) => {
    setEditProductId(productId);
  };



  return (
    <div className="flex flex-col mt-6 ">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          {editProductId ? (
            <>
              <EditFormSection
                productId={editProductId}
                setEditProductId={setEditProductId}
              />
            </>
          ) : (
            <>
              <InventoryHead />
              <InventoryTable handleEdit={handleEdit} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryOperation;
