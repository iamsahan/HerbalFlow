import React, { useState } from "react";
import axios from "axios";
import AdminSidebar from "../Components/AdminSidebar";

export const AddInventory = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleCollapseChange = (collapsed) => {
    setSidebarCollapsed(collapsed);
  };
  return (
    <div>
      <AdminSidebar onCollapseChange={handleCollapseChange} />

      <main
        style={{
          marginLeft: isSidebarCollapsed ? "60px" : "220px",
          transition: "margin-left 0.3s",
          //   width: isSidebarCollapsed
          //     ? "calc(100% - 70px)"
          //     : "calc(100% - 280px)",
        }}
        className=" bg-white min-h-screen rounded-2xl"
      >
        <header className=" h-16 shadow mb-5 rounded-2xl">
          <h2 className="text-center  pt-5 font-bold text-2xl">
            Add New Inventory
          </h2>
        </header>
        <div className="pl-20 pt-8 pr-20">
          <form>
            <div className=" bg-slate-200 p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-5">
                Section 1: Genaral Information
              </h2>

              <div className="flex items-center justify-between mb-4 ">
                <div className="flex flex-col w-1/3">
                  <label className="block text-gray-700 required">Name:</label>
                  <input
                    type="text"
                    name="itemName"
                    className="border border-gray-300 rounded-md p-2 mr-10"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/3">
                  <label className="block text-gray-700 required">
                    Category:
                  </label>
                  <input
                    type="text"
                    name="category"
                    className="border border-gray-300 rounded-md p-2 bg-gray-100 mr-10"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/3">
                  <label className="block text-gray-700 required">SKU:</label>
                  <input
                    type="text"
                    name="sku"
                    className="border border-gray-300 rounded-md p-2 bg-gray-100"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col w-1/4">
                  <label className="block text-gray-700 required">Exp:</label>
                  <input
                    type="date"
                    name="exp"
                    className="border border-gray-300 rounded-md p-2 bg-gray-100 mr-10"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <label className="block text-gray-700 required">Price:</label>
                  <input
                    type="number"
                    name="price"
                    className="border border-gray-300 rounded-md p-2  bg-gray-100  mr-10"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/4">
                  <label className="block text-gray-700 required">
                    Quantity:
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg h-10 p-1 bg-gray-100 mr-4">
                    <input
                      type="number"
                      name="quantity"
                      className="h-9 p-1  bg-gray-100"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col w-1/4">
                  <label className="block text-gray-700 required">Image:</label>
                  <input
                    type="file"
                    name="image"
                    className="border border-gray-300 rounded-md p-2 bg-gray-100"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 bg-slate-200 p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-5">
                Section 2: Supplier Information
              </h2>
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col mb-2 w-1/2">
                  <label className="block text-gray-700 required">
                    Sup ID:
                  </label>
                  <input
                    type="text"
                    name="supID"
                    className="border border-gray-300 rounded-md p-2  bg-gray-100 mr-10"
                    required
                  />
                </div>
                <div className="flex flex-col mb-2 w-1/2">
                  <label className="block text-gray-700 required">Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    className="border border-gray-300 rounded-md p-2  bg-gray-100"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col mb-2 w-1/3">
                  <label className="block text-gray-700 required">Email:</label>
                  <input
                    type="text"
                    name="email"
                    className="border border-gray-300 rounded-md p-2  bg-gray-100 mr-10"
                    required
                  />
                </div>
                <div className="flex flex-col mb-2 w-1/3">
                  <label className="block text-gray-700 required">NIC:</label>
                  <input
                    type="text"
                    name="NIC"
                    className="border border-gray-300 rounded-md p-2  bg-gray-100 mr-10"
                    required
                  />
                </div>
                <div className="mflex flex-col mb-2 w-1/3">
                  <label className="block text-gray-700 required">Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    className="border border-gray-300 rounded-md p-2 w-full bg-gray-100"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-lime-500 text-black text-xl px-4 py-2 rounded-md mt-5 mb-10"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
