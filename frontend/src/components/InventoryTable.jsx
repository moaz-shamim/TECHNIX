import { useEffect, useState } from "react";
import axios from "axios";

const InventoryTable = ({handleEdit}) => {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    axios
      .get("http://localhost:4000/api/product/get-all-products")
      .then((res) => {
        setProducts(res.data.products);
     
      })
      .catch((err) => {
        console.log(`Error while fetching data: ${err}`);
      });
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/product/delete-product/${productId}`
      );
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (err) {
      console.log(`Error while deleting product: ${err}`);
    }
  };


  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Product
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Category
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Selling Price
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Stock
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Units
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Status
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
            Action
          </th>
        </tr>
      </thead>

      <tbody className="bg-white">
        {products.map((product) => (
          <tr key={product._id}>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="flex items-center">
                <div className="text-sm font-medium leading-5 text-gray-900 flex justify-center items-center space-x-4">
                  <img
                    src={product.Product_image}
                    className="w-[40px] h-[40px] mr-2 rounded-lg"
                    alt={product.name}
                  />
                  <div className="flex-shrink-0 overflow-hidden">
                    <h1 className="truncate">{product.Product_name}</h1>
                    <span className="font-light truncate">
                      {product.description}
                    </span>
                  </div>
                </div>
              </div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                {product.category}
              </div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                {product.selling_price}
              </div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                {product.stock}
              </div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                {product.units}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                {product.status}
              </div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="flex text-sm leading-5 text-gray-900">
                <button
                  className="flex items-center px-2 py-1 mr-1 hover:bg-gray-400 hover:bg-opacity-25 rounded-lg"
                  onClick={() => handleEdit(product._id)}
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 256 256"
                    enableBackground="new 0 0 256 256"
                    xmlSpace="preserve"
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
                            d="M178,20.7l-10.7,10.7L196,60.1l28.6,28.6L235.3,78L246,67.2l-1.4-3.9c-4.1-10.9-12.6-23.9-21-32.1c-5.9-5.8-13.8-11.5-21-15.2c-4.8-2.5-12.9-6-13.8-6C188.7,10,183.8,14.8,178,20.7z"
                          />
                          <path
                            fill="#000000"
                            d="M81.4,117.3L10,188.7v28.7V246h28.7h28.6l71.4-71.4l71.4-71.4l-28.3-28.6c-15.5-15.7-28.4-28.6-28.6-28.6C152.9,45.9,120.6,78.1,81.4,117.3z M35.6,197.4c5.6,4.2,18.9,17.4,23,23c1.8,2.4,3.2,4.5,3.2,4.7c0,0.2-7.1,0.4-15.7,0.4H30.5v-15.7c0-8.6,0.2-15.7,0.4-15.7C31.1,194.1,33.2,195.6,35.6,197.4z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
                <button
                  className="flex items-center px-2 py-1 hover:bg-gray-400 hover:bg-opacity-25 rounded-lg"
                  onClick={() => handleDelete(product._id)}
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 256 256"
                    enableBackground="new 0 0 256 256"
                    xmlSpace="preserve"
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
                            d="M94.6,10.8c-5,1.7-8.7,5.3-10.7,10.4c-0.8,2.1-1.1,4.3-1.3,10.7l-0.2,8h-22c-24.5,0-24.9,0.1-28.5,3.5c-5.7,5.6-4.4,15,2.7,18.7c2.5,1.3,3.4,1.5,7.7,1.5h4.9l0.1,87.7c0.2,80.5,0.2,87.8,1.1,89.3c1.2,2.2,2.9,3.7,5.3,4.7c1.7,0.7,10.2,0.8,74.4,0.8c69.2,0,72.6-0.1,74.6-1c2.6-1.2,4.8-3.6,5.5-6.3c0.3-1.3,0.5-30.6,0.5-88.6V63.5h4.9c4.4,0,5.3-0.2,7.7-1.5c4.1-2.2,5.9-4.9,6.2-9.5c0.3-4-0.7-6.5-3.4-9.2c-3.3-3.3-2.5-3.2-27.6-3.4l-23-0.2l-0.2-8.3c-0.2-8.2-0.3-8.4-1.9-11.8c-1.9-3.8-4.6-6.5-8.5-8.4l-2.4-1.2L128.8,10C100.9,9.9,96.7,10,94.6,10.8z M157.1,26.3c0.4,0.4,0.6,2.8,0.6,7.1v6.5H128H98.3v-6.1c0-3.3,0.3-6.5,0.5-7.1c0.5-0.9,1.4-1,29.1-1C149.4,25.7,156.6,25.8,157.1,26.3z M188.8,145v81.5H128H67.3V145V63.5H128h60.7V145z"
                          />
                          <path
                            fill="#000000"
                            d="M87.8,89.6c-2.7,1.9-2.7,0.4-2.7,57c0,56.6-0.1,55.1,2.7,57c1.6,1.1,5.2,1.1,6.7,0c2.8-2,2.7,0.5,2.7-57c0-57.5,0.1-55-2.7-57C93,88.5,89.4,88.6,87.8,89.6z"
                          />
                          <path
                            fill="#000000"
                            d="M124.7,89.6c-2.7,1.9-2.7,0.4-2.7,57c0,56.6-0.1,55.1,2.7,57c1.6,1.1,5.2,1.1,6.7,0c2.8-2,2.7,0.5,2.7-57c0-57.5,0.1-55-2.7-57C129.8,88.5,126.2,88.6,124.7,89.6z"
                          />
                          <path
                            fill="#000000"
                            d="M161.5,89.6c-2.7,1.9-2.7,0.4-2.7,57c0,56.6-0.1,55.1,2.7,57c2.1,1.4,5.4,1.1,7.4-0.7l1.7-1.5v-54.8V91.8l-1.7-1.5C166.9,88.5,163.5,88.2,161.5,89.6z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
