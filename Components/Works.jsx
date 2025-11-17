import React from 'react';
import truckIcon from '../src/assets/bookingIcon.png';

// Data for the four feature cards
const features = [
  {
    title: "Booking Pick & Drop",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Cash On Delivery",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Delivery Hub",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Booking SME & Corporate",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
];

// Card Component
const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-none hover:bg-accent hover:border-accent transition-all duration-300 ease-linear">
      <div className="text-primary">
        <img src={truckIcon} alt="It is a truck tracking image" />
      </div>
      <h3 className="text-xl font-extrabold mt-6 mb-2 text-primary">
        {title}
      </h3>
      <p className="text-base text-secondary">
        {description}
      </p>
    </div>
  );
};

// Main Application Component
const Works = () => {
  return (
    <div>
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 2xl:px-[100px]">

        {/* Section Title - Uses the text-primary class */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-primary">
          How it Works
        </h2>

        {/* Responsive Grid for Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Works;