import React from "react";
import { FiPackage, FiTruck, FiCornerDownLeft, FiHome, FiBox, FiRepeat } from "react-icons/fi";

const serviceData = [
  {
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: <FiTruck size={40} className="text-primary" />,
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: <FiPackage size={40} className="text-primary" />,
  },
  {
    title: "Fulfillment Solution",
    desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: <FiBox size={40} className="text-primary" />,
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <FiHome size={40} className="text-primary" />,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support.",
    icon: <FiCornerDownLeft size={40} className="text-primary" />,
  },
  {
    title: "Parcel Return",
    desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <FiRepeat size={40} className="text-primary" />,
  },
];

const Services = () => {
  return (
    <div className="w-full py-20 px-4 md:px-10 lg:px-20 bg-primary flex justify-center rounded-4xl">
      <div className="max-w-7xl w-full">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white!">Our Services</h2>
          <p className="mt-3 text-secondary-content max-w-2xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 xl:grid-cols-3">

          {serviceData.map((service, index) => (
            <div
              key={index}
              className={"rounded-2xl p-8 shadow-sm border bg-white border-gray-200 hover:shadow-xl transition-all duration-300 ease-linear text-center hover:bg-accent hover:border-accent hover:scale-[1.02]"}
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-primary mb-2">
                {service.title}
              </h3>

              <p className="text-secondary text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Services;
