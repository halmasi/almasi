"use client";
import { useForm, SubmitHandler } from "react-hook-form";

export default function ContactForm() {
  type Inputs = {
    name: string;
    email: string;
    message: string;
  };

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

  return (
    <form
      className="flex flex-col space-y-2 w-full  md:grid md:grid-cols-3 md:grid-flow-row items-start border p-3 rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="w-fit pr-3">Name:</p>
      <input
        className="px-4 h-auto w-full md:col-span-2 bg-white rounded-full border transition-all duration-200 hover:border-red-700 shadow-md focus:shadow-lg focus:outline-none focus:ring-2 ring-red-900"
        type="text"
        {...register("name")}
        required
        placeholder="Name"
      />
      <p className="w-fit pr-3">Email:</p>
      <input
        className="px-4 h-auto w-full md:col-span-2 bg-white rounded-full border transition-all duration-200 hover:border-red-700 shadow-md focus:shadow-lg focus:outline-none focus:ring-2 ring-red-900"
        type="email"
        {...register("email")}
        required
        placeholder="Email"
      />
      <p className="w-fit pr-4">Massage:</p>
      <textarea
        className="px-4 h-[25svh] w-full md:col-span-2 bg-white rounded-md border transition-all duration-200 hover:border-red-700 shadow-md focus:shadow-lg focus:outline-none focus:ring-2 ring-red-900"
        {...register("message")}
        required
        placeholder="Message"
      />
      <button
        type="submit"
        name="submit"
        className="bg-green-700 text-white col-span-3 rounded-lg p-2 hover:bg-green-800"
      >
        Submit
      </button>
    </form>
  );
}
