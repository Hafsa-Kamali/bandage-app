import Image from "next/image";
import React from "react";
import ProductList from "@/app/BestProducts";

const ShopPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Main Container */}
      <div className="bg-white rounded-lg shadow-md max-w-7xl mx-auto p-6">
        {/* Title Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shop</h1>
          <nav className="text-gray-500 text-sm">
            <span>Home</span> <span className="mx-2">/</span> <span>Shop</span>
          </nav>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-gray-200">
            <Image
              src="/assets/col-md-4.png?text=Product+1"
              alt="Product 1"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-bold">CLOTHS</h3>
              <p className="text-white text-sm">5 Items</p>
            </div>
          </div>
          <div className="relative bg-gray-200 rounded-lg overflow-hidden group">
            <Image
              src="/assets/col-md-4(1).png?text=Product+2"
              alt="Product 2"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-bold">CLOTHS</h3>
              <p className="text-white text-sm">5 Items</p>
            </div>
          </div>
          <div className="relative bg-gray-200 rounded-lg overflow-hidden group">
            <Image
              src="/assets/col-md-4(2).png?text=Product+3"
              alt="Product 3"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-bold">CLOTHS</h3>
              <p className="text-white text-sm">5 Items</p>
            </div>
          </div>
          <div className="relative bg-gray-200 rounded-lg overflow-hidden group">
            <Image
              src="/assets/col-md-4(3).png?text=Product+4"
              alt="Product 4"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-bold">CLOTHS</h3>
              <p className="text-white text-sm">5 Items</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <p className="text-gray-600 text-sm">Showing all 12 results</p>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button className="bg-gray-300 p-2 rounded-md" title="Grid view">
              <i className="fas fa-th-large"></i>
            </button>
            <button className="bg-gray-300 p-2 rounded-md" title="List view">
              <i className="fas fa-list"></i>
            </button>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <label htmlFor="sort" className="text-gray-600 mr-2">
              Popularity
            </label>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md" title="Filter products">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center space-x-12 mt-8">
        <Image
          src="/assets/hooli.png?text=hooli"
          alt="hooli logo"
          width={100}
          height={100}
          className="h-10"
        />
        <Image
          src="/assets/lyft.png?text=lyft"
          alt="lyft logo"
          width={100}
          height={100}
          className="h-10"
        />
        <Image
          src="/assets/stripe.png?text=stripe"
          alt="stripe logo"
          width={100}
          height={100}
          className="h-10"
        />
        <Image
          src="/assets/aws.png?text=aws"
          alt="aws logo"
          width={100}
          height={100}
          className="h-10"
        />
        <Image
          src="/assets/robot.png?text=reddit"
          alt="reddit logo"
          width={100}
          height={100}
          className="h-10"
        />
      </div>
    <ProductList/>
    </div>
  );
};
export default ShopPage;
