import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";

const SendParcel = () => {
  const { register, handleSubmit, reset, formState: { errors }, control } = useForm();
  const { user } = useAuth()
  const axiosSecure = useAxios();

  const serviceCenters = useLoaderData();
  const senderRegion = useWatch({ control, name: "sender_region" });
  const reciverRegion = useWatch({ control, name: "receiver_region" });

  // Unique Regions
  const regions = [...new Set(serviceCenters.map(r => r.region))];

  // Districts by Region
  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter(sc => sc.region === region);
    return regionDistricts.map(d => d.district);
  }

  const handleSendParcel = (data) => {
    // console.log("Form Submitted:", data);

    const isParcelDocument = data.parcel_type === "document";
    const isSameDistricts = data.sender_district === data.receiver_district;
    // console.log(isSameDistricts);
    const parcelWeight = parseFloat(data.parcel_weight)

    let cost = 0;
    if (isParcelDocument) {
      cost = isSameDistricts ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistricts ? 110 : 150;
      } else {
        const minCharge = isSameDistricts ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistricts ? extraWeight * 40 : extraWeight * 40 + 40;
        cost = minCharge + extraCharge
      }
    }
    // console.log("The cost is: ", cost);
    data.cost = cost

    Swal.fire({
      title: "Please confirm the cost",
      html: `You charge is: <b>${cost}৳</b>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#03373d",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, take it!"
    }).then((result) => {
      if (result.isConfirmed) {
        //* Save parcel info in the DB
        axiosSecure.post("/parcels", data)
          .then(res => {
            console.log("After cost confirmed", res.data);
          })

        Swal.fire({
          title: "Successful!",
          text: "Your purchase has been confirmed.",
          icon: "success"
        });
        reset();
      }
    });

  };

  return (
    <div className="p-6 bg-white rounded-4xl lg:p-12 xl:p-20">
      <h2 className="text-4xl font-bold text-primary mb-6">Send A Parcel</h2>
      <h3 className="text-lg font-semibold text-primary mb-4">
        Enter your parcel details
      </h3>

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
      <form onSubmit={handleSubmit(handleSendParcel)} className="space-y-10">

        {/* Parcel Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 border-b border-secondary-content">
          <div>
            <label className="text-sm font-semibold text-primary">Parcel Name</label>
            <input
              type="text"
              {...register("parcel_name", { required: "Please fill the input" })}
              className="input input-bordered w-full mt-1"
              placeholder="Parcel Name"
            />
            {errors.parcel_name && (
              <p className="text-error text-sm mt-1">{errors.parcel_name.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold text-primary">Parcel Weight (KG)</label>
            <input
              type="number"
              {...register("parcel_weight", { required: "Please fill the input" })}
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
                  {...register("sender_name", { required: "Please fill the input" })}
                  className="input input-bordered w-full mt-1"
                  placeholder="Sender Name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Email Address</label>
                <input
                  type="email"
                  {...register("sender_email", { required: "Please fill the input" })}
                  value={user?.email}
                  className="input input-bordered w-full mt-1"
                  placeholder="Your Email Address"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Sender Phone No</label>
                <input
                  type="text"
                  {...register("sender_phone", { required: "Please fill the input" })}
                  className="input input-bordered w-full mt-1"
                  placeholder="Phone No"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Your Region</label>
                <select
                  {...register("sender_region", { required: "Please fill the input" })}
                  className="select select-bordered w-full mt-1"
                >
                  <option>Select your Region</option>
                  {regions.map((region, index) => (
                    <option key={index} value={region}>{region}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Your District</label>
                <select
                  {...register("sender_district", { required: "Please fill the input" })}
                  className="select select-bordered w-full mt-1"
                >
                  <option>Select your District</option>
                  {districtsByRegion(senderRegion || "").map((district, index) => (
                    <option key={index} value={district}>{district}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Pickup Instruction</label>
                <textarea
                  {...register("pickup_instruction", { required: "Please fill the input" })}
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
                  {...register("receiver_name", { required: "Please fill the input" })}
                  className="input input-bordered w-full mt-1"
                  placeholder="Receiver Name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Receiver Email Address</label>
                <input
                  type="email"
                  {...register("receiver_email", { required: "Please fill the input" })}
                  className="input input-bordered w-full mt-1"
                  placeholder="Receiver Email Address"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Receiver Contact No</label>
                <input
                  type="text"
                  {...register("receiver_phone", { required: "Please fill the input" })}
                  className="input input-bordered w-full mt-1"
                  placeholder="Contact No"
                />
              </div>

              {/* Region */}
              <div>
                <label className="text-sm font-semibold text-primary">Receiver Region</label>
                <select
                  {...register("receiver_region", { required: "Please fill the input" })}
                  className="select select-bordered w-full mt-1"
                >
                  <option>Select District</option>
                  {regions.map((region, index) => (
                    <option key={index} value={region}>{region}</option>
                  ))}
                </select>
              </div>

              {/* Districts */}
              <div>
                <label className="text-sm font-semibold text-primary">Receiver District</label>
                <select
                  {...register("receiver_district", { required: "Please fill the input" })}
                  className="select select-bordered w-full mt-1"
                >
                  <option>Select District</option>
                  {districtsByRegion(reciverRegion || "").map((district, index) => (
                    <option key={index} value={district}>{district}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-primary">Delivery Instruction</label>
                <textarea
                  {...register("delivery_instruction", { required: "Please fill the input" })}
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

        <button className="btn btn-accent px-10">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
