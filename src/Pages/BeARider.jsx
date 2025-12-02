import React from "react";
import riderImg from "../assets/agent-pending.png";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import { useNavigate, useLoaderData } from "react-router";
import { toast } from "react-toastify";

const BeARider = () => {
  const { register, handleSubmit, reset, control } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const navigate = useNavigate();

  const serviceCenters = useLoaderData(); // 🔥 same as SendParcel

  // WATCH REGION SELECTION
  const selectedRegion = useWatch({ control, name: "region" });

  // Unique regions
  const regions = [...new Set(serviceCenters.map(r => r.region))];

  // Districts based on region
  const districtsByRegion = (region) => {
    const items = serviceCenters.filter(sc => sc.region === region);
    return items.map(d => d.district);
  };

  // SUBMIT FORM
  const handleRiderRegistration = (data) => {
    axiosSecure.post("/riders", data)
      .then((res) => {
        if(res.data.insertedId) {
          toast.success("Your application has been submitted")
        }

        navigate("/dashboard");
        reset();
      });
  };

  return (
    <section className="w-full bg-white py-12 rounded-4xl md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="max-w-2xl mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Be a Rider
          </h1>
          <p className="text-secondary text-lg leading-relaxed">
            Join us as a rider and deliver parcels with speed and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-10 border-t border-secondary-content">

          {/* FORM */}
          <div className="w-full bg-white p-6 rounded-lg order-2 lg:order-1">
            <form onSubmit={handleSubmit(handleRiderRegistration)} className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block mb-1 font-medium text-primary">Your Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full"
                  placeholder="Your Name"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block mb-1 font-medium text-primary">Your Age</label>
                <input
                  type="number"
                  {...register("age", { required: true })}
                  className="input input-bordered w-full"
                  placeholder="Your age"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium text-primary">Your Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  {...register("email", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Region */}
              <div>
                <label className="block mb-1 font-medium text-primary">Your Region</label>
                <select
                  {...register("region", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option>Select Region</option>
                  {regions.map((region, i) => (
                    <option key={i} value={region}>{region}</option>
                  ))}
                </select>
              </div>

              {/* District */}
              <div>
                <label className="block mb-1 font-medium text-primary">Your District</label>
                <select
                  {...register("district", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option>Select District</option>
                  {districtsByRegion(selectedRegion || "").map((district, i) => (
                    <option key={i} value={district}>{district}</option>
                  ))}
                </select>
              </div>

              {/* Driving License */}
              <div>
                <label className="block mb-1 font-medium text-primary">Driving License Number</label>
                <input
                  type="text"
                  {...register("driving_license", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>

              {/* NID */}
              <div>
                <label className="block mb-1 font-medium text-primary">NID No</label>
                <input
                  type="text"
                  {...register("nid", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block mb-1 font-medium text-primary">Contact Number</label>
                <input
                  type="text"
                  {...register("contact", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Warehouse */}
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium text-primary">
                  Which warehouse do you want to work?
                </label>
                <select
                  {...register("warehouse", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option>Select warehouse</option>
                  {serviceCenters.map((sc, i) => (
                    <option key={i} value={sc.warehouse}>{sc.warehouse}</option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <button className="btn w-full bg-accent text-primary-content hover:bg-accent/80">
                  Submit
                </button>
              </div>

            </form>
          </div>

          {/* IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img src={riderImg} alt="Rider" className="w-[380px] md:w-[450px] lg:w-[480px]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeARider;
