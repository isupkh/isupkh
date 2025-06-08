import React from 'react'
import { useForm } from 'react-hook-form';
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaCommentDots } from "react-icons/fa";

function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    alert("Form submitted successfully!");

    const response = await fetch('http://api.example.com', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phoneNumber: data.phone,
        country: data.country,
        message: data.message
      }),
    });
  }
  return (
    <>
      <section className='m-[120px] border-b-2 mb-22'>

        <div className='flex container mx-auto w-[1400px] justify-between gap-16 '>

          {/* form start */}
          <form onSubmit={handleSubmit(onSubmit)} className="  p-6 space-y-4">

            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-gray-600 font-semibold mb-4">
                <FaUser className='text-blue-600 text-[18px]' />Your Name
              </label>
              <input type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full border rounded px-80 py-2"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div className='pt-4'>
              <label className="flex items-center gap-2 text-gray-600 font-semibold mb-4">
                <FaEnvelope className='text-blue-600 text-[18px]' /> Your Email
              </label>

              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone Number */}
            <div className='pt-4'>
              <label className="flex items-center gap-2 text-gray-600 font-semibold mb-4">
                <FaPhone className='text-blue-600 text-[18px]' /> Phone Number
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: { value: /^[0-9]{7,15}$/, message: "Invalid phone number" },
                })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            {/* Country */}
            <div className='pt-4'>
              <label className="flex items-center gap-2 text-gray-600 font-semibold mb-4">
                <FaGlobe className='text-blue-600 text-[18px]' /> Country
              </label>
              <select
                {...register("country", { required: "Country is required" })}
                className="w-full border rounded px-3 py-2"
              >
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
            </div>

            {/* Message */}
            <div className='pt-4'>
              <label className="flex items-center gap-2 text-gray-600 font-semibold mb-4">
                <FaCommentDots className='text-blue-600  text-[18px]' /> Your Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="4"
                className="w-full border rounded px-3 py-2"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-blue-700 font-semibold  text-white px-10 py-2 rounded hover:bg-blue-800">
              Submit
            </button>
          </form>

          {/* right image */}
          <div className='mt-40'>
            <img className='rounded-lg w-[550px] h-[350px]' src="https://sayumiglobal.com/images/contact_photo.jpg" alt="Image" />
          </div>

        </div>





















      </section>
    </>
  )
}

export default Contact
