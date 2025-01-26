import { create } from "zustand";
import axios from "axios";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  //add product
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Fill all the fields" };
    }

    try {
      const { data } = await axios.post(
        // "http://localhost:8000/api/v1/products/addProduct",
        "https://itemmanager-1.onrender.com/api/v1/products/addProduct",
        newProduct,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      set((state) => ({ products: [...state.products, data.data] }));

      return { success: true, message: "Product created successfully" };
    } catch (error) {
      console.error("Error creating product:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Failed to create product",
      };
    }
  },

  //get all products
  getAllProducs: async () => {
    try {
      const { data } = await axios.get(
        // "http://localhost:8000/api/v1/products/allProducts"
        "https://itemmanager-1.onrender.com/api/v1/products/allProducts"
      );
      set({ products: data.data });
    } catch (error) {
      console.error("Error getting all products:", error);
    }
  },

  //delete product
  deleteProduct: async (pid) => {
    try {
      const { data } = await axios.delete(
        // `http://localhost:8000/api/v1/products/deleteProduct/${pid}`
        `https://itemmanager-1.onrender.com/api/v1/products/deleteProduct/${pid}`
      );

      if (!data.success) {
        return { success: false, message: data.message };
      }

      //update the ui immediately
      set((state) => ({
        products: state.products.filter((product) => product._id !== pid),
      }));

      return { success: true, message: "Product deleted successfully" };
    } catch (error) {
      console.error("Error deleting product:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Failed to delete product",
      };
    }
  },

  //update product
  // update product
  updateProduct: async (pid, updatedProduct) => {
    try {
      const { data } = await axios.put(
        // `http://localhost:8000/api/v1/products/updateProduct/${pid}`,
        `https://itemmanager-1.onrender.com/api/v1/products/updateProduct/${pid}`,
        updatedProduct,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!data.success) {
        return { success: false, message: data.message };
      }

      // update the UI immediately
      set((state) => ({
        products: state.products.map((product) =>
          product._id === pid ? data.data : product
        ),
      }));

      return { success: true, message: data.message };
    } catch (error) {
      console.error("Error updating product:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Failed to update product",
      };
    }
  },
}));
