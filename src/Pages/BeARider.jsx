import React from "react";
import riderImg from "../assets/agent-pending.png"; // your image
const BeARider = () => {
  return (
    <section className="w-full bg-white py-12 rounded-4xl md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="max-w-2xl mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4"> Be a Rider </h1>
          <p className="text-secondary text-lg leading-relaxed"> Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time. </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-10 border-t border-secondary-content lg:grid-flow-dense">
          {/* Form */}
          <div className="w-full bg-white p-6 rounded-lg order-2 lg:order-1">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div> <label className="block mb-1 font-medium text-primary">Your Name</label> <input type="text" placeholder="Your Name" className="input input-bordered w-full" /> </div>
              {/* Age */}
              <div> <label className="block mb-1 font-medium text-primary">Your age</label> <input type="number" placeholder="Your age" className="input input-bordered w-full" /> </div>
              {/* Email */}
              <div> <label className="block mb-1 font-medium text-primary">Your Email</label> <input type="email" placeholder="Your email" className="input input-bordered w-full" /> </div>
              {/* District */}
              <div>
                <label className="block mb-1 font-medium text-primary">Your District</label>
                <select className="select select-bordered w-full">
                  <option>Select your District</option>
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                </select>
              </div>
              {/* NID */}
              <div> <label className="block mb-1 font-medium text-primary">NID No</label> <input type="text" placeholder="NID" className="input input-bordered w-full" /> </div>
              {/* Contact */}
              <div> <label className="block mb-1 font-medium text-primary">Contact</label> <input type="text" placeholder="Contact" className="input input-bordered w-full" /> </div>
              {/* Warehouse */}
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium text-primary"> Which warehouse you want to work? </label>
                <select className="select select-bordered w-full">
                  <option>Select warehouse</option>
                </select>
              </div>
              {/* Submit */}
              <div className="md:col-span-2"> <button className="btn w-full bg-accent text-primary-content hover:bg-accent/80"> Submit </button> </div>
            </form>
          </div>
          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end"> <img src={riderImg} alt="Rider illustration" className="w-[380px] md:w-[450px] lg:w-[480px]" /> </div>
        </div>

      </div>
    </section>
  );
};
export default BeARider;