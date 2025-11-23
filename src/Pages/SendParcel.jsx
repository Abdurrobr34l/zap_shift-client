import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="p-6 bg-white rounded-4xl lg:p-12 xl:p-20">
      {/* Title */}
      <h1 className="text-4xl font-bold text-primary mb-6">Send A Parcel</h1>
      <h2 className="text-lg font-semibold text-primary mb-4">
        Enter your parcel details
      </h2>

      {/* Toggle */}
      <div className="flex items-center gap-6 pb-6 mb-10 border-b border-secondary-content">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="document"
            defaultChecked
            {...register("parcel_type")}
            className="radio radio-success"
          />
          <span className="text-secondary">Document</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="not_document"
            {...register("parcel_type")}
            className="radio radio-success"
          />
          <span className="text-secondary">Not-Document</span>
        </label>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

        {/* Parcel Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10` border-b border-secondary-content">
          <div>
            <label className="text-sm font-semibold text-primary">Parcel Name</label>
            <input
              type="text"
              {...register("parcel_name")}
              className="input input-bordered w-full mt-1"
              placeholder="Parcel Name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-primary">Parcel Weight (KG)</label>
            <input
              type="number"
              {...register("parcel_weight")}
              className="input input-bordered w-full mt-1"
              placeholder="Parcel Weight (KG)"
            />
          </div>
        </div>

        {/* Sender + Receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Sender */}
          <div>
            <h3 className="font-bold text-primary mb-4">Sender Details</h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-primary">Sender Name</label>
                <input
                  type="text"
                  {...register("sender_name")}
                  className="input input-bordered w-full mt-1"
                  placeholder="Sender Name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Address</label>
                <input
                  type="text"
                  {...register("sender_address")}
                  className="input input-bordered w-full mt-1"
                  placeholder="Address"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Sender Phone No</label>
                <input
                  type="text"
                  {...register("sender_phone")}
                  className="input input-bordered w-full mt-1"
                  placeholder="Sender Phone No"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Your District</label>
                <select
                  {...register("sender_district")}
                  className="select select-bordered w-full mt-1"
                >
                  <option>Select your District</option>
                  <option>District 1</option>
                  <option>District 2</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Pickup Instruction</label>
                <textarea
                  {...register("pickup_instruction")}
                  className="textarea textarea-bordered w-full mt-1"
                  rows={2}
                  placeholder="Pickup Instruction"
                />
              </div>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h3 className="font-bold text-primary mb-4">Receiver Details</h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-primary">Receiver Name</label>
                <input
                  type="text"
                  {...register("receiver_name")}
                  className="input input-bordered w-full mt-1"
                  placeholder="Sender Name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Receiver Address</label>
                <input
                  type="text"
                  {...register("receiver_address")}
                  className="input input-bordered w-full mt-1"
                  placeholder="Address"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Receiver Contact No</label>
                <input
                  type="text"
                  {...register("receiver_phone")}
                  className="input input-bordered w-full mt-1"
                  placeholder="Sender Contact No"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Receiver District</label>
                <select
                  {...register("receiver_district")}
                  className="select select-bordered w-full mt-1"
                >
                  <option>Select your District</option>
                  <option>District 1</option>
                  <option>District 2</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Delivery Instruction</label>
                <textarea
                  {...register("delivery_instruction")}
                  className="textarea textarea-bordered w-full mt-1"
                  rows={2}
                  placeholder="Delivery Instruction"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-secondary mt-2">
          * Pickup Time 4pm–7pm Approx.
        </p>

        {/* Button */}
        <button className="btn btn-accent px-10">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
