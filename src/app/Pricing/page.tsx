import Image from "next/image";
import React from "react";

const PricingPage = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Simple Pricing
          </h1>
          <nav className="text-gray-500 text-sm mt-2">
            <span>Home</span>{" "}
            <span className="mx-2">{">"}</span>{" "}
            <span className="text-black">Pricing</span>
          </nav>
        </div>

        {/* Subheading */}
        <div className="text-center mt-6">
          <h2 className="text-lg md:text-xl text-gray-600">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </h2>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mt-8">
          <div className="flex border rounded-md">
            <button className="py-2 px-6 bg-sky-500 text-white rounded-l-md focus:outline-none">
              Monthly
            </button>
            <button className="py-2 px-6 text-gray-800 bg-gray-100 rounded-r-md focus:outline-none">
              Yearly <span className="text-sky-500">(Save 25%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 p-10 mt-12 gap-2 justify-center">
          {/* Free Plan */}
          <div className="flex flex-col w-full md:w-[80%] bg-white p-6 rounded-lg shadow-md text-center border  hover:scale-110">
            <h2 className="text-lg font-medium text-gray-700">FREE</h2>
            <p className="text-4xl mt-4 font-bold text-sky-500">$0</p>
            <p className="text-gray-500">Per Month</p>
            <p className="mt-4 text-gray-600">
              Organize across all apps by hand
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li>
              <li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li><li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li><li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li><li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li><li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li>
            </ul>
            <button className="mt-8 bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600">
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="flex flex-col w-full md:w-[80%] bg-[#252B42] p-6 rounded-lg shadow-md text-center text-white border  hover:scale-110">
            <h2 className="text-lg font-medium">STANDARD</h2>
            <p className="text-4xl mt-4 font-bold text-sky-500">$9.99</p>
            <p>Per Month</p>
            <p className="mt-4">Organize across all apps by hand</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>✅ Unlimited product updates</li>
              <li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li><li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li><li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li><li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li><li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li><li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li>
            </ul>
            <button className="mt-8 bg-white text-sky-500 py-2 px-4 rounded hover:bg-gray-100">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="flex flex-col w-full md:w-[80%] bg-white p-6 rounded-lg shadow-md text-center border hover:scale-110">
            <h2 className="text-lg font-medium text-gray-700">PREMIUM</h2>
            <p className="text-4xl mt-4 font-bold  text-sky-500">$19.99</p>
            <p className="text-gray-500">Per Month</p>
            <p className="mt-4 text-gray-600">
              Organize across all apps by hand
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li>
              <li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li><li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li><li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li><li className="flex items-center justify-center">
                ✅ Unlimited product updates
              </li>
            </ul>
            <button className="mt-8 bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600">
              Get Started
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Trusted By Over 4000 Big Companies
          </p>
          <div className="flex justify-center mt-4 space-x-6">
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
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
