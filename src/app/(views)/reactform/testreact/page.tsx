"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  selectTitle: string;
  yesno: string;
};

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">User Information</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="First name"
            className={`w-full p-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            {...register("firstName", {required: "First name is required", maxLength: 80})}
          />
          {errors.firstName && <p className="text-sm text-red-600">{errors.firstName.message}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Last name"
            className={`w-full p-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            {...register("lastName", {required: "Last name is required", maxLength: 100})}
          />
          {errors.lastName && <p className="text-sm text-red-600">{errors.lastName.message}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className={`w-full p-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format"
              }
            })}
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Mobile number"
            className={`w-full p-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
            {...register("phoneNumber", {required: "Mobile number is required", minLength: 6, maxLength: 12})}
          />
          {errors.phoneNumber && <p className="text-sm text-red-600">{errors.phoneNumber.message}</p>}
        </div>

        <div>
          <select
            className={`w-full p-3 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.selectTitle ? 'border-red-500' : 'border-gray-300'}`}
            {...register("selectTitle", {required: "Title is required"})}
          >
            <option value="">Select Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>
          {errors.selectTitle && <p className="text-sm text-red-600">{errors.selectTitle.message}</p>}
        </div>

        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input {...register("yesno", {required: "Please select if you're a developer"})} type="radio" value="Yes"/>
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input {...register("yesno", {required: "Please select if you're a developer"})} type="radio" value="No"/>
            <span>No</span>
          </label>
        </div>
        {errors.yesno && <p className="text-sm text-red-600">{errors.yesno.message}</p>}

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-4 px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
