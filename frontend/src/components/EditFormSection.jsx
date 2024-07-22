import { useState, useEffect } from "react";
import axios from "axios";

const EditFormSection = ({ productId, setEditProductId }) => {
  const [product, setProduct] = useState({
    Product_name: "",
    category: "",
    description: "",
    selling_price: "",
    stock: "",
    units: "",
    status: "Active",
    Product_image: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/product/get-product/${productId}`
        );
        setProduct(response.data.product);
        setImagePreview(
          response.data.Product_image
            ? `http://localhost:4000/api/product/product-assets/${response.data.Product_image}`
            : null
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleChange = (event) => {
    const { id, value, files } = event.target;
    if (id === "Product_image") {
      const file = files[0];
      setProduct({ ...product, Product_image: file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      setProduct({ ...product, [id]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);

    const formDataToSend = new FormData();
    for (const key in product) {
      formDataToSend.append(key, product[key]);
    }

    try {
      const response = await axios.put(
        `http://localhost:4000/api/product/edit-product/${productId}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product updated successfully:", response.data);
      setLoading(false);
      setEditProductId(null);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.error(`Error while updating product: ${err}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-3 max-w-[750px] mx-auto bg-gray-50 rounded-md">
      <h1 className="text-3xl text-center font-semibold my-7">Edit Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="Product_name" className="text-sm font-medium">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="bg-slate-100 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
            id="Product_name"
            value={product.Product_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>
          <input
            type="text"
            placeholder="Description"
            className="bg-slate-100 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
            id="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col sm:w-1/3">
            <label htmlFor="selling_price" className="text-sm font-medium">
              Selling Price
            </label>
            <input
              type="text"
              placeholder="Selling Price"
              className="bg-slate-100 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              id="selling_price"
              value={product.selling_price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col sm:w-1/3">
            <label htmlFor="stock" className="text-sm font-medium">
              Stock
            </label>
            <input
              type="number"
              placeholder="Stock"
              className="bg-slate-100 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              id="stock"
              value={product.stock}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col sm:w-1/3">
            <label htmlFor="units" className="text-sm font-medium">
              Units
            </label>
            <input
              type="text"
              placeholder="Units"
              className="bg-slate-100 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              id="units"
              value={product.units}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col sm:w-1/2">
            <label htmlFor="category" className="text-sm font-medium">
              Category
            </label>
            <input
              type="text"
              placeholder="Category"
              className="bg-slate-100 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              id="category"
              value={product.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col sm:w-1/2">
            <label htmlFor="status" className="text-sm font-medium">
              Status
            </label>
            <select
              id="status"
              onChange={handleChange}
              className="bg-slate-100 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              value={product.status}
            >
              <option value="Active">Active</option>
              <option value="InActive">InActive</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="Product_image" className="text-sm font-medium">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="bg-slate-100 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
            id="Product_image"
            onChange={handleChange}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Image Preview"
              className="mt-4 w-32 h-32 object-cover rounded-lg"
            />
          )}
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            disabled={loading}
            className={`bg-slate-700 text-white px-4 py-2 rounded-lg uppercase ${
              loading ? "opacity-75 cursor-not-allowed" : "hover:opacity-95"
            }`}
          >
            {loading ? "Loading..." : "Update Product"}
          </button>
          <button
            type="button"
            className="bg-red-700 text-white px-4 py-2 rounded-lg uppercase opacity-75 hover:opacity-95"
            onClick={() => setEditProductId(null)}
          >
            Cancel Update
          </button>
        </div>
      </form>
      {error && (
        <p className="text-red-700 mt-5 text-center">Something went wrong!</p>
      )}
    </div>
  );
};

export default EditFormSection;
