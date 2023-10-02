'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-xl font-medium leading-relaxed font-in"
    >
      Hello!, My name is{' '}
      <input
        type="text"
        placeholder="your@name"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray "
      />
      and I want to discuss a potential project. You can email me at{' '}
      <input
        type="email"
        placeholder="your@email"
        {...register('email', {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray "
      />
      or reach out to me on{' '}
      <input
        type="tel"
        placeholder="your@phone"
        {...register('phone', {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray "
      />
      Here are some details about my project: <br />
      <textarea
        {...register('Project Details', {})}
        rows={3}
        placeholder="My Project Details:"
        className="w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray "
      />
      <input
        type="submit"
        value="Send Request"
        className="mt-8 font-medium inline-block capitalize text-xl py-3 border-2 border-solid border-dark px-8 hover:bg-dark hover:text-light transition-all duration-300 ease-in-out"
      />
    </form>
  );
}
