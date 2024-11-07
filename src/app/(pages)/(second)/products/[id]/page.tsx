import ContuctUsButton from "@/_components/ContactUsButton";
import Products from "@/_components/Product";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
    <div className="font-sans w-full flex justify-center items-center">
      <div className="p-4 lg:max-w-7xl max-w-xl max-lg:mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Section */}
          <div className="min-h-[500px] lg:col-span-3 bg-gradient-to-tr rounded-lg w-full lg:sticky top-0 text-center p-6">
            <Image
              src="/download.jpeg"
              alt="Product"
              className="w-3/5 rounded object-cover mx-auto py-6"
              width={200}
              height={200}
            />
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800">
              Espresso Elegante | Coffee
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-gray-800 text-xl font-bold">$12</p>
              <p className="text-gray-400 text-xl">
                {/* <strike>$16</strike> <span className="text-sm ml-1">Tax included</span> */}
              </p>
            </div>

            {/* Rating */}
            <div className="flex space-x-2 mt-4">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 fill-orange-400"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
              <svg
                className="w-5 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            {/* About Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">
                About the coffee
              </h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                <li>
                  A cup of coffee is a beverage essential because of its
                  timeless appeal
                </li>
                <li>
                  Easy to prepare. It can be brewed using various methods, from
                  drip machines to manual pour-overs.
                </li>
                <li>
                  Available in various sizes, from a standard espresso shot to a
                  large Americano, catering to different preferences.
                </li>
                <li>
                  You can customize your coffee by adding cream, sugar, or
                  flavorings to suit your taste preferences.
                </li>
              </ul>
            </div>

            {/* Add to Cart Button */}
            <ContuctUsButton/>

          </div>
        </div>
      </div>
    </div>
    <div className="mt-20"></div>
    <Products/>

    </>
  );
}

export default page;
