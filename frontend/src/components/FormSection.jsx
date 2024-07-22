import { useState } from "react";
import axios from "axios";

const FormSection = ({ showFormSection, setShowFormSection }) => {
  const [formData, setFormData] = useState({
    Product_name: "",
    category: "",
    description: "",
    selling_price: "",
    stock: "",
    units: "",
    status: "Active",
    Product_image: null,
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (event) => {
    const { id, value, files } = event.target;
    if (id === "Product_image") {
      const file = files[0];
      setFormData({ ...formData, Product_image: file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      await axios.post("http://localhost:4000/api/product/add-product", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      setShowFormSection(!showFormSection);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.log(`Error while adding product: ${err}`);
    }
  };

  return (
    <div className="p-3 max-w-[750px] mx-auto bg-gray-50 rounded-md">
      <h1 className="text-3xl text-center font-semibold my-7">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex justify-between ">
          <input
            type="text"
            placeholder="Product Name"
            className="bg-slate-100 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 w-full sm:w-full "
            id="Product_name"
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Description"
          className="bg-slate-100 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 w-full sm:w-full "
          id="description"
          onChange={handleChange}
          required
        />
        <div className="flex justify-between ">
          <input
            type="text"
            placeholder="Selling Price"
            className="bg-slate-100 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 w-full sm:w-full lg:w-2/6"
            id="selling_price"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="Stock"
            className="bg-slate-100 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 w-full sm:w-full lg:w-2/6"
            id="stock"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Units"
            className="bg-slate-100 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 w-full sm:w-full lg:w-1/4"
            id="units"
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex justify-between ">
          <input
            type="text"
            placeholder="Category"
            className="bg-slate-100 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 w-full sm:w-full lg:w-3/6"
            id="category"
            onChange={handleChange}
            required
          />
          <select
            id="status"
            onChange={handleChange}
            className="bg-slate-100 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 w-full sm:w-full lg:w-2/6"
            value={formData.status}
          >
            <option value="Active">Active</option>
            <option value="InActive">In Active</option>
          </select>
        </div>
        <input
          type="file"
          accept="image/*"
          className="bg-slate-100 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 w-full sm:w-full lg:w-auto"
          id="Product_image"
          onChange={handleChange}
          required
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Image Preview"
            className="mt-4 w-32 h-32 object-cover rounded-lg"
          />
        )}
        <button
          disabled={loading}
          className={`bg-slate-700 text-white p-3 rounded-lg uppercase ${
            loading ? "opacity-75 cursor-not-allowed" : "hover:opacity-95"
          } w-full sm:w-full lg:w-auto`}
        >
          {loading ? "Loading..." : "Add Product"}
        </button>
      </form>

      {error && (
        <p className="text-red-700 mt-5 text-center">Something went wrong!</p>
      )}
    </div>
  );
};

export default FormSection;
